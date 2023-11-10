import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";
import {ThemeContext} from "@/context/ThemeContext";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import AuthProvider from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'janjela',
  description: 'technology blog!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/*<AuthProvider>*/}
      {/*    <ThemeContextProvider>*/}
      {/*        <ThemeProvider>*/}
                  {/*<div className="container">*/}
                  {/*    <div className="wrapper">*/}
                  {/*        <Navbar />*/}
                  {/*        {children}*/}
                  {/*        <Footer />*/}
                  {/*    </div>*/}
                  {/*</div>*/}
                  <h1>tes deployment on vercel</h1>
      {/*        </ThemeProvider>*/}
      {/*    </ThemeContextProvider>*/}
      {/*</AuthProvider>*/}
      </body>
    </html>
  )
}
