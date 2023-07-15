import NextAuth from 'next-auth/next'
import GooglePrivider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'
import FaceItProvider from 'next-auth/providers/faceit'
import SpotifyProvider from 'next-auth/providers/spotify'
import AppleProvider from 'next-auth/providers/apple'
import TwitchProvider from 'next-auth/providers/twitch'

import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in with email',
      credentials: {
        username: { label: 'Name', type: 'text', placeholder: 'Warsomeness' },
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
    GooglePrivider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === 'google') {
            return (
              profile.email_verified && profile.email.endsWith('@example.com')
            )
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
      },
      secret: process.env.SECRET,
    }),
    // DiscordProvider({
    //   clientId: process.env.DISCORD_CLIENT_ID,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET,
    // }),
    // FaceItProvider({
    //   clientId: process.env.FACEIT_CLIENT_ID,
    //   clientSecret: process.env.FACEIT_CLIENT_SECRET,
    // }),
    // SpotifyProvider({
    //   clientId: process.env.SPOTIFY_CLIENT_ID,
    //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // TwitchProvider({
    //   clientId: process.env.TWITCH_CLIENT_ID,
    //   clientSecret: process.env.TWITCH_CLIENT_SECRET,
    // }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/error',
    verifyRequest: '/verify-request',
    newUser: null,
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
