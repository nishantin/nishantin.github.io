"use client"

import { useState, useMemo } from "react"
import type { ComponentInfo } from "@/types/component"

export function useComponentSearch(components: ComponentInfo[]) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) return components

    const query = searchQuery.toLowerCase()
    return components.filter(
      (component) =>
        component.name.toLowerCase().includes(query) ||
        component.description.toLowerCase().includes(query) ||
        component.category.toLowerCase().includes(query),
    )
  }, [components, searchQuery])

  return {
    searchQuery,
    setSearchQuery,
    filteredComponents,
  }
}
