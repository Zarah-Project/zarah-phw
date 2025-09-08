import style from "./ActivismsSelector.module.scss";
import PeopleGroupElement from "@/components/Sections/ActivisimsSelector/ActivismElement";
import getImageData from "@/utils/content/getImageData";


const ActivismTypeSelector = ({data}) => {

    const renderActivismType = (group, index) => {
        const image = getImageData(group['Image'], 'thumbnail');

        return (
            <PeopleGroupElement
                key={`activism-group-${index}`}
                text={group['TypeWithImage']}
                imageUrl={image['url'] !== "" ? image['url'] : 'images/examples/activism_menu.jpg'}
            />
        )
    }

    return (
        <div className={style.Section}>
            <div className={style.PeopleGroupSelector}>
                {data.map((group, index) => (
                    renderActivismType(group, index)
                ))}
            </div>
        </div>
    )
}

export default ActivismTypeSelector;