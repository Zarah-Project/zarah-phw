import style from "./EssayCard.module.scss";
import React from "react";
import Photo from "@/components/BaseElements/Photo";

const EssayCard = ({ essay }) => {
    const { title, shortDescription, id, image} = essay;

    return (
        <div className={style.Card}>
            <Photo image={image} minHeight={576} />
            <div className={style.Content}>
                <h4>{title}</h4>
                <p>{shortDescription}</p>
            </div>
        </div>
    )
}

export default EssayCard;