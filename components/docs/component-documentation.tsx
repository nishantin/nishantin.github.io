"use client"

import type { ComponentInfo } from "@/types/component"
import { LiveCodeEditor } from "./live-code-editor"
import { BackToHome } from "./back-to-home"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ComponentDocumentationProps {
  component: ComponentInfo
}

export function ComponentDocumentation({ component }: ComponentDocumentationProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <BackToHome />
        <div className="flex items-center gap-2">
          {component.version && <Badge variant="secondary">{component.version}</Badge>}
        </div>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">{component.name}</h1>
        </div>
        <p className="text-lg text-muted-foreground">{component.description}</p>
      </header>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interactive Examples</h2>
        <p className="text-muted-foreground">
          Edit the code below to see live updates in the preview. Changes are reflected immediately as you type.
        </p>

        {component.examples?.map((example, index) => (
          <LiveCodeEditor key={index} code={example.code} title={example.title} description={example.description} />
        ))}
      </section>

      {component.props && (
        <>
          <Separator />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">API Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Property</th>
                    <th className="border border-border p-3 text-left">Type</th>
                    <th className="border border-border p-3 text-left">Default</th>
                    <th className="border border-border p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map((prop) => (
                    <tr key={prop.name}>
                      <td className="border border-border p-3 font-mono text-sm">
                        {prop.name}
                        {prop.required && <span className="text-destructive ml-1">*</span>}
                      </td>
                      <td className="border border-border p-3 font-mono text-sm text-muted-foreground">{prop.type}</td>
                      <td className="border border-border p-3 font-mono text-sm">{prop.default || "-"}</td>
                      <td className="border border-border p-3 text-sm">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
