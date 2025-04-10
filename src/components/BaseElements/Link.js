import style from "./Link.module.scss";

const Link = ({ children, href, target='_self', theme='dark' }) => {
    return (
        <a href={href} target={target} className={`${style.Link} ${theme === 'dark' ? style.Dark : style.Light}`}>
            {children}
        </a>
    )
}

export default Link;