import styles from './pages/Navbar.modules.css'
import React from "react"
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import { 
    BrowserRouter as Router, 
    Route, 
    Routes, 
    Link } 
from "react-router-dom"

const AppRoutes = () => {
    return (
        <Router>
            <ul className="list">
                <li><Link className="item" to="/">Home</Link></li>
                <li><Link className="item" to="/empresa">Empresa</Link></li>
                <li><Link className="item" to="/contato">Contato</Link></li>
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