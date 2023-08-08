import styles from './Navbar.module.css'
import SongleSign from '../songle-sign/SongleSign'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef, use } from 'react'
import HomeIcon from '../icons/HomeIcon'
import ClockIcon from '../icons/ClockIcon'
import BookIcon from '../icons/BookIcons'
import GearIcon from '../icons/GearIcon'
import LeaveIcon from '../icons/LeaveIcon'
import { logout } from '@/utils/localRequests'
import PlayIcon from '../icons/PlayIcon'



const Navbar = () => {

	function useOutsideAlerter(ref: React.RefObject<HTMLUnknownElement>) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event: { target: any; }) {
				if (ref.current && !ref.current.contains(event.target)) {
					setShowPopup(false)
				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	const [showPopup, setShowPopup] = useState<boolean>(false)

	const [homeHover, setHomeHover] = useState<boolean>(false)
	const [historyHover, setHistoryHover] = useState<boolean>(false)
	const [playlistHover, setPlaylistHover] = useState<boolean>(false)
	const [settingsHover, setSettingsHover] = useState<boolean>(false)
	const [logoutHover, setLogoutHover] = useState<boolean>(false)
	const [playHover, setPlayHover] = useState<boolean>(false)

	const router = useRouter()

	return (
		<div className={styles.container}>
			<SongleSign notAnimated />
			<div className={styles["right-container"]}>
				<div className={styles["profile-image-container"]} ref={wrapperRef} onClick={() => setShowPopup(true)}>
					<Image
						src="/pfps/johntransparent.png"
						alt="profile"
						fill
						style={{ borderRadius: '100%' }}
					/>
					{showPopup &&
						<div className={styles.popup}>
							<div className={styles.header}>
								<div className={styles["pfp-container"]}>
									<Image
										src="/pfps/johntransparent.png"
										alt="profile"
										fill
										style={{ borderRadius: '100%' }}
									/>
								</div>
								<div className={styles["name-container"]}>
									<h1 className={styles.name}>John</h1>
									<h2 className={styles.email}>jmurphy5613@gmail.com</h2>
								</div>
							</div>
							<div className={styles.links}>
								<div className={styles["link-item"]} onMouseEnter={() => setHomeHover(true)} onMouseLeave={() => setHomeHover(false)} onClick={() => router.push('/')}>
									<div className={styles["icon-container"]}>
										<HomeIcon stroke={homeHover ? "#1db954" : "#ffffff"} />
									</div>
									<h2 className={styles["link-title"]} style={{ color: homeHover ? "#1db954" : "#ffffff" }}>Home</h2>
								</div>
								<div className={styles["link-item"]} onMouseEnter={() => setPlayHover(true)} onMouseLeave={() => setPlayHover(false)} onClick={() => router.push('/play')}>
									<div className={styles["icon-container"]}>
										<PlayIcon stroke={playHover ? "#1db954" : "#ffffff"} />
									</div>
									<h2 className={styles["link-title"]} style={{ color: playHover ? "#1db954" : "#ffffff" }}>Play</h2>
								</div>
								<div className={styles["link-item"]} onMouseEnter={() => setHistoryHover(true)} onMouseLeave={() => setHistoryHover(false)} onClick={() => router.push('/history')}>
									<div className={styles["icon-container"]}>
										<ClockIcon stroke={historyHover ? "#1db954" : "#ffffff"} />
									</div>
									<h2 className={styles["link-title"]} style={{ color: historyHover ? "#1db954" : "#ffffff" }}>History</h2>
								</div>
								<div className={styles["link-item"]} onMouseEnter={() => setPlaylistHover(true)} onMouseLeave={() => setPlaylistHover(false)} onClick={() => router.push('/my-playlist')}>
									<div className={styles["icon-container"]}>
										<BookIcon stroke={playlistHover ? "#1db954" : "#ffffff"} />
									</div>
									<h2 className={styles["link-title"]} style={{ color: playlistHover ? "#1db954" : "#ffffff" }}>My Playlist</h2>
								</div>
								{/* <div className={styles["link-item"]} onMouseEnter={() => setSettingsHover(true)} onMouseLeave={() => setSettingsHover(false)}>
									<div className={styles["icon-container"]}>
										<GearIcon stroke={settingsHover ? "#1db954" : "#ffffff"} />
									</div>
									<h2 className={styles["link-title"]} style={{ color: settingsHover ? "#1db954" : "#ffffff" }}>Settings</h2>
								</div> */}

								<div className={styles.divider} />

								<div className={styles["link-item"]} onMouseEnter={() => setLogoutHover(true)} onMouseLeave={() => setLogoutHover(false)} onClick={() => {
									logout(router, '/')
								}}>
									<div className={styles["icon-container"]}>
										<LeaveIcon stroke={logoutHover ?  "#a12828" :"#ffffff"} />
									</div>
									<h2 className={styles["link-title"]} style={{ color: logoutHover ?  "#a12828" :"#ffffff"  }}>Logout</h2>
								</div>



							</div>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Navbar