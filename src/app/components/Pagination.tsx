'use client'

import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  skip: number,
  limit: number,
  total: number,
  currentPageNo?: number
}

const PaginationNav = styled.nav`
  ul{
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 60px;
    list-style: none;
  }
  .displayStatus{
    margin-top: 40px;
    font-size: 0.8rem;
    text-align: center;
  }
`

export const Pagination: React.FC<Props> = (props) => {
  const currentNumberStart = props.skip + 1
  const currentNumberEnd = (props.skip + props.limit + 1) <= props.total ? (props.skip + props.limit) : props.total
  const pagerMaxNum = Math.ceil(props.total / props.limit)
  const range = (start:number, end:number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return(
    <PaginationNav>
      <ul>
      {range(1, pagerMaxNum).map((number, index) => (
        <li key={index}>
          <Link href={`/post/page/${number}`}>{number}</Link>
        </li>
      ))}
      </ul>
      <p className="displayStatus">
        {props.total}件中 {currentNumberStart}件目から{currentNumberEnd}件目を表示中
      </p>
    </PaginationNav>
  )
}