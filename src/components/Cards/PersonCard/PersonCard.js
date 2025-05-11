import style from "./PersonCard.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import Button from "@/components/BaseElements/Button";
import IconRightArrow from "@/components/Icons/IconRightArrow";
import Photo from "@/components/BaseElements/Photo";
import TwoColumnCard from "@/components/Cards/Base/TwoColumnCard";

const PersonCard = ({ person, photoAlign = 'left' }) => {
    const { personGroup, name, bio, id, image} = person;

    const getName = () => {
        const nameArray = name.split(' ');
        const firstName = nameArray[0];
        const lastName = nameArray.slice(1).join(' ');
        return { firstName, lastName };
    }

    const dataSheet = () => {
        return (
            <div>
                <p className={style.PersonGroup}>{personGroup}</p>
                <Spacer size={'l'} />
                <h2>
                    {getName()['firstName']}<br/>
                    {getName()['lastName']}
                </h2>
                <Spacer size={'l'} />
                <p>{bio}</p>
                <Spacer size={'l'} />
                <div className={style.Buttons}>
                    <Button
                        text={'Read Biography'}
                        theme={'light'}
                        type={'primary'}
                        width={220}
                    />
                    <Button
                        icon={<IconRightArrow theme={'light'}/>}
                        iconPlacement={'back'}
                        text={'See All Stories'}
                        theme={'light'}
                        type={'secondary'}
                        width={240}
                    />
                </div>
            </div>
        )
    }

    return (
        <TwoColumnCard
            minHeight={'800'}
            photoAlign={photoAlign}
            content={dataSheet()}
            image={<Photo image={image} minHeight={800}/>}
        />
    )
}

export default PersonCard