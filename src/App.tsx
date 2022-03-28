import React, { useEffect, useState } from 'react';
import { ContentHeader, ProductMain } from './Components';
import { getData } from './service/Api';
import * as S from 'styles/AppStyle';
import { AppProps } from 'App.type';
const App = () => {
  const [items, setItems] = useState<AppProps>();

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, []);

  return (
    <S.Wrapper>
      <ContentHeader />
      {items && <ProductMain imageUrl={items.imageUrl} productLists={items.productList} />}
    </S.Wrapper>
  );
};

export default App;
