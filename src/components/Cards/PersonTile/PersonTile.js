import style from "./PersonTile.module.scss";
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import { motion } from "motion/react";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";

const PersonTile = ({ person }) => {
    const { Name, CardText, Image, Tags } = person;
    const image = getImageData(Image, 'small')

    return (
            <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className={style.PersonCard}
            >
                <Link href={`/people/${person['Slug']}`}>
                    <motion.div
                        className={style.PhotoWrapper}
                        variants={{
                            rest: {opacity: 1},
                            hover: {opacity: 0},
                        }}
                        transition={{duration: 0.3}}
                    >
                        <Photo image={image} minHeight={50} isExample={false} />
                    </motion.div>

                    <motion.div
                        className={style.Overlay}
                        variants={{
                            rest: {opacity: 0},
                            hover: {opacity: 1},
                        }}
                        transition={{duration: 0.3}}
                    >
                        <div className={style.DataWrapper}>
                            <h5>{Name}</h5>
                            <p>{CardText}</p>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
    )
}

export default PersonTile;