import styles from '@/styles/Home.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import HomeButtons from '@/components/home-buttons/HomeButtons'
import CreatorCredit from '@/components/creator-credit/CreatorCredit'
import RecentlyPlayed from '@/components/recently-played/RecentlyPlayed'


export default function Home() {
	return (
		<div className={styles.container}>
			<SongleSign />
			<HomeButtons />
			<CreatorCredit />
			<RecentlyPlayed />
		</div>
	)
}
