import style from "./TwoColumnCard.module.scss";
import React from "react";

const TwoColumnCard = ({ image,
                         content,
                         photoAlign = 'left',
                         contentAlign = 'center',
                         minHeight='100%'}) => {
    return (
        <div className={style.Card}
             style={{
                 minHeight: minHeight,
                 alignItems: contentAlign
             }}
        >
            <div className={style.Left}>
                {photoAlign === 'left' ? content : image}
            </div>
            <div className={style.Right}>
                {photoAlign === 'left' ? image : content}
            </div>
        </div>
    )
}

export default TwoColumnCard;