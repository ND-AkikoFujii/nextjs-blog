'use client'

import styled from 'styled-components'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams  } from 'next/navigation'
import React from 'react'

const BreadcrumbWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
  font-size: 0.8rem;
`

const Breadcrumb: NextPage = () => {
  const router = useRouter()
  const pathname = usePathname()

  console.log(router)

  const paths = decodeURI(pathname).substring(1).split('/')

  const roots = ['']
  paths.map((item, index) => {
    roots.push(roots[index] + '/' + item)
  })
console.log(paths)
  return (
    <BreadcrumbWrap>
      {/* Home */}
      <Link href={'/'}>
        Home
      </Link>
      {paths.map((x, i) => (
        <React.Fragment key={x}>
          {/* 下層 */}
          {'>'}
          <Link href={roots[i + 1]} key={x}>
            {x}
          </Link>
        </React.Fragment>
      ))}
    </BreadcrumbWrap>
  )
}

export default Breadcrumb
