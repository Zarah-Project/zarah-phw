import {motion} from "motion/react";
import style from "./ActivismCard.module.scss";
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Button from "@/components/BaseElements/Button";
import Spacer from "@/components/BaseElements/Spacer";
import getImageData from "@/utils/content/getImageData";

const ActivismCard = ({ activismStory, index }) => {
    const { Title, ShortDescription, Slug, Image} = activismStory;

    const image = getImageData(Image, 'medium')

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={style.Card}
        >
            <Photo image={image} height={240} />
            <div className={style.Content}>
                <h5>{Title}</h5>
                <p>{truncateWithEllipses(ShortDescription, 150)}</p>
                <Spacer size={'l'}/>
                <a href={`/activism/story/${Slug}`} className={style.Link} rel="noopener noreferrer">
                    <Button
                        text={'Read Story'}
                        theme={'light'}
                        type={'primary'}
                        width={150}
                    />
                </a>
            </div>
        </motion.div>
)
}

export default ActivismCard;