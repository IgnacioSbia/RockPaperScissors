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
  const [computerChoice, setComputerChoice] = useState<any>('')
  const [playerScore, setPlayerScore] = useState()
  const options = ['Rock','Scissors','Paper']

  const computer = (min:number,max:number)=>{
    return Math.floor(Math.random() * (max - min +1) +min)
  }
  const game = (choice:any)=>{
    setPlayerChoice(choice)
    computer(0, options.length)
    
  }
 
  console.log(computer(0, options.length))


  return (
    <>
    <main className='rockPaperScissorsMainPage'>
      <section className='rockPaperScissorsPageTitleWithScore'>
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </section>
      <div className='rockPaperScissorsPageModal'>
        {showModal ? <Page setModal={setShowModal}/> : ''}
      </div>
      {/*Playground*/}
      <section className='rockPaperScissorsPlayground'>
        <aside className='rockPaperScissorsPaperRock'>
          <button className='rockPaperScissorsPaper'><Image src={paper} width={38} alt='paper' /></button>
          <button className='rockPaperScissorsScissors'><Image src={scissors}  width={38} alt='scissors' /></button>
        </aside>
        <button className='rockPaperScissorsRock'><Image src={rock} width={38} alt='rock' /></button>
      </section>
      <aside className='rockPaperScissorsPageModalButton'>
       {showModal ? '' : <button onClick={()=>setShowModal(!showModal)} className='rockPaperScissorsModalButton'>Rules</button>}
      </aside>
    </main>  
    </>
  )
}
