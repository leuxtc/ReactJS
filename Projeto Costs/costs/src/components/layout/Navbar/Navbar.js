import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import Container from "../Container/Container"
import logo from '../../../img/costs_logo.png'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src={logo} alt="Costs"></img>
                    </Link>
                    <p>Costs</p>
                </div>
                <ul className={styles.list}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/newproject'>New Projects</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar