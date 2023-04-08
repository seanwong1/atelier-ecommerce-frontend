import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ( {cartSubmit, skus, currSku, size, stock, setSize, setCurrSku, setStock} )  => {
    const [qty, setQty] = useState(0);
    const [showSize, setShowSize] = useState('none');
    const [showQty, setShowQty] = useState('none');


    const sizeDrop = (e) => {
        return (
            <div style={{display: showSize}} className='sizeDrop'>
                {Object.keys(skus).map((key) => {
                    return (
                        <div>
                            <button key={key} value={skus[key].size} onClick={clickButtons} className='size-item'>{skus[key].size}</button>
                        </div>
                    )
                })}
            </div>
        )
    }


    const qtyDrop = (e) => {
        var arr = [];
        for (var i = 0; i <= 100; i++) {
            arr.push(i);
        }
        return (
            <div style={{display: showQty}} className='qtyDrop'>
                {arr.map((num) => {
                    return (
                        <div className='qty-item'>
                            <button value={num} onClick={clickButtons} className='qty-item'>{num}</button>
                        </div>
                    )
                })}
            </div>
        )
    }
    const clickButtons = (e) => {
        console.log(e.target.value)
        if(e.target.className === 'QTY') {
            setShowQty('block');
        } else if(e.target.className === 'Size') {
            setShowSize('block');
        } else if (e.target.className === 'qty-item') {
            setShowQty('none');
            setQty(e.target.value);
        } else if (e.target.className === 'size-item') {
            setShowSize('none');
            setSize(e.target.value);
            setCurrSku(skus[e.target.key]);
            setStock(skus[e.target.key].quantity)
        }
    }

    const addToCart = (e) => {
        e.preventDefault(); 
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
    }

    if(stock === 0) {
        return (
            <h3>OUT OF STOCK</h3>
        )
    } else {
        return (
            <div className='CartButtons'>
                <div className='sizeSelect'>
                  <button onClick={clickButtons} className='QTY'>Qty: {qty} </button>
                  <div>{qtyDrop()}</div>
                </div>
    
            <div className='sizeSelect'>
              <button onClick={clickButtons} className='Size'>Size {size}</button>
              <div >{sizeDrop()}</div>
            </div>
    
            <button onClick={addToCart} className='Add-to-Cart'>Add to Cart</button>
            </div>
    
        )

    }

}

export default Cart