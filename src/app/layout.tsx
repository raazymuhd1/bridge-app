"use client"
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import { Header, Footer, Info } from '@/components'
import './globals.css'

// export const metadata: Metadata = {
//   title: 'EasyBridge',
//   description: 'build a wormhole bridge tool with ease',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const path = usePathname();
    console.log(path)

  return (
    <html lang="en">
      <body className="bg-no-repeat min-h-screen">
         <Info />
         <main className="w-[90%] mx-auto">
             { (path != '/faqs' && "/policies") && <Header /> }
             {children}
             { (path != '/faqs' && '/policies') && <Footer />}
         </main>
      </body>
    </html>
  )
}
