import { FC } from 'react';

import { ICategory } from '@utils/types.ts';

import styles from './style.module.scss';

interface ICardProps extends ICategory {

}

const Card: FC<ICardProps> = ({ bgColor, name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageHolder} style={{ backgroundColor: bgColor }}>
        <img src={image} alt={'card-image'} />
      </div>
      <div className={styles.nameHolder}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;