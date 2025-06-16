import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ConfigProvider } from "antd"
import { Navbar } from "@/app/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BBRIX UI Component Library",
  description: "A comprehensive React TypeScript UI component library built with Ant Design",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2563eb",
              borderRadius: 6,
            },
            components: {
              Button: {
                borderRadius: 6,
              },
              Card: {
                borderRadius: 8,
              },
            },
          }}
        >
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            {children}
          </div>
        </ConfigProvider>
      </body>
    </html>
  )
}
