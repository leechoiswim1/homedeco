import request from 'axios';
import { successResponse, errorResponse } from './Api.type';
export const getData = async () => {
  try {
    const { data } = await request.get<successResponse>(
      '//cdn.ggumim.co.kr/test/image_product_link.json'
    );
    return data;
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      console.log((err.response?.data as errorResponse).error);
    }
  }
};
