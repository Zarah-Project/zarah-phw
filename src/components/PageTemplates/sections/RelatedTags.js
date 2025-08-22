import style from "./RelatedTags.module.scss";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import TagButton from "@/components/BaseElements/TagButton";
import Spacer from "@/components/BaseElements/Spacer";

const RelatedTags = ({data}) => {
    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'} />
                <SectionTitle title={'Tags'}/>
                <div className={style.Wrapper}>
                    {
                        data.map((tag, idx) => (
                            <TagButton key={idx} text={tag['name']}/>
                        ))
                    }
                </div>
                <Spacer size={'xl'} />
            </>
        )
    } else {
        return ""
    }
}

export default RelatedTags;