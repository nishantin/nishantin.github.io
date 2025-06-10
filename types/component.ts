import type React from "react"
export interface ComponentProp {
  name: string
  type: string
  required?: boolean
  default?: string
  description: string
}

export interface ComponentExample {
  title: string
  description?: string
  code: string
}

export interface ComponentInfo {
  name: string
  description: string
  category: string
  version?: string
  preview: React.ReactNode
  examples?: ComponentExample[]
  props?: ComponentProp[]
}

export interface ComponentCategory {
  name: string
  components: ComponentInfo[]
}
