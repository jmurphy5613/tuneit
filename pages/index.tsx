import styles from '@/styles/Home.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'
import HomeButtons from '@/components/home-buttons/HomeButtons'


export default function Home() {
	return (
		<div className={styles.container}>
			<SongleSign />
			<HomeButtons />
		</div>
	)
}
