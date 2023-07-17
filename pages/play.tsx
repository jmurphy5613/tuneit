import styles from '../styles/Game.module.css'
import SongleSign from '@/components/home/songle-sign/SongleSign'

const Play = () => {
    return (
        <div className={styles.container}>
            <SongleSign notAnimated />
        </div>
    )
}

export default Play