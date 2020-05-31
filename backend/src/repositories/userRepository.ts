import { EntityRepository, Repository } from 'typeorm';
import User from '../models/users';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findEqual(email: string): Promise<User | null> {
    const findUser = await this.findOne({
      where: { email },
    });

    return findUser || null;
  }
}

export default UsersRepository;
