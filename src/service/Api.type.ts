import { ProductListType } from 'Components/ProductMain/ProductMain.type';
export interface successResponse {
  id: number;
  imageUrl: string;
  productList: ProductListType[];
}

export interface errorResponse {
  error: string;
}
