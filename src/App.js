import React, { useEffect, useState } from 'react';
import { ContentHeader, MainImage, SlideMenu } from './Components';
import { getData } from './service/Api';

const App = () => {
  const [items, setItems] = useState('');

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, []);
  return (
    <React.Fragment>
      <ContentHeader />
      <MainImage image={items.imageUrl} productList={items.ProductList} />
      <SlideMenu productList={items.ProductList} />
    </React.Fragment>
  );
};

export default App;
