import React from 'react'
import './Game.css'

import triangle from '../images/bg-triangle.svg'
import Paper from './Paper'
import Scissor from './Scissor'
import Rock from './Rock'

function Game({selectPlayer}) {




  return (
    <div className='Game'>
        <div className='Game__container' style={{ backgroundImage: `url(${triangle})` }}>

            <div className='Game__row1'>

                <Paper selectPlayer={selectPlayer}/>


                <Scissor selectPlayer={selectPlayer}/>

            </div>
            <div className='Game__row2'>

                <Rock selectPlayer={selectPlayer}/>

            </div>

        </div>
    </div>
  )
}

export default Game