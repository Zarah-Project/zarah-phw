import style from "./MapDrawer.module.scss";
import Button from "@/components/BaseElements/Button";
import IconClose from "@/components/Icons/IconClose";
import React from "react";
import {events} from "@/mockData/events";
import EventCard from "@/components/Cards/EventCard/EventCard";
import Spacer from "@/components/BaseElements/Spacer";

const MapDrawer = ({events, city, onDrawerClose}) => {
    return (
        <div className={style.DrawerWrapper}>
            <div className={style.Header}>
                <h5>{city}</h5>
                <Button
                    text="Close"
                    type={'secondary'}
                    theme={'light'}
                    onClick={onDrawerClose}
                    width={180}
                    icon={<IconClose theme={'dark'}/>}
                />
            </div>
            <div className={style.Content}>
                {events.map((event, idx) => (
                    <>
                        <EventCard city={city} event={event} index={1} />
                        <Spacer size={'xxl'} />
                    </>
                ))}
            </div>
        </div>
    )
}

export default MapDrawer;