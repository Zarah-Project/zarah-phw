import React from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import {fetchEssayDetail} from "@/utils/api/fetchEassys";
import PageTemplate from "@/components/PageTemplates/PageTemplate";
import {fetchNetworkDetail} from "@/utils/api/fetchNetworks";

export const getServerSideProps = (async (context) => {
    const { id } = context.query;

    const [networkData] = await Promise.all([
        fetchNetworkDetail(id)
    ])

    if (networkData['data'] === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            networkData
        }
    }
})

export default function EssayPage({networkData}) {
    return <PageTemplate data={networkData['data']} module={'networks'}/>
}

EssayPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}