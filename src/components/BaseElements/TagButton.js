import style from "./TagButton.module.scss";

const TagButton = ({text}) => {
    return (
        <div className={style.TagButton}>{text}</div>
    )
}

export default TagButton;