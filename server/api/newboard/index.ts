import type { BoardArr } from '$/useCase/boardUseCase';

export type Methods = {
  get: {
    resBody: BoardArr;
  };
  post: {
    reqBody: { board: number[][] };
    resBody: BoardArr;
  };
};
