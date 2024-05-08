import React from 'react'
import Navbar from '../Navbar/Navbar'
import Success from '../Successpage/Success'
import './Home.css';
import girlimg from '../../assets/girlimage.png'
import sparkle from '../../assets/sparkleimage.png'
const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Success/> */}
      <div className='second-section'>
      <div className='succes-stories'>
  <p style={{
    textAlign: 'center',
    fontFamily: 'Covered By Your Grace',
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: '39.6px',
    letterSpacing: '-0.02em',
    color: '#2DA950'
  }}>
    Success Stories
  </p>
  <p style={{
//   fontFamily: 'Manrope',
  fontSize: '56px',
  fontWeight: 600,
  lineHeight: '67.2px',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  width: '588px',
  height: '134px',
  margin: '0 auto' 
}}>Every success journey we’ve encountered.</p>
</div>
<div className='carousel-section'>
<div className="carousel-left">
    <div className='carousel-left-image'>
        {/* <img src={girlimg} alt="" /> */}
        <div className='efficiency'>
       <div className='forty'>
       <img src={sparkle} alt="" />
        <h1>40%</h1>
       </div>

    </div>
    </div>
    <div className='efficiency'>

    </div>
    <div className='million'>

    </div>
    
</div>
<div className="carousel-right"></div>

</div>

      </div>
      
    </div>
  )
}

export default Home
