import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SlideItem } from 'Components';
const SlideMenu = ({ productList, newX }) => {
  console.log(newX);
  return (
    <SlideWrapper>
      <SlideSwiper id="slide" newX={newX}>
        {productList &&
          productList.map(product => {
            return (
              <SlideItem
                key={product.productId}
                id={product.productId}
                imageUrl={product.imageUrl}
                discountRate={product.discountRate}
              />
            );
          })}
      </SlideSwiper>
    </SlideWrapper>
  );
};
const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  background-color: #fff;
  padding: 0 10px;
  margin: 0;
`;

const SlideSwiper = styled.div.attrs(props => ({
  style: { transform: `translate3d(${props.newX}px, 0px,0px)` },
}))`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

export default SlideMenu;
