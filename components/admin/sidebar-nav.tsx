"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Box,
  Command,
  CreditCard,
  Globe,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Terminal,
  Users,
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

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "default" : "ghost"}
          className={cn(
            "justify-start",
            pathname === item.href
              ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              : "hover:bg-transparent hover:underline",
          )}
          asChild
        >
          <Link href={item.href} className="flex items-center gap-2">
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

export function AdminSidebar() {
  const items = [
    {
      title: "ড্যাশবোর্ড",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      title: "প্রোডাক্টস",
      href: "/admin/dashboard/products",
      icon: <Package className="h-4 w-4" />,
    },
    {
      title: "কমান্ডস",
      href: "/admin/dashboard/commands",
      icon: <Command className="h-4 w-4" />,
    },
    {
      title: "অর্ডারস",
      href: "/admin/dashboard/orders",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      title: "ইউজারস",
      href: "/admin/dashboard/users",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "অ্যানালিটিক্স",
      href: "/admin/dashboard/analytics",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: "ফিনান্স",
      href: "/admin/dashboard/finance",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      title: "ইনভেন্টরি",
      href: "/admin/dashboard/inventory",
      icon: <Box className="h-4 w-4" />,
    },
    {
      title: "মার্কেটিং",
      href: "/admin/dashboard/marketing",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      title: "সেটিংস",
      href: "/admin/dashboard/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <Terminal className="h-6 w-6" />
            <span className="font-bold">T-ALLY CLI Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <SidebarNav className="px-4" items={items} />
        </div>
      </div>
    </div>
  )
}
