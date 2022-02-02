import React, { useEffect, useState, useRef } from 'react';
import { SlideMenu, ToolTip } from 'Components';
import * as S from 'styles/ProductMainStyle';

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
    <S.ProductWrapper>
      <S.ProductImage
        ref={imageRef}
        src={imageUrl}
        alt="productImage"
        onClick={() => handleSelect(0)}
      />
      {productList &&
        productList.map(product => {
          const newPointX = product.pointX * 1.6;
          const newPointY = product.pointY * 1.65;
          const BottomBox = imageHeight / 2 - newPointX < 0 ? true : false;
          const leftBox = imageWidth - newPointY < imageWidth / 2 ? true : false;
          return (
            <div key={product.productId}>
              <S.Magnify
                newPointX={newPointX}
                newPointY={newPointY}
                onClick={() => handleSelect(product.productId)}
              >
                <S.MagIcon
                  src={
                    selectProduct === product.productId
                      ? 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
                      : '//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
                  }
                />
                <ToolTip
                  BottomBox={BottomBox}
                  leftBox={leftBox}
                  boxDisplay={selectProduct === product.productId ? 'flex' : 'none'}
                  product={product}
                />
              </S.Magnify>
            </div>
          );
        })}
      <SlideMenu
        productList={productList}
        handleSelect={handleSelect}
        selectProduct={selectProduct}
      />
    </S.ProductWrapper>
  );
};

export default ProductMain;
