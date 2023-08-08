import { HistoryItem, Song } from "@/utils/types"
import styles from './PlaylistView.module.css'
import Image from "next/image"


interface PlaylistViewProps {
    songs: Song[]
}

const PlaylistView: React.FC<PlaylistViewProps> = ({ songs }) => {

    console.log(songs)

    return (
        <>
            <div className={styles.headers}>
                <h1 className={styles["title-label"]}>Title</h1>
                <h1 className={styles["album-label"]}>Album</h1>
                <div className={styles["reaction-label"]}>

                </div>
            </div>
            <div className={styles.divider} />
            {songs.map((song: Song, index: number) => (
                <div className={styles.song} key={index}>
                    <div className={styles.title}>
                        <div className={styles["album-icon-container"]}>
                            <Image
                                src={song.album.images[0].url}
                                alt="album cover"
                                fill
                            />
                        </div>
                        <div className={styles.names}>
                            <h1 className={styles.name}>{song.name}</h1>
                            <h2 className={styles["location-location"]}>{song.artists[0].name}</h2>
                        </div>
                    </div>
                    <h2 className={styles.description}>{song.album.name}</h2>
                    <div className={styles.coordinates}>
                        <div className={styles["reaction-icon-container"]}>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}

export default PlaylistView