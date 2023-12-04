import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'EasyBridge',
  description: 'build a wormhole bridge tool with ease',
}

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
         <main className="w-[90%] mx-auto">
             {children}
         </main>
  )
}
