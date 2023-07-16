import styles from './RecentlyPlayed.module.css'
import { userItem, duplicatedUserItems } from '@/utils/data'
import Image from 'next/image'

const RecentlyPlayed = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Players:</h1>
            <div className={styles["slider-container"]}>
                <div className={styles["slider-animation"]}>
                    {duplicatedUserItems(userItem).map((item, index) => {
                        return (
                            <div className={styles.user} key={index}>
                                <div className={styles["profile-image-container"]}>
                                    <Image
                                        fill
                                        src={item.image}
                                        alt="user-image"
                                        style={{ borderRadius: '100%' }}
                                    />
                                </div>
                                <h3 className={styles.username}>{item.username}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecentlyPlayed