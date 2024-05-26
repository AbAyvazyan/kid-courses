import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default MainLayout;