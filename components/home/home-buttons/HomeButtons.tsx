import { NextRouter } from 'next/router'
import styles from './HomeButtons.module.css'
import { auth } from '@/utils/requests/auth'
import { logout } from '@/utils/localRequests'

interface HomeButtonsProps {
    router: NextRouter,
    isLoggedIn: boolean,
    setIsLoggedIn: (state: boolean) => void
}

const HomeButtons:React.FC<HomeButtonsProps> = ({ router, isLoggedIn, setIsLoggedIn }) => {


    return (
        <div className={styles["buttons-container"]}>
            {
            isLoggedIn ? 
                <>
                    <button className={styles.button} onClick={() => {
                        router.push('/play')
                    }}>Play</button>
                    {/* <button className={styles.button} onClick={() => {
                        logout(router, '/')
                        setIsLoggedIn(false)
                    }}>Signout</button> */}
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