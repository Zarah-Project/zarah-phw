import React from "react";
import Photo from "@/components/BaseElements/Photo";
import TwoColumnCard from "@/components/Cards/Base/TwoColumnCard";
import style from "./SourceCard.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import {motion} from "motion/react";

const SourceCard = ({source}) => {
    const { id, title, shortDescription, image } = source;

    const dataSheet = () => {
        return (
            <div>
                <hr className={style.Line}/>
                <Spacer size={'xl'} />
                <h2>{title}</h2>
                <Spacer size={'xxl'} />
                <p>{shortDescription}</p>
                <Spacer size={'xl'} />
                <Button
                    text={'See Source'}
                    theme={'light'}
                    type={'primary'}
                    width={150}
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
                photoAlign={'right'}
                image={<Photo image={image} minHeight={768} imageFit={'cover'}/>}
                content={dataSheet()}
            />
        </motion.div>
    )
}

export default SourceCard;