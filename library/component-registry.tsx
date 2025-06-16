import type { ComponentCategory, ComponentInfo } from "@/types/component";
import { ButtonDoc } from "@/components/core-component/button/button-doc";
import { DrawerDoc } from "@/components/core-component/drawer/drawer-doc";
import { TableDoc } from "@/components/core-component/table/table.doc";

export const componentCategories: ComponentCategory[] = [
  {
    name: "General",
    components: [ButtonDoc, TableDoc, DrawerDoc],
  },
  {
    name: "Data Entry",
    components: [],
  },
  {
    name: "Data Display",
    components: [],
  },
  {
    name: "Layout",
    components: [],
  },
];

export function getComponentBySlug(slug: string): ComponentInfo | undefined {
  for (const category of componentCategories) {
    const component = category.components.find(
      (comp) => comp.name.toLowerCase() === slug.toLowerCase()
    );
    if (component) return component;
  }
  return undefined;
}

export function getAllComponents(): ComponentInfo[] {
  return componentCategories.flatMap((category) => category.components);
}
