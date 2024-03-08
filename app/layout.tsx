import type { Metadata } from "next"
import { SiteProvider } from "./contexts/SiteContext"
import App from "./app"
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
      <App children={children} />
    </SiteProvider>
  )
}
