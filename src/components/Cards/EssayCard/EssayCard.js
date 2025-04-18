import style from "./EssayCard.module.scss";
import React from "react";
import Photo from "@/components/BaseElements/Photo";
import { motion } from "motion/react";

const EssayCard = ({ essay, index }) => {
    const { title, shortDescription, id, image} = essay;

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={style.Card}
        >
            <Photo image={image} minHeight={576} />
            <div className={style.Content}>
                <h4>{title}</h4>
                <p>{shortDescription}</p>
            </div>
        </motion.div>
    )
}

export default EssayCard;