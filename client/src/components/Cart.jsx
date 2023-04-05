import React, { useState, useEffect } from 'react';

const Cart = ( {cartSubmit} )  => {

    return (
        <h2 onClick={cartSubmit}>CART</h2>
    )
}

export default Cart