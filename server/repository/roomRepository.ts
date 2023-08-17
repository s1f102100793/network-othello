import type { RoomModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';
import { z } from 'zod';

export const toRoomModel = (prismaRoom: Room): RoomModel => ({
  board: z.array(z.array(z.number())).parse(prismaRoom.board),
  turn: prismaRoom.turn,
});

export const createRoomModel = async (
  board: number[][],
  turn: RoomModel['turn']
): Promise<RoomModel> => {
  const prismaRoom = await prismaClient.room.create({
    data: { board, turn },
  });
  return toRoomModel(prismaRoom);
};
