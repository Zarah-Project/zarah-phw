import { useMap } from "react-leaflet";
import style from "./CustomZoomControls.module.scss"


function CustomZoomControls() {
    const map = useMap();

    const zoomIn = () => map.zoomIn();
    const zoomOut = () => map.zoomOut();

    return (
        <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            zIndex: 1000
        }}>
            <button onClick={zoomIn} className={style.ZoomButtonStyle}>+</button>
            <button onClick={zoomOut} className={style.ZoomButtonStyle}>−</button>
        </div>
    );
}

export default CustomZoomControls;