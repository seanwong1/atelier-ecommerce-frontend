import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import QA from './components/QA.jsx';
import ProductOverview from './components/ProductOverview.jsx'
import Reviews from './components/Reviews.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';

const App = () => {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);

  const getProduct = () => {
    // const result = await axios.get('/products');
    // setProduct(result);

    axios.get('/product').then((result) => {
      setProduct(result.data);
    });

  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(product)} */}
      {/* <ProductOverview product={product}/>
      <RelatedProducts setProduct={setProduct} product={product} id={product.id ? product.id : 0} /> */}
      <QA id={product.id ? product.id : 0}/>
      {/* <Reviews id={product.id ? product.id : 0} setAv={setAverage}/> */}
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('app'));