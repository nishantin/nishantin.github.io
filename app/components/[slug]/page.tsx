import { notFound } from "next/navigation"
import { ComponentDocumentation } from "@/app/components/component-documentation"
import { getComponentBySlug } from "@/library/component-registry"

interface ComponentPageProps {
  params: {
    slug: string
  }
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const component = getComponentBySlug(params.slug)

  if (!component) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <ComponentDocumentation component={component} />
    </div>
  )
}
