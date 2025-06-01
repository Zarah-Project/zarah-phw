import style from "./RelatedNetworks.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import IconLocation from "@/components/Icons/IconLocation";
import IconCalendar from "@/components/Icons/IconCalendar";
import React from "react";

const networks = [
    {
        id: '1',
        title: 'ICWW Second International Congress',
        place: 'Geneva',
        date: '17–25 October 1921'
    }, {
        id: '1',
        title: 'ICWW Second International Congress',
        place: 'Geneva',
        date: '17–25 October 1921'
    }
]

const RelatedNetworks = () => {
    return (
        <>
            <SectionTitle title={'Connected Networks'}/>
            {
                networks.map((network) => (
                    <Link key={network.id} href={'#'} className={style.NetworkWrapper}>
                        <h5>{network.title}</h5>
                        <div className={style.Place}>
                            <div><IconLocation theme={'light'}/> {network.place}</div>
                            <div><IconCalendar theme={'light'}/> {network.date}</div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default RelatedNetworks;