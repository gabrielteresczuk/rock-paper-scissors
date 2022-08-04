import React, { useState } from 'react'
import './Rules.css'
import close from '../images/icon-close.svg'
import rulesimage from '../images/image-rules.svg'

function Rules() {

    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal);
    }

  return (
    <div className='Rules'>
        <button className='Rules__button' onClick={toggleModal}>RULES</button>
        {modal &&
        <div className='Rules__modal'>
            <div className='Rules__modal__content'>
                <div className='Rules__modal__content__head'>
                    <p>RULES</p>
                    <img src={close} alt='close' onClick={toggleModal} className='Rules__close'></img>
                </div>
                <img src={rulesimage} alt='rules' className='Rules__rules'></img>
            </div>
        </div>
        }
    </div>
  )
}

export default Rules