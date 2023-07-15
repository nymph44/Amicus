import Footer from './components/Footer'
import Header from './components/Header'
import Provider from './components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amicus',
  description: 'Sharing music playlist with friends made easy.',
}

export default function RootLayout({ children }) {
  return (
    <html
      className={`${inter.className} flex h-full scroll-smooth antialiased`}
      lang="en"
    >
      <body className="flex h-full flex-col w-full">
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
