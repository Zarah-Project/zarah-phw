import {useMap} from "react-leaflet";
import style from "./WashingtonButton.module.scss";
import IconLeftArrow from "@/components/Icons/IconLeftArrow";
import {useEffect, useState} from "react";
import IconRightArrow from "@/components/Icons/IconRightArrow";

function WashingtonButton() {
    const map = useMap(); // Access Leaflet's map instance
    const [shown, setShown] = useState('Europe'); // Coordinates for Washington, DC

    useEffect(() => {
        if (shown === 'Europe') {
            map.setView([45.436541, 9.111284], 5);
        } else {
            map.setView([38.89511, -77.03637], 5);
        }
    }, [shown]);

    const handleClick = () => {
        setShown(prev => prev === 'Europe' ? 'Washington' : 'Europe');
    };

    return (
        <button
            onClick={handleClick}
            className={style.Button}
        >
            {shown === 'Europe' ? <IconLeftArrow theme={'light'}/> : <IconRightArrow theme={'dark'}/>}
            <h5>
                {shown === 'Europe' ? 'Washington DC' : 'Europe'}
            </h5>
        </button>
    );
}

export default WashingtonButton;