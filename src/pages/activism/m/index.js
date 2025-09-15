import React from "react";
import LayoutDark from "@/components/Layout/LayoutDark";
import {fetchActivismTypes} from "@/utils/api/fetchActivismTypes";
import ActivismTypesSectionMobile from "@/components/Sections/Activisims/Mobile/ActivismTypesSectionMobile";


export const getServerSideProps = (async (context) => {
    const [activismTypeData] = await Promise.all([
        fetchActivismTypes()
    ]);
    return {
        props: {
            activismTypeData
        }
    }
})

export default function ActivismPageMobile({activismTypeData}) {
    return (<ActivismTypesSectionMobile activismTypeData={activismTypeData} />)
}

ActivismPageMobile.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}