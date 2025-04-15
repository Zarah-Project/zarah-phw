import React from "react";
import Photo from "@/components/BaseElements/Photo";
import TwoColumnCard from "@/components/Cards/Base/TwoColumnCard";
import style from "./FurtherReadingCard.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import IconRightArrow from "@/components/Icons/IconRightArrow";

const FurtherReadingCard = ({reading}) => {
    const { id, title, text, url, image } = reading;

    const dataSheet = () => {
        return (
            <div>
                <h4>{title}</h4>
                <Spacer size={'medium'} />
                <p>{text}</p>
                <Spacer size={'medium'} />
                <Button
                    text={'Visit'}
                    theme={'light'}
                    type={'primary'}
                    width={100}
                />
            </div>
        )
    }

    return (
        <div className={style.CardWrapper}>
            <TwoColumnCard
                contentAlign={'flex-start'}
                photoAlign={'left'}
                image={<Photo image={image} minHeight={462} imageFit={'contain'}/>}
                content={dataSheet()}
            />
        </div>
    )
}

export default FurtherReadingCard;