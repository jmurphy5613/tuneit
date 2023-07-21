import styles from './Song.module.css'
import { Song } from '@/utils/types'
import Image from 'next/image'
import WaveSurferPlayer from './SoundWave'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'



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

    useEffect(() => {
        if (currentIndex !== index) return
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
                style={{ position: 'absolute', bottom: 0, zIndex: 10-index }}
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
                        <h2 className={styles.artist}>{song.artist[0].name}</h2>
                    </div>
                    <div className={styles["external-icon-container"]}>
                        {index}
                    </div>
                </div>
            </motion.div>
        </>
    )
}


const Songs: React.FC<SongsProps> = ({ songs, currentIndex, lastSongDecision }) => {

    console.log(currentIndex, lastSongDecision)

    return (
        <div className={styles.container}>

            <div className={styles.box} />
            <div className={styles.box1} />
            <motion.div
            >
                <div className={styles["song-image-container"]}>
                    <Image
                        src={''}
                        alt="Song Image"
                        fill
                    />
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