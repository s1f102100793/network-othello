import Link from 'next/link';
import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.logo}>OnlineOthello</div>  */}
        <div className={styles.title}>Welcome to OnlineOthello!</div>
        <p className={styles.description}>
          Dive into the world of strategy with OnlineOthello. Challenge friends or strangers and
          dominate the board!
        </p>
        <div className={styles.buttons}>
          <Link href="/login">
            <button className={styles.loginButton}>ログイン</button>
          </Link>
          <Link href="/matching">
            <button className={styles.matchingButton}>マッチングする</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
