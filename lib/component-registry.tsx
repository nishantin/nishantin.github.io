import type { ComponentCategory, ComponentInfo } from "@/types/component"
import {
  Button,
  Card,
  Input,
  Badge,
  Avatar,
  Anchor,
  Breadcrumb,
  Dropdown,
  Pagination,
  Steps,
  Tabs,
  AutoComplete,
  Checkbox,
  DatePicker,
  Slider,
  Alert,
  Progress,
  Spin,
  Table,
  Carousel,
  Collapse,
} from "antd"

export const componentCategories: ComponentCategory[] = [
  {
    name: "General",
    components: [
      {
        name: "Button",
        description: "A clickable button component with multiple variants and sizes.",
        category: "General",
        preview: (
          <div className="flex gap-2">
            <Button type="primary" size="small">
              Primary
            </Button>
            <Button size="small">Default</Button>
            <Button type="dashed" size="small">
              Dashed
            </Button>
          </div>
        ),
        examples: [
          {
            title: "Button Types",
            description: "Different button types for various use cases",
            code: `function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  )
}`,
          },
          {
            title: "Button Sizes",
            description: "Buttons come in different sizes",
            code: `function Example() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </div>
  )
}`,
          },
          {
            title: "Button States",
            description: "Different button states and loading",
            code: `function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button type="primary">Normal</Button>
      <Button type="primary" loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button danger>Danger</Button>
    </div>
  )
}`,
          },
        ],
      },
    ],
  },
  {
    name: "Navigation",
    components: [
      {
        name: "Anchor",
        description: "Hyperlinks to scroll on one page.",
        category: "Navigation",
        preview: (
          <Anchor
            size="small"
            items={[
              { key: "1", href: "#section1", title: "Section 1" },
              { key: "2", href: "#section2", title: "Section 2" },
            ]}
          />
        ),
        examples: [
          {
            title: "Basic Anchor",
            code: `function Example() {
  return (
    <Anchor
      items={[
        { key: '1', href: '#basic', title: 'Basic Usage' },
        { key: '2', href: '#api', title: 'API Reference' },
        { key: '3', href: '#examples', title: 'Examples' }
      ]}
    />
  )
}`,
          },
        ],
      },
      {
        name: "Breadcrumb",
        description: "A breadcrumb displays the current location within a hierarchy.",
        category: "Navigation",
        preview: <Breadcrumb items={[{ title: "Home" }, { title: "Components" }, { title: "Breadcrumb" }]} />,
        examples: [
          {
            title: "Basic Breadcrumb",
            code: `function Example() {
  return (
    <Breadcrumb
      items={[
        { title: 'Home' },
        { title: 'Application Center' },
        { title: 'Application List' },
        { title: 'An Application' }
      ]}
    />
  )
}`,
          },
        ],
      },
      {
        name: "Dropdown",
        description: "A dropdown list of actions or options.",
        category: "Navigation",
        preview: (
          <Dropdown
            menu={{
              items: [
                { key: "1", label: "Option 1" },
                { key: "2", label: "Option 2" },
              ],
            }}
          >
            <Button>Dropdown</Button>
          </Dropdown>
        ),
        examples: [
          {
            title: "Basic Dropdown",
            code: `function Example() {
  const items = [
    { key: '1', label: 'First Option' },
    { key: '2', label: 'Second Option' },
    { key: '3', label: 'Third Option' }
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <Button>Click me</Button>
    </Dropdown>
  )
}`,
          },
        ],
      },
      {
        name: "Pagination",
        description: "A long list can be divided into several pages using Pagination.",
        category: "Navigation",
        preview: <Pagination defaultCurrent={1} total={50} size="small" />,
        examples: [
          {
            title: "Basic Pagination",
            code: `function Example() {
  return (
    <div className="space-y-4">
      <Pagination defaultCurrent={1} total={50} />
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Pagination defaultCurrent={1} total={50} showQuickJumper />
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "Steps",
        description: "Steps is a navigation bar that guides users through the steps of a task.",
        category: "Navigation",
        preview: (
          <Steps
            size="small"
            current={1}
            items={[{ title: "Finished" }, { title: "In Progress" }, { title: "Waiting" }]}
          />
        ),
        examples: [
          {
            title: "Basic Steps",
            code: `function Example() {
  return (
    <Steps
      current={1}
      items={[
        { title: 'Finished', description: 'This is a description.' },
        { title: 'In Progress', description: 'This is a description.' },
        { title: 'Waiting', description: 'This is a description.' }
      ]}
    />
  )
}`,
          },
        ],
      },
      {
        name: "Tabs",
        description: "Tabs make it easy to switch between different views.",
        category: "Navigation",
        preview: (
          <Tabs
            size="small"
            items={[
              { key: "1", label: "Tab 1", children: "Content 1" },
              { key: "2", label: "Tab 2", children: "Content 2" },
            ]}
          />
        ),
        examples: [
          {
            title: "Basic Tabs",
            code: `function Example() {
  const items = [
    { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
    { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
    { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' }
  ];

  return <Tabs defaultActiveKey="1" items={items} />
}`,
          },
        ],
      },
    ],
  },
  {
    name: "Data Entry",
    components: [
      {
        name: "Input",
        description: "A basic text input field.",
        category: "Data Entry",
        preview: <Input placeholder="Enter text..." className="max-w-xs" />,
        examples: [
          {
            title: "Input Types",
            code: `function Example() {
  return (
    <div className="space-y-4 max-w-sm">
      <Input placeholder="Basic input" />
      <Input.Password placeholder="Password input" />
      <Input.TextArea placeholder="Textarea" rows={4} />
      <Input disabled placeholder="Disabled input" />
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "AutoComplete",
        description: "Autocomplete function of input field.",
        category: "Data Entry",
        preview: (
          <AutoComplete
            className="max-w-xs"
            options={[{ value: "Option 1" }, { value: "Option 2" }]}
            placeholder="Type to search"
          />
        ),
        examples: [
          {
            title: "Basic AutoComplete",
            code: `function Example() {
  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' }
  ];

  return (
    <AutoComplete
      options={options}
      placeholder="Try to type 'b'"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  )
}`,
          },
        ],
      },
      {
        name: "Checkbox",
        description: "Checkbox component.",
        category: "Data Entry",
        preview: (
          <div className="flex gap-2">
            <Checkbox>Option A</Checkbox>
            <Checkbox checked>Option B</Checkbox>
          </div>
        ),
        examples: [
          {
            title: "Basic Checkbox",
            code: `function Example() {
  return (
    <div className="space-y-2">
      <Checkbox>Apple</Checkbox>
      <Checkbox>Pear</Checkbox>
      <Checkbox>Orange</Checkbox>
      <Checkbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} />
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "DatePicker",
        description: "To select or input a date.",
        category: "Data Entry",
        preview: <DatePicker placeholder="Select date" />,
        examples: [
          {
            title: "Basic DatePicker",
            code: `function Example() {
  return (
    <div className="space-y-4">
      <DatePicker placeholder="Select date" />
      <DatePicker.RangePicker />
      <DatePicker picker="month" placeholder="Select month" />
      <DatePicker picker="year" placeholder="Select year" />
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "Slider",
        description: "A Slider component for displaying current value and intervals in range.",
        category: "Data Entry",
        preview: <Slider defaultValue={30} className="max-w-xs" />,
        examples: [
          {
            title: "Basic Slider",
            code: `function Example() {
  return (
    <div className="space-y-6 max-w-sm">
      <Slider defaultValue={30} />
      <Slider range defaultValue={[20, 50]} />
      <Slider defaultValue={30} disabled />
    </div>
  )
}`,
          },
        ],
      },
    ],
  },
  {
    name: "Feedback",
    components: [
      {
        name: "Alert",
        description: "Alert component for feedback.",
        category: "Feedback",
        preview: <Alert message="Success Text" type="success" showIcon />,
        examples: [
          {
            title: "Alert Types",
            code: `function Example() {
  return (
    <div className="space-y-4">
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "Progress",
        description: "Display the current progress of an operation flow.",
        category: "Feedback",
        preview: <Progress percent={30} className="max-w-xs" />,
        examples: [
          {
            title: "Progress Types",
            code: `function Example() {
  return (
    <div className="space-y-4">
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress type="circle" percent={75} />
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "Spin",
        description: "A spinner for displaying loading state of a page or a section.",
        category: "Feedback",
        preview: <Spin />,
        examples: [
          {
            title: "Basic Spin",
            code: `function Example() {
  return (
    <div className="space-y-4">
      <Spin />
      <Spin size="large" />
      <Spin spinning={true}>
        <div className="p-4 bg-gray-100 rounded">
          Content will be covered by spin
        </div>
      </Spin>
    </div>
  )
}`,
          },
        ],
      },
    ],
  },
  {
    name: "Data Display",
    components: [
      {
        name: "Badge",
        description: "Small numerical value or status descriptor for UI elements.",
        category: "Data Display",
        preview: (
          <div className="flex gap-2">
            <Badge count={5}>
              <Avatar shape="square" size="large" />
            </Badge>
            <Badge dot>
              <Avatar shape="square" size="large" />
            </Badge>
          </div>
        ),
        examples: [
          {
            title: "Basic Badge",
            code: `function Example() {
  return (
    <div className="flex gap-4">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot>
        <Avatar shape="square" size="large" />
      </Badge>
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "Card",
        description: "Simple rectangular container.",
        category: "Data Display",
        preview: (
          <Card title="Card title" size="small" className="w-48">
            <p>Card content</p>
          </Card>
        ),
        examples: [
          {
            title: "Basic Card",
            code: `function Example() {
  return (
    <div className="space-y-4">
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
      </Card>
    </div>
  )
}`,
          },
        ],
      },
      {
        name: "Table",
        description: "A table displays rows of data.",
        category: "Data Display",
        preview: (
          <Table
            size="small"
            dataSource={[
              { key: "1", name: "John", age: 32 },
              { key: "2", name: "Jim", age: 42 },
            ]}
            columns={[
              { title: "Name", dataIndex: "name", key: "name" },
              { title: "Age", dataIndex: "age", key: "age" },
            ]}
            pagination={false}
          />
        ),
        examples: [
          {
            title: "Basic Table",
            code: `function Example() {
  const dataSource = [
    { key: '1', name: 'Mike', age: 32, address: '10 Downing Street' },
    { key: '2', name: 'John', age: 42, address: '10 Downing Street' }
  ];

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' }
  ];

  return <Table dataSource={dataSource} columns={columns} />
}`,
          },
        ],
      },
      {
        name: "Carousel",
        description: "A carousel component. Scales with its container.",
        category: "Data Display",
        preview: (
          <Carousel autoplay className="w-48">
            <div className="h-32 bg-blue-500 flex items-center justify-center text-white">1</div>
            <div className="h-32 bg-green-500 flex items-center justify-center text-white">2</div>
          </Carousel>
        ),
        examples: [
          {
            title: "Basic Carousel",
            code: `function Example() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay>
      <div><h3 style={contentStyle}>1</h3></div>
      <div><h3 style={contentStyle}>2</h3></div>
      <div><h3 style={contentStyle}>3</h3></div>
      <div><h3 style={contentStyle}>4</h3></div>
    </Carousel>
  )
}`,
          },
        ],
      },
      {
        name: "Collapse",
        description: "A content area which can be collapsed and expanded.",
        category: "Data Display",
        preview: (
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: "Panel Header 1",
                children: <p>Panel content</p>,
              },
            ]}
          />
        ),
        examples: [
          {
            title: "Basic Collapse",
            code: `function Example() {
  const items = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness.</p>
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness.</p>
    }
  ];

  return <Collapse items={items} defaultActiveKey={['1']} />
}`,
          },
        ],
      },
    ],
  },
]

export function getComponentBySlug(slug: string): ComponentInfo | undefined {
  for (const category of componentCategories) {
    const component = category.components.find((comp) => comp.name.toLowerCase() === slug.toLowerCase())
    if (component) return component
  }
  return undefined
}

export function getAllComponents(): ComponentInfo[] {
  return componentCategories.flatMap((category) => category.components)
}
