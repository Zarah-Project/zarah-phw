import React from 'react';
import { useMedia } from 'react-use';

const CircleVideo = () => {
    const isMobile = useMedia('(max-width: 500px)', true);

    const size = isMobile ? 350 : 500;

    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                overflow: 'hidden',
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            >
                {/* Chrome / Firefox */}
                <source
                    src="/videos/ZARAH_Portraits-chrome.webm"
                    type='video/webm; codecs="vp9"'
                />

                {/* Safari (HEVC / H.265) */}
                <source
                    src="/videos/ZARAH_Portraits-safari.mp4"
                    type='video/mp4; codecs="hvc1"'
                />

                {/* Fallback text */}
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default CircleVideo;
