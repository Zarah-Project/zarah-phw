import React from "react";
import Photo from "@/components/BaseElements/Photo";
import TwoColumnCard from "@/components/Cards/Base/TwoColumnCard";
import style from "./SourceCard.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import {motion} from "motion/react";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";

const SourceCard = ({source}) => {
    const { id, Title, ShortDescription, Slug, Image } = source;

    const image = getImageData(Image, 'large')

    const dataSheet = () => {
        return (
            <div>
                <hr className={style.Line}/>
                <Spacer size={'xl'} />
                <h2>{Title}</h2>
                <Spacer size={'xxl'} />
                <p>{ShortDescription}</p>
                <Spacer size={'xl'} />
                <Link href={`/sources/${Slug}`} className={style.Link}>
                    <Button
                        text={'See Source'}
                        theme={'light'}
                        type={'primary'}
                        width={150}
                    />
                </Link>
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
                image={<Photo image={image} minHeight={576} imageFit={'cover'}/>}
                content={dataSheet()}
            />
        </motion.div>
    )
}

export default SourceCard;