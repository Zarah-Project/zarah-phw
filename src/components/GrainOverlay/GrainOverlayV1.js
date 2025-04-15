import React, { useEffect, useRef } from 'react';

const GrainOverlayV1 = ({
                          patternWidth = 231.53,
                          patternHeight = 263.95,
                          grainOpacity = 0.03,
                          grainDensity = 1,
                          grainWidth = 1,
                          grainHeight = 1,
                          animate = true,
                          fps = 30,
                          zIndex = 1000,
                          style = {},
                      }) => {
    const canvasRef = useRef(null);
    const animationInterval = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const generateGrain = () => {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const buffer = new Uint32Array(imageData.data.buffer);

            for (let i = 0; i < buffer.length; i++) {
                const alpha = Math.floor(Math.random() * 256 * grainOpacity);
                buffer[i] = (alpha << 24) | 0x000000; // black grain with variable alpha
            }

            ctx.putImageData(imageData, 0, 0);
        };

        resize();

        if (animate) {
            animationInterval.current = setInterval(generateGrain, 1000 / fps);
        } else {
            generateGrain();
        }

        window.addEventListener('resize', resize);
        return () => {
            clearInterval(animationInterval.current);
            window.removeEventListener('resize', resize);
        };
    }, [grainOpacity, animate, fps]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex,
                ...style,
            }}
        />
    );
};

export default GrainOverlayV1;