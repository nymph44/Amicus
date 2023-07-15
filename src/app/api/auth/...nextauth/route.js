import NextAuth from 'next-auth/next'
import GooglePrivider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GooglePrivider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null,
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
