import React from 'react';
import styled from 'styled-components';
const SlideItem = ({ id, imageUrl, discountRate }) => {
  return (
    <SlideItemWrapper>
      <SlideItemImage id={id} imageUrl={imageUrl} />
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
`;
const SlideItemImage = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.imageUrl && `url(${props.imageUrl})`};
`;
const DisCountBox = styled.div``;
export default SlideItem;
