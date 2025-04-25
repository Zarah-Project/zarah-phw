import LayoutDark from "@/components/Layout/LayoutDark";
import React from "react";
import style from "./sources.module.scss"
import SourcesTopAnimation from "@/components/Sections/SourcesTopAnimation/SourcesTopAnimation";
import Spacer from "@/components/BaseElements/Spacer";
import SourceSection from "@/components/Sections/SourceSection/SourceSection";

const Sources = () => {
    return (
        <div className={style.Section}>
            <SourcesTopAnimation />
            <Spacer size={"l"} />
            <SourceSection />
        </div>
    )
}

export default Sources;

Sources.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}