import type { RoomModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import styles from './matching.module.css';

const Matching = () => {
  const [user] = useAtom(userAtom);
  const turn = 1;
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [password, setPassword] = useState('');
  const [room, setRoom] = useState<RoomModel>();
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const fetchRoom = async () => {
    const newRoom = await apiClient.room.$get().catch(returnNull);
    if (newRoom !== null) {
      setRoom(newRoom);
    }
  };

  if (user === null) return <Loading visible />;
  const createRoom = async () => {
    await apiClient.room.post({
      body: { board, turn, playerId1: user.id, playerId2: user.id },
    });
  };

  const searchRoom = () => {
    // 合い言葉を使用して部屋を検索するAPI呼び出しやロジックをここに追加
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>マッチングページ</div>

      <div className={styles.matchingSection}>
        {/* <input
          type="text"
          placeholder="合い言葉を入力"
          value={password}
          // onChange={handlePasswordChange}
          className={styles.passwordInput}
        /> */}
        <Link href="/battle" legacyBehavior>
          <button onClick={createRoom} className={styles.createRoomButton}>
            部屋を作成
          </button>
        </Link>

        {/* <button onClick={searchRoom} className={styles.searchRoomButton}>
          部屋を検索
        </button> */}

        {/* <p className={styles.matchingStatus}>マッチング中…</p>
        <button className={styles.cancelButton}>キャンセル</button> */}
      </div>

      <Link href="/" legacyBehavior>
        <a className={styles.backButton}>ホームページへ戻る</a>
      </Link>
    </div>
  );
};

export default Matching;
