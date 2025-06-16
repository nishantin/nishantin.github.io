"use client"

import { Layout, Typography, Tag, Divider, Table, Space } from "antd"
import type { ComponentInfo } from "@/types/component"
import { LiveCodeEditor } from "./live-code-editor"
import { BackToHome } from "./back-to-home"

const { Content } = Layout
const { Title, Paragraph } = Typography

interface ComponentDocumentationProps {
  component: ComponentInfo
}

export function ComponentDocumentation({ component }: ComponentDocumentationProps) {
  const propsColumns = [
    {
      title: "Property",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          {text}
          {record.required && <span className="text-red-500 ml-1">*</span>}
        </code>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text: string) => <code className="text-gray-600 text-sm">{text}</code>,
    },
    {
      title: "Default",
      dataIndex: "default",
      key: "default",
      render: (text: string) => <code className="text-sm">{text || "-"}</code>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ]

  return (
    <Content className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <BackToHome />
        <Space>{component.version && <Tag color="processing">{component.version}</Tag>}</Space>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <Title level={1}>{component.name}</Title>
        </div>
        <Paragraph className="text-lg text-gray-600">{component.description}</Paragraph>
      </header>

      <Divider />

      <section className="space-y-6">
        <Title level={2}>Interactive Examples</Title>
        <Paragraph type="secondary">
          Edit the code below to see live updates in the preview. Changes are reflected immediately as you type.
        </Paragraph>

        {component.examples?.map((example, index) => (
          <LiveCodeEditor key={index} code={example.code} title={example.title} description={example.description} />
        ))}
      </section>

      {component.props && (
        <>
          <Divider />
          <section className="space-y-4">
            <Title level={2}>API Reference</Title>
            <Table
              dataSource={component.props.map((prop, index) => ({ ...prop, key: index }))}
              columns={propsColumns}
              pagination={false}
              size="small"
            />
          </section>
        </>
      )}
    </Content>
  )
}
