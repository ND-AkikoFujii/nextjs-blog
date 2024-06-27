'use client'

import styled from 'styled-components'

const Article = styled.article`
  margin: 40px auto 0;
  max-width: 780px;

  .ttl{
    margin-top: 40px;
    text-align: center;
  }
  
  img{
    margin-top: 40px;
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  .articleBody{
    margin-top: 40px;

    p{
      margin: 1.2em 0;
    }

    @media screen and (max-width: 768px){
      max-width: none;
    }
  }
`

export default Article