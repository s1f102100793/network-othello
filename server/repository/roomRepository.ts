import type { RoomModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';
import { z } from 'zod';

export const toRoomModel = (prismaRoom: Room): RoomModel => ({
  board: z.array(z.array(z.number())).parse(prismaRoom.board),
  turn: prismaRoom.turn,
  playerId1: prismaRoom.playerId1,
  playerId2: prismaRoom.playerId2,
});

export const createRoomModel = async (
  board: number[][],
  turn: RoomModel['turn'],
  playerId1: RoomModel['playerId1'],
  playerId2: RoomModel['playerId2']
): Promise<RoomModel> => {
  const prismaRoom = await prismaClient.room.create({
    data: { board, turn, playerId1, playerId2 },
  });
  return toRoomModel(prismaRoom);
};
