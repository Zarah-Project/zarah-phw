import style from "./ActivismsSelector.module.scss";
import PeopleGroupElement from "@/components/Sections/ActivisimsSelector/ActivismElement";
import {activismGroups} from "@/mockData/activismGroups";


const PeopleGroupSelector = () => {
    return (
        <div className={style.Section}>
            <div className={style.PeopleGroupSelector}>
                {activismGroups.map((group, index) => (
                    <PeopleGroupElement key={`activism-group-${index}`} text={group['title']} imageUrl={'images/examples/activism_menu.jpg'} />
                ))}
            </div>
        </div>
    )
}

export default PeopleGroupSelector;