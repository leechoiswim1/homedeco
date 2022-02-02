import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { SlideMenu, DescBox } from './';

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
  }, [imageUrl]);

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
          const leftBox = imageWidth - newPointY < imageWidth / 2 ? true : false;
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
                  boxDisplay={selectProduct === product.productId ? 'flex' : 'none'}
                  product={product}
                />
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
  cursor: pointer;
`;

const MagIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export default ProductMain;
