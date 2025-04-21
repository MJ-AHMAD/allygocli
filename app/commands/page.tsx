import type { Metadata } from "next"
import { CommandCategories } from "@/components/command-categories"
import { commandCategories } from "@/data/categories"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "AllyGo_CLI - Command Line Reference",
  description: "A comprehensive reference for command line interfaces",
}

export default function CommandsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Command Categories</h1>
      <div className="mb-6">
        <Input type="search" placeholder="Search categories..." className="max-w-md" />
      </div>
      <CommandCategories categories={commandCategories} />
    </div>
  )
}
