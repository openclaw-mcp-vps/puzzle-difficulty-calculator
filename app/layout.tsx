import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Puzzle Difficulty Calculator',
  description: 'Analyze and rate custom puzzle difficulty automatically'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4a5c0969-cd66-48be-b221-2f4ccc339580"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
