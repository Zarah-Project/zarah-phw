import {useEffect, useState} from "react";
import style from "./EmailLink.module.scss";

export default function EmailLink({user, domain, linkText}) {
    const [link, setLink] = useState({ href: "", text: "" });

    useEffect(() => {
        // Build parts
        const full = `${user}@${domain}`;
        setLink({ href: full, text: linkText });
    }, []);

    return (
        <a
            href={`mailto:${link.href}`}
            className={style.EmailLink}
            dangerouslySetInnerHTML={{ __html: link.text }}
        />
    );
}