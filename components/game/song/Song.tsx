import styles from './Song.module.css'
import { Song } from '@/utils/types'
import Image from 'next/image'
import WaveSurferPlayer from './SoundWave'


interface SongProps {
    song: Song
}


const Song: React.FC<SongProps> = ({ song }) => {

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
            <div className={styles["music-graph-container"]}>
                <WaveSurferPlayer
                    waveColor={'#626262'}
                    progressColor={'#1db954'}
                    url={song.preview_url}
                    barWidth={10}
                    barHeight={0.5}
                    barGap={2}
                    barRadius={2}
                    barAlign={"bottom"}
                    hideScrollbar= {true}
                    cursorWidth={0} 
                    sayHello={() => console.log("hello")}
                    // autoplay={true} 
                />
            </div>
        </div>
    )
}

export default Song