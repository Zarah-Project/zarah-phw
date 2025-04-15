import style from "./FurtherReadingSection.module.scss";
import React from "react";
import readings from "@/mockData/readings";
import FurtherReadingCard from "@/components/Cards/FurtherReadingCard/FurtherReadingCard";
import Spacer from "@/components/BaseElements/Spacer";

const FurtherReadingSection = () => {
    return (
      <div className={style.Section}>
          <div className={style.Header}>
              <h1>Further Readings</h1>
          </div>
          <Spacer size={'xlarge'} />
          {
              readings.map((reading, index) => {
                return (
                    <FurtherReadingCard reading={reading} />
                )
              })
          }
      </div>
  )
};

export default FurtherReadingSection;