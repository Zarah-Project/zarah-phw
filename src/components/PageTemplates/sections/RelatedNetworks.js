import style from "./RelatedNetworks.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import IconLocation from "@/components/Icons/IconLocation";
import IconCalendar from "@/components/Icons/IconCalendar";
import React from "react";
import Spacer from "@/components/BaseElements/Spacer";
import formatEventDate from "@/utils/formatEventDate";

const RelatedNetworks = ({data}) => {
    const renderDate = (startDate, endDate) => {
        const sd = startDate ? formatEventDate(startDate) : "";
        const ed = endDate ? formatEventDate(endDate) : "";

        return ed !== "" ? `${sd} - ${ed}` : ed
    }

    const renderCity = (city) => {
        return city ? city['City'] : "Location unknown"
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
                                <div><IconLocation theme={'light'}/> {renderCity(network['NetworkCity'])}</div>
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