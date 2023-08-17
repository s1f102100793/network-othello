import type { DefineMethods } from 'aspida';
import type { RoomModel } from '../../commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: { board: number[][]; turn: number };
    resBody: RoomModel;
  };
}>;