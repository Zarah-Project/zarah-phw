import Image from "next/image";
import React from "react";
import style from "./ContentImage.module.scss";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

const ContentImage = ({ image, size = "full", maxHeight, ...props }) => {
    const getImageData = () => {
        if (size !== "full" && image["formats"]?.hasOwnProperty(size)) {
            return {
                width: image["formats"][size].width || 800,
                height: image["formats"][size].height || 600,
                alt: image["formats"][size].alternativeText || "Image",
                src:
                    `${process.env.NEXT_PUBLIC_STPAPI_DOMAIN}${image["formats"][size].url}` ||
                    "",
            };
        }

        return {
            width: image.width || 800,
            height: image.height || 600,
            alt: image.alternativeText || "Image",
            src: image.url || "",
        };
    };

    const getCaption = (width) => {
        const { caption } = image;
        if (caption && caption !== "") {
            return (
                <div className={style.Caption} style={{maxWidth: width}}>
                    <Markdown rehypePlugins={[[rehypeExternalLinks, { target: "_blank" }]]}>
                        {caption}
                    </Markdown>
                </div>
            );
        }
    };

    const { width, height, alt, src } = getImageData();
    const maxH = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;
    const aspectRatio = width / height;

    return (
        <div className={style.Wrapper}>
            <div className={style.ImageWrapper} style={{ maxHeight: maxH }}>
                <div
                    className={style.ResponsiveImage}
                    style={{ aspectRatio: `${width} / ${height}` }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className={style.Image}
                        {...props}
                    />
                </div>
            </div>
            {getCaption(`calc(${maxH} * ${aspectRatio})`)}
        </div>
    );
};

export default ContentImage;
