import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../models/users';
import UsersRepository from '../repositories/userRepository';

interface RequestDTO {
  password: string;
  email: string;
  name: string;
}

class CreateUserService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);
    const checkUserExists = userRepository.findEqual(email);

    if (!checkUserExists) {
      throw new Error('This user already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      email,
      password: hashedPassword,
      name,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
