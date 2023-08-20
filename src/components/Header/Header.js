import React, { useState,useContext} from 'react' 
import './Header.css'  
import UserContext from '../../Context/UserContext';

const Header = () => {    
  const score1=useContext(UserContext); {/** we get the score from the play area with the usecontext hook  */}
  return ( 
    <div className='header'>
      <div className='header-container'>
        <div className='header-text'>
            ROCK <br /> 
            PAPER <br />
            SCISSORS
        </div> 
        <div className='score-area'>  
            <p>SCORE</p> 
            <div className='score-number'>  
            
            {score1}
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Header
