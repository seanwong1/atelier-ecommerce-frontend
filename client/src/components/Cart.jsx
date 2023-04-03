import React, { useState, useEffect } from 'react';

const Cart = ( {cartSubmit} )  => {
    const [qty, setQty] = useState(1);


    return (
        <div>

        <button className='QTY'>Qty: {qty} ^ </button>
        <button className='Size'>Size</button>
        <button className='Add-to-Cart'>Add to Cart</button>
        <button  className='Favorite'>Favorite</button>
        </div>

    )
}

export default Cart