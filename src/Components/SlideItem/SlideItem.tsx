import React, { useState, useEffect } from 'react';
import * as S from './Slide.style';
import { SlideItemProps } from './SlideItem.type';

const SlideItem = ({
  id,
  imageUrl,
  discountRate,
  handleSelect,
  selectProduct,
  outside,
}: SlideItemProps) => {
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    setSelectedItem(selectProduct === id ? true : false);
  }, [selectProduct, id]);

  return (
    <S.SlideItemWrapper selectedItem={selectedItem}>
      <S.SlideItemImage
        imageUrl={imageUrl}
        selectedItem={selectedItem}
        onClick={() => {
          handleSelect(id);
        }}
      />
      {!outside && <S.DisCountBadge>{discountRate}%</S.DisCountBadge>}
    </S.SlideItemWrapper>
  );
};

export default SlideItem;
