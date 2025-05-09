import style from "./MapDrawer.module.scss";
import Button from "@/components/BaseElements/Button";
import IconClose from "@/components/Icons/IconClose";
import React from "react";

const MapDrawer = ({onDrawerClose}) => {
    return (
        <>
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
        </>
    )
}

export default MapDrawer;