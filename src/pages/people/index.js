import Head from "next/head";
import LayoutLight from "@/components/Layout/LayoutLight";
import Spacer from "@/components/BaseElements/Spacer";
import React, {useEffect, useRef, useState} from "react";
import styles from "./people.module.scss";
import {useRouter} from "next/router";
import PersonTile from "@/components/Cards/PersonTile/Desktop/PersonTile";
import {fetchPersonGroupsList} from "@/utils/api/fetchPersonGroups";
import {fetchPeopleList} from "@/utils/api/fetchPeople";
import {Media} from "@/utils/media";
import PersonTileMobile from "@/components/Cards/PersonTile/Mobile/PersonTileMobile";

export const getServerSideProps = (async (context) => {
    const [personGroupData, peopleData] = await Promise.all([
        fetchPersonGroupsList(),
        fetchPeopleList()
    ]);
    return {
        props: {
            personGroupData,
            peopleData
        }
    }
})


export default function PeoplePage({ personGroupData, peopleData }) {
    const groupNames = personGroupData['data'].map(group => group['Group']);

    const sectionRefs = useRef([]);
    const [activeGroup, setActiveGroup] = useState(groupNames[0]);

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const lastScrollY = useRef(0);

    // detect scroll direction (only mobile, max-width: 800px)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (window.innerWidth <= 800) {
                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    // scrolling down
                    setIsScrollingUp(false);
                } else {
                    // scrolling up
                    setIsScrollingUp(true);
                }
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔁 Scroll to section on click with offset
    const scrollToGroup = (index) => {
        const ref = sectionRefs.current[index];
        if (ref) {
            const offset = 150;
            const elementTop = ref.getBoundingClientRect().top + window.scrollY;
            const scrollTo = elementTop - offset;

            window.scrollTo({ top: scrollTo, behavior: "smooth" });
        }
    };

    // ⬇️ On page load, scroll to section from hash
    useEffect(() => {
        const hash = decodeURIComponent(window.location.hash.substring(1));
        const index = groupNames.findIndex((name) => name.toLowerCase().replaceAll(' ', '-') === hash);
        if (index !== -1) {
            setTimeout(() => scrollToGroup(index), 300); // slight delay for layout to settle
        }
        setActiveGroup(groupNames[index] || groupNames[0]);
    }, []);

    const generatePeople = (group) => {
        return peopleData['data'].filter(person => {
            return person['PersonGroup']['Group'] === group['Group'];
        });
    }

    return (
        <>
            <Head>
                <title>People - Women's Labour Activism</title>
                <meta name="description" content="Key figures, activists of women's labour activism."/>
            </Head>

            <div className={styles.Section}>
                <Spacer size={'xl'} />
                <header className={`${styles.Header} ${
                    isScrollingUp ? styles.Show : styles.Hide
                }`}>
                    {personGroupData['data'].map((group, index) => (
                        <p
                            key={group}
                            className={`${styles.GroupButton} ${
                                activeGroup === group['Group'] ? styles.Active : ""
                            }`}
                            onClick={() => {
                                scrollToGroup(index)
                                setActiveGroup(group['Group'])
                            }}
                        >
                            {group['Group']} ({group['People'].length})
                        </p>
                    ))}
                </header>

                <main className={styles.Main}>
                    {personGroupData['data'].map((group, index) => (
                        <section
                            key={group['id']}
                            ref={(el) => (sectionRefs.current[index] = el)}
                            className={styles.GroupSection}
                        >
                            <div className={styles.GroupHeader}>
                                <h2 className={styles.GroupTitle}>{group['Group']}</h2>
                                <p className={styles.GroupDescription}>{group['Description']}</p>
                            </div>
                            <Spacer size={'xl'}/>
                            <div className={styles.PeopleGrid}>
                                {generatePeople(group).map(person => (
                                     <>
                                         <Media greaterThanOrEqual="md">
                                             <PersonTile key={person.id} person={person} />
                                         </Media>
                                         <Media lessThan="md">
                                             <PersonTileMobile key={person.id} person={person} />
                                         </Media>
                                     </>
                                ))}
                            </div>
                            <Spacer size={'xl'}/>
                        </section>
                    ))}
                </main>
            </div>
        </>
    )
}

PeoplePage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}