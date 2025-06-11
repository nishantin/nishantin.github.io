"use client"

import { useState } from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { Card, Button, Typography, Space } from "antd"
import { CopyOutlined, ReloadOutlined } from "@ant-design/icons"
import * as AntdComponents from "antd"
import * as AntdIcons from "@ant-design/icons"

const { Title, Text } = Typography

interface LiveCodeEditorProps {
  code: string
  title?: string
  description?: string
  scope?: Record<string, any>
}

export function LiveCodeEditor({ code, title = "Live Example", description, scope = {} }: LiveCodeEditorProps) {
  const [currentCode, setCurrentCode] = useState(code)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentCode)
  }

  const resetCode = () => {
    setCurrentCode(code)
  }

  const liveScope = {
    ...AntdComponents,
    ...AntdIcons,
    ...scope,
  }

  return (
    <Card className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <Title level={4} className="!mb-1">
            {title}
          </Title>
          {description && <Text type="secondary">{description}</Text>}
        </div>
        <Space>
          <Button icon={<ReloadOutlined />} onClick={resetCode}>
            Reset
          </Button>
          <Button type="primary" icon={<CopyOutlined />} onClick={copyToClipboard}>
            Copy
          </Button>
        </Space>
      </div>

      <div className="space-y-4">
        <LiveProvider code={currentCode} scope={liveScope} noInline={false}>
          {/* Live Preview Section */}
          <div className="space-y-2">
            <Text strong className="text-gray-600">
              Preview
            </Text>
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[120px] flex items-center justify-center">
              <LivePreview />
            </div>
            <LiveError className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200" />
          </div>

          {/* Live Code Editor Section */}
          <div className="space-y-2">
            <Text strong className="text-gray-600">
              Code
            </Text>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <LiveEditor
                onChange={setCurrentCode}
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                  fontSize: "14px",
                  backgroundColor: "#fafafa",
                  minHeight: "200px",
                  padding: "16px",
                }}
              />
            </div>
          </div>
        </LiveProvider>
      </div>
    </Card>
  )
}
