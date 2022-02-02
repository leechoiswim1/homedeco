import styled from 'styled-components';

export const ProductWrapper = styled.section`
  width: 800px;
  box-sizing: border-box;
  padding: 40px 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 0;
  position: relative;
`;
export const ProductImage = styled.img`
  width: 800px;
`;

export const Magnify = styled.div`
  position: absolute;
  top: ${props => props.newPointX && props.newPointX}px;
  left: ${props => props.newPointY && props.newPointY}px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const MagIcon = styled.img`
  width: 32px;
  height: 32px;
`;
