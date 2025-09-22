import { motion } from "motion/react"
import style from "./OpeningAnimation.module.scss";
import React, {useRef, useEffect, useState} from "react";
import {useBoolean, useInterval, useRafLoop, useWindowSize} from "react-use";
import {useSpring, useTransform} from "framer-motion";
import CircleImageSlider from "@/components/Sections/OpeningAnimation/CircleImageSlider";

const MarqueeItem = (props) => {
    const { children, speed } = props;

    const itemRef = useRef(null);
    const rectRef = useRef(null);
    const x = useRef(0);
    const {width, height} = useWindowSize();

    const setX = () => {
        if (!itemRef.current || !rectRef.current) {
            return;
        }
        if (x.current < -rectRef.current.width) {
            x.current = 0;
        }
        itemRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
    };

    useEffect(() => {
        if (itemRef.current) {
            rectRef.current = itemRef.current.getBoundingClientRect();
        }
    }, [width, height]);

    const loop = () => {
        x.current -= speed.get();
        setX();
    };

    const [_, loopStart] = useRafLoop(loop, false);

    useEffect(() => {
        loopStart();
    }, []);

    return (
        <motion.div className={style.MarqueeItem} ref={itemRef}>
            {children}
        </motion.div>
    );
};

const OpeningAnimation = (props) => {
    const { speed = 1.5, threshold = 0.014 } = props;

    const [zIndex, setZIndex] = useState(20);
    const [delay] = useState(7500);
    const [isRunning, toggleIsRunning] = useBoolean(true);
    const [isMobile, setIsMobile] = useState(false);

    const marqueeRef = useRef(null);
    const slowDown = useRef(false);

    const x = useRef(0);
    const {width} = useWindowSize();
    const speedSpring = useSpring(speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const skewX = useTransform(
        speedSpring,
        [-width * 0.05, 0, width * 0.05],
        [1, 0, 1]
    );

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < threshold) {
            return;
        }
        x.current *= 0.66;
        if (x.current < 0) {
            x.current = Math.min(x.current, 0);
        } else {
            x.current = Math.max(x.current, 0);
        }
        speedSpring.set(speed + x.current);
    };

    useRafLoop(loop);

    // Detect if screen is mobile
    useEffect(() => {
        setIsMobile(width <= 768); // treat <=768px as mobile
    }, [width]);

    // Alternate zIndex on desktop only
    useInterval(
        () => {
            if (!isMobile) {
                setZIndex(zIndex === 20 ? 5 : 20);
            }
        },
        isRunning ? delay : null
    );

    return (
        <div className={style.Section}>
            {/* Centered Image */}
            <div
                className={style.imageContainer}
                style={
                    isMobile
                        ? { width: "300px", height: "300px" }
                        : {}
                }
            >
                <CircleImageSlider />
            </div>

            {/* Scrolling Text */}
            <div
                className={style.scrollingText}
                style={{ zIndex: isMobile ? 20 : zIndex }}
            >
                <motion.div
                    className={style.Marquee}
                    ref={marqueeRef}
                    style={{ skewX }}
                >
                    <MarqueeItem speed={speedSpring}>
                        <div style={{paddingRight: '200px'}}>
                            Women’s Labour Activism
                        </div>
                    </MarqueeItem>
                    <MarqueeItem speed={speedSpring}>
                        <div style={{paddingRight: '200px'}}>
                            Women’s Labour Activism
                        </div>
                    </MarqueeItem>
                </motion.div>
            </div>
        </div>
    );
};

export default OpeningAnimation;
