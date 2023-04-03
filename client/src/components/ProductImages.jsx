import React, { useState, useEffect } from 'react';


const ProductImages = ({images, image,  imageChange}) => {

    const thumbnails = () => {
        return images.map((img) => {
            return (
            <div ><img key={Math.random()*10000} className='indThumnails' src={img.thumbnail_url} onClick={imageChange}></img></div>
            )
        })
    }

    return (
        <div className='styleImages'>
            <div className="imgThumbs">{thumbnails()}</div>
            <div className='image-box'>
            <img onClick={imageChange} className='currImg' src={image.url}></img>
            </div>
            
        </div>

    )

}

export default ProductImages;