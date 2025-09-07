import styles from "./ResultsPage.module.scss"
import Link from "next/link";
import React from "react";
import TagButton from "@/components/BaseElements/TagButton";
import Spacer from "@/components/BaseElements/Spacer";

const ResultsPage = ({ hits }) => {
	const renderTitle = (record) => {
		if (record['type'] === 'Person') {
			return record['Name']
		} else {
			return record['Title']
		}
	}

	const renderDescription = (record) => {
		if (record['type'] === 'Person') {
			return record['CardText']
		} else {
			return record['ShortDescription']
		}
	}

	const renderResult = (record) => {
		return (
			<>
				<Link key={record['id']} href={`/networks/${record['Slug']}`} className={styles.Wrapper}>
					<h4>{renderTitle(record)}</h4>
					<Spacer size={'s'}/>
					<div className={styles.Type}>{record['type']}</div>
					<div className={styles.Tags}>
						{
							record['Tags'] && record['Tags'].map((tag, idx) => (
								<TagButton key={idx} text={tag} withLinks={false}/>
							))
						}
					</div>
					<Spacer size={'l'}/>
					<p className={styles.Description}>
						{renderDescription(record)}
					</p>
				</Link>
				<Spacer size={'xl'}/>
			</>
		)
	}

	if (hits.length === 0) {
		return (
			<div className={styles.NoResults}>
				<h3>No results found</h3>
				<br/>
				<p>Try adjusting your search or filter to find what you're looking for.</p>
			</div>
		)
	} else {
		return (
			<div>
				{hits.map(record => renderResult(record)) }
			</div>
		)
	}
}

export default ResultsPage;