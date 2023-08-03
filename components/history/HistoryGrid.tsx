import styles from './HIstoryGrid.module.css'
import { HistoryItem } from '@/utils/types'
import CheckIcon from '../icons/CheckIcon'
import SlashIcon from '../icons/SlashIcon'
import CrossIcon from '../icons/CrossIcon'

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
                    <div className={styles["reaction-icon-container"]}>
                        <CheckIcon stroke='#1db954' />
                    </div>
                    <div className={styles["slash-icon-container"]}>
                        <SlashIcon stroke='#ffffff' />
                    </div>
                    <div className={styles["reaction-icon-container"]}>
                        <CrossIcon stroke='#a12828' />
                    </div>
                </div>  
            </div>
            <div className={styles.divider} />
            {/* {songs.map((song: HistoryItem, index: number) => (
                <div className={styles.location} key={index}>
                    <div className={styles.title}>
                        <div className={styles.color} style={{ backgroundImage: song.albumArt }} />
                        <div className={styles.names}>
                            <h1 className={styles.name}>{song.title}</h1>
                            <h2 className={styles["location-location"]}>{song.artist}</h2>
                        </div>
                    </div>
                    <h2 className={styles.description}>{song.album}</h2>
                    <div className={styles["logo-container"]}>

                    </div>
                </div>
            ))} */}
        </>
    )
}

export default HistoryGrid