import style from "./RelatedEssays.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Photo from "@/components/BaseElements/Photo";
import Spacer from "@/components/BaseElements/Spacer";
import getImageData from "@/utils/content/getImageData";

const RelatedEssays = ({data}) => {
    const renderEssay = (essay) => {
        const image = getImageData(essay['Image'], 'medium')

        return (
            <Link key={essay['id']} href={`/essays/${essay['Slug']}`} className={style.Wrapper}>
                <h4>{essay['Title']}</h4>
                <Photo image={image} minHeight={315} />
                <Spacer size={'xl'} />
            </Link>
        )
    }

    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'} />
                <SectionTitle title={'Connected Essays'}/>
                {
                    data.map((essay) => (renderEssay(essay)))
                }
                <hr />
            </>
        )
    } else {
        return ""
    }

}

export default RelatedEssays;