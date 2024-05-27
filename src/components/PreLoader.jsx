import React from 'react';
import '../styles/PreLoader.css';

const Preloader = () => {
    return (
        <div id="preloader">
            <div className="spinner"></div>
            <div></div>
            <h2>Redirecting...</h2>
        </div>
    );
};

export default Preloader;
