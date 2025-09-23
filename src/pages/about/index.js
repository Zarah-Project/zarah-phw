import Head from "next/head";
import LayoutDark from "@/components/Layout/LayoutDark";
import style from "./about.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import FurtherReadingSection from "@/components/Sections/FurtherReadingSection/FurtherReadingSection";
import { motion } from "motion/react";
import Link from "next/link";
import EmailLink from "@/components/BaseElements/EmailLink";

export default function Index() {
    return (
        <>
            <Head>
                <title>About - Women's Labour Activism</title>
                <meta name="description" content="About the Women's Labour Activism website." />
            </Head>
            <div className={style.Section}>
                <Spacer size={'l'}/>
                <motion.h1
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                >
                    <i>Women’s Labour Activism</i> is a public history project that tells the histories of women
                    activists
                    from Eastern, Central, and Southeastern Europe, who fought to improve women’s position in
                    the world of labour. The project seeks to amplify their contributions to struggles for a more
                    just society.
                </motion.h1>
                <Spacer size={'xxxl'}/>
                <motion.div
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.2}}
                    className={style.AboutText}
                >
                    <div className={style.Left}/>
                    <div className={style.Right}>
                        This project was carried out within the framework of the research project “ZARAH: Women’s
                        Labour Activism in Eastern Europe and Transnationally, From the Age of Empires to the Late
                        20th Century” (2020-2026), led by Susan Zimmermann at Central European University
                        (Vienna, Austria), funded by a European Research Council Advanced Grant
                        (Grant agreement no. 833691).
                    </div>
                </motion.div>
                <Spacer size={'xxxl'}/>
                <motion.div
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.3}}
                    className={style.AboutText}
                >
                    <div className={style.Left}>
                        <h3>Further Readings</h3>
                        <br/>
                        If you want to learn more about women’s labour activism in Eastern, Central, and
                        Southeastern Europe and internationally, explore
                        the <Link href={"https://zarah-ceu.org/publications/"} target={'_blank'}>full list of academic
                            publications</Link> authored by the research team.
                    </div>
                    <div className={style.Right}/>
                </motion.div>
                <Spacer size={'xxxl'}/>
                <FurtherReadingSection/>
                <Spacer size={'xl'}/>
            </div>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}