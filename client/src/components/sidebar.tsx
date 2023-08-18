import { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.sidebar}>
          <h2>サイドバー</h2>
          <ul>
            <li>項目1</li>
            <li>項目2</li>
            <li>項目3</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
