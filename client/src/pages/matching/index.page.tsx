import type { RoomModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from '../../components/sidebar';
import styles from './matching.module.css';

const Matching = () => {
  const [user] = useAtom(userAtom);
  const turn = 1;
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const [room, setRoom] = useState<RoomModel>();

  const fetchRoom = async () => {
    const newRoom = await apiClient.room.$get().catch(returnNull);
    if (newRoom !== null) {
      setRoom(newRoom);
    }
  };

  const deleteRoom = async () => {
    if (room && room.playerId1 !== undefined && room.playerId1 !== null) {
      await apiClient.room._room(room.playerId1).delete();
      fetchRoom();
    }
  };

  // const updateRoom = async () = {

  // }

  useEffect(() => {
    fetchRoom();
    const intervalId = setInterval(fetchRoom, 100);
    return () => clearInterval(intervalId);
  }, []);

  if (user === null) return <Loading visible />;
  const createRoom = async () => {
    const uuid = uuidv4();
    await apiClient.room.post({
      body: { roomId: uuid, board, turn, playerId1: user.id, playerId2: user.id },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <Sidebar />
      </div>
      <div className={styles.title}>マッチングページ</div>
      <Link href="/battle" legacyBehavior>
        <button onClick={createRoom} className={styles.createRoomButton}>
          部屋を作成
        </button>
      </Link>
      {/* <Link href="/battle" legacyBehavior>
        <div onClick={updateRoom} className={styles.matchingSection}>
          {room && <p className={styles.roomMessage}>部屋があります</p>}
        </div>
      </Link> */}
      <button onClick={deleteRoom} className={styles.matchingSection}>
        {room && <p className={styles.roomMessage}>部屋を削除する</p>}
      </button>
      <Link href="/" legacyBehavior>
        <a className={styles.backButton}>ホームページへ戻る</a>
      </Link>
    </div>
  );
};

export default Matching;
