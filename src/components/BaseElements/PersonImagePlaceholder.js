import styles from "./PersonImagePlaceholder.module.scss";

const PersonImagePlaceholder = ({ fontSize = 20 }) => {
    return (
        <div className={styles.Placeholder}>
            <div className={styles.Text} style={{fontSize: fontSize}}>No image available</div>
        </div>
    )
}

export default PersonImagePlaceholder;