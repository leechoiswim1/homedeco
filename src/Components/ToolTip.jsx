import React from 'react';
import * as S from 'styles/ToolTipStyle';
import commaNumber from 'utils/commaNumber';
const ToolTip = ({ BottomBox, leftBox, boxDisplay, product }) => {
  return (
    <S.DescWrapper BottomBox={BottomBox} leftBox={leftBox} boxDisplay={boxDisplay}>
      <S.DescImage productImage={product.imageUrl}></S.DescImage>
      <S.Desc>
        <S.DescFurName>{product.productName}</S.DescFurName>
        <S.DescFurPrice>
          <S.PriceDisCount>
            {product.outside ? (
              <S.ExpectPrice> 예상가 </S.ExpectPrice>
            ) : (
              <S.DiscountRate>{product.discountRate}%</S.DiscountRate>
            )}
            {commaNumber(product.priceDiscount)}
          </S.PriceDisCount>
        </S.DescFurPrice>
      </S.Desc>
      <S.MoveIconWrapper>
        <S.MoveIcon
          alt="상품보기"
          src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
        ></S.MoveIcon>
      </S.MoveIconWrapper>
    </S.DescWrapper>
  );
};

export default ToolTip;
