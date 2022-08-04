import React from 'react'
import './Jugando.css'

import Paper from './Paper'
import Rock from './Rock'
import Scissor from './Scissor'
import Shufle from './Shufle'

function Jugando({player,computer,resultado,playAgain}) {
  return (
    <div className='Jugando'>

        <div className='Jugando__col'>
            <p >YOU PICKED</p>
            <div className={resultado === 1 ? 'Game__winner' : ''}>
                {player === 1 && <Paper/>}
                {player === 2 && <Scissor/>}   
                {player === 3 && <Rock/>} 
            </div>
        </div>

        <div className='Jugando__resultado'>
            {resultado === 1 && <p>YOU WIN</p>}
            {resultado === 2 && <p>YOU LOSE</p>}   
            {resultado === 3 && <p>DRAW</p>} 
            {resultado && <button onClick={playAgain}>PLAY AGAIN</button>}
        </div>

        <div className='Jugando__col' id="col_2">
            <p >THE HOUSE PICKED</p>
            <div className={resultado === 2 ? 'Game__winner' : ''}>
                
                {computer === 1 && <Paper/>}
                {computer === 2 && <Scissor/>}   
                {computer === 3 && <Rock/>} 
                {!computer &&
                    <Shufle/>
                }
            </div>
        </div>

    </div>
  )
}

export default Jugando