import React, { useEffect, useState } from 'react';

const images = [
    'person00.jpg',
    'person01.jpg',
    'person02.jpg',
    'activismStories01.png',
    'activismStories02.jpg',
    'activismStories04.jpg'
];

const CircleImageSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            width: 500,
            height: 500,
            borderRadius: '50%',
            overflow: 'hidden',
        }}>
            <img
                src={`/images/examples/${images[index]}`}
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