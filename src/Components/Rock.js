import React from 'react'
import rock from '../images/icon-rock.svg'

function Rock({selectPlayer}) {
  return (
    <div className='Game__rock--border' onClick={ selectPlayer && (()=>selectPlayer(3))}>
        <div className='Game__rock'>
            <img src={rock} alt='rock'></img>
        </div>
    </div>
  )
}

export default Rock