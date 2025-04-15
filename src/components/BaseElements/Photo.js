import style from "./Photo.module.scss";
import Image from "next/image";
import React from "react";

const Photo = ({image, minHeight = 300, imageFit = 'cover'}) => {
    return (
        <div className={style.ImageWrapper} style={{minHeight: `${minHeight}px`}}>
            <Image
                src={`/images/examples/${image}`}
                alt="Card Image"
                fill
                objectFit={imageFit}
                priority
            />
        </div>
    )
}

export default Photo