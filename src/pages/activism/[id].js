import React, { useEffect, useRef, useState } from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import ActivismPageTemplate from "@/components/PageTemplates/ActivismPageTemplate";
import Spacer from "@/components/BaseElements/Spacer";

export default function ActivismPage() {
    return <ActivismPageTemplate />
}

ActivismPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}