import React, { useEffect, useState } from 'react';
import { ContentHeader, ProductMain } from 'Components';
import { getData } from 'service/Api';
import * as S from 'page/App.style';
import { AppProps } from 'page/App.type';
const App = () => {
  const [items, setItems] = useState<AppProps>();

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, []);

  if (!items) {
    return <div> Loading...</div>;
  }

  return (
    <S.Wrapper>
      <ContentHeader />
      {items && <ProductMain imageUrl={items.imageUrl} productLists={items.productList} />}
    </S.Wrapper>
  );
};

export default App;
