import { useState } from 'react'
import styles from './GuessingInput.module.css'
import { tempSongs } from '@/utils/data'
import Image from 'next/image'

const GuessingInput = () => {

    const [inputValue, setInputValue] = useState<string>("")

    const filteredSongs = tempSongs.filter(song => {
        if(inputValue === "") return
        return song.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <>
            <input type="text" placeholder='Enter guess here!' className={styles.input} onChange={(e) => setInputValue(e.target.value)} />
            <div className={styles.results}>
                {
                    filteredSongs.map((song, index) => {
                        if(index > 2) return

                        const isFirst = index === 0
                        const isLast = index === filteredSongs.length - 1

                        const getBorderRadius = () => {
                            if(isFirst) return "0.5rem 0.5rem 0 0"
                            if(isLast) return "0 0 0.5rem 0.5rem"
                            return "0"
                        }

                        const getBorderStyle = () => {
                            if(isFirst) return "solid 1px rgba(98, 98, 98, 0.5)"
                            return "none"
                        }

                        return (
                            <div className={styles.result} key={index} style={{ borderRadius: getBorderRadius(), borderTop: getBorderStyle() }}>
                                <div className={styles["result-image-container"]}>
                                    <Image 
                                        fill
                                        src={song.album.images[0].url}
                                        alt="Song Image"
                                        style={{ borderRadius: "0.5rem" }}
                                    />
                                </div>
                                <div className={styles.info}>
                                    <h1 className={styles.title}>{song.name}</h1>
                                    <h2 className={styles.artist}>{song.artist[0].name}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default GuessingInput