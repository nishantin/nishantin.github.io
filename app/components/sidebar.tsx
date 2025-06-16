"use client"

import { Layout, Menu, Typography, Button } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import Link from "next/link"
import type { ComponentCategory } from "@/types/component"

const { Sider } = Layout
const { Title } = Typography

interface SidebarProps {
  categories: ComponentCategory[]
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
}

export function Sidebar({ categories, selectedCategory, onCategorySelect }: SidebarProps) {
  const menuItems = [
    {
      key: "overview",
      label: "Components Overview",
      onClick: () => onCategorySelect(null),
    },
    ...categories.map((category) => ({
      key: category.name,
      label: `${category.name} (${category.components.length})`,
      onClick: () => onCategorySelect(category.name),
      children: category.components.map((component) => ({
        key: `${category.name}-${component.name}`,
        label: (
          <Link href={`/components/${component.name.toLowerCase()}`}>
            {component.name}
            {component.version && <span className="ml-2 text-xs text-green-600">{component.version}</span>}
          </Link>
        ),
      })),
    })),
  ]

  return (
    <Sider width={280} className="bg-white border-r border-gray-200">
      <div className="p-4 space-y-4">
        <Link href="/">
          <Button type="primary" icon={<HomeOutlined />} block>
            Back to Home
          </Button>
        </Link>

        <Menu
          mode="inline"
          selectedKeys={selectedCategory ? [selectedCategory] : ["overview"]}
          items={menuItems}
          className="border-none"
        />
      </div>
    </Sider>
  )
}
