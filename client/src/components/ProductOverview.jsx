import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductImages from './ProductImages.jsx';

const ProductOverview = ({ product }) => {
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

    //will return sale info if item is on sale
    const onSale = () => {
        if (style.sale_price !== null) {
            return (
                <p>was: ${style.original_price} is: ${style.sale_price}</p>
            )
        } else {
            return (
                <p>${style.original_price}</p>
            )
        }
    }

    //render all the features
    const showFeatures = () => {
        if(product.features) {
            return product.features.map(ftr => {
                console.log(ftr)
                return `${ftr.feature}: ${ftr.value},  `
            })
        }


    }




    useEffect(() => {
        getStyles()
    }, [])
    console.log(product);
    return (
        <div className="productOverview">


            <div className="productImages">
                <ProductImages images={images} image={image} />
            </div>
            <div className='styles'></div>
            <div className='productDetails'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {onSale()}
                <p>category:{product.category}</p>
                <p>features: {showFeatures()}</p>

                <h3>Style Selector Here</h3>
                <h3>Add to Cart Here</h3>
            </div>
            <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
            <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
            <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>

        </div>
    )

}
export default ProductOverview;

//help me please
//need to get this to a state where I can push and merge so we can have all of our stuff in working order