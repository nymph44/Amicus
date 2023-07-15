'use client'
import React from 'react'

import { signIn } from 'next-auth/react'
function page() {
  return (
    <div>
      This is signin
      <button onClick={() => signIn('google')}>Signin</button>
    </div>
  )
}

export default page
