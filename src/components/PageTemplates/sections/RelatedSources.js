import style from "./RelatedSources.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Photo from "@/components/BaseElements/Photo";

const sources = [
    {
        id: 1,
        title: 'Through the Lens of Women’s Work and Activism',
        shortDescription: 'This year’s ZARAH Blog Series gives the floor to invited contributors and their inspiring ' +
            'explorations, thus publicizing relevant research that takes place beyond the scope of the ZARAH project.',
        image: 'source02.jpeg',
    },
]

const RelatedSources = () => {
    return (
        <>
            <SectionTitle title={'Connected Sources'}/>
            {
                sources.map((source) => (
                    <Link key={source.id} href={'#'} className={style.Wrapper}>
                        <h4>{source.title}</h4>
                        <p>{truncateWithEllipses(source.shortDescription, 150)}</p>
                        <Photo image={source.image} height={315} />
                    </Link>
                ))
            }
        </>
    )
}

export default RelatedSources;