import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from 'postcss'
import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-teal-100`}>
        <container>
          <Navbar />
          <header />
        {children}
         <footer />
        </container>
        </body>
    </html>
  )
}
