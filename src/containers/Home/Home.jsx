import React from 'react'
import './home.css'
import p3 from '../../assets/p-3.png';
import p4 from '../../assets/p-4.png';
import HR from '../../assets/HR.png';

const Home = () => {
  return (
    <div className="fa__how section__padding">
      <div className="fa__how-content">

        <div className='fa__how-content__hr'>
          <img id='hr' src={HR} />
          <h3 id='haw'>How the app works</h3>
        </div>
          
        <div className='fa__how-content__others'>

          <div className='fa__how-content__others-phoneimg'>
            <img id='phoneimg_p3' src={p3} />
          </div>
          <div className='fa__how-content__others-text'>
              <h3 id='cra'>Create an account</h3>
              <h2 id='exa'>Create/login to an existing account to get started</h2>
              <h4 id='epa'>An account is created with your email and a desired password</h4>
          </div>
        </div>
      </div>
  </div>

  
  )
}

export default Home