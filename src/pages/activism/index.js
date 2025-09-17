import React from "react";
import LayoutDark from "@/components/Layout/LayoutDark";
import {fetchActivismTypes} from "@/utils/api/fetchActivismTypes";
import ActivismTypesSection from "@/components/Sections/Activisims/Desktop/ActivismTypesSection";
import {Media} from "@/utils/media";
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

export default function ActivismPage({activismTypeData}) {
    return (
        <>
            <Media greaterThanOrEqual={"md"}>
                <ActivismTypesSection activismTypeData={activismTypeData} />
            </Media>
            <Media lessThan={"md"}>
                <ActivismTypesSectionMobile activismTypeData={activismTypeData} />
            </Media>
        </>
    )
}

ActivismPage.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}