import style from "./RelatedTags.module.scss";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import TagButton from "@/components/BaseElements/TagButton";

const tags = ['Activists across movement', 'Grappling with unpaid labour', 'Romania']

const RelatedTags = () => {
    return (
        <>
            <SectionTitle title={'Tags'}/>
            <div className={style.Wrapper}>
            {
                tags.map((tag, idx) => (
                    <TagButton text={tag}/>
                ))
            }
            </div>
        </>
    )
}

export default RelatedTags;