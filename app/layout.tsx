import './globals.css'
import { Roboto_Serif } from 'next/font/google'
import GoogleAnalytics from './gtag'

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
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className={mainFont.className}>{children}</body>
    </html>
  )
}
