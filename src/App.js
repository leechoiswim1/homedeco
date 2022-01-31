import React, { useEffect, useState } from 'react';
import { ContentHeader, ProductMain, SlideMenu } from './Components';
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
      <SlideMenu productList={items.ProductList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  margin: auto;
`;

export default App;
