import './globals.css'
import { Rubik } from 'next/font/google'
// Components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'WelpDesk',
  description: 'A ticketing application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        
        {children}
      </body>
    </html>
  )
}
