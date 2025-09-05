import React from "react";
import styles from "./TagFilterButton.module.scss";

const TagFilterButton = ({ label, onRemove }) => {
	return (
		<div className={styles.Tag}>
			<span>{label}</span>
			<button className={styles.CloseButton} onClick={() => onRemove(label)}>
				✕
			</button>
		</div>
	);
};

export default TagFilterButton;