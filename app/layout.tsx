import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SiteProvider } from "./contexts/SiteContext"
import "./scss/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "We are Mavis",
  description: "Mavis",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SiteProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </SiteProvider>
  )
}
