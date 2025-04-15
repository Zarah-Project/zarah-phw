import React, { useEffect, useRef } from 'react';

const GrainOverlay = ({
                          patternWidth = 100,
                          patternHeight = 100,
                          grainOpacity = 0.1,
                          grainDensity = 1,
                          grainWidth = 1,
                          grainHeight = 1,
                          animate = true,
                          fps = 30,
                          zIndex = 1,
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

        const generateGrainPattern = () => {
            const patternCanvas = document.createElement('canvas');
            patternCanvas.width = patternWidth;
            patternCanvas.height = patternHeight;

            const pctx = patternCanvas.getContext('2d');

            const grains = Math.floor(patternWidth * patternHeight * grainDensity);
            for (let i = 0; i < grains; i++) {
                const x = Math.random() * patternWidth;
                const y = Math.random() * patternHeight;
                const alpha = Math.random() * grainOpacity;

                pctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
                pctx.fillRect(x, y, grainWidth, grainHeight);
            }

            return ctx.createPattern(patternCanvas, 'repeat');
        };

        let pattern = generateGrainPattern();

        let offsetX = 0;
        let offsetY = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.translate(offsetX, offsetY);
            ctx.fillStyle = pattern;
            ctx.fillRect(-offsetX, -offsetY, canvas.width, canvas.height);
            ctx.restore();
        };

        const animateGrain = () => {
            offsetX = Math.random() * patternWidth;
            offsetY = Math.random() * patternHeight;
            draw();
        };

        resize();
        draw();

        if (animate) {
            animationInterval.current = setInterval(animateGrain, 1000 / fps);
        }

        window.addEventListener('resize', resize);
        return () => {
            clearInterval(animationInterval.current);
            window.removeEventListener('resize', resize);
        };
    }, [
        patternWidth,
        patternHeight,
        grainOpacity,
        grainDensity,
        grainWidth,
        grainHeight,
        animate,
        fps,
    ]);

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

export default GrainOverlay;
