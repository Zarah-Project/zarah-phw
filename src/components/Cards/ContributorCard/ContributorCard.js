import styles from "./ContributorCard.module.scss";
import {motion} from "motion/react";
import Spacer from "@/components/BaseElements/Spacer";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import React from "react";
import Photo from "@/components/BaseElements/Photo";

const ContributorCard = ({contributor}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 0.1}}
            viewport={{once: true}}
            className={styles.CardWrapper}
        >
            <div className={styles.Card}>
                <Photo image={contributor['image']} isExample={true} minHeight={462} imageFit={'cover'}/>
                <Spacer size={'l'} />
                <h3>{contributor['name']}</h3>
                <Spacer size={'l'} />
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: "_blank" }]]}>
                    {contributor['text']}
                </Markdown>
            </div>
        </motion.div>
    )
}

export default ContributorCard;