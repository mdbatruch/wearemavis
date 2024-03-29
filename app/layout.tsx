import type { Metadata } from "next"
import App from "./app"
import { SiteProvider } from "./contexts/SiteContext"
import "./scss/globals.scss"


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
      <App>
        {children}
      </App>
    </SiteProvider>
  )
}
