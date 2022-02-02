import React from 'react';
import * as S from 'styles/HeaderStyle';

const ContentHeader = () => {
  return (
    <S.HeadWrapper>
      <h2>2022.01.12 17:55</h2>
      <S.HeadTitle>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</S.HeadTitle>
      <S.HeadTag>#방꾸미기 #우드톤 #화이트 #라탄</S.HeadTag>
      <S.HeadData>
        <span>보관함</span>
        <span>95</span>
        <span>댓글</span>
        <span>0</span>
      </S.HeadData>
    </S.HeadWrapper>
  );
};

export default ContentHeader;
