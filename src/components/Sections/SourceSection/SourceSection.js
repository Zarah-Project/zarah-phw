import React from "react";
import Spacer from "@/components/BaseElements/Spacer";
import {motion} from 'motion/react'
import SourceCard from "@/components/Cards/SourceCard/SourceCard";
import style from "./SourceSection.module.scss"
import {sources} from "@/mockData/sources";

const SourceSection = () => {
    return (
      <div className={style.Section}>
          <Spacer size={'l'} />
          {
              sources.map((source, index) => {
                return (
                    <SourceCard source={source} />
                )
              })
          }
      </div>
  )
};

export default SourceSection;