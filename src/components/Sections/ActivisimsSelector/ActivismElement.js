import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import style from "./ActivismElement.module.scss";
import { Media } from "@/utils/media";
import Link from "next/link";

const ImageHoverText = ({ text, imageUrl }) => {
    const [hovered, setHovered] = useState(false);
    const [imgPosition, setImgPosition] = useState(0);
    const imgMarkerRef = useRef(null);
    const wrapperRef = useRef(null);
    const imgRef = useRef(null);

    const parts = text.split("[IMG]");

    if (parts.length !== 2) {
        return <div>{text}</div>;
    }

    useLayoutEffect(() => {
        if (hovered && imgMarkerRef.current && wrapperRef.current && imgRef.current) {
            const marker = imgMarkerRef.current;
            const wrapper = wrapperRef.current;
            const imgWidth = imgRef.current.offsetWidth;

            // Calculate center of marker relative to wrapper
            const markerCenter = marker.offsetLeft + marker.offsetWidth / 2;
            const offset = markerCenter - wrapper.offsetLeft;

            // Position image so its center matches marker center
            setImgPosition(offset - imgWidth / 2);
        }
    }, [hovered]);

    const getHashPart = () => {
        const fullText = `${parts[0].trim()} ${parts[1].trim()}`;
        return fullText.replace(/\s+/g, "-")
    }

    return (
        <>
            <Media greaterThanOrEqual={"md"}>
                <div
                    className={style.Group}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Link href={`/activism#${getHashPart()}`}>
                        <div className={style.innerContainer} ref={wrapperRef}>
                            <motion.h3
                                className={style.textLeft}
                                animate={{ x: hovered ? -70 : 0 }}
                                transition={{ type: "ease" }}
                            >
                                {parts[0]}
                                <span ref={imgMarkerRef} className={style.placeholderMarker} />
                            </motion.h3>

                            <AnimatePresence>
                                {hovered && (
                                    <motion.img
                                        ref={imgRef}
                                        src={imageUrl}
                                        alt="hover"
                                        className={style.image}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{ left: imgPosition }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </AnimatePresence>

                            <motion.h3
                                className={style.textRight}
                                animate={{ x: hovered ? 70 : 0 }}
                                transition={{ type: "ease" }}
                            >
                                {parts[1]}
                            </motion.h3>
                        </div>
                    </Link>
                </div>
            </Media>
            <Media lessThan={"md"}>
                <div
                    className={style.Group}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Link href={`/activism/#${getHashPart()}`}>
                        <div className={style.innerContainer} ref={wrapperRef}>
                            <motion.h3 className={style.textLeft}>
                                {parts[0]} {parts[1]}
                            </motion.h3>
                        </div>
                    </Link>
                </div>
            </Media>
        </>
    );
};

export default ImageHoverText;
