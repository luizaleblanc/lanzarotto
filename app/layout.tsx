import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import PageTransition from "./components/page-transition"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
