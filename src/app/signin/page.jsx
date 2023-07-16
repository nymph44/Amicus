'use client'
import React from 'react'
import GoogleButton from 'react-google-button'
import { signIn } from 'next-auth/react'
function page() {
  return (
    <div>
      <GoogleButton onClick={() => signIn('google')} />
    </div>
  )
}

export default page
