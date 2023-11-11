import React from 'react'
import BotCard from './BotCard'

function ViewBot({ doc = null, setDoc = () => {}, removeViewBot = () => {}, enlistBot = () => {} }) {
    if (doc === null) {
        return null
    }

    // console.log(doc.avatar_url, 'in ViewBot')
  return (
    <div className='inline-block' style={{backgroundColor: 'rgba(0, 0, 0, 0.2'}}>
        <BotCard bot={doc} />
        <p className='w-1/2'>
            <button onClick={() => enlistBot(doc)} >Enlist</button>
        </p>
        <p className='w-1/2'>
            <button onClick={removeViewBot}>Go Back</button>
        </p>
    </div>
  )
}

export default ViewBot