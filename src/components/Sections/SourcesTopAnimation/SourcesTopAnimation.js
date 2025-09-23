import {useLayoutEffect, useRef, useState} from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import style from "./SourcesTopAnimation.module.scss";
import {easeIn, easeInOut, easeOut} from "motion";

export default function SourcesTopAnimation() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    // Total scroll distance is one full viewport height per word
    const [scrollHeight, setScrollHeight] = useState(200);
    const [distance, setDistance] = useState(0);
    const [extraScreens, setExtraScreens] = useState(1);

    const images=[
        { src: '/images/content/sources04.jpg', bottom: '30%', left: `${extraScreens * 20}%`, height: '250px', speed: 0.6, link: '/essays/migration' },
        { src: '/images/content/sources09.jpg', bottom: '20%', left: `${extraScreens * 140}%`, height: '250px', speed: 1.2, link: '/people/zehra-kosova' },
        // { src: '/images/content/sources08.jpg', top: '10%', left: `${extraScreens * 60}%`, height: '300px', speed: 1.1 },
        { src: '/images/content/sources03.jpg', top: '0', left: `${extraScreens * 110}%`, height: '300px', speed: 0.75, link: '/activism/story/gendered-critique' },
        { src: '/images/content/sources05.jpg', bottom: '45%', left: `${extraScreens * 40}%`, height: '300px', speed: 0.5, link: '/people/magda-aranyossi' },
        // { src: '/images/content/sources01.jpg', bottom: '10%', left: `${extraScreens * 70}%`, height: '200px', speed: 0.8 },
        { src: '/images/content/sources02.jpg', top: '0%', left: `${extraScreens * 60}%`, height: '300px', speed: 0.7, link: '/activism/story/domestic-workers' },
        // { src: '/images/content/sources06.jpg', top: '50%', left: `${extraScreens * 35}%`, height: '300px', speed: 0.8 },
        { src: '/images/content/sources12.jpg', top: '0%', left: '0', height: '350px', speed: 0.3, link: '/activism/story/icwg' },
        { src: '/images/content/sources07.jpg', top: '0%', left: `${extraScreens * 100}%`, height: '200px', speed: 0.9, link: '/essays/co-operatives' },
        { src: '/images/content/sources10.jpg', bottom: '10%', left: `${extraScreens * 110}%`, height: '300px', speed: 1, link: '/people/halina-krahelska' },
        { src: '/images/content/sources11.jpg', bottom: '20%', left: `${extraScreens * 10}%`, height: '200px', speed: 0.7, link: '/activism/story/berec-strike' },
    ]

    useLayoutEffect(() => {
        function updateSizes() {
            if (textRef.current && window) {
                const containerWidth = textRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;

                const distanceToScroll = containerWidth - viewportWidth / 2;
                setDistance(distanceToScroll);

                // vertical scroll height = base 100dvh + extra proportional to distance
                const extraScreens = distanceToScroll / viewportWidth;
                setExtraScreens(extraScreens);
                setScrollHeight(100 + extraScreens * 100);
            }
        }

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${distance}px`]);

    return (
        <div
            ref={containerRef}
            style={{
                height: `calc(100dvh + ${scrollHeight}dvh)`,
                position: 'relative',
            }}
        >
            <section
                className={style.Section}
                style={{
                    position: 'sticky',
                    top: '80px',
                    height: '100dvh',
                    overflow: 'visible',
                }}
            >
                {/* Scrolling images */}
                {images.map((img, idx) => {
                    // Choose easing dynamically based on image speed
                    let easing;
                    if (img.speed > 0.8) {
                        easing = easeOut;     // fast/foreground → quick start
                    } else if (img.speed < 0.4) {
                        easing = easeIn;      // slow/background → delayed start
                    } else {
                        easing = easeInOut;   // mid-speed → balanced
                    }

                    // Create eased scroll progress
                    const easedProgress = useTransform(
                        scrollYProgress,
                        [0, 1],
                        [0, 1],
                        { ease: easing }
                    );

                    const imageX = useTransform(easedProgress, v => -v * distance * img.speed);

                    const blurAmount = useTransform(
                        scrollYProgress,
                        [0, 1],
                        [`${(1 - img.speed) * 10}px`, '0px']
                    );

                    if (img.link) {
                        return (
                            <a href={img.link || null} key={idx} target={img.link ? '_blank' : null}>
                                <motion.img
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
                                        cursor: 'pointer',
                                        filter: blurAmount,
                                        objectFit: 'cover',
                                    }}
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (images.length - idx) * 0.2 }}
                                />
                            </a>
                        );
                    } else {
                        return (
                            <motion.img
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
                                    cursor: 'default',
                                    filter: blurAmount,
                                    objectFit: 'cover',
                                }}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: (images.length - idx) * 0.2 }}
                            />
                        );
                    }

                })}

                {/* Scrolling text */}
                <motion.div
                    ref={textRef}
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span>Finding women in the sources</span>
                    </motion.span>
                </motion.div>
            </section>
        </div>
    );
}