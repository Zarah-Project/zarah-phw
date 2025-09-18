import style from "./FurtherReadingSection.module.scss";
import React from "react";
import readings from "@/data/readings";
import FurtherReadingCard from "@/components/Cards/FurtherReadingCard/FurtherReadingCard";
import Spacer from "@/components/BaseElements/Spacer";

const FurtherReadingSection = () => {
    return (
      <div className={style.Section}>
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