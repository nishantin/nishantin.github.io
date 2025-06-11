"use client"

import { Layout, Menu, Button, Space, Typography } from "antd"
import { HomeOutlined, ComponentOutlined, GithubOutlined, BookOutlined } from "@ant-design/icons"
import Link from "next/link"

const { Header } = Layout
const { Title } = Typography

export function Navbar() {
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "components",
      icon: <ComponentOutlined />,
      label: <Link href="/">Components</Link>,
    },
    {
      key: "docs",
      icon: <BookOutlined />,
      label: "Documentation",
    },
  ]

  return (
    <Header className="bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <Title level={3} className="!mb-0 !text-gray-900">
            BBRIX
          </Title>
        </Link>
        <Menu mode="horizontal" items={menuItems} className="border-none bg-transparent" />
      </div>
      <Space>
        <Button type="text" icon={<GithubOutlined />} href="https://github.com" target="_blank">
          GitHub
        </Button>
      </Space>
    </Header>
  )
}
