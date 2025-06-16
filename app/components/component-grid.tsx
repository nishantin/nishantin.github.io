"use client"

import { Row, Col, Typography } from "antd"
import type { ComponentCategory } from "@/types/component"
import { ComponentCard } from "./component-card"

const { Title } = Typography

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
          <Title level={2} className="flex items-center gap-2 mb-6">
            {category.name}
            <span className="text-sm text-gray-500 font-normal">({category.components.length})</span>
          </Title>

          <Row gutter={[24, 24]}>
            {category.components.map((component) => (
              <Col key={component.name} xs={24} sm={12} md={8} lg={6}>
                <ComponentCard component={component} />
              </Col>
            ))}
          </Row>
        </section>
      ))}
    </div>
  )
}
