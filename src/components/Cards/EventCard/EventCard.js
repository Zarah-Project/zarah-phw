import style from "./EventCard.module.scss";
import { motion } from "motion/react";
import React from "react";
import IconLocation from "@/components/Icons/IconLocation";
import IconCalendar from "@/components/Icons/IconCalendar";
import TagButton from "@/components/BaseElements/TagButton";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";

const EventCard = ({ event, truncate = true, index = 0 }) => {
    const { id, title, date, city, tags, description } = event;

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={style.Card}
        >
            <div className={style.Content}>
                <h4>{title}</h4>
                <div className={style.Place}>
                    <div><IconLocation theme={'light'}/> {city}</div>
                    <div><IconCalendar theme={'light'}/> {date}</div>
                </div>
                <div className={style.Tags}>
                    {tags.map((tag, index) => (
                        <TagButton text={tag} />
                    ))}
                </div>
                <div className={style.Description}>
                    <p>
                        {truncate ? truncateWithEllipses(description, 200) : description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard;