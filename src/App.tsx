import { useEffect, useState } from 'react';

import MainLayout from '@layouts/MainLayout';
import Categories from '@components/Categories';
import Card from '@components/Card';

import { API_URL } from '@utils/env.ts';
import { ICategory } from '@utils/types.ts';
import { categoriesTitles } from '@utils/constants.ts';

import './App.scss';
import './index.scss';

const App = () => {
  const [data, setData] = useState<ICategory[]>([]);
  const [filteredData, setFilteredData] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categoriesTitles[0].title);

  useEffect(() => {
    (async () => {
      const response = await fetch(API_URL);
      setData(await response.json());
    })();
  }, []);

  useEffect(() => {
    switch (activeCategory) {
      case 'Все темы':
        setFilteredData([...data]);
        break;
      case 'Путешествия':
        setFilteredData(data.filter(item => item.tags.includes('Страны и столицы')));
        break;
      default:
        setFilteredData(data.filter(item => item.tags.includes(activeCategory)));
        break;
    }
  }, [activeCategory, data]);
  return (
    <MainLayout>
      <Categories changeActiveCategory={(name: string) => setActiveCategory(name)} />
      <section>
        {filteredData.map((item: ICategory) => {
          return <Card key={item.id} {...item} />;
        })}
      </section>
    </MainLayout>
  );
};

export default App;