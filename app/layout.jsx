import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
