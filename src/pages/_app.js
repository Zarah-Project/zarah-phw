import '@/styles/globals.scss';
import '@/styles/typo.scss';
import '@/styles/colours.scss';

import localFont from 'next/font/local'
import Head from "next/head";
import GrainOverlayV1 from "@/components/GrainOverlay/GrainOverlayV1";

const editorialNew = localFont({src: '../../public/fonts/PPEditorialNew-Regular.woff2', variable: "--font-editorialNew"})
const neueMontreal = localFont({src: '../../public/fonts/PPNeueMontreal-Regular.woff2', variable: "--font-neueMontreal"})


export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main
            className={`${editorialNew.variable} ${neueMontreal.variable}`}
            style={{height: '100%'}}
        >
          <GrainOverlayV1 grainOpacity={0.07} />
          { getLayout(<Component {...pageProps} />) }
        </main>
      </>
    )
}
