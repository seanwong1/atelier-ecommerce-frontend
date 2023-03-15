import React, { useState, useEffect } from 'react';


const ProductImages = ({images, image}) => {

    const thumbnails = () => {
        return images.map((img) => {
            // console.log(img.thumbnail_url);
            return (
            <div><img id='indThumnails' src={img.thumbnail_url}></img></div>
            )
        })
    }





        return (
            <div id='styleImages'>
                <img id='currImg' src={image.url}></img>
                <div id="imgThumbs">{thumbnails()}</div>
            </div>

        )
}

export default ProductImages;