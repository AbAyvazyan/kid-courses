import { FC, useEffect, useState } from 'react';

import { categoriesTitles } from '@utils/constants.ts';
import { ICategoriesTitles } from '@utils/types.ts';

import styles from './style.module.scss';

const Categories: FC<
  { changeActiveCategory: (name: string) => void }
> =
  ({ changeActiveCategory }) => {
    const [categories, setCategories] = useState<ICategoriesTitles[]>(categoriesTitles);

    const categoryClickHandler = (id: number) => {
      setCategories(prevState => {
        return prevState.map(category =>
          category.id === id ? { ...category, isActive: true } : { ...category, isActive: false },
        );
      });

    };

    useEffect(() => {
      const activeCat = categories.find(category => category.isActive);
      changeActiveCategory(activeCat ? activeCat.title : '');
    }, [categories]);

    return (
      <div className={styles.categories}>
        <ul>
          {categories.map((item: ICategoriesTitles) => {
            return (
              <li
                key={item.id}
                className={`${styles.category} ${item.isActive ? styles.activeCategory : ''}`}
                onClick={() => categoryClickHandler(item.id)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

export default Categories;