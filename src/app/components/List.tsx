'use client'

import styled from 'styled-components'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px auto;
  width: 780px;
  list-style: none;
  a{
    display: block;
  }
  img{
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    width: auto;
    li{
      margin: 40px 20px 0;
      width: calc(100% - 40px);
      box-sizing: border-box;
    }
  }
`

export default List