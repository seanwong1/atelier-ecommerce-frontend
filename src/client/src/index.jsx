import React, { useState, useEffect, useRef } from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';

import QA from './components/QA.jsx';
import ProductOverview from './components/ProductOverview.jsx'
import Reviews from './components/Reviews.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';
import Outfits from './components/Outfits.jsx';

import getHandler from './lib/getHandler.js';

const App = () => {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);
  const [productID, setProductID] = useState(71697)
  const [outfits, setOutfits] = useState([]);
  const [theme, setTheme] = useState(false);
  const ref = useRef(null);

  const seeReviewsClick = (e) => {
    console.log(ref)
   ref.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  useEffect(() => {
    getHandler('/product', productID, (response) => {setProduct(response.data)});
  }, [productID]);

  useEffect(() => {
    if (!theme) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = 'light';
    }
  }, [theme]);

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
      <div className='header' onClick={() => {setTheme(!theme)}} >
        SCAMpD.COM
      </div>
      {/* {JSON.stringify(product)} */}

      <ProductOverview clickTrack={clickHandle} product={product} productID={productID} seeReviewsClick={seeReviewsClick} outfits={outfits} setOutfits={setOutfits} />
      <RelatedProducts clickTrack={clickHandle} setProductID={setProductID} setOutfits={setOutfits} product={product} id={product.id ? product.id : 0} />
      <Outfits currentProduct={product} setOutfits={setOutfits} outfits={outfits} />
      <QA clickTrack={clickHandle} id={product.id ? product.id : 0} product_name={product.name}/>
      <Reviews ref={ref} clickTrack={clickHandle} id={product.id ? product.id : 0} name={product.name} setAv={setAverage}/>
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('app'));