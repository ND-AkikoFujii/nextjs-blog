import Link from 'next/link'
import {getPosts} from '@/lib/newt'
import styles from '@/app/page.module.css'
import type {Metadata} from 'next'
import Image from 'next/image'
import List from '@/app/components/List'
import TopHeader from '@/app/components/TopHeader'
import HeaderNav from '@/app/components/HeaderNav'
import Article from '@/app/components/Article'

export const metadata:Metadata = {
  title: 'Newt/Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログ。'
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <main>
      <HeaderNav />
      <TopHeader>
        <h1>NEXT STEP OF YOUR FUTURE</h1>
      </TopHeader>
      <Article>
        <div className="articleBody">
          <p>このサイトはReact（Next.js）の学習用に現在作成中です。</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam animi quos hic ipsum facere a? Aperiam est molestiae provident repudiandae vel vitae? Beatae necessitatibus sit qui amet, temporibus voluptates!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione sint harum quibusdam inventore, placeat quo debitis excepturi doloribus amet expedita, animi labore veritatis alias adipisci natus sed vitae voluptates?</p>
        </div>
      </Article>
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
    </main>
  )
}