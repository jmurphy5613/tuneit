import styles from '@/styles/Home.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import HomeButtons from '@/components/home/home-buttons/HomeButtons'
import CreatorCredit from '@/components/home/creator-credit/CreatorCredit'
import RecentlyPlayed from '@/components/home/recently-played/RecentlyPlayed'
import { useRouter } from 'next/router'
import { auth, getAccessToken } from '@/utils/requests/auth'
import { useEffect, useState } from 'react'
import { createUser, getUserBySpotifyId } from '@/utils/requests/users'
import { createPlaylist, getUserData, uploadPlaylistImage } from '@/utils/requests/spotify'
import { UserInfo } from '@/utils/types'

export default function Home() {

	const router = useRouter()

	const getToken = async (code: string) => {
		const authData = await getAccessToken(code)
		localStorage.setItem('access_token', authData.access_token)
		localStorage.setItem('refresh_token', authData.refresh_token)
		localStorage.setItem('expires_at', JSON.stringify(new Date(Date.now() + 3600 * 1000)))
		const userData = await getUserData(authData.access_token)
		const tuneItUser = await getUserBySpotifyId(userData.id)
		localStorage.setItem('user_id', tuneItUser.id)


		if (tuneItUser.message) {
			const user = await createUser(userData)
			const playlist = await createPlaylist(user.spotifyId)
			localStorage.setItem('playlist_id', playlist.id)
			await uploadPlaylistImage(playlist.id)
		}
		router.push('/play')
	}

	useEffect(() => {
		if (router.isReady) {
			const code = router.query.code;
			if (code) {
				getToken(code as string)
			}
		}
	}, [router.isReady])

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>()

	useEffect(() => {
		const access_token = localStorage.getItem('access_token')
		const expires_at = localStorage.getItem('expires_at')
		if (access_token && expires_at && new Date(JSON.parse(expires_at)) > new Date()) {
			setIsLoggedIn(true)
		} else {
			setIsLoggedIn(false)
		}
	}, [])

	if (isLoggedIn === undefined) return <></>


	return (
		<div className={styles.container}>
			<SongleSign />
			<HomeButtons isLoggedIn={isLoggedIn} router={router} setIsLoggedIn={setIsLoggedIn} />
			<CreatorCredit />
			<RecentlyPlayed />
		</div>
	)
}
