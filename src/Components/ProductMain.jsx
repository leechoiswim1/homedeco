import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { SlideMenu } from './';

const ProductMain = ({ imageUrl, productList }) => {
  const [selectProduct, setSelectProduct] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const imageRef = useRef();
  const handleSelect = productId => {
    productId === selectProduct ? setSelectProduct(0) : setSelectProduct(productId);
  };
  useEffect(() => {
    setImageHeight(imageRef.current.height);
    setImageWidth(imageRef.current.width);
  }, []);
  console.log(imageWidth);
  return (
    <Wrapper>
      <ProductImage
        ref={imageRef}
        src={imageUrl}
        alt="productImage"
        onClick={() => handleSelect(0)}
      />
      {productList &&
        productList.map(product => {
          const newPointX = product.pointX * 1.6;
          const newPointY = product.pointY * 1.65;
          const BottomBox = imageHeight && imageHeight / 2 - newPointX < 0 ? true : false;
          const leftBox = imageWidth - newPointY < 220 ? true : false;

          return (
            <div key={product.productId}>
              <Magnify
                newPointX={newPointX}
                newPointY={newPointY}
                onClick={() => handleSelect(product.productId)}
              >
                <MagIcon
                  src={
                    selectProduct === product.productId
                      ? 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
                      : '//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
                  }
                />
                <DescBox
                  BottomBox={BottomBox}
                  leftBox={leftBox}
                  boxDisplay={selectProduct === product.productId ? 'block' : 'none'}
                ></DescBox>
              </Magnify>
            </div>
          );
        })}
      <SlideMenu
        productList={productList}
        handleSelect={handleSelect}
        selectProduct={selectProduct}
      />
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
  top: ${props => props.newPointX && props.newPointX}px;
  left: ${props => props.newPointY && props.newPointY}px;
  width: 40px;
  height: 40px;
`;

const MagIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const DescBox = styled.span`
  box-sizing: border-box;
  z-index: 1000;
  display: ${props => props.boxDisplay && props.boxDisplay};
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  ${props =>
    props.BottomBox && props.BottomBox
      ? css`
          top: unset;
          bottom: 52px;
        `
      : css`
          top: 28px;
          left: -20px;
        `}
  ${props =>
    props.leftBox &&
    css`
      left: -160px;
    `}
`;

export default ProductMain;
