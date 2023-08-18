import { createRoomModel, getRoom } from '$/repository/roomRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({ status: 200, body: await getRoom(query?.limit) }),
  post: async ({ body }) => ({
    status: 201,
    body: await createRoomModel(body.board, body.turn, body.playerId1, body.playerId2),
  }),
}));
