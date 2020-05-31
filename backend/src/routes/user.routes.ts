import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';
import UsersRepository from '../repositories/userRepository';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const userRepository = getCustomRepository(UsersRepository);

  const users = await userRepository.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      password,
      email,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
