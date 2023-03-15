import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductImages from './ProductImages.jsx';

const ProductOverview = ({product}) => {
    const [styles, setStyles] = useState([]);
    const [style, setStyle] = useState({});
    const [images, setImages] = useState([]);
    const [image, setImage] = useState([]);
    const getStyles = () => { 
        axios.get('/styles').then((result) => {
            console.log(result);
            setStyles(result.data);
            setStyle(result.data[0]);
            setImages(result.data[0].photos)
            setImage(result.data[0].photos[0])
          });
    }

    useEffect(() => {
        getStyles()
    }, [])

    return (
        <div id="productOverview">
            <h2>{product.name}</h2>

            <div id="productImages">
                <ProductImages images={images} image={image}/>
            </div>
        </div>
    )

}
export default ProductOverview;

//need to get this to a state where I can push and merge so we can have all of our stuff in working order