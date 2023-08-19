import { createRoomModel, getRoom, updateRoomModel } from '$/repository/roomRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getRoom() }),
  post: async ({ body }) => ({
    status: 201,
    body: await createRoomModel(body.roomId, body.board, body.turn, body.playerId1, body.playerId2),
  }),
  patch: async ({ body }) => {
    try {
      const updatedRoom = await updateRoomModel(body.roomId, body.playerId2);
      return { status: 200, body: updatedRoom };
    } catch (error) {
      console.error('部屋の更新に失敗しました:', error);
      return { status: 500, body: '部屋の更新に失敗しました' };
    }
  },
}));
