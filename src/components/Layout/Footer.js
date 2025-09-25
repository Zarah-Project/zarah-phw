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
                <Spacer size={'xl'}/>
                <div className={style.Horizon2020}>
                    <div style={{width: '170px', textAlign: 'left'}}>
                        <Photo image={'LOGO-ERC.png'} isExample={true} minHeight={70} imageFit={'contain'}/>
                    </div>
                    <p style={{flex: 1, }}>
                        This research project, led by Susan Zimmermann at Central European University
                        (Vienna, Austria), has received funding from the European Research Council (ERC) under the
                        European Union’s Horizon 2020 research and innovation programme
                        (Grant agreement No. 833691 – ZARAH).
                    </p>
                </div>
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