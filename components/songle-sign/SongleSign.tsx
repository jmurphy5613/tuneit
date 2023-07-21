import styles from './SongleSign.module.css'

interface SongleSignProps {
    notAnimated?: boolean
}

const SongleSign: React.FC<SongleSignProps> = ({ notAnimated }) => {

    if (notAnimated) {
        return (
            <div className={styles["smaller-container"]}>
                <div className={styles["letter-container"]}>
                    <h1 className={styles["letter-not-animated"]}>T</h1>
                </div>
                <div className={styles["not-animated-block1"]}  />
                <div className={styles["letter-container"]}>
                    <h1 className={styles["other-letter-not-animated"]}>U</h1>
                </div>
                <div className={styles["letter-container"]}>
                    <h1 className={styles["letter-not-animated"]}>N</h1>
                </div>
                <div className={styles["not-animated-block2"]} />
                <div className={styles["letter-container"]}>
                    <h1 className={styles["other-letter-not-animated"]}>E</h1>
                </div>
                <div className={styles["letter-container"]}>
                    <h1 className={styles["letter-not-animated"]}>I</h1>
                </div>
                <div className={styles["not-animated-block3"]}  />
                <div className={styles["letter-container"]}>
                    <h1 className={styles["other-letter-not-animated"]}>T</h1>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>T</h1>
            </div>
            <div className={styles.block1} />
            <div className={styles["letter-container"]}>
                <h1 className={styles["other-letter"]}>U</h1>
            </div>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>N</h1>
            </div>
            <div className={styles.block2} />
            <div className={styles["letter-container"]}>
                <h1 className={styles["other-letter"]}>E</h1>
            </div>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>I</h1>
            </div>
            <div className={styles.block3} />
            <div className={styles["letter-container"]}>
                <h1 className={styles["other-letter"]}>T</h1>
            </div>
        </div>
    )
}

export default SongleSign