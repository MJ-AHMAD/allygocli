import type React from "react"
import { AdminSidebar } from "@/components/admin/sidebar-nav"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">{children}</div>
    </div>
  )
}
