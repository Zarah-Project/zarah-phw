import Image from 'next/image';
import React from 'react';

const ContentImage = ({ image, size = 'full', maxHeight, ...props }) => {
    console.log(image)

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

    const {width, height, alt, src} = getImageData()

    const aspectRatio = width / height;
    const maxH = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;

    return (
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
    );
};

export default ContentImage;