import 'server-only'
import {createClient} from 'newt-client-js'
import {cache} from 'react'
import type {Post} from '@/app/types/post'
import type {About} from '@/app/types/about'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn'
})

export const getPosts = cache(async (
  limit = 100,
  skip = 0
) => {
  const {items} = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
    query: {
      select: ['_id', 'title', 'eyecatch', 'slug', 'body'],
      limit: limit,
      skip: skip
    }
  })
  return items
})

export const getPostsWithParam = cache(async (
  limit = 100,
  skip = 0
) => {
  const data = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
    query: {
      select: ['_id', 'title', 'eyecatch', 'slug', 'body'],
      limit: limit,
      skip: skip
    }
  })
  return data
})

export const getPostBySlug = cache(async (slug: string) => {
  const post = await client.getFirstContent<Post>({
    appUid: 'blog',
    modelUid: 'post',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'eyecatch', 'body']
    }
  })
  return post
})

export const getAbout = cache(async () => {
  const about = await client.getFirstContent<About>({
    appUid: 'about',
    modelUid: 'about',
    query: {
      select: ['_id', 'title', 'mv', 'body']
    }
  })
  return about
})