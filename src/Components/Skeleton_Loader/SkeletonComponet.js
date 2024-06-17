// SkeletonLoader.js
import React from 'react';
import './SkeletonLoader.css';

const SkeletonComponent = () => {
    return (
        <div className="skeleton-loader">
            <div className="skeleton-title"></div>
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
        </div>
    );
};

export default SkeletonComponent;
