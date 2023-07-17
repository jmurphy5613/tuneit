import { NextRouter } from 'next/router'
import styles from './HomeButtons.module.css'
import { auth } from '@/utils/requests/auth'

interface HomeButtonsProps {
    router: NextRouter
}

const HomeButtons:React.FC<HomeButtonsProps> = ({ router }) => {
    return (
        <div className={styles["buttons-container"]}>
            <button className={styles.button} onClick={() => {
                auth(router)
            }}>Play</button>
            <button className={styles.button}>Leaderboard</button>
            <button className={styles.button}>Signout</button>
        </div>
    )
}

export default HomeButtons