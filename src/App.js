import React from 'react'
import "./App.css"

import About from './pages/About'
import Contact from './pages/Contact'
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import ME_Thesis from "./pages/Me-Thesis"

import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/me_thesis" exact component={ME_Thesis} />
                    <Redirect to="/" exact />
                </AnimatedSwitch>
            </Router>
        </div>
    )
}

export default App
