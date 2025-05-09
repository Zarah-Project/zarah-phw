import React, { useEffect, useRef, useState } from "react";
import styles from "./activism.module.scss";
import LayoutDark from "@/components/Layout/LayoutDark";
import {activismGroups} from "@/mockData/activismGroups";

const sections = Array.from({ length: 8 }, (_, i) => ({
    title: `Section ${i + 1}`,
    content: Array.from({ length: 5 }, (_, j) => `Column ${j + 1}`),
}));

export default function ActivismPage() {
    const [activeSection, setActiveSection] = useState(0);
    const [progress, setProgress] = useState(0); // NEW
    const sectionRefs = useRef([]);

    const sidebarRef = useRef(null);

    useEffect(() => {
        console.log(sidebarRef.current.clientHeight);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveSection(index);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach(section => {
            if (section) {
                observer.observe(section);

                // Attach wheel event listener with passive: false
                section.addEventListener("wheel", (e) => {
                    if (sectionRefs.current.indexOf(section) === activeSection) {
                        handleWheel(e, sectionRefs.current.indexOf(section));
                    }
                }, { passive: false });
            }
        });

        return () => {
            sectionRefs.current.forEach(section => {
                if (section) {
                    section.removeEventListener("wheel", (e) => {
                        if (sectionRefs.current.indexOf(section) === activeSection) {
                            handleWheel(e, sectionRefs.current.indexOf(section));
                        }
                    });
                }
            });
        };
    }, [activeSection]);

    const handleScroll = (e, sectionIndex) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (sectionIndex === activeSection) {
            const progressValue = Math.min((scrollLeft / (scrollWidth - clientWidth)) * 100, 100);
            setProgress(Math.round(progressValue));
        }
    };

    // Handle wheel event to scroll horizontally inside sections
    const handleWheel = (e, sectionIndex) => {
        const container = sectionRefs.current[sectionIndex];
        if (!container) return;

        const scrollable = container.querySelector(`.${styles.sectionContent}`);
        if (!scrollable) return;

        const deltaY = e.deltaY;

        const atStart = scrollable.scrollLeft <= 0;
        const atEnd = scrollable.scrollLeft + scrollable.clientWidth >= scrollable.scrollWidth - 1;

        const isScrollingDown = deltaY > 0;
        const isScrollingUp = deltaY < 0;

        const scrollSpeed = 0.1;
        if (isScrollingDown && !atEnd) {
            e.preventDefault();
            scrollable.scrollLeft += deltaY * scrollSpeed;
        } else if (isScrollingUp && !atStart) {
            e.preventDefault();
            scrollable.scrollLeft += deltaY * scrollSpeed;
        }

        if (atEnd && isScrollingDown) {
            scrollable.scrollLeft = scrollable.scrollWidth;
            setProgress(0);
            return;
        }

        if (atStart && isScrollingUp) {
            scrollable.scrollLeft = 0;
            sectionIndex !== 0 && setProgress(100)
            return;
        }
    };

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: 'center' });
    };

    const indicatorTop = `${(activeSection / activismGroups.length) * 100}%`;

    return (
        <div className={styles.container}>

            {/* Sidebar */}
            <div className={styles.sidebar} ref={sidebarRef}>
                <div className={styles.sidebarContent}>
                    {activismGroups.map((group, index) => (
                        <div
                            key={index}
                            className={`${styles.sidebarItem} ${index === activeSection ? styles.active : ""}`}
                            onClick={() => scrollToSection(index)}
                        >
                            <div>{group.title.replaceAll('[IMG]', '')}</div>
                        </div>
                    ))}
                    <div className={styles.scrollLine}></div>
                    <div
                        className={styles.activeIndicator}
                        style={{top: `calc(${indicatorTop} + ${activeSection > 0 ? (12 - activeSection) * 2 : 15}px)`}}
                    ></div>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                {activismGroups.map((group, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        data-index={index}
                        className={styles.section}
                        onWheel={(e) => {
                            if (index === activeSection) {
                                handleWheel(e, index);
                            }
                        }}
                    >
                        {/* Progress Bar */}
                        {index === activeSection && (
                            <div className={styles.progressContainer}>
                                <div
                                    className={styles.progressBar}
                                    style={{width: `${progress}%`}}
                                />
                            </div>
                        )}

                        <div
                            className={styles.sectionContent}
                            onScroll={(e) => handleScroll(e, index)}
                        >
                            <div className={styles.column}>
                                {group.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ActivismPage.getLayout = function getLayout(page) {
    return (
        <LayoutDark>
            {page}
        </LayoutDark>
    )
}