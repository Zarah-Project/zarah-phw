import style from "./EssayCard.module.scss";
import Image from "next/image";
import React from "react";
import Button from "@/components/BaseElements/Button";

const EssayCard = ({ essay }) => {
    const { title, shortDescription, id, image} = essay;

    return (
        <div className={style.Card}>
            <div className={style.ImageWrapper}>
                <Image
                    src={`/images/examples/${image}`}
                    alt="Card Image"
                    fill
                    className={style.image}
                    priority
                />
            </div>
            <div className={style.Content}>
                <h4>{title}</h4>
                <p>{shortDescription}</p>
            </div>
        </div>
    )
}

export default EssayCard;