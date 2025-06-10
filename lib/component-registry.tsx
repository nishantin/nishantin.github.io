import type { ComponentCategory, ComponentInfo } from "@/types/component"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

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
            <Button size="sm">Primary</Button>
            <Button variant="outline" size="sm">
              Outline
            </Button>
            <Button variant="ghost" size="sm">
              Ghost
            </Button>
          </div>
        ),
        examples: [
          {
            title: "Basic Button Variants",
            description: "Try changing the variant prop to see different button styles",
            code: `function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  )
}`,
          },
          {
            title: "Button Sizes",
            description: "Buttons come in different sizes for various use cases",
            code: `function Example() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🚀</Button>
    </div>
  )
}`,
          },
          {
            title: "Interactive Button States",
            description: "Experiment with disabled and loading states",
            code: `function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline">Click me!</Button>
    </div>
  )
}`,
          },
        ],
        props: [
          {
            name: "variant",
            type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
            default: '"default"',
            description: "The visual style variant of the button",
          },
          {
            name: "size",
            type: '"default" | "sm" | "lg" | "icon"',
            default: '"default"',
            description: "The size of the button",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Whether the button is disabled",
          },
        ],
      },
      {
        name: "Badge",
        description: "A small status descriptor for UI elements.",
        category: "General",
        preview: (
          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        ),
        examples: [
          {
            title: "Badge Variants",
            description: "Different badge styles for various contexts",
            code: `function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
          },
          {
            title: "Badge with Content",
            description: "Badges can contain numbers, text, or icons",
            code: `function Example() {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      <Badge>New</Badge>
      <Badge variant="secondary">99+</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Beta</Badge>
    </div>
  )
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
        description: "A basic text input field with validation support.",
        category: "Data Entry",
        preview: <Input placeholder="Enter text..." className="max-w-xs" />,
        examples: [
          {
            title: "Input Types",
            description: "Different input types for various data entry needs",
            code: `function Example() {
  return (
    <div className="space-y-4 max-w-sm">
      <Input placeholder="Basic input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input disabled placeholder="Disabled input" />
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
        name: "Card",
        description: "A flexible container for grouping related content.",
        category: "Data Display",
        preview: (
          <Card className="w-48 p-4">
            <div className="text-sm font-medium">Sample Card</div>
            <div className="text-xs text-muted-foreground mt-1">Card content</div>
          </Card>
        ),
        examples: [
          {
            title: "Basic Card",
            description: "A simple card with header, content, and footer",
            code: `function Example() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can put any content.</p>
      </CardContent>
    </Card>
  )
}`,
          },
        ],
      },
      {
        name: "Avatar",
        description: "Display user profile pictures or initials.",
        category: "Data Display",
        preview: (
          <div className="flex gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">JD</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">AB</AvatarFallback>
            </Avatar>
          </div>
        ),
        examples: [
          {
            title: "Avatar Examples",
            description: "Avatars with different sizes and fallbacks",
            code: `function Example() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar className="w-8 h-8">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="w-10 h-10">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}`,
          },
        ],
      },
    ],
  },
  {
    name: "Layout",
    components: [
      {
        name: "Separator",
        description: "A visual divider to separate content sections.",
        category: "Layout",
        preview: (
          <div className="w-32">
            <div className="text-xs">Above</div>
            <Separator className="my-2" />
            <div className="text-xs">Below</div>
          </div>
        ),
        examples: [
          {
            title: "Horizontal Separator",
            description: "Use separators to divide content sections",
            code: `function Example() {
  return (
    <div className="w-full max-w-sm">
      <div className="text-sm">Section 1</div>
      <Separator className="my-4" />
      <div className="text-sm">Section 2</div>
      <Separator className="my-4" />
      <div className="text-sm">Section 3</div>
    </div>
  )
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
