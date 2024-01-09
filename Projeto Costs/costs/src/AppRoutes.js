import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Container from './components/layout/Container/Container'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import NewProject from './components/pages/NewProject/NewProject'
import Projects from './components/pages/Projects/Projects'

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/projects' element={<Projects/>}></Route>
                    <Route exact path='/newproject' element={<NewProject />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/contact' element={<Contact />}></Route>
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default AppRoutes