import styles from '../styles/Game.module.css'
import SongleSign from '@/components/home/songle-sign/SongleSign'
import Timer from '@/components/game/timer/Timer'

const Play = () => {
    return (
        <div className={styles.container}>
            <SongleSign notAnimated />
            <Timer />
        </div>
    )
}

export default Play