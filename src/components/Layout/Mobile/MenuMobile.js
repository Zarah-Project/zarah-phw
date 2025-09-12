import React, {useState} from 'react';
import style from "./MenuMobile.module.scss";
import IconSearch from "@/components/Icons/IconSearch";

const MenuMobile = ({theme}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const onMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    }

    const getThemeClass = () => {
        return theme === 'light' ? style.LightTheme : style.DarkTheme
    }

    return (
      <React.Fragment>
          <div className={menuOpen ? `${style.MenuButton} ${style.Opened}` : style.MenuButton}
               onClick={onMenuButtonClick}>
              <div className={theme === 'light' ? style.LightTheme : style.DarkTheme}>
                  <span> </span>
                  <span> </span>
                  <span> </span>
                  <span> </span>
              </div>
          </div>
          <div className={menuOpen ? `${style.Menu} ${style.Opened} ${getThemeClass()}` : `${style.Menu} ${getThemeClass()}`}>
              <div style={{flex: 1}}></div>
              <div className={style.MenuList}>
                  <a href={'/'}>Home</a>
                  <br/><br/>
                  <a href={'/activism'}>Activism</a>
                  <a href={'/people'}>People</a>
                  <a href={'/networks'}>Networks</a>
                  <a href={'/sources'}>Sources</a>
                  <a href={'/essays'}>Essays</a>
                  <br/><br/>
                  <a href={'/search'}><IconSearch theme={theme}/></a>
                  <a href={'/about'}>About</a>
              </div>
              <div style={{flex: 1}}></div>
          </div>
      </React.Fragment>
)
}

export default MenuMobile;
