import React, { useState, useEffect } from 'react';

const Styles = ({styles, styleClick}) => {



    const styleRender = () => {
        return styles.map((style) => {
            return (<img onClick={styleClick} id={style.style_id} className='style_thumb' src={style.photos[0].thumbnail_url}></img>)
        })
    }



    return (
        <div className='style_selector'>
            <h3>Styles:</h3>
            {styleRender()}
        </div>
    )
}

export default Styles;