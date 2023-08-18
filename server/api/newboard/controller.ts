import { boardUseCace } from '$/useCase/boardUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: () => ({ status: 201, body: boardUseCace.resetBoard() }),
}));
