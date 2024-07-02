'use client'

import{ FC } from 'react';
import Link from 'next/link'
import Script from 'next/script';
import styled from 'styled-components'
import { BreadcrumbJsonLd, BreadcrumbItem } from '../types/breadcrumb';

type BreadcrumbListProps = {
  breadcrumbData: BreadcrumbItem[]
}

const BreadcrumbWrap = styled.ol`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
  font-size: 0.8rem;
  list-style: none;

  li:not(:last-child){
    &::after{
      content: '>';
      margin-left: 20px;
    }
  }
`

export const BreadcrumbList: FC<BreadcrumbListProps> = ({breadcrumbData}) => {
  return (
    <>
      <JsonLd breadcrumbData={breadcrumbData} />
      <BreadcrumbWrap className='breadcrumb'>
        {breadcrumbData.map((item) => (
          <li key={item.position} className='breadcrumbItem'>
            <BreadcrumbItems {...item} />
          </li>
        ))}
      </BreadcrumbWrap>
    </>
  )
}

const BreadcrumbItems: FC<BreadcrumbItem> = ({name, item}) => {
  const label = name === '' ? 'Home' : name
  if(item){
    return <Link href = {item} className='breadcrumbLink'>{label}</Link>
  }
  //current
  return <span className="breadcrumbLink current">{label}</span>
}

type JsonLdProps = {
  breadcrumbData: BreadcrumbItem[]
}

const JsonLd: FC<JsonLdProps> = ({ breadcrumbData}) => {
  const jsonLdSchema: BreadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbData
  }
  return (
    <Script
      id='BreadcrumbList-JSON-LD'
      type='application/ld+json'
      strategy='beforeInteractive'
      >
        {JSON.stringify(jsonLdSchema)}
      </Script>
  )
}
