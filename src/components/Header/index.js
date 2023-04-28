import React from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import * as C from './styles'

const Header = () => {
  const history = useHistory()


  const  handleInfoClick = () =>{
    setTimeout(() => {
      history.push('/info')
    }, 1000)  
  }

  return (
    <C.Container>
        <button className='info-button' onClick={handleInfoClick}>
        <AiOutlineInfoCircle />
        </button>
      <C.Header>
        <C.Title>Controle financeiro</C.Title>
      </C.Header>
    </C.Container>
  )
}

export default Header
