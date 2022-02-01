import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
const SlideItem = ({ id, imageUrl, discountRate, handleSelect, selectProduct }) => {
  const [selectedItem, setSelectedItem] = useState(false);
  useEffect(() => {
    setSelectedItem(selectProduct === id ? true : false);
  }, [selectProduct]);
  return (
    <SlideItemWrapper selectedItem={selectedItem}>
      <SlideItemImage
        id={id}
        imageUrl={imageUrl}
        selectedItem={selectedItem}
        onClick={() => {
          handleSelect(id);
        }}
      />
      <DisCountBox></DisCountBox>
    </SlideItemWrapper>
  );
};
const SlideItemWrapper = styled.section`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  position: relative;
  transition-property: transform;
  flex-shrink: 0;
  ${props =>
    props.selectedItem &&
    css`
      background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
      margin: 26px 4px;
      padding: 2px;
      border-radius: 18px;
    `}
`;
const SlideItemImage = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: ${props => (props.selectedItem ? 'none' : '0.5px solid #aaafb9')};
  user-select: none;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.imageUrl && `url(${props.imageUrl})`};
`;
const DisCountBox = styled.div``;
export default SlideItem;
