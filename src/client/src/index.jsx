import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import QA from './components/QA.jsx';
import ProductOverview from './components/ProductOverview.jsx'
import Reviews from './components/Reviews.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';
import Outfits from './components/Outfits.jsx';

import { installDemoApi, isDemoMode } from './lib/demoApi.js';
import getHandler from './lib/getHandler.js';

const apiBaseUrl = (process.env.API_BASE_URL || '').replace(/\/$/, '');

installDemoApi(axios);

if (!isDemoMode && apiBaseUrl) {
  axios.defaults.baseURL = apiBaseUrl;
}

const App = () => {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);
  const [productID, setProductID] = useState(71697)
  const [outfits, setOutfits] = useState([]);
  const [theme, setTheme] = useState(false);
  const ref = useRef(null);

  const seeReviewsClick = () => {
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
    const options = {
      url: '/clickTrack',
      params: {
        widget,
        element: element?.target?.className || element?.target?.tagName || 'unknown'
      },
      method: 'post'
    };

    axios.request(options).catch(() => {});
  }

  return (
    <div className='appShell' onClick={(event) => { clickHandle('app', event); }}>
      <header className='header'>
        <div>
          <div className='header-mark'>
            {isDemoMode ? 'SCAMpD.COM DEMO' : 'SCAMpD.COM'}
          </div>
          <div className='header-subtitle'>Curated storefront experience</div>
        </div>
        <button
          className='theme-toggle'
          type='button'
          onClick={() => { setTheme(!theme); }}
        >
          {theme ? 'Dark mode' : 'Light mode'}
        </button>
      </header>

      <main className='pageContent'>
        <section className='section-shell section-hero'>
          <ProductOverview clickTrack={clickHandle} product={product} productID={productID} seeReviewsClick={seeReviewsClick} outfits={outfits} setOutfits={setOutfits} />
        </section>

        <section className='section-shell'>
          <div className='section-heading'>
            <p className='section-eyebrow'>Discover</p>
            <h2>Related picks</h2>
          </div>
          <RelatedProducts clickTrack={clickHandle} setProductID={setProductID} setOutfits={setOutfits} product={product} id={product.id ? product.id : 0} />
        </section>

        <section className='section-shell'>
          <div className='section-heading'>
            <p className='section-eyebrow'>Saved</p>
            <h2>Your outfit board</h2>
          </div>
          <Outfits currentProduct={product} setProductID={setProductID} setOutfits={setOutfits} outfits={outfits} />
        </section>

        <section className='section-shell'>
          <div className='section-heading'>
            <p className='section-eyebrow'>Support</p>
            <h2>Questions and answers</h2>
          </div>
          <QA clickTrack={clickHandle} id={product.id ? product.id : 0} product_name={product.name}/>
        </section>

        <section className='section-shell'>
          <div className='section-heading'>
            <p className='section-eyebrow'>Feedback</p>
            <h2>Ratings and reviews</h2>
          </div>
          <Reviews ref={ref} clickTrack={clickHandle} id={product.id ? product.id : 0} name={product.name} setAv={setAverage}/>
        </section>
      </main>
    </div>
  );
};

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
