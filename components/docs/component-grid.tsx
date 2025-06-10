"use client"

import type { ComponentCategory } from "@/types/component"
import { ComponentCard } from "./component-card"

interface ComponentGridProps {
  categories: ComponentCategory[]
  selectedCategory: string | null
}

export function ComponentGrid({ categories, selectedCategory }: ComponentGridProps) {
  const displayCategories = selectedCategory ? categories.filter((cat) => cat.name === selectedCategory) : categories

  return (
    <div className="space-y-12">
      {displayCategories.map((category) => (
        <section key={category.name}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            {category.name}
            <span className="text-sm text-muted-foreground font-normal">{category.components.length}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.components.map((component) => (
              <ComponentCard key={component.name} component={component} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
