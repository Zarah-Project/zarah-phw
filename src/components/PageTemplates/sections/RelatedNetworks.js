import style from "./RelatedNetworks.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import IconLocation from "@/components/Icons/IconLocation";
import IconCalendar from "@/components/Icons/IconCalendar";
import React from "react";
import Spacer from "@/components/BaseElements/Spacer";

const RelatedNetworks = ({data}) => {
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-").map(Number);
        const date = new Date(year, month - 1, day); // months are 0-based!

        return new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(date);
    };

    const renderDate = (startDate, endDate) => {
        const sd = startDate ? formatDate(startDate) : "";
        const ed = endDate ? formatDate(endDate) : "";

        return ed !== "" ? `${sd} - ${ed}` : ed
    }

    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'}/>
                <SectionTitle title={'Connected Networks'}/>
                {
                    data.map((network) => (
                        <Link key={network['id']} href={`/networks/${network['Slug']}`} className={style.NetworkWrapper}>
                            <h5>{network['Title']}</h5>
                            <div className={style.Place}>
                                <div><IconLocation theme={'light'}/> {network['Place']}</div>
                                <div><IconCalendar theme={'light'}/> {renderDate(network['StartDate'], network['EndDate'])}</div>
                            </div>
                        </Link>
                    ))
                }
                <Spacer size={'l'} />
                <hr />
            </>
        )
    } else {
        return ""
    }
}

export default RelatedNetworks;