import styles from './Timer.module.css'
import { useState, useEffect } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.container}>
            <h2>{seconds}</h2>
            <div className={styles.bar}>
                <div className={styles.progress} />
            </div>
        </div>
    )
}

export default Timer