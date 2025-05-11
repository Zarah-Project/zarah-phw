import style from "./NetworkList.module.scss";
import Accordion from "@/components/BaseElements/Accordion";
import EventCard from "@/components/Cards/EventCard/EventCard";
import {events} from "@/mockData/events";
import Spacer from "@/components/BaseElements/Spacer";

const Washington = () => {
    return (
        <>
            <EventCard event={events[2]} truncate={false} />
            <Spacer size={'xxl'} />
        </>
    )
}

const Geneva = () => {
    return (
        <>
            <EventCard event={events[0]} truncate={false} />
            <EventCard event={events[1]} truncate={false} />
            <Spacer size={'xxl'} />
        </>
    )
}


const NetworkList = () => {
    const items = [
        { title: 'Washington DC', content: <Washington /> },
        { title: 'Geneva', content: <Geneva /> },
        { title: 'Paris', content: '' },
        { title: 'Rome', content: '' },
    ];

    return (
        <div className={style.List}>
            <Accordion items={items} />
        </div>
    )
}

export default NetworkList;