import styles from './Song.module.css'
import { Song } from '@/utils/types'
import Image from 'next/image'
import { useState } from 'react'

interface SongProps {
    song: Song
    isRevealed: boolean
}

const Song: React.FC<SongProps> = ({ isRevealed, song }) => {

    const anonomize = (title: string) => {
        let newString = ""
        for (let i = 0; i < title.length; i++) {
            if (title[i] === " ") {
                newString += " "
            } else {
                newString += "?"
            }
        }
        return newString
    }

    const [hoveringSkip, setHoveringSkip] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.box} />
            <div className={styles.box1} />
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
        </div>
    )
}

export default Song