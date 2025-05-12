import style from "./Photo.module.scss";
import Image from "next/image";
import React from "react";

const Photo = ({image, minHeight = 300, height, imageFit = 'cover', caption = ''}) => {
    return (
        <>
            <div className={style.ImageWrapper} style={{minHeight: `${minHeight}px`, height: height ? height : "100%"}}>
                <Image
                    src={`/images/examples/${image}`}
                    alt="Card Image"
                    fill
                    objectFit={imageFit}
                    priority
                />
            </div>
            {caption !== '' &&
                <div className={style.Caption}>
                    {caption}
                </div>
            }
        </>
    )
}

export default Photo