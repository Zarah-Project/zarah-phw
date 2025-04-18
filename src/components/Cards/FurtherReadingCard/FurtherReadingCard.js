import React from "react";
import Photo from "@/components/BaseElements/Photo";
import TwoColumnCard from "@/components/Cards/Base/TwoColumnCard";
import style from "./FurtherReadingCard.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import {motion} from "motion/react";

const FurtherReadingCard = ({reading}) => {
    const { id, title, text, url, image } = reading;

    const dataSheet = () => {
        return (
            <div>
                <h4>{title}</h4>
                <Spacer size={'xl'} />
                <p>{text}</p>
                <Spacer size={'xl'} />
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
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className={style.CardWrapper}
        >
            <TwoColumnCard
                contentAlign={'flex-start'}
                photoAlign={'left'}
                image={<Photo image={image} minHeight={462} imageFit={'cover'}/>}
                content={dataSheet()}
            />
        </motion.div>
    )
}

export default FurtherReadingCard;