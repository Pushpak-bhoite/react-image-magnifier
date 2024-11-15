import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback } from 'react';
const ImageMagnifier = ({ src, width, height, magnifierSize = 80, zoomLevel = 2.5, enabled = true }) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const imgRef = useRef(null);
    const containerRef = useRef(null);
    const handleMouseEnter = useCallback(() => {
        const img = imgRef.current;
        if (img) {
            const { width, height } = img.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
        }
    }, []);
    const handleMouseMove = useCallback((e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setXY([x, y]);
    }, []);
    const handleMouseLeave = useCallback(() => {
        setShowMagnifier(false);
    }, []);
    const magnifierStyle = {
        position: 'absolute',
        left: Math.max(0, Math.min(x - magnifierSize / 2, width - magnifierSize)),
        top: Math.max(0, Math.min(y - magnifierSize / 2, height - magnifierSize)),
        width: `${magnifierSize}px`,
        height: `${magnifierSize}px`,
        opacity: 1,
        border: '1px solid lightgray',
        backgroundColor: 'white',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
        backgroundPositionX: `${-x * zoomLevel + magnifierSize / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierSize / 2}px`,
        pointerEvents: 'none',
        zIndex: 1
    };
    const zoomedPreviewStyle = {
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        marginLeft: '20px',
        height: `${height * 1.5}px`,
        width: `${width * 1.5}px`,
        border: '1px solid #d4d4d4',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
        backgroundPositionX: `${-x * zoomLevel + (width * 1.5) / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + (height * 1.5) / 2}px`,
        zIndex: 2
    };
    return (_jsxs("div", { ref: containerRef, style: { position: 'relative', width: `${width}px`, height: `${height}px` }, children: [_jsxs("div", { style: {
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                }, onMouseEnter: enabled ? handleMouseEnter : undefined, onMouseMove: enabled ? handleMouseMove : undefined, onMouseLeave: enabled ? handleMouseLeave : undefined, children: [_jsx("img", { ref: imgRef, src: src, alt: "Original", style: { width: '100%', height: '100%', objectFit: 'cover' } }), enabled && showMagnifier && (_jsx("div", { style: magnifierStyle }))] }), enabled && showMagnifier && (_jsx("div", { style: zoomedPreviewStyle }))] }));
};
export default ImageMagnifier;
