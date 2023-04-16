import React, { useState, useEffect } from 'react';
import Zoom from './Zoom.jsx';


const ProductImages = ({images, image,  imageChange}) => {
    const [showZoom,setShowZoom] = useState('none');

    const thumbnails = () => {
        return images.map((img) => {
            return (
            <div key={Math.random()*10000}><img  className='indThumnails' src={img.thumbnail_url} alt={'Hello'} onClick={imageChange}></img></div>
            )
        })
    }

    const zoomImage = (e) => {
        setShowZoom('block');
    }
    
    const closeZoom = (e) => {
        setShowZoom('none')
    }

    return (
        <div className='styleImages'>
            <div className="imgThumbs">{thumbnails()}</div>
            <div className='image-box'>
            <button className='prev-image' onClick={imageChange}>Back</button>
            <img onClick={zoomImage} className='currImg' src={image.url}></img>
            <button className='next-image' onClick={imageChange}>Next</button>
            </div>

            <Zoom className="zoomedView" onClick={closeZoom} showZoom={showZoom} >
                <img

                  className='zoomImage'
                  src={image.url}
                  alt='No Photo to Display'
                />
              </Zoom>

        </div>


    )


}

export default ProductImages;