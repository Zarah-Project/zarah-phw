import Head from "next/head";
import LayoutDark from "@/components/Layout/LayoutDark";
import style from "./contributors.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import { motion } from "motion/react";
import contributors from "@/data/contributors";
import ContributorCard from "@/components/Cards/ContributorCard/ContributorCard";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Contributors - Women's Labour Activism</title>
                <meta name="description" content="Contributors of the Women's Labour Activism website." />
            </Head>
            <div className={style.Section}>
                <Spacer size={'xxl'}/>
                <motion.h3
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                >
                    This website builds on the individual and collective research of the ZARAH team.<br/><br/>
                    ZARAH researcher Zhanna Popova led the conceptualization, writing, curation, and coordination
                    of this website. She selected and adapted the project’s research results in the form of this
                    website, writing the texts, selecting the illustrations, and shaping the overall presentation,
                    while coordinating closely with the research team and designers to bring everything together.
                </motion.h3>
                <Spacer size={'xl'}/>
                <motion.h3
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.2}}
                >
                    The website also builds on the work of the web designers and developer, and integrates
                    the work of other researchers.
                </motion.h3>
                <Spacer size={'xxxl'}/>
                <motion.div
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className={style.Contributors}
                >
                    <div className={style.Left}>
                        <h3>ZARAH Researchers</h3>
                    </div>
                    <div className={style.Right}>
                        {
                            contributors.map((contributor) => (
                                <ContributorCard key={contributor.id} contributor={contributor}/>
                            ))
                        }
                    </div>
                </motion.div>
                <Spacer size={'xl'}/>
                <motion.div
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className={style.Contributors}
                >
                    <div className={style.Left}>
                        <h3>Design & Development</h3>
                    </div>
                    <div className={style.RightDev}>
                        <div>
                            <h3>Luca Gőczey (Studio Stoki)</h3>
                            <Spacer size={'xs'}/>
                            <p>created the website’s visual identity and user interface design.</p>
                        </div>
                        <Spacer size={'l'}/>
                        <div>
                            <h3>Áron Fridvalszky</h3>
                            <Spacer size={'xs'}/>
                            <p>developed the user experience design.</p>
                        </div>
                        <Spacer size={'l'}/>
                        <div>
                            <h3>József Gábor Bóné</h3>
                            <Spacer size={'xs'}/>
                            <p>was responsible for the website’s technical development.</p>
                        </div>
                    </div>
                </motion.div>
                <Spacer size={'xl'}/>
            </div>
        </>
    )
}

AboutPage.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}