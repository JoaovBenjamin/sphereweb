"use client"

import { getPost } from "@/app/actions/post-actions" 
import { Post } from "@/components/post/post"
import { Button } from "@/components/ui/button"
import { PostType } from "@/types/Post"
import { Suspense, useEffect, useState } from "react"

export function Feed({initialPosts}: {initialPosts: PostType[]}){

    const [posts, setPosts] = useState<PostType[]>([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        setPosts(initialPosts)
    },  [])

    async function loadMore(){
        const newPosts = await getPost(page)
        setPage(page + 1)
        setPosts([...posts, ...newPosts])
    }

    return (
        <Suspense fallback={<p>carregando</p>}>
            {posts?.map((post: PostType) => <Post key={post.id} post={post} /> )}
            <Button onClick={loadMore}>carregar mais</Button>
        </Suspense>
    )
}