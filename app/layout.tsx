import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Journey: Software Engineer to Housing Developer',
  description: 'Personal website chronicling my career shift and housing podcast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/projects">Software Projects</a>
          <a href="/career-shift">Career Shift Journey</a>
          <a href="/podcast">Making It Home Podcast</a>
        </nav>
        {children}
      </body>
    </html>
  )
}