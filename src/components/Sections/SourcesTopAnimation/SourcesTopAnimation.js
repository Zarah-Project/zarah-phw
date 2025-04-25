import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import style from "./SourcesTopAnimation.module.scss";

const images=[
    { src: '/images/examples/sources08.jpeg', bottom: '10%', left: '130%', height: '250px', speed: 0.9 },
    { src: '/images/examples/sources05.jpeg', top: '0', left: '130%', height: '300px', speed: 0.75 },
    { src: '/images/examples/sources06.jpeg', top: '35%', left: '110%', height: '300px', speed: 0.7 },
    { src: '/images/examples/sources07.jpeg', bottom: '10%', left: '90%', height: '200px', speed: 0.8 },
    { src: '/images/examples/sources04.jpeg', top: '10%', left: '80%', height: '300px', speed: 0.7 },
    { src: '/images/examples/sources02.jpeg', top: '30%', left: '50%', height: '300px', speed: 0.3 },
    { src: '/images/examples/sources03.jpeg', top: '50%', left: '35%', height: '300px', speed: 0.8 },
    { src: '/images/examples/sources01.jpeg', top: '0', left: '0', height: '350px', speed: 0.2 },
]

export default function SourcesTopAnimation() {
    const containerRef = useRef(null);

    // Total scroll distance is one full viewport height per word
    const scrollHeight = 600;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', `-100%`]);

    return (
        <div
            ref={containerRef}
            style={{
                height: `calc(100vh + ${scrollHeight}vh)`,
                position: 'relative',
            }}
        >
            <section
                className={style.Section}
                style={{
                    position: 'sticky',
                    top: '80px',
                    height: '100vh',
                    overflow: 'visible',
                }}
            >
                {/* Scrolling images */}
                {
                    images.map((img, idx) => {
                    const imageX = useTransform(scrollYProgress, [0, 1], ['0%', `-${scrollHeight * img.speed}%`]);

                    const blurAmount = useTransform(
                        scrollYProgress,
                        [0, 1],
                        [`${(1 - img.speed) * 10}px`, '0px'] // more blur if slower
                    );

                    return (
                        <motion.img
                            key={idx}
                            src={img.src}
                            alt={`Parallax image ${idx}`}
                            style={{
                                position: 'absolute',
                                top: img.top,
                                left: img.left,
                                bottom: img.bottom,
                                right: img.right,
                                width: img.width || 'auto',
                                height: img.height || 'auto',
                                x: imageX,
                                zIndex: img.zIndex || 0,
                                pointerEvents: 'none',
                                filter: blurAmount,
                                objectFit: 'cover',
                            }}
                            styleOverrides={{
                                filter: value => `blur(${value})`,
                            }}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: (images.length - idx) * 0.2 }}
                            viewport={{ once: true }}
                        />
                    );
                })}

                {/* Scrolling text */}
                <motion.div
                    style={{
                        display: 'flex',
                        x: x,
                        height: '100%',
                        alignItems: 'center',
                        padding: '0 30vw',
                        scrollSnapType: 'x mandatory', // enables horizontal snapping
                        whiteSpace: 'nowrap',
                        touchAction: 'pan-y', // keeps vertical scrolling on touch
                    }}
                >
                    <motion.span
                        className={style.Title}
                        style={{
                            flexShrink: 0,
                            width: '100vw',
                            textAlign: 'center',
                            scrollSnapAlign: 'center',
                            zIndex: 1000
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <span>Finding women in the sources</span>
                    </motion.span>
                </motion.div>
            </section>
        </div>
    );
}