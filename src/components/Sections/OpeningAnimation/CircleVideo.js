import React, { useRef, useEffect } from 'react';
import { useMedia } from 'react-use';

const CircleVideo = () => {
    const isMobile = useMedia('(max-width: 500px)', true);
    const videoRef = useRef(null);

    const size = isMobile ? 350 : 500;

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // ⬅️ slow motion
        }
    }, []);

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
                ref={videoRef}
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
                <source
                    src="/videos/ZARAH_Portraits-chrome.webm"
                    type='video/webm; codecs="vp9"'
                />
                <source
                    src="/videos/ZARAH_Portraits-safari.mp4"
                    type='video/mp4; codecs="hvc1"'
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default CircleVideo;
