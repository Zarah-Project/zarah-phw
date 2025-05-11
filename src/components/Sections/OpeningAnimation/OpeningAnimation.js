import { motion } from "motion/react"

import style from "./OpeningAnimation.module.scss";
import React, {useRef, useEffect, useState} from "react";
import {useBoolean, useInterval, useRafLoop, useWindowSize} from "react-use";
import {useSpring, useTransform} from "framer-motion";
import CircleImageSlider from "@/components/Sections/OpeningAnimation/CircleImageSlider";

/**
 * @see https://14islands.com/blog/interactive-marquee-with-framer-motion/
 *
 * @see https://codesandbox.io/s/x3r465?file=/src/App.js
 */
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

        const xPercentage = (x.current / rectRef.current.width) * 100;

        if (xPercentage < -100) {
            x.current = 0;
        }

        if (xPercentage > 0) {
            x.current = -rectRef.current.width;
        }

        itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
    };

    useEffect(() => {
        if (itemRef.current) {
            rectRef.current = itemRef.current.getBoundingClientRect();
        }
    }, [width, height]);

    const loop = () => {
        //Substracts the current x from the speed set by useSpring
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
    const {
        speed = 2,
        threshold = 0.014,
        dragFactor = 1.2,
    } = props;

    const [zIndex, setZIndex] = useState(20);
    const [delay, setDelay] = React.useState(5000);
    const [isRunning, toggleIsRunning] = useBoolean(true);

    const marqueeRef = useRef(null);
    const slowDown = useRef(false);

    const x = useRef(0);
    const {width} = useWindowSize();
    const speedSpring = useSpring(speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const opacity = useTransform(
        speedSpring,
        [-width * 0.05, 0, width * 0.05],
        [1, 0, 1]
    );
    const skewX = useTransform(
        speedSpring,
        [-width * 0.05, 0, width * 0.05],
        [1, 0, 1]
    );

    const handleDragStart = () => {
        slowDown.current = true;
        marqueeRef.current.classList.add("drag");
        speedSpring.set(0);
    };

    const handleOnDrag = (_, info) => {
        speedSpring.set(dragFactor * -info.delta.x);
    };

    const handleDragEnd = (_) => {
        slowDown.current = false;
        marqueeRef.current.classList.remove("drag");
        //rest to the original speed
        x.current = speed;
    };

    const loop = () => {
        /**
         * Do nothing if we're slowing down
         * or
         * Our x is less than the threshold
         *
         * The threshold basically tells how much to speed up
         *
         * Without this stop - x.current will mutiple expodentially
         */
        if (slowDown.current || Math.abs(x.current) < threshold) {
            return;
        }

        /**
         * This portion speeds up the spring until it reaches the `threshold`
         */
        x.current *= 0.66;

        if (x.current < 0) {
            x.current = Math.min(x.current, 0);
        } else {
            x.current = Math.max(x.current, 0);
        }

        //speedSpring sets the speed for the marquee items that gets passed to the item components
        speedSpring.set(speed + x.current);
    };

    useRafLoop(loop);

    useInterval(
        () => {
            setZIndex(zIndex === 20 ? 5 : 20);
        },
        isRunning ? delay : null
    );

    return (
        <div className={style.Section}>
            {/* Centered Image */}
            <div className={style.imageContainer}>
                <CircleImageSlider />
            </div>

            {/* Scrolling Text */}
            <div className={style.scrollingText} style={{zIndex: zIndex}}>
                <motion.div
                    className={style.Marquee}
                    ref={marqueeRef}
                    style={{ skewX }}
                    drag="x"
                    dragPropagation={true}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={handleDragStart}
                    onDrag={handleOnDrag}
                    onDragEnd={handleDragEnd}
                    dragElastic={0.000001} // needs to be > 0 ¯\_(ツ)_/¯
                >
                    <MarqueeItem speed={speedSpring}>
                        <div draggable={false}>
                            Women’s Labour Activism in
                            Central and Eastern Europe,
                            late 19th–late
                            20th century
                        </div>
                    </MarqueeItem>
                    <MarqueeItem speed={speedSpring}>
                        <div draggable={false}>
                            Women’s Labour Activism in
                            Central and Eastern Europe,
                            late 19th–late 20th century
                        </div>
                    </MarqueeItem>
                </motion.div>
            </div>
        </div>
    )
}

export default OpeningAnimation;