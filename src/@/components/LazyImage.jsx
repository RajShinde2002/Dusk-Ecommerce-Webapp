import React, { useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return (
      <div className="h-48 w-48 bg-gray-300 flex items-center justify-center">
        Image Error
      </div>
    );
  }

  if (!imageSrc) {
    return <SkeletonCard />;
  }

  return <img className="h-48 w-48 object-contain" src={imageSrc} alt={alt} />;
};

export default LazyImage;
