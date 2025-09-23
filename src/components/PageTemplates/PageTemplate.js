import style from "./PageTemplate.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import BackButton from "@/components/PageTemplates/parts/BackButton";
import RelatedPeople from "@/components/PageTemplates/sections/RelatedPeople";
import RelatedNetworks from "@/components/PageTemplates/sections/RelatedNetworks";
import RelatedEssays from "@/components/PageTemplates/sections/RelatedEssays";
import RelatedSources from "@/components/PageTemplates/sections/RelatedSources";
import RelatedTags from "@/components/PageTemplates/sections/RelatedTags";
import Content from "@/components/PageTemplates/parts/Content";
import RelatedActivismStories from "@/components/PageTemplates/sections/RelatedActivismStories";
import formatEventDate from "@/utils/formatEventDate";
import IconLocation from "@/components/Icons/IconLocation";
import IconCalendar from "@/components/Icons/IconCalendar";
import React from "react";
import Head from "next/head";


const PageTemplate = ({data, titleField = 'Title', module}) => {
    const title = data[titleField];
    const content = data['Content'];

    const people = data['People'] || [];
    const stories = data['ActivismStories'] || [];
    const networks = data['Networks'] || [];
    const essays = data['Essays'] || [];
    const sources = data['Sources'] || [];
    const tags = data['Tags'] || [];

    const renderNetworksInfo = () => {
        const renderDate = (startDate, endDate) => {
            const sd = startDate ? formatEventDate(startDate) : "";
            const ed = endDate ? formatEventDate(endDate) : "";

            return ed !== "" ? `${sd} - ${ed}` : ed
        }

        const renderCity = (city) => {
            return city ? city['City'] : "Location unknown"
        }

        return (
            <>
                <div className={style.Place}>
                    <div><IconLocation theme={'light'}/> {renderCity(data['NetworkCity'])}</div>
                    <div><IconCalendar theme={'light'}/> {renderDate(data['StartDate'], data['EndDate'])}</div>
                </div>
                <Spacer size={"xl"}/>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>{title} - Women's Labour Activism</title>
            </Head>
            <div className={style.PageWrapper}>
                <div className={style.RelatedContent}>
                    <BackButton module={module} data={data}/>
                    <RelatedActivismStories data={stories}/>
                    <RelatedPeople data={people}/>
                    <RelatedNetworks data={networks} />
                    <RelatedEssays data={essays}/>
                    <RelatedSources data={sources}/>
                    <RelatedTags data={tags}/>
                </div>
                <div className={style.PageContent}>
                    <h2>{title}</h2>
                    <Spacer size={"xl"}/>
                    {module === 'networks' && renderNetworksInfo()}
                    <Content content={content} />
                </div>
            </div>
        </>
    )
}

export default PageTemplate;