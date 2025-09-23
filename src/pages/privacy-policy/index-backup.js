import Head from "next/head";
import EssaySection from "@/components/Sections/EssaySection/EssaySection";
import LayoutLight from "@/components/Layout/LayoutLight";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import style from "./privacy-notice.module.scss";
import { motion } from "motion/react";

export default function EssaysPage({essayData}) {
    return (
        <>
            <Head>
                <title>Privacy Notice - Women's Labour Activism</title>
            </Head>
            <div className={style.Section}>
                <Spacer size={'xl'}/>
                <motion.h1
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                >
                    Privacy Notice
                </motion.h1>
                <Spacer size={'xl'}/>
                <motion.h2
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                >
                    Provider of this website
                </motion.h2>
                <Spacer size={'l'}/>
                <motion.p
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                >
                    Central European University<br/>
                    Quellenstraße 51-55<br/>
                    1100 Vienna<br/>
                    Austria<br/>
                    contact@zhannapopova.info<br/>
                    <br/>
                    Our website address is: https://labouractivism.eu<br/><br/>

                    The provider of this website places great emphasis on the protection of your personal information
                    and compliance with the EU General Data Protection Regulation (GDPR). This privacy notice
                    relates to the collection, use, transfer and retention of your personal data.
                </motion.p>
            </div>
        </>
)
}

EssaysPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}