import styles from '../styles/Game.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import Timer from '@/components/game/timer/Timer'
import Song from '@/components/game/song/Song'
import { tempSong } from '@/utils/data'
import GuessingInput from '@/components/game/guessing-input/GuessingInput'
import { useEffect } from 'react'


const Play = () => {


    useEffect(() => {
    }, [])
        

    return (
        <div className={styles.container}>
            {/* <SongleSign notAnimated /> */}
            {/* <Timer /> */}
            <Song song={tempSong} isRevealed={false} />
            {/* <GuessingInput /> */}
        </div>
    )
}

export default Play