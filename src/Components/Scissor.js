import React from 'react'
import scissor from '../images/icon-scissors.svg'

function Scissor({selectPlayer}) {
  return (
    <div className='Game__scissor--border' onClick={ selectPlayer && (()=>selectPlayer(2))}>
    <div className='Game__scissor'>
        <img src={scissor} alt='scissor'></img>
    </div>
</div>
  )
}

export default Scissor