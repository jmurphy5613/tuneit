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
            <div className={styles["song-image-container"]}>
                {
                    isRevealed ?
                        <Image
                            src={song.album.images[0].url}
                            alt="Song Image"
                            fill
                        />
                        :
                        <h1 className={styles.question}>?</h1>

                }
            </div>

            <div className={styles.info}>
                <div className={styles.content}>
                    {isRevealed ? <h1 className={styles.title}>{song.name}</h1> : <h1 className={styles.title}>{anonomize(song.name)}</h1>}
                    {isRevealed ? <h2 className={styles.artist}>{song.artist[0].name}</h2> : <h2 className={styles.artist}>{anonomize(song.artist[0].name)}</h2>}
                </div>
                <div className={styles["skip-image-container"]} onMouseEnter={() => setHoveringSkip(true)} onMouseLeave={() => setHoveringSkip(false)}>
                    {hoveringSkip ?
                        <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_104)">
                                <path d="M15 45L36.25 30L15 15V45ZM40 15V45H45V15H40Z" fill="#1db954" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_104">
                                    <rect width="60" height="60" fill="#1db954" />
                                </clipPath>
                            </defs>
                        </svg>

                        :
                        <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_104)">
                                <path d="M15 45L36.25 30L15 15V45ZM40 15V45H45V15H40Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_104">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default Song