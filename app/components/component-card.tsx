"use client"

import Link from "next/link"
import { Card, Tag, Typography } from "antd"
import type { ComponentInfo } from "@/types/component"

const { Meta } = Card
const { Text } = Typography

interface ComponentCardProps {
  component: ComponentInfo
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/components/${component.name.toLowerCase()}`}>
      <Card
        hoverable
        className="h-full flex flex-col items-center justify-center"
        style={{ padding: "16px" }} // Added padding here
        cover={
          <div className="h-24 w-full bg-gray-50 flex items-center justify-center border-b border-gray-200">
            {component.preview}
          </div>
        }
        actions={[
          <div key="version" className="px-4">
            {component.version && <Tag color="success">{component.version}</Tag>}
          </div>,
        ]}
      >
        <Meta
          title={<div className="text-center">{component.name}</div>}
          description={<Text type="secondary" className="text-center">{component.description}</Text>}
        />
      </Card>
    </Link>
  )
}
