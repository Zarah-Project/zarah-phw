import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import style from "./Content.module.scss"

const Content = ({ content }) => {
    return (
        <div className={style.Blocks}>
            <BlocksRenderer
                content={content}
                blocks = {{
                    link: ({ children, url }) => <Link href={url} target={'_blank'}>{children}</Link>
                }}
            />
        </div>
    )
}

export default Content;