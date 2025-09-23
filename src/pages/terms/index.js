import Head from "next/head";
import LayoutDark from "@/components/Layout/LayoutDark";
import style from "./terms.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import FurtherReadingSection from "@/components/Sections/FurtherReadingSection/FurtherReadingSection";
import { motion } from "motion/react";
import Link from "next/link";
import EmailLink from "@/components/BaseElements/EmailLink";

export default function TermsPage() {
    return (
        <>
            <Head>
                <title>Terms - Women's Labour Activism</title>
                <meta name="description" content="Terms of usage of the Women's Labour Activism website." />
            </Head>
            <div className={style.Section}>
                <motion.div
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className={style.AboutText}
                >
                    <div className={style.Left} >
                        <h3>Terms</h3>
                        <br/>
                        Texts on this website are published under a Creative Commons Attribution-NonCommercial-
                        NoDerivatives 4.0 International licence <Link href={"https://creativecommons.org/licenses/by-nc-nd/4.0/"} target={'_blank'}>CC BY-NC-ND
                        4.0.</Link> This licence allows you to share,
                        copy, distribute and transmit the work for personal and non-commercial use provided author
                        attribution is clearly stated.
                        <Spacer size={'xxl'}/>
                        For all visual materials, unless they are in public domain, please contact the institution or
                        individual that holds the original to request permission, and for any further enquiries.
                    </div>
                    <div className={style.Right} />
                </motion.div>
                <Spacer size={'xxxl'}/>
                <motion.div
                    viewport={{once: true}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className={style.AboutText}
                >
                    <div className={style.Left}/>
                    <div className={style.Right}>
                        The author has attempted to contact potential copyright holders of illustrations contained on
                        this website. If there is anyone who claims copyright regarding any of the illustrations,
                        please <EmailLink linkText={'contact the author'} user={'contact'}
                                          domain={'zhannapopova.info'}/>.
                    </div>
                </motion.div>
                <Spacer size={'xxxl'}/>
            </div>
        </>
    )
}

TermsPage.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}