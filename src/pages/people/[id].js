import React from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import {fetchEssayDetail} from "@/utils/api/fetchEassys";
import PageTemplate from "@/components/PageTemplates/PageTemplate";
import {fetchPersonDetail} from "@/utils/api/fetchPeople";

export const getServerSideProps = (async (context) => {
    const { id } = context.query;

    const [personData] = await Promise.all([
        fetchPersonDetail(id)
    ])

    if (personData['data'] === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            personData
        }
    }
})

export default function PersonPage({personData}) {
    return <PageTemplate data={personData['data']} titleField={'Name'} module={'people'}/>
}

PersonPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}