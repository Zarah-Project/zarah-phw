import Head from "next/head";
import style from "./networks.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import LayoutLight from "@/components/Layout/LayoutLight";
import dynamic from "next/dynamic";
import NetworkMapList from "@/components/Sections/NetworkMap/NetworkWrapper";
import NetworkWrapper from "@/components/Sections/NetworkMap/NetworkWrapper";
import {fetchEssaysList} from "@/utils/api/fetchEassys";
import {fetchNetworksList} from "@/utils/api/fetchNetworks";

export const getServerSideProps = (async (context) => {
    const [networksData] = await Promise.all([
        fetchNetworksList(),
    ]);
    return {
        props: {
            networksData,
        }
    }
})

export default function NetworksPage({networksData}) {
    return (
        <>
            <Head>
                <title>Networks - Women's Labour Activism</title>
                <meta name="description" content="Historical events and conferences related to Women's Labour Activism." />
            </Head>
            <div className={style.Section}>
                <Spacer size={'l'}/>
                <div className={style.NetworksHeader}>
                    <div className={style.Left}>
                        <h1>Networks</h1>
                    </div>
                    <div className={style.Right}>
                        <p>
                            Women labour activists from Central, Eastern, and Southeastern Europe built lasting
                            cross-border ties starting in the nineteenth century. The connections and international
                            gatherings
                            spotlighted here reflect their participation in organizations whose activities centered on
                            work
                            and labour. Women contributed to international trade union federations alongside men, they
                            founded multi-country women's labour associations and committees, and they participated in
                            international labour organizations. Moving between mixed-gender and women-focused
                            spaces, these activists connected struggles for workers’ rights with demands for gender
                            equity.
                        </p>
                    </div>
                </div>
                <Spacer size={'xl'}/>
                <div className={style.MapInfo}>
                    <p>
                        Base maps for this visualization (1938 and 1965) use the
                        dataset <a href='https://icr.ethz.ch/data/cshapes/' target={'_new'}>CShapes</a> by
                        Schvitz, Rüegger, Girardin, Cederman, Weidmann, Gleditsch.
                    </p>
                </div>
                <Spacer size={'md'}/>
                <div className={style.MapContainer}>
                    <NetworkWrapper data={networksData}/>
                </div>
            </div>
        </>
    )

}

NetworksPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}