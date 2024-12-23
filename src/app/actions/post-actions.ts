"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createPost(formData: FormData){
    const post = {
        text: formData.get("text"),
    }

    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${(await cookies()).get("token")?.value}`
        },
        body: JSON.stringify(post)})

        if(response.status === 403) {
            redirect("/")
        }

        return await response.json()
}

export async function getPost(page: number){
    const response = await fetch(`http://localhost:8080/posts?page=${page}`, {
        headers:{
            "Authorization": `Bearer ${(await cookies()).get("token")?.value}`
        }
    })

    if(response.status === 403) {
        redirect("/")
    }

    const json = await response.json()
    return json.content;
}