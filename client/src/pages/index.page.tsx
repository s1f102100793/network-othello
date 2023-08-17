// import { userAtom } from 'src/atoms/user';
// import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import Link from 'next/link';
import styles from './index.module.css';

const Home = () => {
  // const [user] = useAtom(userAtom);

  return (
    <>
      {/* <BasicHeader user={user} /> */}
      <div className={styles.container}>
        <div className={styles.title}>Welcome to OnlineOthello!</div>
        <Link href="/battle">
          <button className={styles.battleButton}>バトルページへ</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
