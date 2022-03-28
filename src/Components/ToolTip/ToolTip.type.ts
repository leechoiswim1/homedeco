import { ProductListType } from 'Components/ProductMain/ProductMain.type';

export interface DescWrapperProps {
  BottomBox: boolean;
  leftBox: boolean;
  boxDisplay: boolean;
}

export interface ToolTipProps extends DescWrapperProps {
  product: ProductListType;
}
