import { NextRouter } from 'next/router'
import styles from './HomeButtons.module.css'
import { auth } from '@/utils/requests/auth'

interface HomeButtonsProps {
    router: NextRouter,
    isLoggedIn: boolean
}

const HomeButtons:React.FC<HomeButtonsProps> = ({ router, isLoggedIn }) => {

    console.log(isLoggedIn)

    return (
        <div className={styles["buttons-container"]}>
            {
            isLoggedIn ? 
                <>
                    <button className={styles.button} onClick={() => {
                        router.push('/play')
                    }}>Play</button>
                    <button className={styles.button}>Leaderboard</button>
                    <button className={styles.button}>Signout</button>
                </>
            :
                <>
                    <button className={styles.button} onClick={() => {
                        auth(router)
                    }
                    }>Login with Spotify</button>
                </>
            }
        </div>
    )
}

export default HomeButtons