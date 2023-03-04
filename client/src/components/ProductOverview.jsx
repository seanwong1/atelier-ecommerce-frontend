import React, { useState, useEffect } from 'react';

const ProductOverview = ({product}) => {

    console.log(product);
    return (
        <div>
            {product.id}
        </div>
    )

}
export default ProductOverview;