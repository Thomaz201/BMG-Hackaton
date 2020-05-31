import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import CreateGoalService from '../services/CreateGoalService';
import GoalsRepository from '../repositories/goalRepository';
import UpdateGoalService from '../services/UpdateGoalService';

const goalsRouter = Router();

goalsRouter.get('/', async (request, response) => {
  const goalsRepository = getCustomRepository(GoalsRepository);

  // Para listar somente as metas do usuário que está pedindo elas
  const goals = await goalsRepository.find({
    where: { userid: request.headers.authorization },
  });

  // Encontra a diferença e o percentual que falta de cada meta
  const goalobject = goals.map(goal => {
    const intel = goalsRepository.getDifference(
      goal.totalvalue,
      goal.sparedvalue,
    );

    return { goal, intel };
  });

  return response.json(goalobject);
});

goalsRouter.post('/', async (request, response) => {
  try {
    const goalsrepository = getCustomRepository(GoalsRepository);

    const { name, totalvalue, sparedvalue, date } = request.body;

    const userid = request.headers.authorization;

    const parsedDate = parseISO(date);

    const createGoal = new CreateGoalService();

    const goal = await createGoal.execute({
      name,
      totalvalue,
      sparedvalue,
      userid,
      date: parsedDate,
    });

    const difference = goalsrepository.getDifference(totalvalue, sparedvalue);

    return response.json({ goal, difference });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

goalsRouter.patch('/:id', async (request, response) => {
  try {
    const { sparedvalue } = request.body;
    const { id } = request.params;

    const updateGoal = new UpdateGoalService();

    const newgoal = await updateGoal.execute(id, sparedvalue);

    return response.status(204).json(newgoal);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default goalsRouter;
