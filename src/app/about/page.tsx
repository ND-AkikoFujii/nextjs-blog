import Link from 'next/link'
import styles from '@/app/page.module.css'
import type {Metadata} from 'next'
import {getAbout} from '@/lib/newt'
import HeaderNav from '@/app/components/HeaderNav'
import SubHeader from '@/app/components/SubHeader'
import Article from '../components/Article'
import Image from 'next/image'
import SubWrapper from '@/app/components/SubWrapper'
import { BreadcrumbItem } from '@/types/breadcrumb'
import { BreadcrumbList } from '@/app/components/BreadcrumbList'

export const metadata:Metadata = {
  title: 'ABOUT | Newt/Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログ。'
}

const breadcrumbData: BreadcrumbItem[] = [
  {
    '@type': 'ListItem',
    position: 1,
    name: '',
    item: '/'
  },
  {
    '@type': 'ListItem',
    position: 2,
    name: 'About',
    item: '/about',
  }
]

export default async function About() {
  const post = await getAbout()
  if(!post) return

  return(
    <SubWrapper>
      <BreadcrumbList breadcrumbData={breadcrumbData} />
      <HeaderNav />
      <Article>
        <h1 className='ttl'>{post.title}</h1>
        <Image src={post.mv.src} width={post.mv.width} height={post.mv.height} alt="" />
        <div className='articleBody' dangerouslySetInnerHTML={{ __html: post.body}}></div>
      </Article>
    </SubWrapper>
  )
}