import styles from './HomeButtons.module.css'

const HomeButtons = () => {
    return (
        <div className={styles["buttons-container"]}>
            <button className={styles.button}>Play</button>
            <button className={styles.button}>Leaderboard</button>
            <button className={styles.button}>Signout</button>
        </div>
    )
}

export default HomeButtons