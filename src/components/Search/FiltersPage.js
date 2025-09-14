import styles from "./FiltersPage.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";
import {motion} from "motion/react";

const FiltersPage = ({facets, onSetSelectedTags}) => {
	const splitIntoColumns = (sortedKeys, numCols) => {
		const perCol = Math.ceil(sortedKeys.length / numCols);
		const cols = [];
		for (let i = 0; i < numCols; i++) {
			cols.push(sortedKeys.slice(i * perCol, (i + 1) * perCol));
		}
		return cols;
	}

	return (
		<>
			{/* Alphabet Navigation */}
			<motion.div
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				viewport={{once: true, amount: 0.2}}
				transition={{
					duration: 0.4,
					ease: "easeOut",
					delay: 0, // 👈 per-item delay
				}}
				className={styles.AlphabetNav}>
				{"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
					<span
						key={letter}
						data-letter={letter}
						onClick={() => {
							if (Object.keys(facets).includes(letter)) {
								const el = document.getElementById(`facet-${letter}`);
								if (el) {
									el.scrollIntoView({behavior: "smooth", block: "start", offset: 100});
								}
							}
						}}
						className={Object.keys(facets).includes(letter) ? styles.Letter : `${styles.Letter} ${styles.Disabled}`}
					>{letter}</span>
				))}
			</motion.div>

			<Spacer size={'l'}/>

			{/* Facet Groups */}
			<div className={styles.Facets}>
				{splitIntoColumns(Object.keys(facets).sort(), 4).map((col, colIdx) => (
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true, amount: 0.2}}
						transition={{
							duration: 0.4,
							ease: "easeOut",
							delay: colIdx * 0.15, // 👈 per-item delay
						}}
						key={colIdx} className={styles.Columns}>
						{col.map((letter) => (
							<div key={letter} id={`facet-${letter}`} className={styles.FacetGroup}>
								<h2>{letter}</h2>
								<ul>
									{facets[letter].map((tag, idx) => (
										<motion.li
											initial={{opacity: 0, y: 30}}
											whileInView={{opacity: 1, y: 0}}
											viewport={{once: true, amount: 0.2}}
											transition={{
												duration: 0.4,
												ease: "easeOut",
												delay: idx * 0.05, // 👈 per-item delay
											}}
											key={tag}
											onClick={() => onSetSelectedTags(tag)}>
											{tag}
										</motion.li>
									))}
								</ul>
							</div>
						))}
					</motion.div>
				))}
			</div>
		</>
	)
}

export default FiltersPage;