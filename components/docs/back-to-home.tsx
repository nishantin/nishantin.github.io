"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

interface BackToHomeProps {
  variant?: "home" | "back"
  className?: string
}

export function BackToHome({ variant = "back", className }: BackToHomeProps) {
  return (
    <Link href="/">
      <Button variant="outline" size="sm" className={className}>
        {variant === "home" ? (
          <>
            <Home className="w-4 h-4 mr-2" />
            Home
          </>
        ) : (
          <>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Components
          </>
        )}
      </Button>
    </Link>
  )
}
