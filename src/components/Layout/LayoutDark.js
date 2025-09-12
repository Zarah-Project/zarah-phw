import Head from "next/head";
import DesktopMenu from "@/components/Layout/Desktop/DesktopMenu";
import Footer from "@/components/Layout/Footer";
import {Media} from "@/utils/media";
import MenuMobile from "@/components/Layout/Mobile/MenuMobile";

const LayoutDark = ({ children }) => {
   return(
        <>
            <Head>
                <meta name="robots" content="all" key="robots" />
            </Head>
            <>
                <Media greaterThanOrEqual="md">
                    <DesktopMenu theme={'dark'} />
                </Media>
                <Media lessThan="md">
                    <MenuMobile theme={'dark'} />
                </Media>
                <div style={{paddingTop: '80px'}}>
                    {children}
                </div>
                <Footer />
            </>
        </>
   )
}

export default LayoutDark