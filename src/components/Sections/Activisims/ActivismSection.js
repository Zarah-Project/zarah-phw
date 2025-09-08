import style from './ActivismSection.module.scss';
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import ActivismCard from "@/components/Cards/ActivismCard/ActivismCard";
import getImageData from "@/utils/content/getImageData";

const ActivismSection = ({group}) => {
    const image = getImageData(group['Image'], 'large')

    return (
        <div className={style.Section}>
            <div className={`${style.TitleSection} ${style.SectionPiece}`}>
                <div className={style.TitleWrapper}/>
                <div className={style.Title}>
                    <h1>{group['Type']}</h1>
                </div>
                <div className={style.ImageWrapper}>
                    {
                        image['url'] !== '' &&
                        <Photo image={image} minHeight={576}/>
                    }
                </div>
            </div>
            <div className={`${style.Description} ${style.SectionPiece}`}>
                {group['Description']}
            </div>
            <div className={`${style.Cards} ${style.SectionPiece}`}>
                {
                    group['ActivismStories'].map((story, index) => (
                        <div className={style.Card}>
                            <ActivismCard key={index} index={index} activismStory={story}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActivismSection