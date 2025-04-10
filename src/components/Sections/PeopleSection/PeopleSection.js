import {people} from "@/mockData/people";
import PersonCard from "@/components/Cards/PersonCard";
import Spacer from "@/components/BaseElements/Spacer";
import style from "./PeopleSection.module.scss";

const PeopleSection = () => {
    return (
        <div className={style.Section}>
            <Spacer size={'large'} />
            {
                people.map((person, index) => {
                    return (
                        <>
                            <PersonCard person={person} key={person.id} photoAlign={index % 2 === 0 ? 'left' : 'right'}/>
                            <Spacer size={'large'} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default PeopleSection;