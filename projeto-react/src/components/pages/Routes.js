import styles from './Navbar.module.css'
import React from "react"
import Home from "./Home"
import Empresa from "./Empresa"
import Contato from "./Contato"
import { 
    BrowserRouter as Router, 
    Route, 
    Routes, 
    Link } 
from "react-router-dom"

const AppRoutes = () => {
    return (
        <Router>
            <ul className={styles.list}>
                <li><Link className={styles.item} to="/">Home</Link></li>
                <li><Link className={styles.item} to="/empresa">Empresa</Link></li>
                <li><Link className={styles.item} to="/contato">Contato</Link></li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/empresa" element={<Empresa/>}></Route>
                <Route exact path="/contato" element={<Contato/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes