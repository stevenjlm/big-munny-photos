import './globals.css'
import { Roboto_Serif } from 'next/font/google'

const mainFont = Roboto_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Big Munny Photos',
  description: 'Big Munny Photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  )
}
