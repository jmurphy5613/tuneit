import styles from '../styles/Game.module.css'
import Songs from '@/components/game/song/Songs'
import { tempSong, tempSong2 } from '@/utils/data'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import PlayerControls from '@/components/game/player-controls/PlayerControls'
import WaveSurferPlayer from '@/components/game/SoundWave/SoundWave'



const Play = () => {


    const [currentIndex, setCurrentIndex] = useState(-1)
    const [lastSongDecision, setLastSongDecision] = useState<'yes' | 'no' | null>(null)

    const nextSong = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const songs = [
        tempSong,
        tempSong2,
        tempSong,
        tempSong2,
        tempSong,
        tempSong2,
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
            <Songs
                songs={songs}
                currentIndex={currentIndex}
                lastSongDecision={lastSongDecision}
            />

            <div style={{ width: '350px' }}>
                <WaveSurferPlayer
                    height={100}
                    waveColor={'#626262'}
                    progressColor={'#1db954'}
                    url={songs[currentIndex + 1].preview_url}
                    barWidth={10}
                    barHeight={0.6}
                    barGap={2}
                    barRadius={2}
                    barAlign={"bottom"}
                    hideScrollbar={true}
                    cursorWidth={0}
                />
            </div>


            <PlayerControls
                nextSong={nextSong}
                setLastSongDecision={setLastSongDecision}
            />
        </div>
    )
}

export default Play