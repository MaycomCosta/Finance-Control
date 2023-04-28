import styled from 'styled-components'

export const Container = styled.div`
height: 150px;
text-align: center;
background-color: #01233E;


  .info-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background: transparent;
    color: #FF9D00;
    font-weight: bold;
    font-size: 25px;
    border: none;
    cursor: pointer;
    z-index: 1;

    :hover {
      color: #FF7C03;
    }

    @media (max-width: 480px) {
      right: 10px;
 } 
 }
`
export const Header = styled.h1`

`
export const Title = styled.div`
padding-top: 20px;
color: #FF9D00;
`