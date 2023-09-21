import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import RegisterModal from './components/modals/registerModal'

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
    <html lang="pt-BR">
      <body className={lato.className}>
        <RegisterModal/>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
