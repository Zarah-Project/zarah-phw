import Head from "next/head";
import EssaySection from "@/components/Sections/EssaySection/EssaySection";
import LayoutLight from "@/components/Layout/LayoutLight";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import style from "./essays.module.scss";
import {fetchEssaysList} from "@/utils/api/fetchEassys";
import SourceSection from "@/components/Sections/SourceSection/SourceSection";

export const getServerSideProps = (async (context) => {
    const [essayData] = await Promise.all([
        fetchEssaysList(),
    ]);
    return {
        props: {
            essayData,
        }
    }
})

export default function EssaysPage({essayData}) {
    return (
        <>
            <Head>
                <title>Essays - Women's Labour Activism</title>
                <meta name="description" content="The list of essays related to women's labour activism."/>
            </Head>
            <div className={style.Section}>
                <Spacer size={'l'}/>
                <EssaySection header={false} data={essayData['data']} />
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