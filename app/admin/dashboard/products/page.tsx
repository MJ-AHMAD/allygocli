"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, Download, Filter, Plus, Search, Terminal, Trash2, Edit, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Define product interface
interface Product {
  id: string
  name: string
  category: string
  pricingModel: string
  price: string
  sales: number
  status: "active" | "draft" | "archived"
  lastUpdated: string
}

// Sample product data
const products: Product[] = [
  {
    id: "cli-master",
    name: "CLI Master",
    category: "Command Line Tools",
    pricingModel: "Freemium",
    price: "৳9.99+",
    sales: 345,
    status: "active",
    lastUpdated: "2023-12-15",
  },
  {
    id: "terminal-pro",
    name: "Terminal Pro",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    price: "৳12.99+",
    sales: 568,
    status: "active",
    lastUpdated: "2023-12-20",
  },
  {
    id: "command-explorer",
    name: "Command Explorer",
    category: "Command Line Tools",
    pricingModel: "Free",
    price: "৳0",
    sales: 1234,
    status: "active",
    lastUpdated: "2023-12-10",
  },
  {
    id: "shell-scripter",
    name: "Shell Scripter",
    category: "Command Line Tools",
    pricingModel: "One-time",
    price: "৳49.99+",
    sales: 289,
    status: "active",
    lastUpdated: "2023-12-05",
  },
  {
    id: "command-hub",
    name: "Command Hub",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    price: "৳14.99+",
    sales: 178,
    status: "active",
    lastUpdated: "2023-12-18",
  },
  {
    id: "system-monitor",
    name: "System Monitor",
    category: "System Administration",
    pricingModel: "Freemium",
    price: "৳19.99+",
    sales: 412,
    status: "active",
    lastUpdated: "2023-12-12",
  },
  {
    id: "network-analyzer",
    name: "Network Analyzer",
    category: "System Administration",
    pricingModel: "Subscription",
    price: "৳24.99+",
    sales: 489,
    status: "active",
    lastUpdated: "2023-12-22",
  },
  {
    id: "backup-master",
    name: "Backup Master",
    category: "System Administration",
    pricingModel: "One-time",
    price: "৳79.99+",
    sales: 256,
    status: "active",
    lastUpdated: "2023-12-08",
  },
  {
    id: "patch-manager",
    name: "Patch Manager",
    category: "System Administration",
    pricingModel: "Subscription",
    price: "৳19.99+",
    sales: 198,
    status: "draft",
    lastUpdated: "2023-12-25",
  },
  {
    id: "code-commander",
    name: "Code Commander",
    category: "Development Tools",
    pricingModel: "Free",
    price: "৳0",
    sales: 876,
    status: "active",
    lastUpdated: "2023-12-03",
  },
  {
    id: "git-wizard",
    name: "Git Wizard",
    category: "Development Tools",
    pricingModel: "Freemium",
    price: "৳14.99+",
    sales: 456,
    status: "active",
    lastUpdated: "2023-12-17",
  },
  {
    id: "dev-environment",
    name: "Dev Environment",
    category: "Development Tools",
    pricingModel: "Subscription",
    price: "৳19.99+",
    sales: 321,
    status: "active",
    lastUpdated: "2023-12-14",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  // Filter products based on search term, category, and status
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true
    const matchesStatus = selectedStatus ? product.status === selectedStatus : true

    return matchesSearch && matchesCategory && matchesStatus
  })

  // Get unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)))

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <Terminal className="h-6 w-6" />
            <span className="font-bold">T-ALLY CLI Admin</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/dashboard">ড্যাশবোর্ড</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/products">View Site</Link>
            </Button>
          </nav>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">প্রোডাক্ট ম্যানেজমেন্ট</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> নতুন প্রোডাক্ট
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>প্রোডাক্ট লিস্ট</CardTitle>
              <CardDescription>সকল প্রোডাক্ট এবং সার্ভিস ম্যানেজ করুন</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="প্রোডাক্ট খুঁজুন..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Filter className="mr-2 h-4 w-4" />
                        ক্যাটাগরি
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuLabel>ক্যাটাগরি দ্বারা ফিল্টার</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={selectedCategory === null}
                        onCheckedChange={() => setSelectedCategory(null)}
                      >
                        সকল ক্যাটাগরি
                      </DropdownMenuCheckboxItem>
                      {categories.map((category) => (
                        <DropdownMenuCheckboxItem
                          key={category}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category === selectedCategory ? null : category)}
                        >
                          {category}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Filter className="mr-2 h-4 w-4" />
                        স্ট্যাটাস
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuLabel>স্ট্যাটাস দ্বারা ফিল্টার</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={selectedStatus === null}
                        onCheckedChange={() => setSelectedStatus(null)}
                      >
                        সকল স্ট্যাটাস
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={selectedStatus === "active"}
                        onCheckedChange={() => setSelectedStatus(selectedStatus === "active" ? null : "active")}
                      >
                        সক্রিয়
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={selectedStatus === "draft"}
                        onCheckedChange={() => setSelectedStatus(selectedStatus === "draft" ? null : "draft")}
                      >
                        ড্রাফট
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={selectedStatus === "archived"}
                        onCheckedChange={() => setSelectedStatus(selectedStatus === "archived" ? null : "archived")}
                      >
                        আর্কাইভড
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    এক্সপোর্ট
                  </Button>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">
                          <div className="flex items-center space-x-1">
                            <span>নাম</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>ক্যাটাগরি</TableHead>
                        <TableHead>প্রাইসিং মডেল</TableHead>
                        <TableHead>মূল্য</TableHead>
                        <TableHead>বিক্রয়</TableHead>
                        <TableHead>স্ট্যাটাস</TableHead>
                        <TableHead>আপডেট</TableHead>
                        <TableHead className="text-right">অ্যাকশন</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.pricingModel}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.sales}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                product.status === "active"
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : product.status === "draft"
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                    : "bg-gray-100 text-gray-800 border-gray-200"
                              }
                            >
                              {product.status === "active" ? "সক্রিয়" : product.status === "draft" ? "ড্রাফট" : "আর্কাইভড"}
                            </Badge>
                          </TableCell>
                          <TableCell>{product.lastUpdated}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">মেনু খুলুন</span>
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>অ্যাকশন</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  <span>দেখুন</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  <span>এডিট</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>ডিলিট</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
