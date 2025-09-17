import styles from "./ResultsPage.module.scss"
import Link from "next/link";
import React, {useState} from "react";
import TagButton from "@/components/BaseElements/TagButton";
import Spacer from "@/components/BaseElements/Spacer";
import {motion} from "motion/react";
import EventCard from "@/components/Cards/EventCard/EventCard";


const ResultsPage = ({ hits, types, total }) => {
	const [selectedType, setSelectedType] = useState("All");

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

	const getURL = (type) => {
		const url_mapping = {
			'Person': 'people',
			'Activism Story': 'activism/story',
			'Network': 'networks',
			'Essay': 'essays',
			'Source': 'sources'
		}

		return url_mapping[type]
	}

	const renderResult = (record, idx) => {


		if (record['type'] === 'Network') {
			console.log(record)
			return <EventCard
				event={record}
				city={record['NetworkCity'] ? record['NetworkCity']['City'] : 'Unknown'}
				truncate={true}
				index={idx}
				isSearch={true}
			/>
		} else {

			return (
				<>
					<motion.div
						key={record.id}
						className={styles.Wrapper}
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true, amount: 0.2}}
						transition={{
							duration: 0.4,
							ease: "easeOut",
							delay: idx < 2 ? idx * 0.15 : 0, // 👈 per-item delay
						}}
					>
						<Link key={record['id']} href={`/${getURL(record['type'])}/${record['Slug']}`}>
							<h4>{renderTitle(record)}</h4>
						</Link>
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
					</motion.div>
					<Spacer size={'xl'}/>
				</>
			)
		}
	}

	const renderTypeSelectors = () => {
		return (
			<div className={styles.TypeSelectors}>
				<span className={selectedType === 'All' ? styles.Active : ''} onClick={() => setSelectedType('All')}>All ({total})</span>
				{
					Object.keys(types).map((key, idx) => {
						return (<span className={selectedType === key ? styles.Active : ''} onClick={() => setSelectedType(key)}>{key} ({types[key]})</span>)
					})
				}
			</div>
		)
	}

	const renderResults = () => {
		const results = selectedType === 'All' ? hits : hits.filter(hit => hit.type === selectedType)

		return results.map((record, idx) => renderResult(record, idx))
	}

	if (hits.length === 0) {
		return (
			<div className={styles.NoResults}>
				<h3>No results found</h3>
				<br/>
				<p>Try adjusting your search or filter to find what you're looking for.</p>
			</div>
		)
	}

	return (
		<div>
			{renderTypeSelectors()}
			<Spacer size={'xl'}/>
			{renderResults()}
		</div>
	)
}

export default ResultsPage;