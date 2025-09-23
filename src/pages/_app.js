import '@/styles/globals.scss';
import '@/styles/typo.scss';
import '@/styles/colours.scss';

import localFont from 'next/font/local'
import Head from "next/head";
import GrainOverlayV1 from "@/components/GrainOverlay/GrainOverlayV1";
import {MediaContextProvider, mediaStyles} from "@/utils/media";
import React from "react";

const editorialNew = localFont({src: '../../public/fonts/PPEditorialNew-Regular.woff2', variable: "--font-editorialNew"})
const neueMontreal = localFont({src: '../../public/fonts/PPNeueMontreal-Regular.woff2', variable: "--font-neueMontreal"})
const editorialNewItalic = localFont({src: '../../public/fonts/PPEditorialNew-Italic.woff2', variable: "--font-editorialNewItalic"})
const neueMontrealItalic = localFont({src: '../../public/fonts/PPNeueMontreal-Italic.woff2', variable: "--font-neueMontrealItalic"})


export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
      <>
          <Head>
              <style
                  type="text/css"
                  dangerouslySetInnerHTML={{__html: mediaStyles}}
              />
              <link rel="icon" href="/favicon.ico"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <MediaContextProvider disableDynamicMediaQueries>
              <main
                  className={`${editorialNew.variable} ${neueMontreal.variable} ${editorialNewItalic.variable} ${neueMontrealItalic.variable}`}
                  style={{height: '100%'}}
              >
                  <GrainOverlayV1 grainOpacity={0.04}/>
                  {getLayout(<Component {...pageProps} />) }
            </main>
          </MediaContextProvider>
      </>
    )
}
