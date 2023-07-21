import styles from './Song.module.css'
import { Song } from '@/utils/types'
import Image from 'next/image'
import WaveSurferPlayer from './SoundWave'
import { motion } from 'framer-motion'
import { useState } from 'react'



interface SongProps {
    song: Song,
    nextSong: Song,
    currentIndex: number,
}


const Song: React.FC<SongProps> = ({ song, nextSong, currentIndex }) => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)

    return (
        <div className={styles.container}>

            <div className={styles.box} />
            <div className={styles.box1} />
            <div style={{ position: 'absolute', bottom: '35px' }}>
                <div className={styles["song-image-container"]}>
                    <Image
                        src={song.album.images[0].url}
                        alt="Song Image"
                        fill
                    />
                </div>
            </div>
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

                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Song