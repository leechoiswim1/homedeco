import React from 'react';
import styled from 'styled-components';
const ProductMain = ({ imageUrl, productList }) => {
  return (
    <Wrapper>
      <ProductImage src={imageUrl} alt="productImage" />
      {productList &&
        productList.map(product => {
          return (
            <Magnify key={product.productId} pointX={product.pointX} pointY={product.pointY}>
              <MagIcon src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png" />
            </Magnify>
          );
        })}{' '}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 800px;
  height: auto;
  margin: auto;
  position: relative;
`;
const ProductImage = styled.img`
  width: 800px;
`;
const Magnify = styled.div`
  position: absolute;
  top: ${props => props.pointY && props.pointY}px;
  left: ${props => props.pointX && props.pointX}px;
  width: 40px;
  height: 40px;
`;

const MagIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export default ProductMain;
