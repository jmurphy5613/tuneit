import styles from './HIstoryGrid.module.css'
import { HistoryItem } from '@/utils/types'
import CheckIcon from '../icons/CheckIcon'
import SlashIcon from '../icons/SlashIcon'
import CrossIcon from '../icons/CrossIcon'
import Image from 'next/image'

interface HistoryGridProps {
    songs: HistoryItem[]
}

const HistoryGrid: React.FC<HistoryGridProps> = ({ songs }) => {
    return (
        <>
            <div className={styles.headers}>
                <h1 className={styles["title-label"]}>Title</h1>
                <h1 className={styles["album-label"]}>Album</h1>
                <div className={styles["reaction-label"]}>
                    <div className={styles["reaction-icon-container-label"]}>
                        <CheckIcon stroke='#1db954' />
                    </div>
                    <div className={styles["slash-icon-container"]}>
                        <SlashIcon stroke='#ffffff' />
                    </div>
                    <div className={styles["reaction-icon-container-label"]}>
                        <CrossIcon stroke='#a12828' />
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
            {songs.map((song: HistoryItem, index: number) => (
                <div className={styles.song} key={index}>
                    <div className={styles.title}>
                        <div className={styles["album-icon-container"]}>
                            <Image
                                src={song.albumArt}
                                alt="album cover"
                                fill
                            />
                        </div>
                        <div className={styles.names}>
                            <h1 className={styles.name}>{song.title}</h1>
                            <h2 className={styles["location-location"]}>{song.artist}</h2>
                        </div>
                    </div>
                    <h2 className={styles.description}>{song.album}</h2>
                    <div className={styles.coordinates}>
                        <div className={styles["reaction-icon-container"]}>
                            {song.liked ? <CheckIcon stroke='#1db954' /> : <CrossIcon stroke='#a12828' />}
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}

export default HistoryGrid