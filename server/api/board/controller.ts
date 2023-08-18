import { roomRepository } from '$/repository/roomRepository';
import { boardUseCace } from '$/useCase/boardUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: boardUseCace.getBoard() }),
  post: async ({ body, user }) => {
    const res = boardUseCace.clickBoard(body, user.id);
    await roomRepository.createRoomModel(body.board, body.turn, body.playerId1, body.playerId2);
    return { status: 201, body: res };
  },
}));
