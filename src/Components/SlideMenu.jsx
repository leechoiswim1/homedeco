import React from 'react';
import styled from 'styled-components';
import { SlideItem } from 'Components';
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SlideMenu = ({ productList, handleSelect, selectProduct }) => {
  return (
    <SlideWrapper id="SliderWrapper">
      <Swiper
        modules={[Pagination, Scrollbar]}
        spaceBetween={5}
        slidesPerView={6}
        scrollbar={{ draggable: true }}
        style={{ overflowX: 'auto' }}
      >
        {productList &&
          productList.map(product => {
            return (
              <SwiperSlide key={product.productId}>
                <SlideItem
                  id={product.productId}
                  imageUrl={product.imageUrl}
                  discountRate={product.discountRate}
                  handleSelect={handleSelect}
                  selectProduct={selectProduct}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </SlideWrapper>
  );
};
const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  background-color: #fff;
  padding: 0 10px;
  margin: 0;
`;

export default SlideMenu;
