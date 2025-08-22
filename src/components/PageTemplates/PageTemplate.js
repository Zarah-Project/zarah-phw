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


const PageTemplate = ({data, titleField = 'Title', module}) => {
    const title = data[titleField];
    const content = data['Content'];

    const people = data['People'] || [];
    const stories = data['ActivismStories'] || [];
    const networks = data['Networks'] || [];
    const essays = data['Essays'] || [];
    const sources = data['Sources'] || [];
    const tags = data['Tags'] || [];

    return (
        <div className={style.PageWrapper}>
            <div className={style.RelatedContent}>
                <BackButton module={module}/>
                <RelatedActivismStories data={stories} />
                <RelatedPeople data={people} />
                <RelatedNetworks data={networks} />
                <RelatedEssays data={essays}/>
                <RelatedSources data={sources}/>
                <RelatedTags data={tags}/>
            </div>
            <div className={style.PageContent}>
                <h2>{title}</h2>
                <Spacer size={"xl"}/>
                <Content content={content} />
            </div>
        </div>
    )
}

export default PageTemplate;