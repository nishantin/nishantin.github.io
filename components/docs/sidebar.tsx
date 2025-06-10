"use client"

import { cn } from "@/lib/utils"
import { BackToHome } from "./back-to-home"
import type { ComponentCategory } from "@/types/component"

interface SidebarProps {
  categories: ComponentCategory[]
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
}

export function Sidebar({ categories, selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <aside className="w-64 border-r bg-muted/10 p-4">
      <div className="space-y-4">
        {/* Home Button */}
        <div className="pb-2 border-b">
          <BackToHome variant="home" className="w-full justify-start" />
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <button
            onClick={() => onCategorySelect(null)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
              selectedCategory === null ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            )}
          >
            Components Overview
          </button>

          {categories.map((category) => (
            <div key={category.name} className="space-y-1">
              <button
                onClick={() => onCategorySelect(category.name)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  selectedCategory === category.name ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                {category.name}
                <span className="ml-2 text-xs text-muted-foreground">{category.components.length}</span>
              </button>

              {selectedCategory === category.name && (
                <div className="ml-4 space-y-1">
                  {category.components.map((component) => (
                    <a
                      key={component.name}
                      href={`/components/${component.name.toLowerCase()}`}
                      className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {component.name}
                      {component.version && <span className="ml-2 text-xs text-green-600">{component.version}</span>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
