import styles from "./ResultsPage.module.scss"
import Link from "next/link";
import React from "react";
import TagButton from "@/components/BaseElements/TagButton";
import Spacer from "@/components/BaseElements/Spacer";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";

const ResultsPage = ({ hits }) => {
	const renderResult = (hit) => {
		return (
			<>
				<Link key={hit['id']} href={`/networks/${hit['Slug']}`} className={styles.Wrapper}>
					<h4>{hit['Title']}</h4>
					<Spacer size={'s'}/>
					<div className={styles.Tags}>
						{
							hit['Tags'] && hit['Tags'].map((tag, idx) => (
								<TagButton key={idx} text={tag}/>
							))
						}
					</div>
					<Spacer size={'l'}/>
					<p>{truncateWithEllipses(hit['ShortDescription'] ? hit['ShortDescription'] : "", 150)}</p>
				</Link>
				<Spacer size={'xl'}/>
			</>
		)
	}

	return (
		<div>
			{hits.map(hit => renderResult(hit)) }
		</div>
	)
}

export default ResultsPage;