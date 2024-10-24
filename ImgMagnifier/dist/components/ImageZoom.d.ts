import React from 'react';
import '../index.css';
interface ImageZoomProps {
    src?: string;
    width?: number;
    height?: number;
    zoomWidth?: number;
    zoomHeight?: number;
    lensSize?: number;
}
declare const ImageZoom: React.FC<ImageZoomProps>;
export default ImageZoom;
