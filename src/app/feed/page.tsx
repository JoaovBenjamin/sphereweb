import NavBar from '@/components/nav/NavBar'
import Tabs from '@/components/nav/Tabs'
import React from 'react'
import { getPost } from '../actions/post-actions';
import { Feed } from './feed';
import { Postpone } from 'next/dist/server/app-render/dynamic-rendering';
import FormPost from './formpost';

export default async function Home() {
  const posts = await getPost(0); 

  return (
    <>
        <main className='flex min-h-screen justify-center relative'>
          <NavBar/>
          <Tabs active="feed"/>
          <section className="flex flex-col gap-4 w-full min-w-[600px]  p-8 ligth:bg-gray-100 bg-gray-900">
              <h2>Feed</h2>   
              <FormPost/>
              <Feed initialPosts={posts} />
         </section>    

        </main>
    </>
  )
}
