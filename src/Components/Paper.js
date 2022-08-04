import React from 'react'
import paper from '../images/icon-paper.svg'

function Paper({selectPlayer}) {
  return (
    <div className='Game__paper--border' onClick={ selectPlayer && (()=>selectPlayer(1))}>
        <div className='Game__paper '>
            <img src={paper} alt='paper'></img>
        </div>
    </div>
  )
}

export default Paper