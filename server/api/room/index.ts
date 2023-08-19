import type { DefineMethods } from 'aspida';
import type { RoomModel } from '../../commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query?: {
      limit?: number;
    };
    resBody: RoomModel | null;
  };
  post: {
    reqBody: {
      roomId: string;
      board: number[][];
      turn: number;
      playerId1: string;
      playerId2: string | null;
    };
    resBody: RoomModel;
  };
}>;
