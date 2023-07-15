import styles from './SongleSign.module.css'

const SongleSign = () => {


    return (
        <div className={styles.container}>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>S</h1>
            </div>
            <div className={styles.block1} />
            <div className={styles["letter-container"]}>
                <h1 className={styles["other-letter"]}>O</h1>
            </div>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>N</h1>
            </div>
            <div className={styles.block2} />
            <div className={styles["letter-container"]}>
                <h1 className={styles["other-letter"]}>G</h1>
            </div>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>L</h1>
            </div>
            <div className={styles.block3} />
            <div className={styles["letter-container"]}>
                <h1 className={styles["other-letter"]}>E</h1>
            </div>





        </div>
    )
}

export default SongleSign