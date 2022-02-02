import styled, { css } from 'styled-components';
export const HeadWrapper = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0;
  h2 {
    font-size: 10px;
    font-weight: 100;
    color: #646464;
    padding-bottom: 8px;
  }
`;
export const HeadTitle = styled.div`
  font-size: 27px;
  font-weight: 900;
  color: black;
  padding-bottom: 8px;
  white-space: pre-wrap;
  line-height: 40px;
`;
export const HeadTag = styled.div`
  font-size: 15px;
  color: #646464;
`;
export const HeadData = styled.div`
  margin-top: 15px;
  font-size: 15px;
  span:nth-child(2n-1) {
    color: #afafaf;
    margin-right: 5px;
  }
  span:nth-child(2n) {
    margin-right: 15px;
    font-weight: 400;
  }
`;
