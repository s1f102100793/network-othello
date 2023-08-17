import Link from 'next/link';
import styles from './matching.module.css';

const Matching = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>マッチングページ</div>

      <div className={styles.matchingSection}>
        <button className={styles.matchingButton}>マッチング開始</button>
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
