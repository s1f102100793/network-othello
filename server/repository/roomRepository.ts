import type { RoomModel } from '$/commonTypesWithClient/models';
import { userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';
import { z } from 'zod';

export const toRoomModel = (prismaRoom: Room): RoomModel => ({
  roomId: prismaRoom.roomId,
  board: z.array(z.array(z.number())).parse(prismaRoom.board),
  turn: z.number().parse(prismaRoom.turn),
  playerId1: userIdParser.parse(prismaRoom.playerId1),
  playerId2: userIdParser.parse(prismaRoom.playerId2),
});

export const createRoomModel = async (
  roomId: RoomModel['roomId'],
  board: number[][],
  turn: RoomModel['turn'],
  playerId1: RoomModel['playerId1'],
  playerId2: RoomModel['playerId2']
): Promise<RoomModel> => {
  console.log('あああ');
  const prismaRoom = await prismaClient.room.create({
    data: { roomId, board, turn, playerId1, playerId2 },
  });
  return toRoomModel(prismaRoom);
};
export const updateRoomModel = async (
  roomId: RoomModel['roomId'],
  playerId2: RoomModel['playerId2']
): Promise<RoomModel> => {
  const prismaRoom = await prismaClient.room.update({
    where: { roomId },
    data: { playerId2 },
  });
  return toRoomModel(prismaRoom);
};

export const getRoom = async (): Promise<RoomModel | null> => {
  // console.log('1');
  const prismaRoom = await prismaClient.room.findFirst({
    select: {
      roomId: true,
      board: true,
      turn: true,
      playerId1: true,
      playerId2: true,
    },
  });
  // console.log('2');
  if (!prismaRoom) {
    return null;
  }
  // console.log('3');
  return toRoomModel(prismaRoom);
};

export const deleteAllRooms = async (): Promise<void> => {
  console.log('1');
  try {
    await prismaClient.room.deleteMany();
    console.log('2');
  } catch (e) {
    if (e instanceof Error) {
      console.error('Error deleting all rooms:', e.message);
    } else {
      console.error('Error deleting all rooms:', e);
    }
    throw e;
  }
};
