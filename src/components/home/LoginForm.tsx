'use client'

import React, { useActionState } from 'react'
import { login } from '@/app/actions/user-actions'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

const initialState = {
  message : '',
}

export default function LoginForm() {
  const [state, formAction] = useActionState(login, initialState)
  return (
    <form action={formAction} className='flex flex-col  gap-4 m-8'>
        <Label htmlFor='email' className=''>Email</Label>
        <Input name="email" id='email' type='email' placeholder='Email' className='rounded-xl' required/>
        <Label htmlFor='password' className=''>Password</Label>
        <Input type='password' name='password' id='password' placeholder='Password' className='rounded-xl' required/>
        <Button type='submit' className='rounded-xl' >Login</Button>

        { state.message && 
                <Alert className="bg-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
        }
    </form>
  )
}
