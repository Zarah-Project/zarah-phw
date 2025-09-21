import style from "./DataSetSwitcher.module.scss"
import {useMap} from "react-leaflet";

function DatasetSwitcher({ activeDataset, switchDataset }) {
    // const [activeDataset, setActiveDataset] = useState('world1930');
    const map = useMap();

    const handleDatasetChange = (datasetName) => {
        switchDataset(datasetName);

        if (datasetName === 'world1960') {
            map.setZoom(2); // Reset zoom level
        } else {
            map.setZoom(5);
        }
    };

    return (
        <div className={style.ButtonWrapper}>
            <button
                onClick={() => handleDatasetChange("world1930")}
                className={`${style.SwitchButtonStyle} ${activeDataset === 'world1930' ? style.Active : ''}`}>
                pre-World War II
            </button>
            <button
                onClick={() => handleDatasetChange("world1960")}
                className={`${style.SwitchButtonStyle} ${activeDataset === 'world1960' ? style.Active : ''}`}>
                post-World War II
            </button>
        </div>
    );
}

export default DatasetSwitcher;