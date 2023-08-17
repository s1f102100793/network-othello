import type { RoomModel } from '$/commonTypesWithClient/models';
import type { Room } from '@prisma/client';
import { z } from 'zod';

export const toRoomModel = (prismaRoom: Room): RoomModel => ({
  board: z.array(z.array(z.number())).parse(prismaRoom.board),
  turn: prismaRoom.turn,
});
