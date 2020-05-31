import { EntityRepository, Repository } from 'typeorm';

import Goal from '../models/goals';

interface Difference {
  dif: number;
  percent: string;
}

@EntityRepository(Goal)
class GoalsRepository extends Repository<Goal> {
  public getDifference(totalvalue: number, sparedvalue: number): Difference {
    const dif = totalvalue - sparedvalue;
    const percent = ((sparedvalue / totalvalue) * 100).toFixed(1);

    return { dif, percent };
  }

  public async findOneGoal(id: string): Promise<Goal> {
    const findGoal = await this.findOneOrFail({
      where: { id },
    });

    return findGoal;
  }
}

export default GoalsRepository;
