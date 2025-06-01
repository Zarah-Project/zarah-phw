import style from "./RelatedPeople.module.scss";
import Link from "next/link";
import SectionTitle from "@/components/PageTemplates/parts/SectionTitle";

const people = [
    {
        id: '1',
        name: 'Full Name',
        group: 'People Cluster Category',
        image: 'person00.jpg'
    }, {
        id: '2',
        name: 'Full Name',
        group: 'People Cluster Category',
        image: 'person01.jpg'
    }, {
        id: '3',
        name: 'Full Name',
        group: 'People Cluster Category',
        image: 'person02.jpg'
    }
]

const RelatedPeople = () => {
    return (
        <>
            <SectionTitle title={'Connected People'}/>
            {
                people.map((person) => (
                    <Link key={person.id} href={'#'} className={style.PersonWrapper}>
                        <div className={style.ImageWrapper}>
                            <img src={`/images/examples/${person.image}`} alt={person.name} className={style.Image} />
                        </div>
                        <div className={style.Data}>
                            <h5>{person.name}</h5>
                            <p className={style.Group}>{person.group}</p>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default RelatedPeople;