import styles from './PlayerControls.module.css'
import Image from 'next/image'

const PlayerControls = () => {
    return (
        <div className={styles["button-container"]}>
            <div className={styles.no}>
                <div className={styles["no-icon-container"]}>
                    <Image
                        src="/icons/cross.svg"
                        fill
                        alt='cross'
                    />
                </div>
            </div>
            <div className={styles.control}>
                <div className={styles["control-icon-container"]}>
                    <Image
                        src="/icons/pause.svg"
                        fill
                        alt='pause'
                    />
                </div>
            </div>
            <div className={styles.yes}>
                <div className={styles["yes-icon-container"]}>
                    <Image
                        src="/icons/check.svg"
                        fill
                        alt='check'
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayerControls