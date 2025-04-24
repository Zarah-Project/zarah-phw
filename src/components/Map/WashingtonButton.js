import {useMap} from "react-leaflet";
import style from "./WashingtonButton.module.scss";
import IconLeftArrow from "@/components/Icons/IconLeftArrow";

function WashingtonButton() {
    const map = useMap(); // Access Leaflet's map instance

    const handleClick = () => {
        map.setView([38.89511, -77.03637]); // Coordinates for Washington, DC and zoom level 12
    };

    return (
        <button
            onClick={handleClick}
            className={style.Button}
        >
            <IconLeftArrow theme={'light'}/> <h5>Washington</h5>
        </button>
    );
}

export default WashingtonButton;