import React from 'react'
import './product.css'
import p4 from '../../assets/p-4.png'
import p5 from '../../assets/p-5.png'
import Swiper from 'swiper'
import Swiping from '../../components/swiper/Swiper'

const Product = () => {
  return (
    <div className="fa__product section__padding" id='product'>
      <div className="fa__product-content">
          <div className='fa__product-content-text'>
              <h3 id='pt1'>Explore varieties</h3>
              <h2 id='pt2'>Shop for your favorites meal as e dey hot.</h2>
              <h4 id='pt3'>Make sure to watch below for the items list.</h4>
          </div>
          <div className='fa__product-content-phoneimg'>
            <img id='phoneimg_p4' src={p4} />
          </div>
      </div>

      <div className='fa__pay-swipe'>
          <h3 id='pt7'>Checkout our Items</h3>
          <Swiping />
          </div>


      <div className="fa__pay-content">
          <div className='fa__pay-content-phoneimg'>
            <img id='phoneimg_p5' src={p5} />
          </div>
          <div className='fa__pay-content-text'>
              <h3 id='pt4'>Checkout</h3>
              <h2 id='pt5'>When you done check out and get it delivered.</h2>
              <h4 id='pt6'>Before checking out be sure to watch other items.</h4>
          </div>
      </div>
  </div>
  )
}

export default Product