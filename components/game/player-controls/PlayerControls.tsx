import { useEffect } from 'react'
import styles from './PlayerControls.module.css'
import Image from 'next/image'

interface PlayerControlsProps {
    nextSong: () => void,
    setLastSongDecision: (decision: 'yes' | 'no' | null) => void,
    setShouldPlay: (state: boolean) => void,
    shouldPlay: boolean,
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ nextSong, setLastSongDecision, setShouldPlay, shouldPlay }) => {
    return (
        <div className={styles["button-container"]}>
            <div className={styles.no} onClick={() => {
                nextSong()
                setLastSongDecision('no')
            }}>
                <div className={styles["no-icon-container"]}>
                    <Image
                        src="/icons/cross.svg"
                        fill
                        alt='cross'
                    />
                </div>
            </div>
            {shouldPlay ? <div className={styles.control} onClick={() => setShouldPlay(false)}>
                <div className={styles["control-icon-container"]}>
                    <Image
                        src="/icons/pause.svg"
                        fill
                        alt='pause'
                    />
                </div>
            </div>
                :
            <div className={styles.control} onClick={() => setShouldPlay(true)}>
                <div className={styles["control-icon-container"]}>
                    <Image
                        src="/icons/Play_light.svg"
                        fill
                        alt='play'
                    />
                </div>
            </div>
                
            }
            <div className={styles.yes} onClick={() => {
                nextSong()
                setLastSongDecision('yes')
            }}>
                <div className={styles["yes-icon-container"]}>
                    <Image
                        src="/icons/check.svg"
                        fill
                        alt='check'
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayerControls