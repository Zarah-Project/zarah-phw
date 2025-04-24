import style from "./TopMenu.module.scss";
import IconSearch from "@/components/Icons/IconSearch";
import Link from "next/link";

const TopMenu = ({theme}) => {
    return (
        <div className={`${style.TopMenu} ${theme === 'dark' ? style.Dark : style.Light} nav-link`}>
            <div className={style.Left}>
                <Link href={'/'} className={style.Link}>Home</Link>
            </div>
            <div className={style.Center}>
                <Link href={'#'} className={style.Link}>Activism</Link>
                <Link href={'/people'} className={style.Link}>People</Link>
                <Link href={'/networks'} className={style.Link}>Networks</Link>
                <Link href={'#'} className={style.Link}>Sources</Link>
                <Link href={'/essays'} className={style.Link}>Essays</Link>
            </div>
            <div className={style.Right}>
                <div><IconSearch theme={theme} /></div>
                <Link href={'/about'} className={style.Link}>About</Link>
            </div>
        </div>
    )
}

export default TopMenu;