import { notFound } from "next/navigation"
import { ComponentDocumentation } from "@/components/docs/component-documentation"
import { getComponentBySlug } from "@/lib/component-registry"

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

export async function generateStaticParams() {
  return [
    { slug: "button" },
    { slug: "card" },
    { slug: "input" },
    { slug: "badge" },
    { slug: "avatar" },
    { slug: "separator" },
  ]
}
