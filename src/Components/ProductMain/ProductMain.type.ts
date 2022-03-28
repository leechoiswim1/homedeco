export interface MagnifyProps {
  newPointX: number;
  newPointY: number;
}

export interface ProductListType {
  discountRate: number;
  imageUrl: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceDiscount: number;
  priceOriginal: number;
  productId: number;
  productName: string;
}

type ImageUrlType = string;

export interface ProductMainProps {
  imageUrl: ImageUrlType;
  productLists: ProductListType[];
}
