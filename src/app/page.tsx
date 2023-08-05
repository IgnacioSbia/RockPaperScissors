'use client';
import React, { use, useEffect, useState } from 'react'
import Page from "./rules/page";
import rock from '../../public/icon-rock.svg';
import scissors from '../../public/icon-scissors.svg';
import paper from '../../public/icon-paper.svg';
import Image from 'next/image';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('')
  const [playerScore, setPlayerScore] = useState<any>(0)
  const options = ['Rock','Scissors','Paper']
  

  const computer = (min:number,max:number)=>{
    return Math.floor(Math.random() * (max - min ) +min)
  }
  const game = (choice:any)=>{
    setPlayerChoice(choice);
    setComputerChoice(options[computer(0, options.length)]);
  }
  useEffect(()=>{
    if((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock')){
      setWinner('Player')
      setPlayerScore(playerScore+1)
    }else if(playerChoice == computerChoice){
      setWinner('Draw')
    }else{
      setWinner('The House')
    }
  },[playerChoice,computerChoice])
  const playAgain = (e:any)=>{
    e.preventDefault();
    setComputerChoice('');
    setPlayerChoice('');
    setWinner('')
  }
  console.log(playerChoice)
  console.log(computerChoice)
  console.log(winner)

  return (
    <>
    <main className='rockPaperScissorsMainPage'>
      <section className='rockPaperScissorsPageTitleWithScore'>
        <div className='rockPaperScissorsPageTitle'>
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
        </div>  
        <div className='rockPaperScissorsPageScore'>
          <h1 className='rockPaperScissorsPageScoreTitle'>Score</h1>
          <h1 className='rockPaperScissorsPageScoreScore'>{playerScore && playerScore>=0 ? playerScore : '0'}</h1>
        </div>
      </section>
      <div className='rockPaperScissorsPageModal'>
        {showModal ? <Page setModal={setShowModal}/> : ''}
      </div>

      
        
        {playerChoice && computerChoice ?
        (<div>
          <section className='rockPaperScissorsPlayerComputerChoice'>
            <aside className='rockPaperScissorsPlayerComputerChoicePlayer'>
              <button className={`rockPaperScissors${playerChoice}`} id='rockPaperScissorsPlayerChoices'>{playerChoice == 'Paper' ? <Image src={paper} width={38} alt='Paper' /> : playerChoice == 'Rock' ? <Image src={rock} width={38} alt='rock' />: playerChoice == 'Scissors' ? <Image src={scissors}  width={38} alt='scissors' />:''}</button>
              <h2>You picked</h2>
            </aside>
            <aside className='rockPaperScissorsPlayerComputerChoiceComputer'>
              <button className={`rockPaperScissors${computerChoice}`} id='rockPaperScissorsComputerChoices'>{computerChoice == 'Paper'? <Image src={paper} width={38} alt='Paper' /> : computerChoice == 'Rock' ? <Image src={rock} width={38} alt='rock' />:computerChoice == 'Scissors' ? <Image src={scissors}  width={38} alt='scissors' />: ''}</button>
              <h2>The house picked</h2>
            </aside>
          </section> 
          <aside>
            <h1>{winner == 'Draw' ? 'Draw!' : `The winner is: ${winner}`}</h1>
          </aside>
          <button className='rockPaperScissorsPagePlayAgainButton' onClick={(e)=>playAgain(e)}>PLAY AGAIN</button>
        </div>)

         :(
         <section className='rockPaperScissorsPlayground'>
         <aside className='rockPaperScissorsPaperRock'>
           <button className='rockPaperScissorsPaper' onClick={()=>game('Paper')}><Image src={paper} width={38} alt='paper' /></button>
           <button className='rockPaperScissorsScissors' onClick={()=>game('Scissors')}><Image src={scissors}  width={38} alt='scissors' /></button>
         </aside>
         <button className='rockPaperScissorsRock' onClick={()=>game('Rock')}><Image src={rock} width={38} alt='rock' /></button>
       </section>)}
    

      {/*Playground*/}
      
      <aside className='rockPaperScissorsPageModalButton'>
       {showModal ? '' : <button onClick={()=>setShowModal(!showModal)} className='rockPaperScissorsModalButton'>Rules</button>}
      </aside>
    </main>  
    </>
  )
}
