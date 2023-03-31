import React, { useState, useEffect } from 'react';


const ProductImages = ({images, image}) => {

    const thumbnails = () => {
        console.log(image, images)
        return images.map((img) => {
            return (
            <div key={Math.random()*10000}><img className='indThumnails' src={img.thumbnail_url}></img></div>
            )
        })
    }

    return (
        <div className='styleImages'>
            <img className='currImg' src={image.url}></img>
            <div className="imgThumbs">{thumbnails()}</div>
        </div>

<<<<<<< HEAD
        )
=======
    )

>>>>>>> 619727a108c6ae70062cef22a8629fbba41b259f
}

export default ProductImages;