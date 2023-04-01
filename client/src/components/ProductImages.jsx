import React, { useState, useEffect } from 'react';


const ProductImages = ({images, image,  imageChange}) => {

    const thumbnails = () => {
        return images.map((img) => {
            console.log(img);
            return (
            <div key={Math.random()*10000}><img className='indThumnails' src={img.thumbnail_url} onClick={imageChange}></img></div>
            )
        })
    }

    return (
        <div className='styleImages'>
            <img className='currImg' src={image.url}></img>
            <div className="imgThumbs">{thumbnails()}</div>
        </div>

    )

}

export default ProductImages;