import { Card } from '@/components/ui/card'
import React from 'react'

type Props = {
    username: string,
}

export default function UserCard({username}: Props) {
    console.log(username)
  return (
    <Card className='bg-[#1A1229] md:w-[249px] py-[21px] px-[24px] border-none rounded-[10px] space-y-[24px]'>
        <div className='bg-[#4FDE7E] py-[21px] px-[24px] rounded-[10px] h-[179px]'>

        </div>
        <div className='text-center text-white text-[26px] font-bold'>
            <h1>{username}</h1>
        </div>
    </Card>
  )
}