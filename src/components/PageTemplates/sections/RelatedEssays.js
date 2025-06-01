import style from "./RelatedEssays.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Photo from "@/components/BaseElements/Photo";

const essays = [
    {
        id: 1,
        title: 'Through the Lens of Women’s Work and Activism',
        shortDescription: 'This year’s ZARAH Blog Series gives the floor to invited contributors and their inspiring ' +
            'explorations, thus publicizing relevant research that takes place beyond the scope of the ZARAH project.',
        image: 'essay01.jpg',
    },
]

const RelatedEssays = () => {
    return (
        <>
            <SectionTitle title={'Connected Essays'}/>
            {
                essays.map((essay) => (
                    <Link key={essay.id} href={'#'} className={style.Wrapper}>
                        <h4>{essay.title}</h4>
                        <p>{truncateWithEllipses(essay.shortDescription, 150)}</p>
                        <Photo image={essay.image} height={315} />
                    </Link>
                ))
            }
        </>
    )
}

export default RelatedEssays;