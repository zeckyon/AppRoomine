import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Navbar from './components/navbar/navbar'

const lato = Lato({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Roomine',
  description: 'Roomine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
