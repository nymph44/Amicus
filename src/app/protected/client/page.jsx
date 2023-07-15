'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const ClientProtectPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/protected/client')
    },
  })

  return (
    <div>
      <h1>Client Protected Page</h1>
      <p>
        This page is protected by client-side session verification. If you
        reload the page, you will see a loading state until the session is
        loaded.
      </p>
      <p>
        If you are not signed in, you will be redirected to the sign in page.
      </p>
      <p>If you are signed in, you will see your session details below.</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
