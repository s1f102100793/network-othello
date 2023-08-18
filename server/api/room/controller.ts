import { createRoomModel } from '$/repository/roomRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await createRoomModel(body.board, body.turn, body.playerId1, body.playerId2),
  }),
}));
