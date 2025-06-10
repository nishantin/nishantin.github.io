import { ComponentDocumentation } from "@/components/docs/component-documentation"
import { componentCategories } from "@/lib/component-registry"

export default function ButtonPage() {
  const buttonComponent = componentCategories
    .find((category) => category.name === "General")
    ?.components.find((component) => component.name === "Button")

  if (!buttonComponent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Component not found</h1>
          <a href="/" className="text-primary hover:underline">
            Back to Components
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <ComponentDocumentation component={buttonComponent} />
    </div>
  )
}
