'use client'

import React, { useActionState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { register } from '@/app/actions/user-actions'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { CheckIcon } from 'lucide-react'


const initialState = {
  success: false,
  name: '',
  email: '',
  password: '',
  bio: '',
}

export default function RegisterForm() {
    const [state, formAction] = useActionState(register, initialState)
  return (
    <form action={formAction} className='flex flex-col gap-4 m-8'>
        <Label htmlFor='name' className=''>Name</Label>
        <Input name="name" id='name' type='text' placeholder='Name' className='rounded-xl' required/>
        <Label htmlFor='bio' className=''>Bio</Label>
        <Input name="bio" id='bio' type='text' placeholder='Bio' className='rounded-xl' required/>
        <Label htmlFor='email' className=''>Email</Label>
        <Input name="email" id='email' type='email' placeholder='Email' className='rounded-xl' required/>
        <Label htmlFor='password' className=''>Password</Label>
        <Input type='password' name='password' id='password' placeholder='Password' className='rounded-xl' required/>
        <Button type='submit' className='rounded-xl' >Criar Conta</Button>
        {
            state?.success &&
            <Alert className="bg-green-700">
                <CheckIcon className="w-6 h-6" />
                <AlertTitle>Conta criada com sucesso</AlertTitle>
                <AlertDescription>Seja bem-vindo ao Sphere</AlertDescription>
            </Alert>
        }
    </form>
  )
}
