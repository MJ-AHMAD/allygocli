import type React from "react"
export interface Product {
  id: string
  name: string
  description: string
  category: string
  icon?: React.ReactNode
  pricingModel: "Free" | "Freemium" | "Subscription" | "One-time"
  features: string[]
  price?: {
    free?: string
    premium?: string
    business?: string
    enterprise?: string
  }
  popular?: boolean
  status?: string
  sales?: number
  stock?: number
  lastUpdated?: string
}
