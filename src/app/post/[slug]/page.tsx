import { getPosts, getPostBySlug } from '@/lib/newt'
import styles from '@/app/page.module.css'
import type { Metadata } from 'next'
import type {Post} from '@/app/types/post'
import Image from 'next/image'
import Article from '@/app/components/Article'
import HeaderNav from '@/app/components/HeaderNav'
import { BreadcrumbItem } from '@/app/types/breadcrumb'
import { BreadcrumbList } from '@/app/components/BreadcrumbList'
import SubWrapper from '@/app/components/SubWrapper'


type Props = {
  params: {
    slug: string
  }
}

export const generateStaticParams = async()=> {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export const dynamicParams = false

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const {slug} = params
  const post = await getPostBySlug(slug)

  return {
    title: post?.title,
    description: '詳細ページです'
  }
}

export default async function Post({params}: Props) {
  const {slug} = params
  const post = await getPostBySlug(slug)
  if(!post) return

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
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: post.title
    }
  ]

  return(
    <SubWrapper>
      <BreadcrumbList breadcrumbData={breadcrumbData}  />
      <HeaderNav />
      <Article>
        <h1 className='ttl'>{post.title}</h1>
        <Image src={post.eyecatch.src} width={post.eyecatch.width} height={post.eyecatch.height} alt="" />
        <div className='articleBody' dangerouslySetInnerHTML={{ __html: post.body}}></div>
      </Article>
    </SubWrapper>
  )
}