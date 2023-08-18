import type { DefineMethods } from 'aspida';
import type { BoardArr } from '../../useCase/boardUseCase';

export type Methods = DefineMethods<{
  get: {
    resBody: BoardArr;
  };
  post: {
    reqBody: {
      board: number[][];
      x: number;
      y: number;
      turn: number;
      playerId1: string;
      playerId2: string | null;
    };
    resBody: { board: BoardArr; turn: number };
  };
}>;
