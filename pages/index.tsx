import styles from '@/styles/Home.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import HomeButtons from '@/components/home-buttons/HomeButtons'
import CreatorCredit from '@/components/creator-credit/CreatorCredit'
import RecentlyPlayed from '@/components/recently-played/RecentlyPlayed'
import { useRouter } from 'next/router'
import { getAccessToken } from '@/utils/requests/auth'
import { useEffect } from 'react'

export default function Home() {

	const router = useRouter()

	const getToken = async (code: string) => {
		const authData = await getAccessToken(code)
		localStorage.setItem('access_token', authData.access_token)
		localStorage.setItem('refresh_token', authData.refresh_token)
		localStorage.setItem('expires_at', JSON.stringify(new Date(Date.now() + 3600 * 1000)))
	}

	useEffect(() => {
        if (router.isReady) {
            const code = router.query.code;
            if (code) {
                getToken(code as string)
            }
        }
	}, [router.isReady])

	return (
		<div className={styles.container}>
			<SongleSign />
			<HomeButtons router={router} />
			<CreatorCredit />
			<RecentlyPlayed />
		</div>
	)
}
