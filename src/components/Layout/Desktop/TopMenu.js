import style from "./TopMenu.module.scss";
import IconSearch from "@/components/Icons/IconSearch";

const TopMenu = ({theme}) => {
    return (
        <div className={`${style.TopMenu} ${theme === 'dark' ? style.Dark : style.Light}`}>
            <div className={style.Left}>
                <div>Home</div>
            </div>
            <div className={style.Center}>
                <div>Activism</div>
                <div>People</div>
                <div>Networks</div>
                <div>Sources</div>
                <div>Essays</div>
            </div>
            <div className={style.Right}>
                <div><IconSearch theme={theme} /></div>
                <div>About</div>
            </div>
        </div>
    )
}

export default TopMenu;