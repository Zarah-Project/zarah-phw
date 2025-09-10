import style from "./RelatedEssays.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Photo from "@/components/BaseElements/Photo";
import Spacer from "@/components/BaseElements/Spacer";
import getImageData from "@/utils/content/getImageData";

const RelatedSources = ({data}) => {
    const renderSource = (source) => {
        const image = getImageData(source['Image'], 'medium')

        return (
            <Link key={source['id']} href={`/sources/${source['Slug']}`} className={style.Wrapper}>
                <h4>{source['Title']}</h4>
                <p>{truncateWithEllipses(source['ShortDescription'], 150)}</p>
                <Photo image={image} minHeight={315} />
                <Spacer size={'xl'} />
            </Link>
        )
    }

    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'} />
                <SectionTitle title={'Connected Sources'}/>
                {
                    data.map((essay) => (renderSource(essay)))
                }
                <hr />
            </>
        )
    } else {
        return ""
    }

}

export default RelatedSources;