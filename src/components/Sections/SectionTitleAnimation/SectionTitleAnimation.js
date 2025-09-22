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
                height: `calc(50dvh + ${scrollHeight}dvh)`,
                position: 'relative',
            }}
            className={style.Wrapper}
        >
            <section
                className={style.Section}
                style={{
                    position: 'sticky',
                    top: 80,
                    height: '100dvh',     // use dvh for Android
                    width: '100vw',       // constrain width
                    overflow: 'hidden',   // clip horizontally
                }}
            >
                <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                    <motion.div
                        style={{
                            display: 'flex',
                            x: x,
                            height: '100%',
                            alignItems: 'center',
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
                                marginLeft: '50vw',  // 👈 offset the first word
                                scrollSnapAlign: 'center',
                            }}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.1}}
                        >
                            <span>{text}</span>
                        </motion.span>
                    </motion.div>
                </div>
            </section>
        </div>
);
}