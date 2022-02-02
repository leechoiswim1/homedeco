import styled, { css } from 'styled-components';
export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  background-color: #fff;
  padding: 0 10px;
  margin: 0;
`;
export const SlideItemWrapper = styled.section`
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
export const SlideItemImage = styled.div`
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
export const DisCountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;
