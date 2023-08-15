import type { BoardArr } from '$/useCase/boardUseCase';

export type Methods = {
  get: {
    resBody: BoardArr;
  };
  post: {
    reqBody: { board: number[][]; x: number; y: number; turn: number };
    resBody: BoardArr;
  };
};
