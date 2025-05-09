import React, {useLayoutEffect, useRef, useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import style from "./ActivismElement.module.scss";

const ImageHoverText = ({ text, imageUrl }) => {
    const [hovered, setHovered] = useState(false);
    const [imgPosition, setImgPosition] = useState(0);
    const imgMarkerRef = useRef(null);
    const wrapperRef = useRef(null);

    const parts = text.split("[IMG]");

    if (parts.length !== 2) {
        return <div>{text}</div>;
    }

    useLayoutEffect(() => {
        if (hovered && imgMarkerRef.current && wrapperRef.current) {
            const marker = imgMarkerRef.current;
            const wrapper = wrapperRef.current;
            const offset = marker.offsetLeft - wrapper.offsetLeft;
            setImgPosition(offset);
        }
    }, [hovered]);

    return (
        <div
            className={style.Group}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={style.innerContainer} ref={wrapperRef}>
                <motion.h3
                    className={style.textLeft}
                    animate={{x: hovered ? -70 : 0}}
                    transition={{type: "ease"}}
                >
                    {parts[0]}
                    <span ref={imgMarkerRef} className={style.placeholderMarker}/>
                </motion.h3>

                <AnimatePresence>
                    <motion.img
                        src={imageUrl}
                        alt="hover"
                        className={style.image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        style={{ left: imgPosition - 25 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>

                <motion.h3
                    className={style.textRight}
                    animate={{ x: hovered ? 70 : 0 }}
                    transition={{ type: "ease" }}
                >
                    {parts[1]}
                </motion.h3>
            </div>
        </div>
    );
};

export default ImageHoverText;
