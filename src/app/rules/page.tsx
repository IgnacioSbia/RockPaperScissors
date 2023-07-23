import React from 'react'
import './rulesPage.css';
import rules from '../../../public/image-rules.svg'
import Image from 'next/image';
function Page({setModal}:any) {
  return (
    <>
        <main className='rulesPageMain'>
            <aside className='rulesPageClose'>
                <h1>Rules</h1>
                <button onClick={()=>setModal(false)} className='rulesPageCloseModal'>X</button>
            </aside>
            
            <ul className='rulesPageRulesList'>
                <Image src={rules} alt='Rules'/>
            </ul>
        </main>
    </>
  )
}

export default Page