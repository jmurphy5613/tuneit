import styles from './Navbar.module.css'
import SongleSign from '../songle-sign/SongleSign'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import HomeIcon from '../icons/HomeIcon'
import ClockIcon from '../icons/ClockIcon'
import BookIcon from '../icons/BookIcons'
import GearIcon from '../icons/GearIcon'

function useOutsideAlerter(ref: React.RefObject<HTMLUnknownElement>) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: { target: any; }) {
			if (ref.current && !ref.current.contains(event.target)) {
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

const Navbar = () => {

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	const [showPopup, setShowPopup] = useState<boolean>(true)

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
								<div className={styles["link-item"]}>
									<div className={styles["icon-container"]}>
										<HomeIcon stroke="#ffffff" />
									</div>
									<h2 className={styles["link-title"]}>Home</h2>
								</div>
								<div className={styles["link-item"]}>
									<div className={styles["icon-container"]}>
										<ClockIcon stroke="#ffffff" />
									</div>
									<h2 className={styles["link-title"]}>History</h2>
								</div>
								<div className={styles["link-item"]}>
									<div className={styles["icon-container"]}>
										<BookIcon stroke="#ffffff" />
									</div>
									<h2 className={styles["link-title"]}>My Playlist</h2>
								</div>
								<div className={styles["link-item"]}>
									<div className={styles["icon-container"]}>
										<GearIcon stroke="#ffffff" />
									</div>
									<h2 className={styles["link-title"]}>Settings</h2>
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