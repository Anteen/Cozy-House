import React from 'react';
import preloaderGif from '../assets/gif/image_processing20210309-8585-aa8t55.gif';
import './Preloader.css';

const Preloader = () => {
    
    return (
        <div className="preloaderWrapper">
            <img src={preloaderGif} alt='loading' className="preloaderGif" />
        </div>
    );
};

export default Preloader;
