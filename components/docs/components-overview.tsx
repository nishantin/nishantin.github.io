"use client"

import { useState } from "react"
import { Layout, Input, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { Sidebar } from "@/components/docs/sidebar"
import { ComponentGrid } from "@/components/docs/component-grid"
import { componentCategories } from "@/lib/component-registry"

const { Content } = Layout
const { Title, Paragraph } = Typography

export function ComponentsOverview() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = componentCategories
    .map((category) => ({
      ...category,
      components: category.components.filter(
        (component) =>
          component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          component.description.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.components.length > 0)

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Sidebar
        categories={componentCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <Content className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Title level={1}>Components Overview</Title>
            </div>
            <Paragraph className="text-lg text-gray-600 mb-6">
              Our UI library provides plenty of components built with Ant Design to enrich your web applications. All
              components feature live code editing with real-time preview updates.
            </Paragraph>

            <Input
              placeholder="Search in components"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
              size="large"
            />
          </header>

          <ComponentGrid categories={filteredCategories} selectedCategory={selectedCategory} />
        </div>
      </Content>
    </Layout>
  )
}
