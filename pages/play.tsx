import styles from '../styles/Game.module.css'
import Songs from '@/components/game/song/Songs'
// import { tempSong, tempSong2 } from '@/utils/data'
import { useEffect, useState } from 'react'
import PlayerControls from '@/components/game/player-controls/PlayerControls'
import WaveSurferPlayer from '@/components/game/SoundWave/SoundWave'
import Navbar from '@/components/navbar/Navbar'
import { addTrackToPlaylist, getRecommendations, getTopTracks } from '@/utils/requests/spotify'
import { Song } from '@/utils/types'
import { addSongToHistory } from '@/utils/requests/users'
import { logout } from '@/utils/localRequests'
import { useRouter } from 'next/router'



const Play = () => {

    const router = useRouter()

    const [currentIndex, setCurrentIndex] = useState(0)
    const [lastSongDecision, setLastSongDecision] = useState<'yes' | 'no' | null>(null)

    const [startedPlaying, setStartedPlaying] = useState(false)
    const [shouldPlay, setShouldPlay] = useState(false)

    const [songs, setSongs] = useState<Song[]>()

    const nextSong = () => {
        setCurrentIndex(currentIndex + 1)   
    }

    const reactToSong = async () => {
        console.log(lastSongDecision, currentIndex)
        if(!lastSongDecision || !songs) return

        //check if there is more than 1 song left, if not fetch more songs
        if(currentIndex === songs.length - 10) {
            const topTracks = await getTopTracks()
            let recommendations = await getRecommendations(topTracks)
            setSongs([...songs, ...recommendations])
        }

        const currentSong = songs[currentIndex-1]
        await addSongToHistory(currentSong, lastSongDecision)

        if(lastSongDecision === 'yes') {
            const playlist_id = localStorage.getItem('playlist_id')
            if(!playlist_id) return
            console.log(currentSong, currentIndex)
            await addTrackToPlaylist(playlist_id, currentSong.uri)
        }
    }

    const fetchSongs = async () => {
        const topTracks = await getTopTracks()
        let recommendations = await getRecommendations(topTracks)
        setSongs(recommendations)
    }

    useEffect(() => {
        if (currentIndex === -1) return
        reactToSong()
    }, [currentIndex])

    useEffect(() => {
        const token_expires_at = localStorage.getItem('expires_at')
        if (!token_expires_at || new Date(JSON.parse(token_expires_at)) < new Date()) {
            logout(router, '/')
        } else {
            fetchSongs()
        }

    }, [])

    console.log(songs, currentIndex)

    if(!songs || !songs[currentIndex]) return <></>

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