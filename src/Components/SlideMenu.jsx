import React from 'react';
import { SlideItem } from 'Components';
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from 'styles/SlideStyle';
import 'swiper/css';

const SlideMenu = ({ productList, handleSelect, selectProduct }) => {
  return (
    <S.SlideWrapper>
      <Swiper
        modules={[Pagination, Scrollbar]}
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
                  outside={product.outside}
                  handleSelect={handleSelect}
                  selectProduct={selectProduct}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </S.SlideWrapper>
  );
};

export default SlideMenu;
