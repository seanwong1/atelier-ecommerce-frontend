import React, { useState, useEffect } from 'react';


const ProductImages = ({images, image}) => {

    const thumbnails = () => {
        return images.map((img) => {
            // console.log(img.thumbnail_url);
            return (
<<<<<<< HEAD
            <div key={Math.random()*10000}><img className='indThumnails' src={img.thumbnail_url}></img></div>
=======
            <div key={Math.random()*10000}><img id='indThumnails' src={img.thumbnail_url}></img></div>
>>>>>>> a6ad12432da0cb5eb90eaa72f950006dba8b1bc1
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