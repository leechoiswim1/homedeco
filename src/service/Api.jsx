import axios from 'axios';

export const getData = async () => {
  try {
    const { data } = await axios.get('//cdn.ggumim.co.kr/test/image_product_link.json');
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
