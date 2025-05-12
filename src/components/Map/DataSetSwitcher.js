import world1930 from '../../../public/maps/world_1930_simplified.json';
import world1960 from '../../../public/maps/world_1960_simplified.json';
import style from "./DataSetSwitcher.module.scss"
import {useState} from "react";
import {useMap} from "react-leaflet";

function DatasetSwitcher({ switchDataset }) {
    const [activeDataset, setActiveDataset] = useState('world1930');
    const map = useMap();

    const handleDatasetChange = (dataset, datasetName) => {
        setActiveDataset(datasetName);
        switchDataset(dataset); // Update the map with the new dataset

        if (datasetName === 'world1960') {
            map.setZoom(2); // Reset zoom level
        } else {
            map.setZoom(5);
        }
    };

    return (
        <div className={style.ButtonWrapper}>
            <button
                onClick={() => handleDatasetChange(world1930, "world1930")}
                className={`${style.SwitchButtonStyle} ${activeDataset === 'world1930' ? style.Active : ''}`}>
                Pre 1945
            </button>
            <button
                onClick={() => handleDatasetChange(world1960, "world1960")}
                className={`${style.SwitchButtonStyle} ${activeDataset === 'world1960' ? style.Active : ''}`}>
                Post 1945
            </button>
        </div>
    );
}

export default DatasetSwitcher;