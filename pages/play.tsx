import styles from '../styles/Game.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import Timer from '@/components/game/timer/Timer'
import Song from '@/components/game/song/Song'
import { tempSong } from '@/utils/data'
import GuessingInput from '@/components/game/guessing-input/GuessingInput'
import { useEffect } from 'react'
import { getEveryPublicTrack } from '@/utils/requests/spotify'


const Play = () => {

    const fetchData = async () => {
        const access_token = localStorage.getItem("access_token")
        if(access_token === null) return
        const songs = await getEveryPublicTrack(access_token)
        console.log(songs)
    }

    useEffect(() => {
        fetchData()
    }, [])
        

    return (
        <div className={styles.container}>
            {/* <SongleSign notAnimated /> */}
            <Timer />
            <Song song={tempSong} isRevealed={false} />
            <GuessingInput />
        </div>
    )
}

export default Play