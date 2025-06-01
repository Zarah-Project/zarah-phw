import React from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import ActivismPageTemplate from "@/components/PageTemplates/ActivismPageTemplate";
import {fetchEssayDetail} from "@/utils/api/fetchEassys";
import EssayPageTemplate from "@/components/PageTemplates/EssayPageTemplate";

export const getServerSideProps = (async (context) => {
    const { id } = context.query;

    const [essayData] = await Promise.all([
        fetchEssayDetail(id)
    ])

    if (essayData['data'] === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            essayData
        }
    }
})

export default function EssayPage({essayData}) {
    return <EssayPageTemplate data={essayData['data']}/>
}

EssayPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}