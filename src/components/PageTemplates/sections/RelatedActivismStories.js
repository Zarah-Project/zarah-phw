import style from "./RelatedActivismStories.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import Spacer from "@/components/BaseElements/Spacer";

const RelatedActivismStories = ({data}) => {
    const renderStory = (story) => {
        const type = story['ActivismType']?.['Type']

        return (
            <Link key={story.id} href={`/activism/story/${story['Slug']}`} className={style.StoryWrapper}>
                <div className={style.Data}>
                    <h5>{story['Title']}</h5>
                    <p className={style.Type}>{type}</p>
                </div>
            </Link>
        )
    }

    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'}/>
                <SectionTitle title={'Connected Activism Stories'}/>
                {
                    data.map((story) => renderStory(story))
                }
                <Spacer size={'l'}/>
                <hr />
            </>
        )
    } else {
        return ""
    }

}

export default RelatedActivismStories;