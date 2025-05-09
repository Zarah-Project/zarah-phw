import {motion} from "motion/react";
import style from "@/components/Cards/EssayCard/EssayCard.module.scss";
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Button from "@/components/BaseElements/Button";
import Spacer from "@/components/BaseElements/Spacer";

const ActivismCard = ({ activism, index }) => {
    const { title, shortDescription, id, image} = activism;

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={style.Card}
        >
            <Photo image={image} minHeight={240} />
            <div className={style.Content}>
                <h5>{title}</h5>
                <p>{truncateWithEllipses(shortDescription, 150)}</p>
                <Spacer size={'l'} />
                <Button
                    text={'Read Story'}
                    theme={'light'}
                    type={'primary'}
                    width={150}
                />
            </div>
        </motion.div>
    )
}

export default ActivismCard;