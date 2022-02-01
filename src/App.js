import React, { useEffect, useState } from 'react';
import { ContentHeader, ProductMain } from './Components';
import { getData } from './service/Api';
import styled from 'styled-components';
const App = () => {
  const [items, setItems] = useState('');

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, []);

  return (
    <Wrapper>
      <ContentHeader />
      <ProductMain imageUrl={items.imageUrl} productList={items.productList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export default App;
