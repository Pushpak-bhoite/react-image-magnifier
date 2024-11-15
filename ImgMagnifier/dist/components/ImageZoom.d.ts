import React from 'react';
interface ImageMagnifierProps {
    src?: string;
    width: number;
    height: number;
    magnifierSize?: number;
    zoomLevel?: number;
    enabled?: boolean;
}
declare const ImageMagnifier: React.FC<ImageMagnifierProps>;
export default ImageMagnifier;
