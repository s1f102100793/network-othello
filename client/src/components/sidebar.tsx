import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* サイドバーの内容をこちらに記述 */}
      <h2>サイドバー</h2>
      <ul>
        <li>項目1</li>
        <li>項目2</li>
        <li>項目3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
