import Link from 'next/link'
import styles from '@/app/page.module.css'
import type {Metadata} from 'next'
import {getAbout} from '@/lib/newt'
import HeaderNav from '@/app/components/HeaderNav'
import SubHeader from '@/app/components/SubHeader'
import Article from '../components/Article'
import Image from 'next/image'
import SubWrapper from '@/app/components/SubWrapper'

export const metadata:Metadata = {
  title: 'ABOUT | Newt/Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログ。'
}

export default async function About() {
  const post = await getAbout()
  if(!post) return

  return(
    <SubWrapper>
      <HeaderNav />
      <Article>
        <h1 className='ttl'>{post.title}</h1>
        <Image src={post.mv.src} width={post.mv.width} height={post.mv.height} alt="" />
        <div className='articleBody' dangerouslySetInnerHTML={{ __html: post.body}}></div>
      </Article>
    </SubWrapper>
  )
}