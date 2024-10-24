import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import '../index.css';
const ImageZoom = ({ src = '', width = 300, height = 300, zoomWidth = 300, zoomHeight = 300, lensSize = 40, }) => {
    const imgRef = useRef(null);
    const lensRef = useRef(null);
    const resultRef = useRef(null);
    const [cx, setCx] = useState(1);
    const [cy, setCy] = useState(1);
    useEffect(() => {
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;
        if (img && lens && result) {
            const cxRatio = zoomWidth / lensSize;
            const cyRatio = zoomHeight / lensSize;
            setCx(cxRatio);
            setCy(cyRatio);
            result.style.backgroundImage = `url(${src})`;
            result.style.backgroundSize = `${img.width * cxRatio}px ${img.height * cyRatio}px`;
        }
    }, [src, zoomWidth, zoomHeight, lensSize]);
    const getCursorPos = (e) => {
        const img = imgRef.current;
        if (!img)
            return { x: 0, y: 0 };
        const a = img.getBoundingClientRect();
        const x = e.pageX - a.left - window.pageXOffset;
        const y = e.pageY - a.top - window.pageYOffset;
        return { x, y };
    };
    const moveLens = (e) => {
        e.preventDefault();
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;
        if (!img || !lens || !result)
            return;
        const pos = getCursorPos(e);
        let x = pos.x - lens.offsetWidth / 2;
        let y = pos.y - lens.offsetHeight / 2;
        if (x > img.width - lens.offsetWidth)
            x = img.width - lens.offsetWidth;
        if (x < 0)
            x = 0;
        if (y > img.height - lens.offsetHeight)
            y = img.height - lens.offsetHeight;
        if (y < 0)
            y = 0;
        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;
        result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex gap-10", children: [_jsxs("div", { className: "relative border overflow-hidden", style: { height, width }, children: [_jsx("img", { ref: imgRef, src: src, className: "object-contain h-full border", width: width, height: height, onMouseMove: moveLens, onTouchMove: moveLens, alt: "Zoomable" }), _jsx("div", { ref: lensRef, className: "absolute border border-gray-400", style: { width: lensSize, height: lensSize } })] }), _jsx("div", { ref: resultRef, className: "border border-gray-400", style: {
                        width: zoomWidth,
                        height: zoomHeight,
                        backgroundRepeat: 'no-repeat',
                        left: `${width + 10}px`,
                    } })] }) }));
};
export default ImageZoom;
