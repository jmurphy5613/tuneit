import styles from '../styles/Game.module.css'
import Songs from '@/components/game/song/Songs'
// import { tempSong, tempSong2 } from '@/utils/data'
import { useEffect, useState } from 'react'
import PlayerControls from '@/components/game/player-controls/PlayerControls'
import WaveSurferPlayer from '@/components/game/SoundWave/SoundWave'
import Navbar from '@/components/navbar/Navbar'
import { getRecommendations, getTopTracks } from '@/utils/requests/spotify'
import { Song } from '@/utils/types'
import { addSongToHistory } from '@/utils/requests/users'



const Play = () => {


    const [currentIndex, setCurrentIndex] = useState(0)
    const [lastSongDecision, setLastSongDecision] = useState<'yes' | 'no' | null>(null)

    const [startedPlaying, setStartedPlaying] = useState(false)
    const [shouldPlay, setShouldPlay] = useState(true)

    const [songs, setSongs] = useState<Song[]>()

    const nextSong = () => {
        setCurrentIndex(currentIndex + 1)   
    }

    const reactToSong = async () => {
        if(!lastSongDecision || !songs) return
        const currentSong = songs[currentIndex]
        await addSongToHistory(currentSong, lastSongDecision)
    }

    // const songs = [
    //     tempSong,
    //     tempSong2,
    //     tempSong,
    //     tempSong2,
    //     tempSong,
    //     tempSong2,
    // ]

    const fetchSongs = async () => {
        const topTracks = await getTopTracks()
        let recommendations = await getRecommendations(topTracks)
        setSongs(recommendations)
    }

    useEffect(() => {
        if (currentIndex === -1) return
        reactToSong()
    }, [lastSongDecision])

    useEffect(() => {
        fetchSongs()
    }, [])

    if(!songs) return <></>

    return (
        <>
            <Navbar />
            <div className={styles.container}>

                {/* <div className={styles["background-images"]}>
                    <div className={styles["image-container"]}>
                        <Image
                            src='/art/left-blob.svg'
                            alt="vector"
                            fill
                        />
                    </div>

                    <div className={styles["image-container"]}>
                        <Image
                            src='/art/right-blob.svg'
                            alt="vector"
                            fill
                        />
                    </div>

                </div> */}
                <Songs
                    songs={songs}
                    currentIndex={currentIndex}
                    lastSongDecision={lastSongDecision}
                />

                <div style={{ width: '350px' }}>
                    <WaveSurferPlayer
                        options={{
                            height: 100,
                            waveColor: '#626262',
                            progressColor: '#1db954',
                            url: songs[currentIndex].preview_url,
                            barWidth: 10,
                            barHeight: 0.6,
                            barGap: 2,
                            barRadius: 2,
                            barAlign: "bottom",
                            hideScrollbar: true,
                            cursorWidth: 0
                        }}
                        shouldPlay={shouldPlay}
                    />
                </div>

                {startedPlaying ?
                    <PlayerControls
                        nextSong={nextSong}
                        setLastSongDecision={setLastSongDecision}
                        setShouldPlay={setShouldPlay}
                        shouldPlay={shouldPlay}
                    />
                    :
                    <button className={styles["start-listening"]} onClick={() => {
                        setStartedPlaying(true)
                    }}>Start Listening!</button>
                }
            </div>
        </>
    )
}

export default Play