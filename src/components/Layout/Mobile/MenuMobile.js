import React, {useState} from 'react';
import style from "./MenuMobile.module.scss";
import IconSearch from "@/components/Icons/IconSearch";
import {useRouter} from "next/router";
import {motion} from "motion/react";


const MenuMobile = ({theme}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter();

    const onMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    }

    const getThemeClass = () => {
        return theme === 'light' ? style.LightTheme : style.DarkTheme
    }

    const getActivePage = () => {
        const activePages = {
            'people': 'People',
            'activism': 'Activism',
            'networks': 'Networks',
            'sources': 'Sources',
            'essays': 'Essays',
            'search': 'Search',
            'about': 'About',
            'contributors': 'Contributors'
        }

        if (router.pathname === "/") {
            return 'Home'
        }

        return Object.keys(activePages).map((path) => {
            if (router.pathname.includes(path)) {
                return activePages[path];
            }
        })
    }

    const menuVariants = {
        open: {
            transition: { staggerChildren: 0.1, offset: 3 }
        }
    };

    const linkVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    const menuItems = [
        { href: "/", label: "Home" },
        { type: "break" },
        { href: "/activism", label: "Activism" },
        { href: "/people", label: "People" },
        { href: "/networks", label: "Networks" },
        { href: "/sources", label: "Sources" },
        { href: "/essays", label: "Essays" },
        { type: "break" },
        { href: "/search", label: <>Search <IconSearch theme={theme}/></> },
        { href: "/about", label: "About" }
    ];

    return (
        <React.Fragment>
            <div className={`${style.HeaderMenu} ${getThemeClass()}`}>
                <h5 className={style.ActivePage}>
                    {getActivePage()}
                </h5>
                <div className={menuOpen ? `${style.MenuButton} ${style.Opened}` : style.MenuButton}
                     onClick={onMenuButtonClick}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </div>
            <motion.div
                className={`${style.Menu} ${menuOpen ? style.Opened : ""} ${getThemeClass()}`}
                initial={false}
                animate={menuOpen ? "open" : "initial"}
                variants={menuVariants}
            >
                <div style={{flex: 1}}/>
                <motion.div className={style.MenuList}>
                    {menuItems.map((item, i) =>
                        item.type === "break" ? (
                            <><br key={`br-${i}`} /><br/></>
                        ) : (
                            <motion.a
                                key={i}
                                href={item.href}
                                variants={linkVariants}
                                initial={{ opacity: 0, y: 16 }}
                            >
                                {item.label}
                            </motion.a>
                        )
                    )}
                </motion.div>
                <div style={{flex: 1}}/>
            </motion.div>
        </React.Fragment>
    )
}

export default MenuMobile;
