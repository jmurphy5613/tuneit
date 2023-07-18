import styles from '../styles/Game.module.css'
import SongleSign from '@/components/home/songle-sign/SongleSign'
import Timer from '@/components/game/timer/Timer'
import Song from '@/components/game/song/Song'
import { tempSong } from '@/utils/data'


const Play = () => {
    return (
        <div className={styles.container}>
            <SongleSign notAnimated />
            <Timer />
            <Song song={tempSong} isRevealed={false} />
        </div>
    )
}

export default Play