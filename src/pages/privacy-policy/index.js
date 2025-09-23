import Head from "next/head";
import style from "./privacy-policy.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import { motion } from "motion/react";
import LayoutLight from "@/components/Layout/LayoutLight";

export default function PrivacyNotice() {
    return (
        <>
            <Head>
                <title>Privacy Policy - Women's Labour Activism</title>
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
                    Privacy Policy
                </motion.h1>
                <Spacer size={'xl'}/>
                <motion.div
                    viewport={{once: true, amount: 0.2}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className={style.AboutText}
                >
                    <div className={style.Left}>
                        <h3>
                            Provider of this website
                        </h3>
                        <Spacer size={'l'}/>
                        <div>
                            Central European University<br/>
                            Quellenstraße 51-55<br/>
                            1100 Vienna<br/>
                            Austria<br/>
                            contact@zhannapopova.info<br/>
                            <br/>
                            Our website address is: https://labouractivism.eu<br/><br/>

                            The provider of this website places great emphasis on the protection of your personal
                            information
                            and compliance with the EU General Data Protection Regulation (GDPR). This privacy notice
                            relates to the collection, use, transfer and retention of your personal data.
                        </div>
                    </div>
                    <div className={style.Right}/>
                </motion.div>
                <Spacer size={'xl'}/>
                <motion.div
                    viewport={{once: true, amount: 0.2}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.2}}
                    className={style.AboutText}
                >
                    <div className={style.Left}>
                        <h3>
                            Dealing with personal data
                        </h3>
                        <Spacer size={'l'}/>
                        <div>
                            Personal data is information that can be used to identify a person, i.e. information that
                            can be traced back to a person. This includes the name, email address or phone number.
                            Personal data also includes data about preferences, hobbies, memberships or which
                            websites were viewed by someone.<br/><br/>

                            A transfer of private data stored by us to third parties without your explicit
                            permission is excluded.
                        </div>
                        <Spacer size={'xl'}/>
                        <h3>
                            Security of your data
                        </h3>
                        <Spacer size={'l'}/>
                        <div>
                            We are committed to holding your data securely and treating it with sensitivity. All data
                            are held securely and in accordance with the relevant data privacy laws and our
                            internal policies.
                        </div>
                    </div>
                    <div className={style.Right}/>
                </motion.div>
                <Spacer size={'xl'}/>
                <motion.div
                    viewport={{once: true, amount: 0.2}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className={style.AboutText}
                >
                    <div className={style.Left}>
                        <h3>
                            What kind of personal data do we collect and why we collect it
                        </h3>
                        <Spacer size={'xl'}/>
                        <h4>Contact</h4>
                        <Spacer size={'l'}/>
                        <div>
                            When contacting via email, your personal details (email address, name) are stored for
                            the purpose of processing your request and in the event that follow-up questions arise.<br/>
                            <br/>
                            We store personal data exclusively for the purposes mentioned here for the duration of
                            the consent of the person concerned, which can be revoked at any time.
                        </div>
                        <Spacer size={'xl'}/>
                        <h4>Server Log Files</h4>
                        <Spacer size={'xl'}/>
                        <div>
                            The provider of the website collects data about every access to the website
                            (so-called server log files). The access data include:<br/><br/>
                            Name of the accessed website, file, date and time of access, amount of data transferred,
                            notification of successful access, browser type and version, the user’s operating system,
                            referrer URL (the previously visited page), IP address and the requesting provider.<br/><br/>
                            The provider uses the log data only for statistical evaluations for the purpose of
                            operation, security and optimization of the offer. However, the provider reserves the
                            right to check the log data retrospectively, if there are reasonable grounds for
                            suspecting illegal use.
                        </div>
                        <Spacer size={'l'}/>
                        <h4>Cookies</h4>
                        <Spacer size={'l'}/>
                        <div>
                            Cookies are small files that make it possible to store specific information related to
                            the device on the user’s access device (PC, smartphone or similar). On the one hand,
                            they serve the user-friendliness of websites and thus the users (e.g. storage of login
                            data). On the other hand, they can serve to record the statistical data of the website
                            usage and to be able to analyze them in order to improve the offer. Users can influence
                            the use of cookies. Most browsers have an option that limits or completely prevents the
                            storage of cookies.<br/><br/>
                            This website is not using cookies.
                        </div>
                    </div>
                    <div className={style.Right}/>
                </motion.div>
                <Spacer size={'xl'}/>
                <motion.div
                    viewport={{once: true, amount: 0.2}}
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 0.2}}
                    className={style.AboutText}
                >
                    <div className={style.Left}>
                        <h3>
                            What are your rights?
                        </h3>
                        <Spacer size={'l'}/>
                        <div>
                            You have a right:<br/><br/>
                            <ul>
                                <li>to access your personal information,</li>
                                <li>to object to the processing of your personal information,</li>
                                <li>to rectify,</li>
                                <li>to erase and</li>
                                <li>to restrict processing your personal information.</li>
                                <li>If you wish to exercise any of these rights, please email contact@zhannapopova.info.
                                    We will make every effort to fulfill your request to the extent allowed by
                                    law and will respond in writing within 30 days of receiving your request.
                                </li>
                            </ul>

                        </div>
                        <Spacer size={'l'}/>
                        <h3>
                            Security of your data
                        </h3>
                        <Spacer size={'l'}/>
                        <div>
                            We are committed to holding your data securely and treating it with sensitivity. All data
                            are held securely and in accordance with the relevant data privacy laws and our
                            internal policies.
                        </div>
                        <Spacer size={'l'}/>
                        <h3>
                            Future changes
                        </h3>
                        <Spacer size={'l'}/>
                        <div>
                            If our information policies or practices change at some time in the future,
                            we will post the changes here.
                        </div>
                    </div>
                    <div className={style.Right}/>
                </motion.div>
                <Spacer size={'xxl'}/>
            </div>
        </>
    )
}

PrivacyNotice.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}