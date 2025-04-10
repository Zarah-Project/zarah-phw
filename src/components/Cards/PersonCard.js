import style from "./PersonCard.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import Image from "next/image";
import Button from "@/components/BaseElements/Button";
import IconSearch from "@/components/Icons/IconSearch";
import IconRightArrow from "@/components/Icons/IconRightArrow";

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
                <Spacer size={'medium'} />
                <h2>
                    {getName()['firstName']}<br/>
                    {getName()['lastName']}
                </h2>
                <Spacer size={'medium'} />
                <p>{bio}</p>
                <Spacer size={'medium'} />
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
                        width={220}
                    />
                </div>
            </div>
        )
    }

    const photo = () => {
        return (
            <div className={style.ImageWrapper}>
                <Image
                    src={`/images/examples/${image}`}
                    alt="Card Image"
                    fill
                    className={style.image}
                    priority
                />
            </div>
        )
    }

    return (
        <div className={style.Card}>
            <div className={style.Left}>
                {photoAlign === 'left' ? photo() : dataSheet()}
            </div>
            <div className={style.Right}>
                {photoAlign === 'left' ? dataSheet() : photo()}
            </div>
        </div>
    )
}

export default PersonCard