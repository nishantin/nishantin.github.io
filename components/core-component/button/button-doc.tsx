import { Button } from "@/components/ui";

export const ButtonDoc = {
  name: "Button",
  description: "A clickable button component with multiple variants and sizes.",
  category: "General",
  preview: (
    <div className="flex gap-2">
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
    </div>
  ),
  examples: [
    {
      title: "Basic Button Variants",
      description:
        "Try changing the variant prop to see different button styles",
      code: `function Example() {
return (
<div className="flex gap-2 flex-wrap">
  <Button type="primary" size="small">Primary</Button>
  <Button type="dashed" size="small">Dashed</Button>
  <Button type="text" size="small">Text</Button>
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
  <Button size="small">Small</Button>
  <Button size="default">Default</Button>
  <Button size="large">Large</Button>
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
      name: "type",
      type: '"primary" | "dashed" | "link" | "text" | "default"',
      default: '"default"',
      description: "The visual style variant of the button",
    },
    {
      name: "size",
      type: '"medium" | "small" | "large" | "icon"',
      default: '"medium"',
      description: "The size of the button",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the button is disabled",
    },
  ],
};
