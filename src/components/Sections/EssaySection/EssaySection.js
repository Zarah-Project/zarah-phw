import style from "./EssaySection.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Button from "@/components/BaseElements/Button";
import React from "react";
import IconRightArrow from "@/components/Icons/IconRightArrow";
import EssayCard from "@/components/Cards/EssayCard/EssayCard";
import {useRouter} from "next/router";
import {Media} from "@/utils/media";
import {useMedia} from "react-use";

const EssaySection = ({data=[], header = true, max = 3}) => {
    const router = useRouter();

    const isMobile = useMedia('(max-width: 800px)', true);

    return (
      <div className={style.Section}>
        {
          header && (
              <>
                  <Spacer size={'xxl'}/>
                  <div className={style.Header}>
                      <h1>Essays</h1>
                      <Media greaterThanOrEqual="md">
                          <Button
                              icon={<IconRightArrow theme={'dark'}/>}
                              iconPlacement={'back'}
                              theme={'dark'}
                              type={'secondary'}
                              width={220}
                              onClick={() => router.push('/essays')}
                              text={'See All Essays'}
                          />
                      </Media>
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
          <Media lessThan="md">
              <Spacer size={'xxl'} />
              <Button
                  icon={<IconRightArrow theme={'dark'}/>}
                  iconPlacement={'back'}
                  theme={'dark'}
                  type={'secondary'}
                  width={isMobile ? '100%' : 220}
                  onClick={() => router.push('/essays')}
                  text={'See All Essays'}
              />
          </Media>
          <Spacer size={'xxxl'} />
      </div>
  )
};

export default EssaySection;