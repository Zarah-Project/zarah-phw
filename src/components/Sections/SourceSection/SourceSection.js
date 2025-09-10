import React from "react";
import Spacer from "@/components/BaseElements/Spacer";
import SourceCard from "@/components/Cards/SourceCard/SourceCard";
import style from "./SourceSection.module.scss"

const SourceSection = ({data}) => {
    return (
      <div className={style.Section}>
          <Spacer size={'l'} />
          {
              data.map((source, index) => {
                return (
                    <SourceCard key={index} source={source} />
                )
              })
          }
      </div>
  )
};

export default SourceSection;