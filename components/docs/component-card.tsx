"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ComponentInfo } from "@/types/component"

interface ComponentCardProps {
  component: ComponentInfo
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/components/${component.name.toLowerCase()}`}>
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{component.name}</CardTitle>
            {component.version && (
              <Badge variant="secondary" className="text-xs">
                {component.version}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="h-24 bg-muted/50 rounded-md flex items-center justify-center">{component.preview}</div>

          <p className="text-sm text-muted-foreground">{component.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
