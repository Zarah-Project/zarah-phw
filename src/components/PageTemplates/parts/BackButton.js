import IconLeftArrow from "@/components/Icons/IconLeftArrow";
import Link from "next/link";
import style from "./BackButton.module.scss"

const BackButton = ({ module }) => {
    const getBackText = () => {
        switch (module) {
            case "activism-story":
                return "Activism Stories"
            case "people":
                return "People"
            case "networks":
                return "Networks"
            case "sources":
                return "Sources"
            case "essays":
                return "Essays"
            default:
                return "Home"
        }
    }

    const getLink = () => {
        switch (module) {
            case "activism-story":
                return "/activism"
            case "people":
                return "/people"
            case "networks":
                return "/networks"
            case "sources":
                return "/sources"
            case "essays":
                return "/essays"
            default:
                return "/"
        }
    }

    return (
        <div className={style.BackButton}>
            <Link href={getLink()}>
                <IconLeftArrow />
                <span>Back to {getBackText()}</span>
            </Link>
        </div>
    )
}

export default BackButton;