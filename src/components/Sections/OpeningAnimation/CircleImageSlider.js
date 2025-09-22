import React, { useEffect, useState } from 'react';
import {useMedia} from "react-use";

const images = [
    'opening01.png',
    'opening02.png',
    'opening03.png',
    'opening04.png',
    'opening05.png',
    'opening06.png',
    'opening07.png',
    'opening08.png',
    'opening09.png',
    'opening10.png'
];

const CircleImageSlider = () => {
    const [index, setIndex] = useState(0);
    const isMobile = useMedia('(max-width: 500px)', true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            width: isMobile ? 350 : 500,
            height: isMobile ? 350 : 500,
            borderRadius: '50%',
            overflow: 'hidden',
        }}>
            <img
                src={`/images/content/${images[index]}`}
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
    );
};

export default CircleImageSlider;