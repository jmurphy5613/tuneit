import styles from '@/styles/Home.module.css'
import SongleSign from '@/components/songle-sign/SongleSign'


export default function Home() {
	return (
		<div className={styles.container}>
			<SongleSign />
		</div>
	)
}
