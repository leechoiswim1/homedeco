import { ProductListType } from 'Components/ProductMain/ProductMain.type';
export interface SlideMenuProps {
  productLists: ProductListType[];
  handleSelect: (productId: number) => void;
  selectProduct: number;
}
