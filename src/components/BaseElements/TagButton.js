import style from "./TagButton.module.scss";
import Link from "next/link";

const TagButton = ({text, withLinks = true}) => {
    if (withLinks) {
        return (
            <div className={style.TagButton}>
                <Link href={{
                    pathname: '/search',
                    query: { tags: text }
                }}>
                    {text}
                </Link>
            </div>
        )
    } else {
        return (
            <div className={style.TagButton}>
                {text}
            </div>
        )
    }

}

export default TagButton;