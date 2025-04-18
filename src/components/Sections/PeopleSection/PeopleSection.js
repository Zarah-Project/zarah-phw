import {people} from "@/mockData/people";
import PersonCard from "@/components/Cards/PersonCard/PersonCard";
import Spacer from "@/components/BaseElements/Spacer";
import style from "./PeopleSection.module.scss";

const PeopleSection = () => {
    return (
        <div className={style.Section}>
            <Spacer size={'xl'} />
            {
                people.map((person, index) => {
                    return (
                        <div key={person.id}>
                            <PersonCard person={person} key={person.id} photoAlign={index % 2 === 0 ? 'left' : 'right'}/>
                            <Spacer size={'xl'} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PeopleSection;