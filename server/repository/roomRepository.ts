import type { RoomModel } from '$/commonTypesWithClient/models';
import { userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';
import { z } from 'zod';

export const toRoomModel = (prismaRoom: Room): RoomModel => ({
  board: z.array(z.array(z.number())).parse(prismaRoom.board),
  turn: z.number().parse(prismaRoom.turn),
  playerId1: userIdParser.parse(prismaRoom.playerId1),
  playerId2: userIdParser.parse(prismaRoom.playerId2),
});

export const createRoomModel = async (
  board: number[][],
  turn: RoomModel['turn'],
  playerId1: RoomModel['playerId1'],
  playerId2: RoomModel['playerId2']
): Promise<RoomModel> => {
  console.log('あああ');
  // try {
  // const prismaRoom = await prismaClient.room.create({
  //   data: { board, turn, playerId1, playerId2 },
  // });} catch (e) {
  //   console.log(e)
  // }
  // console.log('いいい');
  // return toRoomModel(prismaRoom);
  const prismaRoom = await prismaClient.room.create({
    data: { board, turn, playerId1, playerId2 },
  });
  return toRoomModel(prismaRoom);
};
