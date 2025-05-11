import React, { useState } from 'react';
import style from './Accordion.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import IconChevronDown from "@/components/Icons/IconChevronDown";


const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.accordionItem}>
            <button className={style.Header} onClick={() => setIsOpen(!isOpen)}>
                <h4>{title}</h4>
                <div className={style.Icon}>
                    <IconChevronDown theme={'light'}/>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={style.motionWrapper}
                    >
                        <div className={style.content}>{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className={style.accordion}>
            {items.map((item, i) => (
                <AccordionItem key={i} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;