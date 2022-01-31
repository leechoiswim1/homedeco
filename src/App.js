import React, { useEffect, useState } from 'react';
import { getData } from './service/Api';
const App = () => {
  const [items, setItems] = useState({ id: '', imageUrl: '', productList: '' });

  useEffect(() => {
    getData().then(res => {
      setItems({ id: res.id, imageUrl: res.imageUrl, productList: res.productList });
    });
  }, []);
  return <div></div>;
};

export default App;
