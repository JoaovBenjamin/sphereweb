'use client'
import React from 'react'
import { createPost } from '../actions/post-actions'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function FormPost() {
  
    async function handleSubmit(formData:FormData) {
        await createPost(formData)
    }

    return (
    <>
        <form action={handleSubmit} className='flex items-end gap-2'>
            <div className='flex-grow'>
                <Textarea name='text' id='text' placeholder='O que você está pensando?' />
            </div>
            <Button type='submit'>Postar</Button>
        </form>
    </>
  )
}
