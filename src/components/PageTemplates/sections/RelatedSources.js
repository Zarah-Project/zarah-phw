import style from "./RelatedSources.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Photo from "@/components/BaseElements/Photo";
import Spacer from "@/components/BaseElements/Spacer";


const RelatedSources = ({data}) => {
    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'} />
                <SectionTitle title={'Connected Sources'}/>
                {
                    data.map((source) => (
                        <Link key={source.id} href={'#'} className={style.Wrapper}>
                            <h4>{source.title}</h4>
                            <p>{truncateWithEllipses(source.shortDescription, 150)}</p>
                            <Photo image={source.image} height={315} />
                        </Link>
                    ))
                }
                <Spacer size={'xl'} />
                <hr />
            </>
        )
    } else {
        return "";
    }
}

export default RelatedSources;