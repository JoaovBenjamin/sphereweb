'use client'

import React from 'react'
import { login } from '@/app/actions/user-actions'
import { useFormState } from 'react-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

const initialState = {
  message : '',
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)
  return (
    <form action={formAction} className='flex flex-col items-center gap-6'>
        <Label htmlFor='email' className='text-white'>Email</Label>
        <Input name="email" id='email' type='email' placeholder='Email' required/>
        <Label htmlFor='password' className='text-white'>Password</Label>
        <Input type='password' name='password' id='password' placeholder='Password' required/>
        <Button type='submit'>Login</Button>

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
