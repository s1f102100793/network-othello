import type { RoomModel } from 'commonTypesWithClient/models';
import Link from 'next/link';
import { useState } from 'react';
import styles from './matching.module.css';

const Matching = () => {
  const [password, setPassword] = useState('');
  const [room, setRoom] = useState<RoomModel[] | undefined>(undefined);
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const fetchRoom = async () => {
  //   const newRoom = await apiClient.room.$get().catch(returnNull);
  //   if (newRoom !== null) {
  //     setRoom(newRoom);
  //   }
  // };

  const createRoom = () => {
    // const room = await apiClient.room.post({})
  };

  const searchRoom = () => {
    // 合い言葉を使用して部屋を検索するAPI呼び出しやロジックをここに追加
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>マッチングページ</div>

      <div className={styles.matchingSection}>
        <input
          type="text"
          placeholder="合い言葉を入力"
          value={password}
          // onChange={handlePasswordChange}
          className={styles.passwordInput}
        />

        <button onClick={createRoom} className={styles.createRoomButton}>
          部屋を作成
        </button>

        <button onClick={searchRoom} className={styles.searchRoomButton}>
          部屋を検索
        </button>

        <p className={styles.matchingStatus}>マッチング中…</p>
        <button className={styles.cancelButton}>キャンセル</button>
      </div>

      <Link href="/" legacyBehavior>
        <a className={styles.backButton}>ホームページへ戻る</a>
      </Link>
    </div>
  );
};

export default Matching;
