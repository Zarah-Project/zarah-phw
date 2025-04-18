import {Col, Container, Row} from "react-grid-system";
import style from "./Footer.module.scss";
import Link from "@/components/BaseElements/Link";
import Spacer from "@/components/BaseElements/Spacer";

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.Left}>
                <h3>
                    Women’s Labour Activism<br/>
                    in Central and Eastern Europe,<br/>
                    late 19th–late 20th century
                </h3>
                <Spacer size={'xl'}/>
                <p style={{opacity: 0.5}}>
                    © 2024 Zarah. All rights reserved.
                </p>
            </div>
            <div className={style.Right}>
                <div className={style.Menu}>
                    <div>
                        <Link href={'#'}>Activisms</Link>
                    </div>
                    <div>
                        <Link href={'#'}>People</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Networks</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Sources</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Essays</Link>
                    </div>
                </div>
                <div className={style.Menu}>
                    <div>
                        <Link href={'#'}>About the Project</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Contributors</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Terms and Conditions</Link>
                    </div>
                    <div>
                        <Link href={'#'}>Cookie Consent</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer