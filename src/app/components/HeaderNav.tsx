'use client'

import Link from 'next/link'
import styled from 'styled-components'

const HeaderNavStyle = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: #fff;
  background: rgb(0 0 0 / .5);
  ul{
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 40px;
    width: 100%;
    height: 5em;
    list-style: none;
  }
`

const HeaderNav = () => {
  return(
    <HeaderNavStyle>
      <nav>
        <ul>
          <li>
            <Link href={`/`}>TOP</Link>
          </li>
          <li>
            <Link href={`/about`}>ABOUT</Link>
          </li>
          <li>
            <Link href={`/post`}>BLOG</Link>
          </li>
        </ul>
      </nav>
    </HeaderNavStyle>
  )
}

export default HeaderNav