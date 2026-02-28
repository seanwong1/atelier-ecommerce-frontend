import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ skus, currSku, stock, setSize, setCurrSku, setStock }) => {
  const [drop, setDrop] = useState([]);
  const [qty, setQty] = useState(1);

  const handleSizeChange = (event) => {
    const nextSku = event.target.value;
    setCurrSku(nextSku);
    setSize(skus[nextSku].size);
    setStock(skus[nextSku].quantity);
    setQty(1);
  };

  const addToCart = (e) => {
    const options = {
      'url': '/cart',
      'params': { 'sku_id': currSku },
      'method': 'post'
    };

    axios.request(options)
      .then(() => {
        alert('Item in Cart');
      })
      .catch(() => {});

    e.preventDefault();
  };

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= Math.min(stock, 15); i++) {
      arr.push(i);
    }
    setDrop(arr);
    setQty(arr[0] || 0);
  }, [stock]);

  if (stock === 0 || stock === null || skus[currSku] === undefined) {
    return (
      <h3>OUT OF STOCK</h3>
    )
  } else {
    return (
      <form onSubmit={addToCart}>
        <select className='size-drop' value={currSku} onChange={handleSizeChange}>
        {Object.keys(skus).map((key) => {
          return (
            <option key={key} value={key} className='size-item'>{skus[key].size}</option>
          )
        })}
        </select>
        <select className='qty-drop' value={qty} onChange={(event) => {setQty(Number(event.target.value));}} >
          {drop.map((num) => {
            return (
              <option key={num} value={num} className='qty-item'>{num}</option>
            )
          })}
        </select>
        <input className='cart-submit' type='submit' value='Add to Cart' />
      </form>
    )
  }
}

export default Cart;
