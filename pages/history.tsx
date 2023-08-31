import HistoryGrid from '@/components/history/HistoryGrid'
import Navbar from '@/components/navbar/Navbar'
import styles from '@/styles/History.module.css'
import { getHistoryFromUser } from '@/utils/requests/users'
import { HistoryItem } from '@/utils/types'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const History = () => {

    const router = useRouter()

    const [songs, setSongs] = useState<HistoryItem[]>()

    const fetchSongs = async (user_id: number) => {
        const songs = await getHistoryFromUser(user_id)
        setSongs(songs.reverse())
    }

    useEffect(() => {
        const user_id = localStorage.getItem('user_id')
        if (!user_id) {
            router.push('/')
        } else {
            fetchSongs(parseInt(user_id))
        }
    }, [])

    if(!songs) return <></>

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Recently Played</h1>
                <HistoryGrid songs={songs} />
            </div>
        </>

    )
}

export default History