import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ product, outfits, setOutfits, cartSubmit, skus, currSku, size, stock, setSize, setCurrSku, setStock }) => {
  const [showSize, setShowSize] = useState('none');
  const [drop, setDrop] = useState([]);
  const [star, setStar] = useState('☆');
  const [qty, setQty] = useState(0);
  const [showQty, setShowQty] = useState('none');

  const clickButtons = (e) => {
    console.log(e.target.value)
    if (e.target.className === 'QTY') {
      setShowQty('block');
    } else if (e.target.className === 'qty-item') {
      setShowQty('none');
      setQty(e.target.value);
    } else if (e.target.className === 'Size') {
      setShowSize('block');
    } else if (e.target.className === 'size-item') {
      setShowSize('none');
      setSize(e.target.value);
      setCurrSku(e.target.id);
      setStock(skus[e.target.id].quantity)
      console.log(skus[e.target.id].quantity);
    }
  }

  const addToCart = (e) => {
    let options = {
      'url': '/cart',
      'params': { 'sku_id': currSku },
      'method': 'post'
    }

    axios.request(options)
      .then((result) => {
        alert('Item in Cart')
        console.log("WE DID IT BOYS");
      })
      .catch((err) => {
        console.log('ErrorAddingToCart', err);
      });
    e.preventDefault();
  };

  useEffect(() => {
    var arr = [];
    for (var i = 0; i <= stock; i++) {
      arr.push(i);
    }
    setDrop(arr);
  }, [stock]);

  if (stock === 0 || stock === null || skus[currSku] === undefined) {
    return (
      <h3>OUT OF STOCK</h3>
    )
  } else {
    return (
      <form onSubmit={addToCart}>
        <select className='size-drop' value={showSize} onChange={() => {setShowSize(event.target.value);}}>
        {Object.keys(skus).map((key) => {
          return (
            <option id={key} value={skus[key].size} className='size-item'>{skus[key].size}</option>
          )
        })}
        </select>
        <select className='qty-drop' value={showQty} onChange={() => {setShowQty(event.target.value);}} >
          {drop.map((num) => {
            return (
              <option value={num} className='qty-item'>{num}</option>
            )
          })}
        </select>
        <input className='cart-submit' type='submit' value='Add to Cart' />
      </form>
    )
  }
}

export default Cart;