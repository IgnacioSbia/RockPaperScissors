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
    if((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock')){
      setWinner('Player')
      setPlayerScore(playerScore+1)
    }else{
      setWinner('Computer')
    }
  }
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
        <div>
          <aside>
            <button className={`rockPaperScissors${playerChoice}`}><Image src={`/${playerChoice.toLowerCase}`} width={38} alt={`${playerChoice}`} height={38}/></button>
            <h2>You picked</h2>
          </aside>
          <aside>
          <button className={`rockPaperScissors${computerChoice}`}><Image src={`/${computerChoice.toLowerCase}`} width={38} alt={`${computerChoice}` }height={38}/></button>
          <h2>The house picked</h2>
          </aside>
        </div>

         :<></>}
    

      {/*Playground*/}
      <section className='rockPaperScissorsPlayground'>
        <aside className='rockPaperScissorsPaperRock'>
          <button className='rockPaperScissorsPaper' onClick={()=>game('Paper')}><Image src={paper} width={38} alt='paper' /></button>
          <button className='rockPaperScissorsScissors' onClick={()=>game('Scissors')}><Image src={scissors}  width={38} alt='scissors' /></button>
        </aside>
        <button className='rockPaperScissorsRock' onClick={()=>game('Scissors')}><Image src={rock} width={38} alt='rock' /></button>
      </section>
      <aside className='rockPaperScissorsPageModalButton'>
       {showModal ? '' : <button onClick={()=>setShowModal(!showModal)} className='rockPaperScissorsModalButton'>Rules</button>}
      </aside>
    </main>  
    </>
  )
}
