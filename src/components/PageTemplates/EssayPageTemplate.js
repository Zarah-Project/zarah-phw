import style from "./PageTemplate.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import BackButton from "@/components/PageTemplates/parts/BackButton";
import RelatedPeople from "@/components/PageTemplates/sections/RelatedPeople";
import RelatedNetworks from "@/components/PageTemplates/sections/RelatedNetworks";
import RelatedEssays from "@/components/PageTemplates/sections/RelatedEssays";
import RelatedSources from "@/components/PageTemplates/sections/RelatedSources";
import RelatedTags from "@/components/PageTemplates/sections/RelatedTags";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Content from "@/components/PageTemplates/parts/Content";

const EssayPageTemplate = ({data}) => {
    const title = data['Title'];
    const content = data['Content'];

    return (
        <div className={style.PageWrapper}>
            <div className={style.RelatedContent}>
                <BackButton module={"essays"}/>
                <Spacer size={'xl'}/>
                <RelatedPeople />
                <Spacer size={'l'}/>
                <hr />
                <Spacer size={'xl'}/>
                <RelatedNetworks />
                <Spacer size={'l'} />
                <hr />
                <Spacer size={'xl'} />
                <RelatedEssays />
                <Spacer size={'xl'} />
                <hr />
                <Spacer size={'xl'} />
                <RelatedSources />
                <Spacer size={'xl'} />
                <hr />
                <Spacer size={'xl'} />
                <RelatedTags />
                <Spacer size={'xl'} />
            </div>
            <div className={style.PageContent}>
                <h2>{title}</h2>
                <Spacer size={"xl"}/>
                <Content content={content} />
            </div>
        </div>
    )
}

export default EssayPageTemplate;