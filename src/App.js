import React from 'react'

import {Home, Product, Faq, Contact, Header, Footer} from './containers'
import {Navbar} from './components'

import './app.css'

const App = () => {
    return (
        <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <div>
            <Home />
            <Product />
            <Faq />
            <Contact />
            <Footer />
        </div>
        </div>
    )
}

export default App