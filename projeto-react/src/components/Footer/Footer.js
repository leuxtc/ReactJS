import styles from './Footer.module.css'
import {
    FaFacebook,
    FaInstagram,
    FaTiktok
} from 'react-icons/fa6'


const Footer = () => {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTiktok /></li>
            </ul>
        </footer>
    )
}

export default Footer