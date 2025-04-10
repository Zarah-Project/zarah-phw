import '@/styles/globals.scss';
import '@/styles/typo.scss';
import '@/styles/colours.scss';

import localFont from 'next/font/local'
import Head from "next/head";
import GrainOverlay from "@/components/GrainOverlay/GrainOverlay";

const editorialNew = localFont({src: '../../public/fonts/PPEditorialNew-Regular.woff2', variable: "--font-editorialNew"})
const neueMontreal = localFont({src: '../../public/fonts/PPNeueMontreal-Regular.woff2', variable: "--font-neueMontreal"})


export default function App({ Component, pageProps }) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main
            className={`${editorialNew.variable} ${neueMontreal.variable}`}
            style={{height: '100%'}}
        >
          <GrainOverlay grainOpacity={0.1} />
          <Component {...pageProps} />
        </main>
      </>
    )
}
