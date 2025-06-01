import style from "./SectionTitle.module.scss";
import Spacer from "@/components/BaseElements/Spacer";

const SectionTitle = ({title}) => {
    return (
        <>
            <div className={style.Title}>{title}</div>
            <Spacer size={'m'}/>
        </>
    )
}

export default SectionTitle;