import React, { useEffect, useState } from 'react';
import { ContentHeader, ProductMain } from './Components';
import { getData } from './service/Api';
import * as S from 'styles/AppStyle';
const App = () => {
  const [items, setItems] = useState('');

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, []);

  return (
    <S.Wrapper>
      <ContentHeader />
      <ProductMain imageUrl={items.imageUrl} productList={items.productList} />
    </S.Wrapper>
  );
};

export default App;
