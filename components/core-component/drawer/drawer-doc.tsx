import React from "react";
import { Drawer } from "@/components/ui";

export const DrawerDoc = {
  name: "Drawer",
  description: "A panel that slides out from the edge of the screen.",
  category: "General",
  preview: (
    <div className="flex gap-2">
      <Drawer
        title="Drawer Title"
        open={true}
        children="This is an example of a drawer component."
        height={120}
        hideOverlay={true}
        getContainer={false}
        placement="top"
      />
    </div>
  ),
  examples: [
    {
      title: "Basic Drawer",
      description:
        "This is an example that displays a basic drawer with a header and body.",
      code: `function Example() {
        const [open, setOpen] = React.useState(false);
        return (
          <>
            <div className="flex gap-2 flex-wrap">
              <Button type="primary" size="small" onClick={() => setOpen(true)}>
                Open Drawer
              </Button>
            </div>
            <Drawer
              title="Drawer Title"
              open={open}
              onClose={() => setOpen(false)}
              children="This is an example of a drawer component."
            />
          </>
        );
      }`,
    },
    {
      title: "Large Width",
      description:
        "This is an example that displays a basic drawer with a large width.",
      code: `function Example() {
        const [open, setOpen] = React.useState(false);
        return(
          <>
              <div className="flex gap-2 flex-wrap">
                <Button
                  type="primary"
                  size="small"
                  onClick={() => setOpen(true)}
                >
                  Open Drawer
                </Button>
              </div>
            <Drawer
              title="Large Width Drawer"
              open={open}
              onClose={() => setOpen(false)}
              placement={"right"}
              children="This is an example of a drawer component."
              width={736}
            />
          </>
        );
      }`,
    },
    {
      title: "Custom Placement",
      description: "The drawer can appear from any edge of the screen.",
      code: `function Example() {
        const [open, setOpen] = React.useState(false);
        const [placement, setPlacement] = React.useState<"right" | "top" | "bottom" | "left">("right");
        return(
          <>
            <Space>
              <Radio.Group
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
              >
                <Radio value="top">top</Radio>
                <Radio value="right">right</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
              </Radio.Group>
              <div className="flex gap-2 flex-wrap">
                <Button
                  type="primary"
                  size="small"
                  onClick={() => setOpen(true)}
                >
                  Open Drawer
                </Button>
              </div>
            </Space>
            <Drawer
              title="Custom Placement Drawer"
              open={open}
              onClose={() => setOpen(false)}
              placement={placement}
              children="This is an example of a drawer component."
            />
          </>
        );
      }`,
    },
    {
      title: "Hide Overlay Mask",
      description:
        "This is an example that displays a basic drawer without an overlay mask. This can be useful when content in the drawer and on the page should be visible at the same time. This will allow for the user to interact with the contents of the page while the drawer is open",
      code: `function Example() {
        const [open, setOpen] = React.useState(false);
        return (
          <>
            <div className="flex gap-2 flex-wrap">
              <Button type="primary" size="small" onClick={() => setOpen(true)}>
                Open Drawer
              </Button>
            </div>
            <Drawer
              title="Drawer without Overlay Mask"
              open={open}
              onClose={() => setOpen(false)}
              children="This is an example of a drawer component."
              hideOverlay={true}
            />
          </>
        );
      }`,
    },
    {
      title: "Loading Drawer",
      description:
        "This is an example that displays a drawer with a loader inside.",
      code: `function Example() {
          const [open, setOpen] = React.useState(false);
          return (
            <>
              <div className="flex gap-2 flex-wrap">
                <Button type="primary" size="small" onClick={() => setOpen(true)}>
                  Open Drawer
                </Button>
              </div>
              <Drawer
                title="Loading Drawer"
                open={open}
                onClose={() => setOpen(false)}
                children="This is an example of a drawer component."
                loading={true}
              />
            </>
          );
        }`,
    },
    {
      title: "Render in current Dom",
      description: "Render drawer in current dom using getContainer.",
      code: `function Example() {
          const [open, setOpen] = React.useState(false);
          const containerStyle: React.CSSProperties = {
          position: 'relative',
          height: '400px',
          width: '500px',
          padding: 48,
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 0.02)',
          border: '1px solid rgb(240, 240, 240)',
          borderRadius: '8px',
        };
          return (
            <div style={containerStyle}>
              <div className="flex gap-2 flex-wrap">
                <Button type="primary" size="small" onClick={() => setOpen(true)}>
                  Open Drawer Here
                </Button>
              </div>
              <Drawer
                title="Drawer in Current Dom"
                open={open}
                onClose={() => setOpen(false)}
                children="This is an example of a drawer component."
                getContainer={false}
                width={200}
              />
            </div>
          );
        }`,
    },
  ],
  props: [
    {
      name: "title",
      type: 'string | React.ReactNode',
      default: '-',
      description: "The title of the Drawer.",
    },
    {
      name: "position",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"right"',
      description: "The placement of the Drawer.",
    },
  ],
};
