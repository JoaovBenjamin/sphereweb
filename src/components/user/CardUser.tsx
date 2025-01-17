import { CardUserProps } from '@/types/CardUser'
import React, { useState } from 'react'
import { Button } from '../ui/button';

function CardUser({user} : CardUserProps) {
    const [ isFollowing, setIsFollowing] = useState(user.isFollowing); 
    return (
    <div className='flex gap-4 items-center'>
        <img src={user.avatar} alt={user.name} className='size-10 rounded-full'/>
        <div className='flex-grow'>
            <h1 className='font-bold'>{user.name}</h1>
            <p className='text-xs'>{user.bio}</p>
        </div>
        {
            isFollowing ?
                <Button 
                    className='bg-gray-50 text-gray-900 hover:bg-gray-300 rounded-xl'
                    onClick={() => setIsFollowing(false)}
                    >
                    seguindo
                </Button>

                :
                <Button
                    className='bg-gray-50 text-gray-900 hover:bg-gray-300 rounded-xl'
                    onClick={() => setIsFollowing(true)}
                >
                    seguir
                </Button>
        }
    </div>
  )
}

export default CardUser
