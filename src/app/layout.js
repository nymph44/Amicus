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
      data-theme="synthwave"
    >
      <body className="flex h-full flex-col w-full from-base-100 to-base-200">
        <Header />
        <div className="flex flex-row space-x-4 mx-auto my-4  sm:w-full  md:w-2/3">
          <div className="w-full ">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
