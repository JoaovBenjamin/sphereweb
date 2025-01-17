"use server"

import { UserType } from "@/types/User"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function register(prevState: any,formData: FormData) {
    const user = {
        email: formData.get('email'),
        password: formData.get('password'),
        bio: formData.get('bio'),
        name: formData.get('name')
    }

    const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })


    if (!response.ok) {
        return {
            success: false,
            name: user.name,
            email: user.email,
            password: user.password,
            bio: user.bio,
        }
        
        return{
            success: true,
            name: '',
            email: '',
            password: '',
            bio: '',
        }
    }
}

export async function login(prevState: any,formData: FormData) {

    const user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        credentials: 'include',
    })

    if (!response.ok) {
        return {
            message: "Acesso negado"
        }
    } 

    const data = await response.json() 
    ;(await cookies()).set('token', data.token)    
    ;(await cookies()).set('email', data.email)        

    redirect('/feed')

    return {
        success: true,
        email: '',
        password: '',
    }

}

export async function searchUsers(name : string) {
    const response = await fetch(`http://localhost:8080/user?name=${name}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${(await cookies()).get('token')?.value}`
        },
})

    if (response.status === 403) {
        redirect('/')
    } 

    const json = await response.json()
    return json.map((user : UserType) => {
        return {
            name: user.name,
            bio: user.bio,
            avatar: user.avatar,
        }
    })
}

export async function logout() {
     (await cookies()).delete('token');
     redirect('/')
}   
