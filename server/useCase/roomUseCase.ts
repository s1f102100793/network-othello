// import type { RoomModel } from '$/commonTypesWithClient/models';
// import { roomIdParser } from '$/service/idParsers';
// import { randomUUID } from 'crypto';
// const initBoard = () => [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 3, 0, 0, 0, 0],
//   [0, 0, 3, 2, 1, 0, 0, 0],
//   [0, 0, 0, 1, 2, 3, 0, 0],
//   [0, 0, 0, 0, 3, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

// export const roomUseCase = {
//   createRoom: async () => {
//     const newRoom: RoomModel = {
//       id: roomIdParser.parse(randomUUID()),
//       board: initBoard(),
//       status: 'waiting',
//       created: Date.now(),
//       turn: 1,
//       blackmen: 'a',
//       whitemen: 'a',
//       kansenn: [],
//       knum: 0,
//       blackname: 'あなた',
//       whitename: 'あなた',
//     };
//     await roomsRepository.save(newRoom);
//     return newRoom;
//   },
// };
