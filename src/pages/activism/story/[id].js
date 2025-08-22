import React from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import {fetchEssayDetail} from "@/utils/api/fetchEassys";
import PageTemplate from "@/components/PageTemplates/PageTemplate";
import {fetchPersonDetail} from "@/utils/api/fetchPeople";
import {fetchActivismStory} from "@/utils/api/fetchActivismStories";

export const getServerSideProps = (async (context) => {
    const { id } = context.query;

    const [activismStoryData] = await Promise.all([
        fetchActivismStory(id)
    ])

    if (activismStoryData['data'] === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            activismStoryData
        }
    }
})

export default function ActivismStoryPage({activismStoryData}) {
    return <PageTemplate data={activismStoryData['data']} titleField={'Title'} module={'activism-story'}/>
}

ActivismStoryPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}