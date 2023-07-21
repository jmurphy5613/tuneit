import styles from '../styles/Game.module.css'
import Song from '@/components/game/song/Song'
import { tempSong, tempSong2 } from '@/utils/data'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import PlayerControls from '@/components/game/player-controls/PlayerControls'
import { relative } from 'path'




const Play = () => {


    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSong = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const songs = [
        tempSong,
        tempSong2
    ]

    return (
        <div className={styles.container}>

            <div className={styles["background-images"]}>
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

            </div>
            <Song 
                song={songs[currentIndex]}
                nextSong={nextSong}
                currentIndex={currentIndex}
            />
            

            <PlayerControls

            />
        </div>
    )
}

export default Play