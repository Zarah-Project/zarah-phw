import style from "./EssaySection.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import React from "react";
import IconRightArrow from "@/components/Icons/IconRightArrow";
import EssayCard from "@/components/Cards/EssayCard";
import {essays} from "@/mockData/essays";

const EssaySection = ({header = true, max = 3}) => {
    const slicedArray = max !== 0 ? essays.slice(0, max) : essays;

    return (
      <div className={style.Section}>
        <Spacer size={header ? 'xxlarge' : 'medium'} />
        {
          header && (
              <>
                  <div className={style.Header}>
                      <h1>Essays</h1>
                      <Button
                          icon={<IconRightArrow theme={'dark'}/>}
                          iconPlacement={'back'}
                          theme={'dark'}
                          type={'secondary'}
                          width={210}
                          text={'See All Essays'}
                      />
                  </div>
                  <Spacer size={'large'} />
              </>
          )
        }
          <div className={style.Content}>
              {
                  slicedArray.map((essay, index) => {
                    return (
                        <div className={style.CardWrapper} key={index}>
                            <EssayCard essay={essay} />
                        </div>
                    )
                  })
              }
          </div>
          <Spacer size={'xxlarge'} />
      </div>
  )
};

export default EssaySection;