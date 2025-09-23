import React, {useEffect, useRef, useState} from "react";
import styles from "./ActivismTypesSection.module.scss";
import ActivismSection from "@/components/Sections/Activisims/ActivismSection";
import {useEffectOnce} from "react-use";

const ActivismTypesSection = ({activismTypeData}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [progress, setProgress] = useState(0); // NEW
    const sectionRefs = useRef([]);

    const sidebarRef = useRef(null);
    const itemRefs = useRef([]);
    const highlightRef = useRef(null);

    useEffect(() => {
        const el = itemRefs.current[activeSection];
        const highlight = highlightRef.current;
        if (el && highlight) {
            const { offsetTop, offsetHeight } = el;
            highlight.style.top = `${offsetTop}px`;
            highlight.style.height = `${offsetHeight}px`;
        }
    }, [activeSection]);

    useEffectOnce(() => {
        const hash = decodeURIComponent(window.location.hash.slice(1));
        const index = activismTypeData.data.findIndex(
            (group) => group.Type.replace(/\s+/g, "-") === hash
        );

        if (index !== -1) {
            setTimeout(() => {
                scrollToSection(index);
                setActiveSection(index);
            }, 200);
        }}
    );


    // 🔹 Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            const scrollable = sectionRefs.current[activeSection]?.querySelector(`.${styles.sectionContent}`);
            if (!scrollable) return;

            const scrollAmount = 200; // distance per key press for horizontal scroll

            if (e.key === "ArrowRight") {
                // smooth scroll right inside section
                scrollable.scrollBy({ left: scrollAmount, behavior: "smooth" });
            } else if (e.key === "ArrowLeft") {
                // smooth scroll left inside section
                scrollable.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else if (e.key === "ArrowDown") {
                // go to next section smoothly
                e.preventDefault();
                setActiveSection((prev) => {
                    const next = Math.min(prev + 1, activismTypeData.data.length - 1);
                    if (next !== prev) scrollToSection(next); // already smooth
                    return next;
                });
            } else if (e.key === "ArrowUp") {
                // go to previous section smoothly
                e.preventDefault();
                setActiveSection((prev) => {
                    const prevIndex = Math.max(prev - 1, 0);
                    if (prevIndex !== prev) scrollToSection(prevIndex); // already smooth
                    return prevIndex;
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeSection, activismTypeData]);


    // 🔹 IntersectionObserver (keep activeSection synced with viewport)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveSection(index);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

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

    // 🔹 Wheel logic (maps vertical → horizontal)
    const handleWheel = (e, sectionIndex) => {
        const container = sectionRefs.current[sectionIndex];
        if (!container) return;

        const scrollable = container.querySelector(`.${styles.sectionContent}`);
        if (!scrollable) return;

        const deltaY = e.deltaY;

        const atStart = scrollable.scrollLeft <= 0;
        const atEnd =
            scrollable.scrollLeft + scrollable.clientWidth >=
            scrollable.scrollWidth - 1;

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
            sectionIndex !== 0 && setProgress(100);
            return;
        }
    };

    // 🔹 Attach wheel listeners manually with passive: false
    useEffect(() => {
        const handler = (e) => {
            const index = Number(e.currentTarget.dataset.index);
            handleWheel(e, index);
        };

        sectionRefs.current.forEach((section) => {
            if (section) {
                section.addEventListener("wheel", handler, { passive: false });
            }
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) {
                    section.removeEventListener("wheel", handler, { passive: false });
                }
            });
        };
    }, [handleWheel]);

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: 'center' });
    };

    return (
        <div className={styles.container}>

            {/* Sidebar */}
            <div className={styles.sidebar} ref={sidebarRef}>
                <div className={styles.sidebarContent}>
                    <div className={styles.sidebarInner}>
                        {/* highlight rectangle */}
                        <div ref={highlightRef} className={styles.highlight}/>
                        {activismTypeData['data'].map((group, index) => (
                            <div
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className={`${styles.sidebarItem} ${index === activeSection ? styles.active : ""}`}
                                onClick={() => scrollToSection(index)}
                            >
                                <div>{group['Type']}</div>
                            </div>
                        ))}
                        <div className={styles.scrollLine}></div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
            {activismTypeData['data'].map((group, index) => (
                <div
                    key={index}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    data-index={index}
                    className={styles.section}
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
                            <ActivismSection group={group} />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ActivismTypesSection;