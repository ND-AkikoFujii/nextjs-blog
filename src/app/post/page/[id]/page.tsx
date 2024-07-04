import Link from 'next/link'
import {getPosts, getPostsWithParam} from '@/lib/newt'
import styles from '@/app/page.module.css'
import type {Metadata} from 'next'
import Image from 'next/image'
import List from '@/app/components/List'
import HeaderNav from '@/app/components/HeaderNav'
import SubWrapper from '@/app/components/SubWrapper'
import Article from '@/app/components/Article'
import {Pagination} from '@/app/components/Pagination'
import { BreadcrumbItem } from '@/app/types/breadcrumb'
import { BreadcrumbList } from '@/app/components/BreadcrumbList'

export const metadata:Metadata = {
  title: 'ブログ一覧 | Newt/Next.jsブログ',
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
    name: 'Blog',
    item: '/post',
  }
]

type Props = {
  params: {
    id: number
  }
}

export default async function Home({
  params
} : {
  params: { id: string }
}) {
  const id = params.id
  const idInt = typeof(id) === 'string' ? parseInt(id, 10) : 1
  const limit = 3
  const skip = limit * (idInt - 1)
  console.log(params)


  const posts = await getPostsWithParam(limit, skip)
  return (
    <SubWrapper>
      <BreadcrumbList breadcrumbData={breadcrumbData} />
      <HeaderNav />
      <Article>
        <h1 className='ttl'>ブログ一覧</h1>
        <List>
          {posts.items.map((post) => {
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
        <Pagination skip={skip} limit={limit} total={posts.total} currentPageNo={idInt} />
      </Article>
    </SubWrapper>
  )
}
