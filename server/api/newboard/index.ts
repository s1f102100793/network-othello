import type { DefineMethods } from 'aspida';
import type { BoardArr } from '../../useCase/boardUseCase';
export type Methods = DefineMethods<{
  post: {
    reqBody: { board: number[][] };
    resBody: BoardArr;
  };
}>;
