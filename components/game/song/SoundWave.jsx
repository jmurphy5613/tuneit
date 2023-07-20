import { useEffect, useRef, useState, useCallback } from 'react'
import WaveSurfer from 'wavesurfer.js'
import styles from './Song.module.css'
import Image from 'next/image'

const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null)

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!containerRef.current) return

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        })

        setWavesurfer(ws)

        return () => {
            ws.destroy()
        }
    }, [options, containerRef])

    return wavesurfer
}

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
const WaveSurferPlayer = (props) => {
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = useWavesurfer(containerRef, props)

    // On play button click
    const onPlayClick = useCallback(() => {
        wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
    }, [wavesurfer])

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!wavesurfer) return

        setCurrentTime(0)
        setIsPlaying(false)

        const subscriptions = [
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),
            wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime)),
            // wavesurfer.on('ready', () => {
            //     setTimeout(() => {
            //         // Play the sound
            //         wavesurfer.play();
            //       }, 500); 
            // })
        ]

        return () => {
            subscriptions.forEach((unsub) => unsub())
        }

    }, [wavesurfer])

    return (
        <>
            <div ref={containerRef} style={{ width: '100%' }} />

            <div className={styles["button-container"]}>
                <div className={styles.no}>
                    <div className={styles["no-icon-container"]}>
                        <Image 
                            src="/icons/cross.svg"
                            fill
                            alt='cross'
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <div className={styles["control-icon-container"]}>
                        <Image
                            src="/icons/pause.svg"
                            fill
                            alt='pause'
                        />
                    </div>
                </div>
                <div className={styles.yes}>
                    <div className={styles["yes-icon-container"]}>
                        <Image
                            src="/icons/check.svg"
                            fill
                            alt='check'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default WaveSurferPlayer