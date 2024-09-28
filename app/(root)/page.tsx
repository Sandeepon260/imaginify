import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { useRouter } from 'next/router';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton />
    </div>
  )
}

export default Home