import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatComponentName(name: string): string {
  return name
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase())
}

export function generateComponentId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-")
}
