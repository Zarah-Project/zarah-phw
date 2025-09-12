import Head from "next/head";
import DesktopMenu from "@/components/Layout/Desktop/DesktopMenu";
import Footer from "@/components/Layout/Footer";
import {Media} from "@/utils/media";
import MenuMobile from "@/components/Layout/Mobile/MenuMobile";

const LayoutLight = ({ children }) => {
   return(
        <>
            <Head>
                <meta name="robots" content="all" key="robots" />
            </Head>
            <>
                <Media greaterThanOrEqual="md">
                    <DesktopMenu theme={'light'} />
                </Media>
                <Media lessThan="md">
                  <MenuMobile theme={'light'} />
                </Media>
                <div style={{paddingTop: '80px'}}>
                    {children}
                </div>
                <Footer />
            </>
        </>
   )
}

export default LayoutLight