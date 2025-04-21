"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Package,
  Terminal,
  ShoppingCart,
  Users,
  LineChart,
  DollarSign,
  Boxes,
  Megaphone,
  Settings,
  FileText,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function SidebarNavEn({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "default" : "ghost"}
          className={cn(
            "justify-start",
            pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
          )}
          asChild
        >
          <Link href={item.href} className="flex items-center">
            <span className="mr-2">{item.icon}</span>
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

export const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboarden",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Products",
    href: "/admin/dashboarden/products",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Commands",
    href: "/admin/dashboarden/commands",
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    title: "Orders",
    href: "/admin/dashboarden/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    title: "Users",
    href: "/admin/dashboarden/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "/admin/dashboarden/analytics",
    icon: <LineChart className="h-4 w-4" />,
  },
  {
    title: "Finance",
    href: "/admin/dashboarden/finance",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    title: "Inventory",
    href: "/admin/dashboarden/inventory",
    icon: <Boxes className="h-4 w-4" />,
  },
  {
    title: "Marketing",
    href: "/admin/dashboarden/marketing",
    icon: <Megaphone className="h-4 w-4" />,
  },
  {
    title: "Daily Records",
    href: "/admin/dashboarden/daily-records",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/admin/dashboarden/settings",
    icon: <Settings className="h-4 w-4" />,
  },
]
