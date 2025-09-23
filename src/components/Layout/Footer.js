import style from "./Footer.module.scss";
import Link from "@/components/BaseElements/Link";
import Spacer from "@/components/BaseElements/Spacer";
import {useMedia} from "react-use";
import Photo from "@/components/BaseElements/Photo";

const Footer = () => {
    const isMobile = useMedia('(max-width: 800px)', true);

    let title;

    if (isMobile) {
        title = <h3>
            Women’s Labour Activism in<br/>
            Central and Eastern Europe and beyond
        </h3>;
    } else {
        title = <h3>
            Women’s Labour Activism<br/>
            in Central and Eastern Europe and beyond
        </h3>;
    }

    return (
        <div className={style.Footer}>
            <div className={style.Left}>
                {title}
                <Spacer size={'m'}/>
                <div style={isMobile ? {width: 100, justifySelf: 'center'} : {width: 100}}>
                    <Photo image={'LOGO-ERC.png'} isExample={true} minHeight={100} imageFit={'contain'}/>
                </div>
                <Spacer size={'m'}/>
                <p style={{opacity: 0.5}}>
                    Created by the ZARAH Team, Central European University, 2025.
                </p>
            </div>
            <div className={style.Right}>
                <div className={style.Menu}>
                <div>
                        <Link href={'/activism'}>Activisms</Link>
                    </div>
                    <div>
                        <Link href={'/people'}>People</Link>
                    </div>
                    <div>
                        <Link href={'/networks'}>Networks</Link>
                    </div>
                    <div>
                        <Link href={'/sources'}>Sources</Link>
                    </div>
                    <div>
                        <Link href={'/essays'}>Essays</Link>
                    </div>
                </div>
                <div className={style.Menu}>
                    <div>
                        <Link href={'/about'}>About the Project</Link>
                    </div>
                    <div>
                        <Link href={'/contributors'}>Contributors</Link>
                    </div>
                    <div>
                        <Link href={'/privacy-policy'}>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link href={'/terms'}>Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer