import styles from './Timer.module.css'
import { useState, useEffect } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState<number>(60)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const getPercentage = () => {
        return (seconds / 60) * 100
    }

    const getProgressBarBackground = () => {
        const red = Math.round((100 - getPercentage()) * 2.55); // Interpolate red channel
        const green = Math.round(getPercentage() * 2.55); // Interpolate green channel
  
        const rgbColor = `rgb(${red}, ${green}, 0)`;
        return rgbColor;
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.seconds}>{seconds}</h2>
            <div className={styles.bar}>
                <div className={styles.progress} style={{ width: `${getPercentage()}%`, backgroundColor: getProgressBarBackground() }} />
            </div>
        </div>
    )
}

export default Timer