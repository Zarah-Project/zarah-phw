import Head from "next/head";
import TopMenu from "@/components/Layout/Desktop/TopMenu";
import Footer from "@/components/Layout/Desktop/Footer";

const Layout = ({ children, theme }) => {
   return(
        <>
            <Head>
                <meta name="robots" content="all" key="robots" />
            </Head>
            <>
                <TopMenu theme={theme} />
                {children}
                <Footer />
            </>
        </>
   )
}

export default Layout