import Link from 'next/link'
import {getPosts} from '@/lib/newt'
import styles from '@/app/page.module.css'
import type {Metadata} from 'next'
import Image from 'next/image'
import List from '@/app/components/List'
import HeaderNav from '@/app/components/HeaderNav'
import SubWrapper from '@/app/components/SubWrapper'
import Article from '@/app/components/Article'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export const metadata:Metadata = {
  title: 'ブログ一覧 | Newt/Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログ。'
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <SubWrapper>
      <Breadcrumbs />
      <HeaderNav />
      <Article>
        <h1 className='ttl'>ブログ一覧</h1>
        <List>
          {posts.map((post) => {
            return (
              <li key={post._id}>
                <Link href={`post/${post.slug}`}>
                  <Image src={post.eyecatch.src} width={post.eyecatch.width} height={post.eyecatch.height} alt="" />
                  {post.title}
                </Link>
              </li>
            )
          })}
        </List>
      </Article>
    </SubWrapper>
  )
}