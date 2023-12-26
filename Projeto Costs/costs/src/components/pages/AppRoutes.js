import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import React from "react"
import Contact from './Contact'
import NewProject from './NewProject'
import Container from '../layout/Container'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Projects from './Projects'

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