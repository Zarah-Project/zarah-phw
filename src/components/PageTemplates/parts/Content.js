import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import style from "./Content.module.scss"
import ContentImage from "@/components/PageTemplates/parts/ContentImage";

const Content = ({ content }) => {
    return (
        <div className={style.Blocks}>
            <BlocksRenderer
                content={content}
                blocks = {{
                    link: ({ children, url }) => <Link href={url} target={'_blank'}>{children}</Link>,
                    image: ({image}) => <ContentImage image={image} maxHeight={500} size={'large'} priority/>
                }}
            />
        </div>
    )
}

export default Content;