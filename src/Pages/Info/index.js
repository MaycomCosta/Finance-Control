import React from 'react'
import { useHistory } from 'react-router-dom'


import * as C from './styles.js'
 const  Info = () =>{
  const history = useHistory()


  function handleBackPageClick() {
    setTimeout(() => {
      history.push('/')
    }, 1000)  
  }

  return (
    <C.SectionCenter>
        <h1>Oi, tudo bom?</h1>
        <p>O projeto permite aos usuários gerenciar suas finanças pessoais de forma simples e eficiente, ajudando-os a alcançar seus objetivos financeiros.</p>
        <p>Você pode conhecer um outro projeto, um <a href='https://controleseudindin.netlify.app/' target='_blank' rel='noreferrer'>controle de finanças</a>!</p>
        <p>Você também pode me seguir no <a target='_blank' rel='noreferrer' 
        href='https://www.linkedin.com/in/maycomcosta/'>Linkedin</a>, 
        <a href='https://github.com/MaycomCosta' target='_blank' rel='noreferrer' >Github</a> e no 
        <a href='https://twitter.com/DamnDolar' target='_blank' rel='noreferrer' >Twitter</a></p>
        <div><button onClick={handleBackPageClick}>Voltar</button></div>
    </C.SectionCenter>
  )
}

export default Info