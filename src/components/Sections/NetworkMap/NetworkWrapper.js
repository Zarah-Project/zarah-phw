import style from "./NetworkWrapper.module.scss";
import React, {useState} from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import IconEarth from "@/components/Icons/IconEarth";
import IconList from "@/components/Icons/IconList";
import NetworkList from "@/components/Sections/NetworkMap/NetworkList";

const SVGMap = dynamic(() => import("@/components/Map/Map"), {
    ssr: false,
});

const NetworkWrapper = () => {
    const [showList, setShowList] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerContent, setDrawerContent] = useState(null);

    const openDrawerWithContent = (content) => {
        setDrawerContent(content);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setDrawerContent(null);
    };

    return (
        <>
            <div className={style.Selector}>
                <div
                    className={`${style.Button} ${showList ? '' : style.Active}`}
                    onClick={() => setShowList(false)}
                >
                    <div className={style.Label}>
                        <div className={style.Icon}><IconEarth theme={showList ? 'light' : 'dark'} /></div>
                        <div>Map View</div>
                    </div>
                </div>
                <div
                    className={`${style.Button} ${showList ? style.Active : ''}`}
                    onClick={() => setShowList(true)}
                >
                    <div className={style.Label}>
                        <div className={style.Icon}><IconList theme={showList ? 'dark' : 'light'}/></div>
                        <div>List View</div>
                    </div>
                </div>
            </div>
            <motion.div
                className={style.Slider}
                animate={{
                    x: showList ? "-100vw" : "0vw",
                }}
                transition={{type: "tween", duration: 0.6}}
            >
                <motion.div
                    animate={{
                        opacity: showList ? 0 : 1
                    }}
                    transition={{type: "tween", duration: 0.6}}
                    className={`${style.Column}`}>
                    <SVGMap onMarkerClick={openDrawerWithContent} onDrawerClose={closeDrawer} />
                    <div className={`${style.Drawer} ${drawerOpen ? style.Open : ''}`}>
                        {drawerContent}
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: showList ? 1 : 0
                    }}
                    transition={{type: "tween", duration: 0.6}}
                    className={`${style.Column}`}>
                    <NetworkList />
                </motion.div>
            </motion.div>
        </>
    )
}

export default NetworkWrapper;