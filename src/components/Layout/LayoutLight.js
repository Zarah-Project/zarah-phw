import Head from "next/head";
import TopMenu from "@/components/Layout/Desktop/TopMenu";
import Footer from "@/components/Layout/Desktop/Footer";

const LayoutLight = ({ children }) => {
   return(
        <>
            <Head>
                <meta name="robots" content="all" key="robots" />
            </Head>
            <>
                <TopMenu theme={'light'} />
                {children}
                <Footer />
            </>
        </>
   )
}

export default LayoutLight