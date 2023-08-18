import { useAtom } from 'jotai';
import Link from 'next/link';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
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
  const [turnColor, setTurnColor] = useState(1);

  const fetchBoard = async () => {
    const board = await apiClient.board.$get().catch(returnNull);

    if (board !== null) setBoard(board);
  };

  const createBoard = async (x: number, y: number, turn: number) => {
    if (board[y][x] === 3) {
      const a = await apiClient.board.post({ body: { board, x, y, turn } });
      console.log(a.body.board);
      setBoard(a.body.board);
      setTurnColor(3 - a.body.turn);
    }
  };

  const resetBoard = async () => {
    const b = await apiClient.newboard.post({ body: { board } });
    console.log(b);
    setBoard(b.body);
    setTurnColor(1);
  };

  useEffect(() => {
    fetchBoard();
    const intervalId = setInterval(fetchBoard, 100);
    return () => clearInterval(intervalId);
  }, []);

  const countCandidates = () => {
    let candidate = 0;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (board[y][x] === 3) {
          candidate++;
        }
      }
    }
    return candidate;
  };

  const candidate = countCandidates();
  if (candidate === 0) {
    alert('ゲーム終了');
  }

  const countStones = (color: number, board: number[][]) => {
    let count = 0;
    for (const row of board) {
      for (const cell of row) {
        if (cell === color) {
          count++;
        }
      }
    }
    return count;
  };

  const [blackCount, setBlackCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);

  useEffect(() => {
    setBlackCount(countStones(1, board));
    setWhiteCount(countStones(2, board));
  }, [board]);

  const totalStones = blackCount + whiteCount;
  const blackPercentage = `${(blackCount / totalStones) * 100}%`;

  const countsMessage = `ユーザー${turnColor}のターン`;
  // 黒: ${blackCount}, 白: ${whiteCount}`;

  const [newBlackCount, setNewBlackCount] = useState(blackCount);

  const newBlackPercentage = `${(newBlackCount / totalStones) * 100}%`;

  useEffect(() => {
    setNewBlackCount(countStones(1, board));
  }, [board]);

  if (user === null) return <Loading visible />;
  const prismaBoard = async (e: FormEvent) => {
    e.preventDefault();
    await apiClient.room.post({
      body: { board, turn: turnColor, playerId1: user.id, playerId2: user.id },
    });
  };

  return (
    <div 
    className={styles.container}
    style={{
      '--black-percentage': blackPercentage
    } as React.CSSProperties}
>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              key={`${x}-${y}`}
              className={styles.cell}
              onClick={() => createBoard(x, y, turnColor)}
            >
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{
                    background: color === 3 ? '#adff2f' : color === 1 ? '#000' : '#fff',
                  }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <div className={styles.stonecount}>
        <div className={styles.blackcount}>黒{blackCount}</div>
        <div className={styles.whitecount}>白{whiteCount}</div>
      </div>
      <div className={styles.counts}>{countsMessage}</div>
      <button className={styles.button} onClick={resetBoard}>
        ゲーム終了
      </button>
      <Link href="/">
        <button className={styles.homeButton} onClick={resetBoard}>
          ホームページへ
        </button>
      </Link>
      <button className={styles.homeButton} onClick={prismaBoard}>
        aaa
      </button>
    </div>
  );
};

export default Home;
