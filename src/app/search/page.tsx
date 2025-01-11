'use client'
import NavBar from '@/components/nav/NavBar'
import Tabs from '@/components/nav/Tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CardUser from '@/components/user/CardUser'
import React, { useRef, useState } from 'react'
import { searchUsers } from '../actions/user-actions'

function SearchPage() {
  const [user, setUser] = useState([])
  const searchRef = useRef<HTMLInputElement>(null);

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault()
    if(!searchRef.current) return;
    const search = searchRef.current.value;
    const data = await searchUsers(search);
    setUser(data)
  }

  return (
    <>
        <main className='flex min-h-screen justify-center relative'>
            <NavBar />
            <Tabs active='search' />  
            <section className="flex flex-col gap-6 w-full min-w-[600px] m-x-8 p-8 ligth:bg-gray-100 bg-gray-900">
              <form onSubmit={handleSearch} className='flex gap-2'>
                <Input id='search' placeholder='Pesquise um usuário' ref={searchRef}/>
                <Button className='rounded-xl'>Buscar</Button>
              </form>
              {user.length === 0 && <p>Nenhum usuario encontrado</p>} 
              {user.map((user: any) => (
                  <CardUser key={user.id}  user={user}/>
              ))}
            </section>
        </main> 
    </>
  )
}

export default SearchPage;