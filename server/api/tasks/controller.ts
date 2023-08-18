import { roomRepository } from '$/repository/roomRepository';
import { createTask, getTasks } from '$/repository/tasksRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => {
    const res = await getTasks(query?.limit);
    return { status: 200, body: res };
  },
  post: async ({ body }) => {
    const res = await createTask(body.label);
    return { status: 201, body: res };
  },
}));
