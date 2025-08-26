import Image from 'next/image';
import React from 'react';
import style from './ContentImage.module.scss'
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

const ContentImage = ({ image, size = 'full', maxHeight, ...props }) => {
    const getImageData = () => {
        if (size !== 'full') {
            if (image['formats'].hasOwnProperty(size)) {
                return {
                    width: image['formats'][size].width || 800,
                    height: image['formats'][size].height || 600,
                    alt: image['formats'][size].alternativeText || 'Image',
                    src: `${process.env.NEXT_PUBLIC_STPAPI_DOMAIN}${image['formats'][size].url}` || '',
                }
            }
        }

        return {
            width: image.width || 800,
            height: image.height || 600,
            alt: image.alternativeText || 'Image',
            src: image.url || '',
        }
    }

    const getCaption = (width) => {
        const {caption} = image;

        if (caption && caption !== '') {
            return (
                <div className={style.Caption} style={{width: width}}>
                    <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]}>{caption}</Markdown>
                </div>
            )
        }
    }

    const {width, height, alt, src} = getImageData()

    const aspectRatio = width / height;
    const maxH = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;

    return (
        <>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
        }}>
            <div
                style={{
                    maxHeight: maxH,
                    width: `calc(${maxH} * ${aspectRatio})`,
                    position: 'relative',
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{
                        maxHeight: '100%',
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                    {...props}
                />
            </div>
        </div>
        {getCaption(`calc(${maxH} * ${aspectRatio})`)}
        </>
);
};

export default ContentImage;