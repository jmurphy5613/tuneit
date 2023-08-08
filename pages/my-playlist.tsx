import styles from '@/styles/MyPlaylist.module.css'
import Navbar from '@/components/navbar/Navbar'
import { useEffect, useState } from 'react'
import { Song } from '@/utils/types'
import { getUsersPlaylistItems } from '@/utils/requests/spotify'
import PlaylistView from '@/components/playlist-view/PlaylistView'

const MyPlaylist = () => {

    const [songs, setSongs] = useState<Song[]>()

    const fetchSongs = async () => {
        const playlistItems = await getUsersPlaylistItems()
        setSongs(playlistItems)
    }

    useEffect(() => {
        fetchSongs()
    }, [])

    if(!songs) return <></>

    return (
        <>  
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>TuneIt Playlist</h1>
                <PlaylistView songs={songs} />
            </div>
        </>

    )
}

export default MyPlaylist