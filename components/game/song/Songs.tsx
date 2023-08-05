import styles from './Song.module.css'
import { Song } from '@/utils/types'
import Image from 'next/image'
import WaveSurferPlayer from '../SoundWave/SoundWave'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SpotifyIcon from '@/public/icons/Spotify'



interface SongsProps {
    songs: Song[],
    currentIndex: number,
    lastSongDecision: 'yes' | 'no' | null,
}

interface SongProps {
    song: Song,
    currentIndex: number,
    lastSongDecision: 'yes' | 'no' | null,
    index: number,
}

const Song: React.FC<SongProps> = ({ song, currentIndex, lastSongDecision, index }) => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)

    const [hoveringIcon, setHoveringIcon] = useState(false)

    useEffect(() => {
        if (currentIndex-1 !== index) return
        if (lastSongDecision === 'yes') {
            setX(1000)
            setY(0)
            setRotate(45)
        } else if (lastSongDecision === 'no') {
            setX(-1000)
            setY(0)
            setRotate(-45)
        }
    }, [currentIndex, lastSongDecision])



    return (
        <>
            <motion.div
                animate={{
                    x: x,
                    y: y,
                    rotate: rotate,
                    transition: {
                        duration: 0.5
                    }
                }}
                transition={{ type: "spring" }}
                style={{ position: 'absolute', bottom: 0, zIndex: 50 - index }}
            >
                <div className={styles["song-image-container"]}>
                    <Image
                        src={song.album.images[0].url}
                        alt="Song Image"
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.names}>
                        <h1 className={styles.title}>{song.name}</h1>
                        <h2 className={styles.artist}>{song.artists[0].name}</h2>
                    </div>
                    <div className={styles["external-icon-container"]}
                        onMouseEnter={() => setHoveringIcon(true)}
                        onMouseLeave={() => setHoveringIcon(false)}
                        onClick={() => window.open(song.uri)}
                    >
                        <SpotifyIcon fill={hoveringIcon ? '#1db954' : '#626262'} />
                    </div>
                </div>
            </motion.div>
        </>
    )
}


const Songs: React.FC<SongsProps> = ({ songs, currentIndex, lastSongDecision }) => {
    return (
        <div className={styles.container}>

            <div className={styles.box} />
            <div className={styles.box1} />
            <motion.div
            >
                <div className={styles["song-image-container"]}>
        
                </div>
                <div className={styles.content}>
                    <div className={styles.names}>
                        <h1 className={styles.title}>hi</h1>
                        <h2 className={styles.artist}></h2>
                    </div>
                    <div className={styles["external-icon-container"]}>

                    </div>
                </div>
            </motion.div>
            {
                songs.map((song, index) => {
                    return (
                        <Song
                            song={song}
                            key={index}
                            index={index}
                            currentIndex={currentIndex}
                            lastSongDecision={lastSongDecision}
                        />
                    )
                })
            }

        </div>
    )
}

export default Songs