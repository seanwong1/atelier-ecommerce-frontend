import React, { useState, useEffect } from 'react';

const Cart = ( {cartSubmit, skus} )  => {
    const [qty, setQty] = useState(1);

    const sizeDrop = () => {

        return (
            <div>
                {Object.keys(skus).map((key) => {
                    console.log(skus[key])
                    return (
                        <btn>{skus[key].size}</btn>
                    )
                })}
            </div>
        )



        // for(var key in skus) {
        //     console.log(skus[key].size);
        //     return (
        //         <btn>{skus[key].size}</btn>
        //     )
        // }

    }

    const qtyDrop = () => {

    }

    return (
        <div>
            <div className='qty-drop'>
            <button className='QTY'>Qty: {qty} ^ </button>
            </div>


        <button onClick={sizeDrop} className='Size'>Size</button>
        <button className='Add-to-Cart'>Add to Cart</button>
        </div>

    )
}

export default Cart