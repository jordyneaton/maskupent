import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maskupent Records',
  description: 'Discover the next generation of rap artists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-black text-white`}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
} 