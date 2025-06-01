import style from "./ActivismsSelector.module.scss";
import PeopleGroupElement from "@/components/Sections/ActivisimsSelector/ActivismElement";


const ActivismTypeSelector = ({data}) => {
    return (
        <div className={style.Section}>
            <div className={style.PeopleGroupSelector}>
                {data.map((group, index) => (
                    <PeopleGroupElement key={`activism-group-${index}`} text={group['TypeWithImage']} imageUrl={'images/examples/activism_menu.jpg'} />
                ))}
            </div>
        </div>
    )
}

export default ActivismTypeSelector;