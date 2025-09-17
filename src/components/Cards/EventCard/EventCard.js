import style from "./EventCard.module.scss";
import { motion } from "motion/react";
import React from "react";
import IconLocation from "@/components/Icons/IconLocation";
import IconCalendar from "@/components/Icons/IconCalendar";
import TagButton from "@/components/BaseElements/TagButton";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import formatEventDate from "@/utils/formatEventDate";
import Link from "next/link";

const EventCard = ({ event, city, truncate = true, index = 0, isSearch = false }) => {
    const { id, Title, StartDate, EndDate, Slug, Content, Tags } = event;

    const renderDate = (startDate, endDate) => {
        const sd = startDate ? formatEventDate(startDate) : "";
        const ed = endDate ? formatEventDate(endDate) : "";

        return ed !== "" ? `${sd} - ${ed}` : ed
    }

    const getFirstParagraph = () => {
        const paragraphBlock = Content.find(block => block.type === "paragraph");
        if (!paragraphBlock) return "";

        const text = paragraphBlock['children'][0]['text'];
        return truncate ? truncateWithEllipses(text, 150) : text;
    }

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={style.Card}
        >
            <div className={style.Content}>
                <Link href={`/networks/${Slug}`}>
                    <h4>{Title}</h4>
                </Link>
                <div className={style.Place}>
                    <div><IconLocation theme={'light'}/> {city}</div>
                    <div><IconCalendar theme={'light'}/> {renderDate(StartDate, EndDate)}</div>
                </div>
                <div className={style.Tags}>
                    {Tags && Tags.map((tag, index) => (
                        <TagButton text={isSearch ? tag : tag['name']} />
                    ))}
                </div>
                <div className={style.Description}>
                    <p>
                        {getFirstParagraph()}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard;