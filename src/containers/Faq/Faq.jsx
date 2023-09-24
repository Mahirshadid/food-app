import React from 'react'
import './faq.css'

const Faq = () => {
  return (
    <div className="fa__faq section__padding" id="faq">

    <div className="fa__faq-content">
      <h2 className="gradient__text">Download the app now.</h2>
      <h4>Join the Olonje community for FAQs. Start your premium experience now.</h4>
      <div className="fa__faq-content__input-center">
      <a href='https://play.google.com/'><button type="button" className='fa__faq-content__input-button1'>Playstore</button></a>
      <a href='https://www.apple.com/app-store/'><button type="button" className='fa__faq-content__input-button2'>App Store</button></a>
      </div>
    </div>

  </div>
  )
}

export default Faq