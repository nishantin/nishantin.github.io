"use client"

import Link from "next/link"
import { Button } from "antd"
import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons"

interface BackToHomeProps {
  variant?: "home" | "back"
  className?: string
}

export function BackToHome({ variant = "back", className }: BackToHomeProps) {
  return (
    <Link href="/">
      <Button type="default" icon={variant === "home" ? <HomeOutlined /> : <ArrowLeftOutlined />} className={className}>
        {variant === "home" ? "Home" : "Back to Components"}
      </Button>
    </Link>
  )
}
