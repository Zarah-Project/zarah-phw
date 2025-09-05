import styles from "./FiltersPage.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import React from "react";

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
			<div className={styles.AlphabetNav}>
				{"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
					<span
						key={letter}
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
			</div>

			<Spacer size={'l'}/>

			{/* Facet Groups */}
			<div className={styles.Facets}>
				{splitIntoColumns(Object.keys(facets).sort(), 4).map((col, colIdx) => (
					<div key={colIdx} className={styles.Columns}>
						{col.map((letter) => (
							<div key={letter} id={`facet-${letter}`} className={styles.FacetGroup}>
								<h2>{letter}</h2>
								<ul>
									{facets[letter].map((tag) => (
										<li key={tag} onClick={() => onSetSelectedTags(tag)}>{tag}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	)
}

export default FiltersPage;