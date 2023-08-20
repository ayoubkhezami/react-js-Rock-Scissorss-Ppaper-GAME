
import { useState } from 'react'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'  
import './Game_Area.css'
import Play_Area from '../Play_Area/Play_Area'
import Header from '../Header/Header'
import Home from '../../Pages/Home'
 
const Game_Area = () => { 
  const [paper_choice,setPaper]=useState(false); 
  const [rock_choice,setRock]=useState(false); 
  const [scissors_choice,setScissors]=useState(false);  
  const [hide,setHide]=useState(true) 
const [user,setUser]=useState('')


  return (  
    <>
    {
    hide ?  
    
    <div> 
      <Header />
      
      <section className='choice'>  
      {/** these are the menu where the user can choice */}
      
      <button className='paper' onClick={()=>{
      setPaper(true) ;
      setRock(false) ;
      setScissors(false);   
      setUser(paper)
      setHide(!hide)
      } 

      
      }>
      <img src={paper}/> 
      
          </button> 
         
          <button className='rock' onClick={()=>{
           setPaper(false) ;
           setRock(true) ;
           setScissors(false);   
          setUser(rock) 
      setHide(!hide)


           
          }
          }>
          <img src={rock}/>
          
          </button> 

          <button className='scissors'onClick={()=>{
           setPaper(false) ;
           setRock(false) ;
           setScissors(true);  
            setUser(scissors) 
      setHide(!hide)


          } 
          } >
          <img src={scissors}/>
          
          </button>  
      </section> 
      </div>  
        :  
        <Play_Area user={user} /> } 
        
    {/**if the user click on him choice the component game area replace by play area componenet */}
    </> 
  )
}

export default Game_Area
