import React, { useEffect, useState } from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissor from './Scissor'

function Shufle() {

    const [valor, setValor] = useState(1);



    useEffect(() => {
        const intervalId = setInterval(() => {
            let nuevoValor = valor+1;
            if(nuevoValor>3){
                nuevoValor = 1;
            }
            setValor(nuevoValor);
        }, 100);
    
      return () => {
        clearInterval(intervalId);
      }
    }, [valor]);
    



  return (
    <div className='Shufle'>
        {valor === 1 && <Rock/>}
        {valor === 2 && <Paper/>}
        {valor === 3 && <Scissor/>}
    </div>
    
    
    
  )
}

export default Shufle