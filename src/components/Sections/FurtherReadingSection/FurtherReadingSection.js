import style from "./FurtherReadingSection.module.scss";
import React from "react";
import readings from "@/mockData/readings";
import FurtherReadingCard from "@/components/Cards/FurtherReadingCard/FurtherReadingCard";
import Spacer from "@/components/BaseElements/Spacer";
import {motion} from 'motion/react'

const FurtherReadingSection = () => {
    return (
      <div className={style.Section}>
          <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className={style.Header}>
              <h1>Further Readings</h1>
          </motion.div>
          <Spacer size={'l'} />
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