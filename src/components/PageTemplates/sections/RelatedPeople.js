import style from "./RelatedPeople.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";
import getImageData from "@/utils/content/getImageData";
import Spacer from "@/components/BaseElements/Spacer";
import PersonImagePlaceholder from "@/components/BaseElements/PersonImagePlaceholder";

const RelatedPeople = ({data}) => {
    const renderPerson = (person) => {
        const image = getImageData(person['Image'], 'thumbnail')
        const group = person['PersonGroup']?.['Group']

        return (
            <Link key={person['documentId']} href={`/people/${person['Slug']}`} className={style.PersonWrapper}>
                <div className={style.ImageWrapper}>
                    {
                        image['url'] ?
                        <img src={image['url']} alt={person['Name']} className={style.Image} /> :
                        <PersonImagePlaceholder fontSize={10} />
                    }
                </div>
                <div className={style.Data}>
                    <h5>{person['Name']}</h5>
                    <p className={style.Group}>{group}</p>
                </div>
            </Link>
        )
    }

    if (data.length > 0) {
        return (
            <>
                <Spacer size={'xl'}/>
                <SectionTitle title={'Connected People'}/>
                {
                    data.map((person) => renderPerson(person))
                }
                <Spacer size={'l'}/>
                <hr />
            </>
        )
    } else {
        return ""
    }

}

export default RelatedPeople;