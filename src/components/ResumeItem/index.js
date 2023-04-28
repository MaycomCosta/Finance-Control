import React from 'react'
import * as C from './styles'

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon className='icon' style={{ color:  title === 'Entradas' ? 'green' : title === 'Saídas' ? 'red' : 'black' }}/>
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default ResumeItem
