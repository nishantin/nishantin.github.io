import { z } from "zod"

export const ComponentPropSchema = z.object({
  name: z.string(),
  type: z.string(),
  required: z.boolean().optional(),
  default: z.string().optional(),
  description: z.string(),
})

export const ComponentExampleSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  code: z.string(),
})

export const ComponentInfoSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  version: z.string().optional(),
  examples: z.array(ComponentExampleSchema).optional(),
  props: z.array(ComponentPropSchema).optional(),
})

export const ComponentCategorySchema = z.object({
  name: z.string(),
  components: z.array(ComponentInfoSchema),
})

export type ComponentProp = z.infer<typeof ComponentPropSchema>
export type ComponentExample = z.infer<typeof ComponentExampleSchema>
export type ComponentInfo = z.infer<typeof ComponentInfoSchema>
export type ComponentCategory = z.infer<typeof ComponentCategorySchema>
