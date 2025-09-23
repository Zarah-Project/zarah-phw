import LayoutDark from "@/components/Layout/LayoutDark";
import React from "react";
import style from "./sources.module.scss"
import SourcesTopAnimation from "@/components/Sections/SourcesTopAnimation/SourcesTopAnimation";
import Spacer from "@/components/BaseElements/Spacer";
import {fetchSourcesList} from "@/utils/api/fetchSources";
import SourceSection from "@/components/Sections/SourceSection/SourceSection";
import Head from "next/head";

export const getServerSideProps = (async (context) => {
    const [sourcesData] = await Promise.all([
        fetchSourcesList()
    ]);
    return {
        props: {
            sourcesData,
        }
    }
})


const SourcesPage = ({sourcesData}) => {
    return (
        <>
            <Head>
                <title>Sources - Women's Labour Activism</title>
                <meta name="description" content="Source materials related to women's labour activism." />
            </Head>
            <div className={style.Section}>
                <SourcesTopAnimation />
                <Spacer size={"l"} />
                <SourceSection data={sourcesData['data']} />
            </div>
        </>
    )
}

export default SourcesPage;

SourcesPage.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}