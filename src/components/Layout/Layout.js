import Head from "next/head";
import TopMenu from "@/components/Layout/Desktop/TopMenu";

const Layout = ({ children, theme }) => {
   return(
        <>
            <Head>
                <meta name="robots" content="all" key="robots" />
            </Head>
            <>
                <TopMenu theme={theme} />
                {children}
            </>
        </>
   )
}

export default Layout