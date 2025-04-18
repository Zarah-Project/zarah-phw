import style from "./PersonTile.module.scss";
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import { motion } from "motion/react";

const PersonTile = ({ person }) => {
    const { name, tags } = person;

    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={style.PersonCard}
        >
            <motion.div
                className={style.PhotoWrapper}
                variants={{
                    rest: {opacity: 1},
                    hover: {opacity: 0},
                }}
                transition={{duration: 0.3}}
            >
                <Photo
                    image={`person00.jpg`}
                    minHeight={50}
                    alt={person.name}
                />
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
                    <h5>Tatiana Grigorov</h5>
                    <p>social democrat, intellectual (RO)</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PersonTile;