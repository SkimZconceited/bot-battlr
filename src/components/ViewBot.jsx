import React from 'react'
import BotCard from './BotCard'

function ViewBot({ doc = null, setDoc = () => {}, removeViewBot = () => {} }) {
    if (doc === null) {
        return null
    }

    function handleEnlist() {
        console.log('enlist')
    }

    console.log(doc.avatar_url, 'in ViewBot')
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.2'}}>
        <BotCard bot={doc} />
        <p>
            <button onClick={handleEnlist} >Enlist</button>
        </p>
        <p>
            <button onClick={removeViewBot}>Go Back</button>
        </p>
    </div>
  )
}

export default ViewBot