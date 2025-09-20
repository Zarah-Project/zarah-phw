import styles from "./PersonImagePlaceholder.module.scss";

const PersonImagePlaceholder = ({ name, fontSize = 20, namePosition= 'center' }) => {
    if (namePosition === 'center') {
        return (
            <div className={styles.Placeholder}>
                <div className={styles.Text} style={{fontSize: fontSize}}>{name}</div>
            </div>
        )
    } else {
        return (
            <div className={styles.PlaceholderTopLeft}>
                <div className={styles.Text} style={{fontSize: fontSize}}>{name}</div>
            </div>
        )
    }

}

export default PersonImagePlaceholder;