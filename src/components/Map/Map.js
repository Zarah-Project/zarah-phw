import React, {useEffect, useState} from "react";
import {
    MapContainer,
    ImageOverlay,
    Marker,
    useMap, GeoJSON,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import world1930 from '../../../public/maps/world_1930_simplified.json';
import CustomZoomControls from "@/components/Map/CustomZoomControls";
import DatasetSwitcher from "@/components/Map/DataSetSwitcher";
import WashingtonButton from "@/components/Map/WashingtonButton";
import style from "./Map.module.scss";

// Custom orange circle icon factory
const createCircleIcon = (label) => {
    return L.divIcon({
        html: `<div style="
      background-color: orange;
      width: ${label !== '' ? `32px` : `20px`};
      height: ${label !== '' ? `32px` : `20px`};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 12px;
      font-weight: bold;">
        ${label || ""}
      </div>`,
        className: "",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });
};

const CityMarkers = () => {
    const allMarkers = [
        { pos: [48.864716, 2.349014], label: "3" },
        { pos: [47.497913, 19.040236], label: "" },
        { pos: [41.902782, 12.496366], label: "" },
    ];

    return (
        <>
            {allMarkers.map((marker, idx) => (
                <Marker
                    key={idx}
                    position={marker.pos}
                    icon={createCircleIcon(marker.label)}
                />
            ))}
        </>
    );
};

const SVGMap = () => {
    const [geoData, setGeoData] = useState(world1930);

    return (
        <MapContainer
            center={[42.436541, 9.111284]}
            zoom={5}
            minZoom={3}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{height: "calc(100vh - 80px)", width: "100%", zIndex: 1, background: "transparent"}}
        >
            <GeoJSON
                key={JSON.stringify(geoData)}
                data={geoData}
                style={{
                    color: '#BBA7A5',
                    weight: 1,
                    fillColor: '#E4DAD6',
                    fillOpacity: 0.6,
                }}
            />
            <CityMarkers/>
            <CustomZoomControls />
            <DatasetSwitcher switchDataset={setGeoData}/>
            <WashingtonButton />
            <div className={style.Gradient}/>
        </MapContainer>
    );
};

export default SVGMap;
