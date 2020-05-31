import { getRepository } from 'typeorm';
import Goal from '../models/goals';

interface RequestDTO {
  name: string;
  totalvalue: number;
  sparedvalue: number;
  date: Date;
  userid: string | undefined;
}

class CreateGoalService {
  public async execute({
    name,
    totalvalue,
    sparedvalue,
    date,
    userid,
  }: RequestDTO): Promise<Goal> {
    const goalsRepository = getRepository(Goal);

    if (sparedvalue >= totalvalue) {
      throw new Error('You saved more money than your goal');
    }

    const goal = goalsRepository.create({
      name,
      totalvalue,
      sparedvalue,
      date,
      userid,
    });

    await goalsRepository.save(goal);

    return goal;
  }
}

export default CreateGoalService;
