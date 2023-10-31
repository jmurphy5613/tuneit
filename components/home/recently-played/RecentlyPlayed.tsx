import { getAllUsers } from '@/utils/requests/users'
import styles from './RecentlyPlayed.module.css'
import { userItem, duplicatedUserItems } from '@/utils/data'
import { User } from '@/utils/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const RecentlyPlayed = () => {

    const [users, setUsers] = useState<User[]>()

    const fetchUsers = async () => {
        const allUsers = await getAllUsers()
        const duplicatedUsers = duplicatedUserItems(allUsers)        
        setUsers(duplicatedUsers)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if(!users) return <></>

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Users:</h1>
            <div className={styles["slider-container"]}>
                <div className={styles["slider-animation"]}>
                    {users.map((item, index) => {
                        return (
                            <div className={styles.user} key={index}>
                                <div className={styles["profile-image-container"]}>
                                    <Image
                                        fill
                                        src={item.profilePicture}
                                        alt="user-image"
                                        style={{ borderRadius: '100%' }}
                                    />
                                </div>
                                <h3 className={styles.username}>{item.displayName}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecentlyPlayed