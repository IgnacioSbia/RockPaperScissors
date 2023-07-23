'use client';
import React, { useEffect, useState } from 'react'
import Page from "./rules/page";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
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
      <aside className='rockPaperScissorsPageModalButton'>
       {showModal ? '' : <button onClick={()=>setShowModal(!showModal)} className='rockPaperScissorsModalButton'>Rules</button>}
      </aside>
    </main>  
    </>
  )
}
