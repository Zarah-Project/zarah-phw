import style from "./TwoColumnCard.module.scss";
import React from "react";
import {useMedia} from "react-use";

const TwoColumnCard = ({ image,
                         content,
                         photoAlign = 'left',
                         contentAlign = 'center',
                         minHeight='100%'}) => {
    const isMobile = useMedia('(max-width: 800px)', true);

    const getFlexDirection = () => {
        if (isMobile) {
            if (photoAlign === 'left') {
                return 'column';
            } else {
                return 'column-reverse';
            }
        } else {
            return 'row'
        }
    }

    return (
        <div className={style.Card}
             style={{
                 minHeight: minHeight,
                 alignItems: contentAlign,
                 flexDirection: getFlexDirection()
             }}
        >
            <div className={style.Left}>
                {photoAlign === 'left' ? image : content}
            </div>
            <div className={style.Right}>
                {photoAlign === 'left' ? content : image}
            </div>
        </div>
    )
}

export default TwoColumnCard;