import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';

import QA from './components/QA.jsx';
import ProductOverview from './components/ProductOverview.jsx'
import Reviews from './components/Reviews.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';

import getHandler from './lib/getHandler.js';

const App = () => {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);
  const [productID, setProductID] = useState(71697)
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    getHandler('/product', productID, (response) => {setProduct(response.data)});
  }, []);

  return (
    <div>
      {/* {JSON.stringify(product)} */}
      <ProductOverview product={product} productID={productID}/>
      <RelatedProducts setProduct={setProduct} setOutfits={setOutfits} outfits={outfits} product={product} id={product.id ? product.id : 0} />
      <QA id={product.id ? product.id : 0}/>
      <Reviews id={product.id ? product.id : 0} name={product.name} setAv={setAverage}/>
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('app'));