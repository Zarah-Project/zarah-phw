import style from "./PersonTileMobile.module.scss";
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import { motion } from "motion/react";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";
import PersonImagePlaceholder from "@/components/BaseElements/PersonImagePlaceholder";

const PersonTileMobile = ({ person }) => {
    const { Name, CardText, Image, Tags } = person;
    const image = getImageData(Image, 'small')

    return (
                <Link href={`/people/${person['Slug']}`} className={style.Link}>
                    <div className={style.PhotoWrapper}>
                        {image['url'] ?
                            <Photo image={image} minHeight={50} isExample={false} /> :
                            <PersonImagePlaceholder name={Name} />
                        }
                    </div>
                    <motion.div className={style.Overlay}>
                        <div className={style.DataWrapper}>
                            <h5>{Name}</h5>
                            <p>{CardText}</p>
                        </div>
                    </motion.div>
                </Link>
    )
}

export default PersonTileMobile;