import React from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import {fetchEssayDetail} from "@/utils/api/fetchEassys";
import PageTemplate from "@/components/PageTemplates/PageTemplate";
import {fetchSourcesDetail} from "@/utils/api/fetchSources";

export const getServerSideProps = (async (context) => {
    const { id } = context.query;

    const [sourceData] = await Promise.all([
        fetchSourcesDetail(id)
    ])

    if (sourceData['data'] === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            sourceData
        }
    }
})

export default function SourcePage({sourceData}) {
    return <PageTemplate data={sourceData['data']} module={'sources'}/>
}

SourcePage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}