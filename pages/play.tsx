import styles from '../styles/Game.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import Timer from '@/components/game/timer/Timer'
import Song from '@/components/game/song/Song'
import { tempSong, tempSong2 } from '@/utils/data'
import GuessingInput from '@/components/game/guessing-input/GuessingInput'
import { useEffect, useState } from 'react'


const Play = () => {


    useEffect(() => {
        
    }, [])
        
    const [currentSong, setCurrentSong] = useState<Song>(tempSong)

    return (
        <div className={styles.container}>
            {/* <SongleSign notAnimated /> */}
            {/* <Timer /> */}
            <Song song={currentSong} />
            {/* <GuessingInput /> */}
        </div>
    )
}

export default Play