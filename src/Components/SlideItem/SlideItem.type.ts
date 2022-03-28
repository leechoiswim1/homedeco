export interface SelectedItemType {
  selectedItem: boolean;
}
export type imageUrlType = string;
export interface SlideItemWrapperProps extends SelectedItemType {
  imageUrl: imageUrlType;
}
export interface SlideItemProps {
  id: number;
  imageUrl: imageUrlType;
  discountRate: number;
  handleSelect: (productId: number) => void;
  selectProduct?: number;
  outside: boolean;
}
