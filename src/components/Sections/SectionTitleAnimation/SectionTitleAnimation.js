import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import style from "./SectionTitleAnimation.module.scss";
import Spacer from "@/components/BaseElements/Spacer";

export default function HorizontalScrollSection({text}) {
    const containerRef = useRef(null);

    // Total scroll distance is one full viewport height per word
    const scrollHeight = 100;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', `-100%`]);

    return (
        <div
            ref={containerRef}
            style={{
                height: `calc(100vh + ${scrollHeight}vh)`,
                position: 'relative',
            }}
        >
            <section
                className={style.Section}
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    style={{
                        display: 'flex',
                        x: x,
                        height: '100%',
                        alignItems: 'center',
                        padding: '0 30vw',
                        scrollSnapType: 'x mandatory', // enables horizontal snapping
                        whiteSpace: 'nowrap',
                        touchAction: 'pan-y', // keeps vertical scrolling on touch
                    }}
                >
                        <motion.span
                            className={style.Title}
                            style={{
                                flexShrink: 0,
                                width: '100vw',
                                textAlign: 'center',
                                scrollSnapAlign: 'center',
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <span>{text}</span>
                        </motion.span>
                </motion.div>
            </section>
        </div>
    );
}