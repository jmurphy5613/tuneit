import styles from './Navbar.module.css'
import SongleSign from '../songle-sign/SongleSign'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <SongleSign notAnimated />
            <div className={styles["right-container"]}>
                <h2 className={styles.link}>Home</h2>
                <h2 className={styles.link}>Player</h2>
                <h2 className={styles.link}>Playlist</h2>
                <h2 className={styles.link}>History</h2>
                <div className={styles["profile-image-container"]}>
                    <Image
                        src="/pfps/johntransparent.png"
                        alt="profile"
                        fill
                        style={{ borderRadius: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar