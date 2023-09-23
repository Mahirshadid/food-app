import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import l1 from '../../assets/social media.png'
import l2 from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className="fa__footer section__padding">
        <div className="fa__footer-logo">
            <img id='logo' src={logo} />
        </div>
        <div className='fa__footer-ls'>
            <a href='facebook.com'><img id='l1' src={l1} /></a>
            <a href='instagram.com'><img id='l2' src={l2} /></a>
        </div>
        <div className='fa__footer-text'>
            <p>Copywright 2020 Bella Onojie.com</p>
        </div>
    </div>
  )
}

export default Footer