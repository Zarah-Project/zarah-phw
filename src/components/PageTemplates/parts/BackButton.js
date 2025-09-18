import IconLeftArrow from "@/components/Icons/IconLeftArrow";
import Link from "next/link";
import style from "./BackButton.module.scss"

const BackButton = ({ module, data }) => {
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
                if (Object.keys(data).includes('ActivismType') && data['ActivismType'] !== null) {
                    return `/activism#${data['ActivismType']['Type'].replace(/\s+/g, "-")}`
                } else {
                    return `/activism#`
                }
            case "people":
                if (Object.keys(data).includes('PersonGroup') && data['PersonGroup'] !== null) {
                    return `/people#${data['PersonGroup']['Group'].replace(/\s+/g, "-").toLowerCase()}`
                } else {
                    return `/people#`
                }
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