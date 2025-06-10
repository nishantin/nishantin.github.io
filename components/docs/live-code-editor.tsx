"use client"

import { useState } from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Copy, RotateCcw } from "lucide-react"

interface LiveCodeEditorProps {
  code: string
  title?: string
  description?: string
  scope?: Record<string, any>
}

export function LiveCodeEditor({ code, title = "Live Example", description, scope = {} }: LiveCodeEditorProps) {
  const [currentCode, setCurrentCode] = useState(code)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentCode)
  }

  const resetCode = () => {
    setCurrentCode(code)
  }

  const liveScope = {
    Button,
    Badge,
    Input,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Avatar,
    AvatarImage,
    AvatarFallback,
    Separator,
    ...scope,
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={resetCode} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <LiveProvider code={currentCode} scope={liveScope} noInline={false}>
          {/* Live Preview Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Preview</h4>
            <div className="border rounded-md p-6 bg-background min-h-[120px] flex items-center justify-center">
              <LivePreview />
            </div>
            <LiveError className="p-2 bg-destructive/10 text-destructive text-sm rounded" />
          </div>

          {/* Live Code Editor Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Code</h4>
            <div className="border rounded-md overflow-hidden">
              <LiveEditor
                onChange={setCurrentCode}
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                  fontSize: "14px",
                  backgroundColor: "hsl(var(--muted))",
                  minHeight: "200px",
                  padding: "16px",
                }}
              />
            </div>
          </div>
        </LiveProvider>
      </CardContent>
    </Card>
  )
}
