import styles from './Navbar.module.css'
import SongleSign from '../songle-sign/SongleSign'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <SongleSign notAnimated />
        </div>
    )
}

export default Navbar