import { deleteRoom } from '$/repository/roomRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  delete: async ({ params }) => {
    await deleteRoom(params.room);
    return { status: 204 };
  },
}));
