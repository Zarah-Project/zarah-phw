import style from "./EssaySection.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import React from "react";
import IconRightArrow from "@/components/Icons/IconRightArrow";
import EssayCard from "@/components/Cards/EssayCard/EssayCard";
import {useRouter} from "next/router";

const EssaySection = ({data=[], header = true, max = 3}) => {
    const router = useRouter();

    return (
      <div className={style.Section}>
        {
          header && (
              <>
                  <Spacer size={'xxl'}/>
                  <div className={style.Header}>
                      <h1>Essays</h1>
                      <Button
                          icon={<IconRightArrow theme={'dark'}/>}
                          iconPlacement={'back'}
                          theme={'dark'}
                          type={'secondary'}
                          width={220}
                          onClick={() => router.push('/essays')}
                          text={'See All Essays'}
                      />
                  </div>
                  <Spacer size={'l'} />
              </>
          )
        }
          <div className={style.Content}>
              {
                  data.map((essay, index) => {
                    return (
                        <div className={style.CardWrapper} key={index}>
                            <EssayCard essay={essay} index={index} />
                        </div>
                    )
                  })
              }
          </div>
          <Spacer size={'xxxl'} />
      </div>
  )
};

export default EssaySection;