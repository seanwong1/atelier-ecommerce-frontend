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
  }, [productID]);

  const clickHandle = (widget, element) => {
    let options = {
      url: '/clickTrack',
      params: {widget, 'element': element.target.className},
      method: 'post'
    }
    axios.request(options).then(() => {
      console.log('click was tracked');
    }).catch(() => {
      console.log('click not tracked');
    })
  }

  return (
    <div onClick={clickHandle}>
      <div className='headingRect'>
        SCAMpD.COM
      </div>
      {/* {JSON.stringify(product)} */}

      <ProductOverview clickTrack={clickHandle} product={product} productID={productID}/>
      <RelatedProducts clickTrack={clickHandle} setProductID={setProductID} setOutfits={setOutfits} outfits={outfits} product={product} id={product.id ? product.id : 0} />

      <QA clickTrack={clickHandle} id={product.id ? product.id : 0} />
      <Reviews clickTrack={clickHandle} id={product.id ? product.id : 0} name={product.name} setAv={setAverage}/>
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('app'));