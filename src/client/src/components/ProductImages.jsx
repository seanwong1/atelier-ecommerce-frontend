import React, { useState } from 'react';
import Zoom from './Zoom.jsx';


const ProductImages = ({images, image,  imageChange}) => {
    const [showZoom, setShowZoom] = useState('none');

    const thumbnails = () => {
        return images.map((img) => {
            return (
            <div key={img.thumbnail_url || img.url}><img  className='indThumnails' src={img.thumbnail_url} alt={'Hello'} onClick={imageChange}></img></div>
            )
        })
    }

    const zoomImage = (e) => {
        if( showZoom === 'none') {
            setShowZoom('block');
        } else if ( showZoom === 'block' ) {
            setShowZoom('none');
        }

    }


    return (
        <div className='styleImages'>
            <div className="imgThumbs">{thumbnails()}</div>
            <div className='image-box'>
                {/* <button className='prev-image' onClick={imageChange}>Back</button> */}
                {image?.url ? <img style={{ transform: `scale(${showZoom})` }} onClick={zoomImage} className='currImg' src={image.url}></img> : null}
                {/* <button className='next-image' onClick={imageChange}>Next</button> */}
            </div>

            <Zoom showZoom={showZoom} image={image} zoomImage={zoomImage} style={{display: showZoom}} />

        </div>


    )


}

export default ProductImages;
