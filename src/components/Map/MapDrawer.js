import style from "./MapDrawer.module.scss";
import Button from "@/components/BaseElements/Button";
import IconClose from "@/components/Icons/IconClose";
import React from "react";
import {events} from "@/mockData/events";
import EventCard from "@/components/Cards/EventCard/EventCard";
import Spacer from "@/components/BaseElements/Spacer";

const MapDrawer = ({onDrawerClose}) => {
    return (
        <div className={style.DrawerWrapper}>
            <div className={style.Header}>
                <h5>City</h5>
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
                <EventCard event={events[0]} index={1} />
                <Spacer size={'xxl'} />
                <EventCard event={events[1]} index={2} />
                <Spacer size={'xxl'} />
            </div>
        </div>
    )
}

export default MapDrawer;