import style from "./PeopleGroupSelector.module.scss";
import PeopleGroupElement from "@/components/Sections/PeopleGroupSelector/PeopleGroupElement";

const GROUPS = [
    'Party work: [IMG] Addressing women’s labour in organized politics',
    'Activism at [IMG] the workplace',
    'Grappling [IMG] with unpaid labour',
    'Fighting for [IMG] the equal pay',
    'Labouring [IMG]  for the communities',
    'Cross-class [IMG] activism',
    'Class at [IMG] the core',
    '[IMG] Exit',
    'Confronting [IMG] the misogyny',
    'We want [IMG] education!',
    'Institutional [IMG] activism'
]

const PeopleGroupSelector = () => {
    return (
        <div className={style.Section}>
            <div className={style.PeopleGroupSelector}>
                {GROUPS.map((group, index) => (
                    <PeopleGroupElement text={group} imageUrl={'images/examples/activism_menu.jpg'} />
                ))}
            </div>
        </div>
    )
}

export default PeopleGroupSelector;