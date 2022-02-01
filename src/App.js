import React, { useEffect, useState } from 'react';
import { ContentHeader, ProductMain } from './Components';
import { getData } from './service/Api';
import styled from 'styled-components';
const App = () => {
  const [items, setItems] = useState('');
  const [active, setActive] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [curX, setCurX] = useState(0);
  const [newX, setNewX] = useState(0);

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, []);

  useEffect(() => {
    setNewX(-118 < curX - prevX < 0 ? -118 : curX - prevX < -118 ? -236 : 0);
  }, [curX]);

  return (
    <Wrapper
      onMouseUp={e => {
        setActive(false);
        setCurX(e.clientX);
      }}
      onMouseDown={e => {
        if (e.target.id && !active) {
          setActive(true);
          setPrevX(e.clientX);
        }
      }}
      onMouseMove={e => {
        if (active) {
          setNewX(e.clientX - prevX);
        }
      }}
    >
      <ContentHeader />
      <ProductMain
        active={active}
        setActive={setActive}
        imageUrl={items.imageUrl}
        productList={items.productList}
        newX={newX}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export default App;
