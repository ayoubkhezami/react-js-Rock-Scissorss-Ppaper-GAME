import React, { createContext, useState } from 'react'
import './Play_Area.css'
import Header from '../Header/Header' 
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import UserContext from '../../Context/UserContext'
import Game_Area from '../Game_Area/Game_Area'
import Home from '../../Pages/Home'
const Play_Area = ({user}) => {   
  const [result,setResult]=useState('-------');  
  const[cmp,setCmp]=useState('')  
    const[score,setScore]=useState(0) 
    const [hide,setHide]=useState(true) 
  let computer=""; 

{/** function where the computer choice him rock scissors or paper randomly */}
  const computer_turn =()=> 
  { 
    
    let x= Math.floor(Math.random() * 3);
    console.log(x);
    if(x==0) computer=paper ;
    else if (x==1) computer=rock; 
    else if(x==2) computer=scissors; 
    setCmp(computer)// the computer choice
  }   
{/** here we every click on btn play now we check who's the winner between computer and user */}

  const check_winner =()=>{
    if(user==computer) {setResult('Draw Match');  setScore(score)}
    else if (user==paper&&computer==rock) {setResult('You Win');setScore(score+1)}  
  else if(user==paper && computer==scissors) {setResult('You Lose');setScore(score-1)} 
else if(user==rock && computer==paper){setResult('You Lose');setScore(score-1)} 
else if(user==rock && computer==scissors){setResult('You Win');setScore(score+1)} 
else if(user==scissors && computer==paper){setResult('You Win');setScore(score+1)} 
else if(user==scissors && computer==rock){setResult('You Lose');setScore(score-1)}  

  } 

  
  return (   
    <>

    { hide ?
    <div>  
      {/** we use the context provider to pass and update  the score value in the header component every round  */}
      <UserContext.Provider value={score} >    
      <Header />
    </UserContext.Provider>
      
    <section className='play-section'> 
    
    <div >   
      {/**make the image of the user choice */}
    <button className='user-choice'>

      <img src={user} />
    </button> 
    </div> 
    <div className='result-and-play-place'> 
    <span >{result}</span>
    {/** button to start play a check if you win the round or no  */}
    <button onClick={()=> {
computer_turn(); 
check_winner();

    }}>Play Now</button>  

    {/** a button to restart game and repick your rock , paper or scissors  */}
    <button className='btn' onClick={()=>
    setHide(!hide)
    }>
Reset

    </button>

   
    </div> 

    <div>   
      {/** the randow computer choice from the above function named computer turn */}
    <button className='computer-choice'>
      {/**make the image of the computer choice */}

      <img src={cmp} />
    </button> 

    </div> 
    </section>  
    
   
      
    </div> 
    :   
    
    <Home/>
    
} {/** here if the button reset clicked return to the main page where the user can pick her/him choice */}
    </>
  )
}

export default Play_Area
