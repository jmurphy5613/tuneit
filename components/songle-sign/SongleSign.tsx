import styles from './SongleSign.module.css'

const SongleSign = () => {
    return (
        <div className={styles.container}>
            <div className={styles["letter-container"]}>
                <h1 className={styles.letter}>S</h1>
            </div>
            <div className={styles.block} style={{ left: '7.5px' }} />
            {/* <h1 className={styles.letter}>O</h1>
            <h1 className={styles.letter}>N</h1>
            <div className={styles.block} style={{ left: '215px' }} />
            <h1 className={styles.letter}>G</h1>
            <h1 className={styles.letter}>L</h1>
            <div className={styles.block} style={{ left: '322.5px' }} /> */}



        </div>
    )
}

export default SongleSign