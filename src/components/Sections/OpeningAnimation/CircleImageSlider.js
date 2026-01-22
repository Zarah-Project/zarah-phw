import React, { useEffect, useState } from 'react';
import {useMedia} from "react-use";

const images = [
    'opening01.jpeg',
    'opening02.jpeg',
    'opening03.jpeg',
    'opening04.jpeg',
    'opening05.jpeg',
    'opening06.jpeg',
    'opening07.jpeg',
    'opening08.jpeg',
    'opening09.jpeg',
    'opening10.jpeg'
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