import React, {useEffect, useState} from "react";
import {
    MapContainer,
    Marker,
    GeoJSON,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import world1930 from '../../../public/maps/world_1930_simplified.json';
import world1960 from '../../../public/maps/world_1960_simplified.json';
import CustomZoomControls from "@/components/Map/CustomZoomControls";
import DatasetSwitcher from "@/components/Map/DataSetSwitcher";
import WashingtonButton from "@/components/Map/WashingtonButton";
import style from "./Map.module.scss";
import MapDrawer from "@/components/Map/MapDrawer";

// Custom orange circle icon factory
const createCircleIcon = (label) => {
    return L.divIcon({
        className: `${style.Marker} ${label !== '' ? style.WithNumber : style.WithoutNumber}`,
        html: `
        <div class="${style.CircleOuter}">
            <div class="${style.CircleInner}"></div>
            ${label !== '' ? `<span class="${style.Label}">${label}</span>` : ''}
        </div>
        `,
        iconSize: [label !== '' ? 32 : 20, label !== '' ? 32 : 20],
        iconAnchor: [label !== '' ? 16 : 10, label !== '' ? 16 : 10],
    });
};

const CityMarkers = ({mapData, activeDataset, onMarkerClick, onDrawerClose}) => {
    const renderDatasetMarkers = () => {
        const markers = [];
        let filteredItems = [];

        mapData.forEach(item => {
            if (activeDataset === 'world1930') {
                filteredItems = item['Networks'].filter(item => {
                    const year = parseInt(item['StartDate'].split("-")[0], 10);
                    return year < 1945;
                });
            } else {
                filteredItems = item['Networks'].filter(item => {
                    const year = parseInt(item['StartDate'].split("-")[0], 10);
                    return year >= 1945;
                });
            }

            if (filteredItems.length > 0) {
                markers.push({
                    pos: [item['Latitude'], item['Longitude']],
                    label: filteredItems.length,
                    city: item['City'],
                    events: filteredItems
                });
            }
        });

        return markers
    }

    return (
        <>
            {renderDatasetMarkers().map((marker, idx) => (
                <Marker
                    key={idx}
                    position={marker.pos}
                    icon={createCircleIcon(marker.label)}
                    eventHandlers={{
                        click: () => {
                            onMarkerClick(<MapDrawer city={marker.city} events={marker.events} onDrawerClose={onDrawerClose}/>);
                        },
                    }}
                />
            ))}
        </>
    );
};

const SVGMap = ({mapData, onMarkerClick, onDrawerClose}) => {
    const [activeDataset, setActiveDataset] = useState('world1930');
    const [geoData, setGeoData] = useState(world1930);

    useEffect(() => {
        if (activeDataset === 'world1930') {
            setGeoData(world1930);
        } else {
            setGeoData(world1960)
        }
    }, [activeDataset])

    return (
        <MapContainer
            center={[45.436541, 9.111284]}
            zoom={5}
            minZoom={3}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{height: "calc(100vh - 160px)", width: "100%", zIndex: 1, background: "transparent"}}
            attributionControl={false}
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
            <CityMarkers mapData={mapData} activeDataset={activeDataset} onMarkerClick={onMarkerClick} onDrawerClose={onDrawerClose}/>
            <CustomZoomControls />
            <DatasetSwitcher activeDataset={activeDataset} switchDataset={setActiveDataset}/>
            {activeDataset === 'world1930' && <WashingtonButton />}
            <div className={style.Gradient}/>
        </MapContainer>
    );
};

export default SVGMap;
