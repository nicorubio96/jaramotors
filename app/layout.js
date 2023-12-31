import { Noto_Sans_Cham } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const non = Noto_Sans_Cham({subsets:['latin-ext']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning={true} className={non.className}>
        <Header/>
      
        
        {children}

        <Footer/>


        
        
        
        
        </body>
    </html>
  )
}
