import React from 'react'
import './product.css'
import p4 from '../../assets/p-4.png'
import p5 from '../../assets/p-5.png'

const Product = () => {
  return (
    <div className="fa__product section__padding" id='product'>
      <div className="fa__product-content">
          <div className='fa__product-content-text'>
              <h3 id='pt1'>Explore varieties</h3>
              <h2 id='pt2'>Shop for your favorites meal as e dey hot.</h2>
              <h4 id='pt3'>Shop for your favorite meals or drinks and enjoy while doing it.</h4>
          </div>
          <div className='fa__product-content-phoneimg'>
            <img id='phoneimg_p4' src={p4} />
          </div>
      </div>


      <div className="fa__pay-content">
          <div className='fa__pay-content-phoneimg'>
            <img id='phoneimg_p5' src={p5} />
          </div>
          <div className='fa__pay-content-text'>
              <h3 id='pt4'>Checkout</h3>
              <h2 id='pt5'>When you done check out and get it delivered.</h2>
              <h4 id='pt6'>When you done check out and get it  delivered with ease.</h4>
          </div>
      </div>
  </div>
  )
}

export default Product