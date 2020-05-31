import { getRepository } from 'typeorm';
import Goal from '../models/goals';

class UpdateGoalService {
  public async execute(id: string, sparedvalue: number): Promise<void> {
    const goalsRepository = getRepository(Goal);

    await goalsRepository.update(id, { sparedvalue });
  }
}

export default UpdateGoalService;
