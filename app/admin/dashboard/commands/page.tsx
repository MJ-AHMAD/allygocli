"use client"

import { useState } from "react"
import Link from "next/link"
import { Command, Copy, Info, Play, Search, Terminal, Clock, BarChart3, Package, Users, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define command interface
interface CommandExample {
  id: string
  command: string
  description: string
  category: string
  output?: string
}

// Sample command data
const commandExamples: CommandExample[] = [
  {
    id: "product-stats",
    command: 'product-stats --name="Terminal Pro"',
    description: "একটি নির্দিষ্ট প্রোডাক্টের বিস্তারিত পরিসংখ্যান দেখায়",
    category: "Products",
    output: `Terminal Pro - Statistics Report
----------------------------
Total Sales: 568 units
Revenue: ৳7,378,432
Active Subscriptions: 432
Churn Rate: 3.2%
Average Rating: 4.8/5
Support Tickets (Open): 12
----------------------------
Growth (Last 30 days): +43%`,
  },
  {
    id: "sales-report",
    command: "sales-report --last=30d",
    description: "নির্দিষ্ট সময়ের জন্য বিক্রয় প্রতিবেদন তৈরি করে",
    category: "Sales",
    output: `Sales Report (Last 30 Days)
----------------------------
Total Sales: 1,245 units
Total Revenue: ৳15,678,950
Best Selling Product: Terminal Pro (568 units)
Worst Selling Product: Command Hub (78 units)
Average Order Value: ৳12,593
----------------------------
Growth (vs Previous Period): +28.5%`,
  },
  {
    id: "user-growth",
    command: "user-growth --compare=prev-month",
    description: "ব্যবহারকারী বৃদ্ধির তথ্য আগের মাসের সাথে তুলনা করে",
    category: "Users",
    output: `User Growth Report
----------------------------
New Users (This Month): 2,350
New Users (Previous Month): 1,305
Growth Rate: +80.1%
Active Users: 12,456
Churned Users: 234
Retention Rate: 98.1%
----------------------------
Most Active Product: Terminal Pro`,
  },
  {
    id: "inventory-check",
    command: "inventory-check --low-stock",
    description: "কম স্টক থাকা প্রোডাক্টগুলি চিহ্নিত করে",
    category: "Inventory",
    output: `Low Stock Alert
----------------------------
The following products are running low:
1. Shell Scripter License Keys (15 remaining)
2. Backup Master Enterprise Keys (8 remaining)
3. Security Scanner Business Keys (12 remaining)
----------------------------
Action Required: Replenish inventory`,
  },
  {
    id: "marketing-performance",
    command: "marketing-performance --channel=all",
    description: "সকল মার্কেটিং চ্যানেলের পারফরম্যান্স রিপোর্ট দেখায়",
    category: "Marketing",
    output: `Marketing Performance Report
----------------------------
Channel Performance (Last 30 Days):
1. Google Ads: 456 conversions, ৳567,890 revenue, 5.6x ROI
2. Facebook: 234 conversions, ৳345,670 revenue, 4.2x ROI
3. Email: 345 conversions, ৳456,780 revenue, 8.9x ROI
4. Organic: 567 conversions, ৳678,900 revenue, ∞ ROI
----------------------------
Best Performing Campaign: "Terminal Pro Launch" (9.2x ROI)`,
  },
  {
    id: "subscription-status",
    command: "subscription-status --active",
    description: "সক্রিয় সাবস্ক্রিপশন সম্পর্কিত তথ্য দেখায়",
    category: "Subscriptions",
    output: `Active Subscription Status
----------------------------
Total Active Subscriptions: 3,456
Monthly Revenue: ৳4,567,890
Average Subscription Value: ৳1,321
Subscription by Product:
1. Terminal Pro: 1,245 subscriptions
2. Network Analyzer: 876 subscriptions
3. Git Wizard: 654 subscriptions
4. Others: 681 subscriptions
----------------------------
Renewal Rate: 87.5%`,
  },
  {
    id: "product-create",
    command: 'product-create --template="subscription"',
    description: "নতুন প্রোডাক্ট তৈরি করার টেমপ্লেট তৈরি করে",
    category: "Products",
  },
  {
    id: "product-update",
    command: 'product-update --id="terminal-pro" --price="14.99"',
    description: "বিদ্যমান প্রোডাক্টের তথ্য আপডেট করে",
    category: "Products",
  },
  {
    id: "product-delete",
    command: 'product-delete --id="command-hub" --confirm',
    description: "একটি প্রোডাক্ট ডিলিট করে",
    category: "Products",
  },
  {
    id: "user-list",
    command: 'user-list --subscription="terminal-pro" --limit=10',
    description: "নির্দিষ্ট সাবস্ক্রিপশন থাকা ব্যবহারকারীদের তালিকা দেখায়",
    category: "Users",
  },
  {
    id: "discount-create",
    command: 'discount-create --product="network-analyzer" --percent=15 --expires="2024-01-31"',
    description: "নির্দিষ্ট প্রোডাক্টের জন্য ডিসকাউন্ট কোড তৈরি করে",
    category: "Sales",
  },
  {
    id: "revenue-forecast",
    command: "revenue-forecast --months=6",
    description: "আগামী মাসগুলির জন্য রাজস্ব পূর্বাভাস দেখায়",
    category: "Finance",
  },
]

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [commandOutput, setCommandOutput] = useState<string | null>(null)
  const [selectedCommand, setSelectedCommand] = useState<CommandExample | null>(null)

  // Filter commands based on search term
  const filteredCommands = commandExamples.filter(
    (cmd) =>
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Group commands by category
  const groupedCommands = filteredCommands.reduce(
    (acc, command) => {
      if (!acc[command.category]) {
        acc[command.category] = []
      }
      acc[command.category].push(command)
      return acc
    },
    {} as Record<string, CommandExample[]>,
  )

  // Execute command
  const executeCommand = (command: CommandExample) => {
    setSelectedCommand(command)
    setCommandOutput(command.output || "কমান্ড সফলভাবে চালানো হয়েছে। কোন আউটপুট নেই।")
  }

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
          <h2 className="text-3xl font-bold tracking-tight">কমান্ড ড্যাশবোর্ড</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Info className="mr-2 h-4 w-4" />
              কমান্ড গাইড
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-5">
            <CardHeader>
              <CardTitle>কমান্ড টার্মিনাল</CardTitle>
              <CardDescription>প্রোডাক্ট এবং সার্ভিস সম্পর্কে দ্রুত তথ্য পেতে কমান্ড ব্যবহার করুন</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <div className="flex items-center border rounded-md pl-3 focus-within:ring-1 focus-within:ring-primary">
                      <Command className="h-4 w-4 text-muted-foreground mr-2" />
                      <input
                        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="কমান্ড টাইপ করুন..."
                        value={selectedCommand ? selectedCommand.command : searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value)
                          setSelectedCommand(null)
                        }}
                      />
                    </div>
                  </div>
                  <Button onClick={() => selectedCommand && executeCommand(selectedCommand)}>
                    <Play className="mr-2 h-4 w-4" />
                    চালান
                  </Button>
                </div>

                {commandOutput && (
                  <div className="border rounded-md">
                    <div className="flex items-center justify-between bg-muted px-4 py-2 border-b">
                      <div className="flex items-center">
                        <Terminal className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">আউটপুট</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-black text-white p-4 rounded-b-md font-mono text-sm whitespace-pre-line">
                      {commandOutput}
                    </div>
                  </div>
                )}

                <div className="border rounded-md">
                  <div className="bg-muted px-4 py-2 border-b">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">কমান্ড সাজেশন</h3>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="কমান্ড খুঁজুন..."
                          className="w-[200px] pl-8 h-9"
                          value={searchTerm}
                          onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setSelectedCommand(null)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 max-h-[400px] overflow-y-auto">
                    <Tabs defaultValue="all">
                      <TabsList className="mb-4">
                        <TabsTrigger value="all">সকল</TabsTrigger>
                        {Object.keys(groupedCommands).map((category) => (
                          <TabsTrigger key={category} value={category}>
                            {category}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      <TabsContent value="all" className="space-y-4">
                        {Object.entries(groupedCommands).map(([category, commands]) => (
                          <div key={category}>
                            <h4 className="font-medium text-sm mb-2">{category}</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {commands.map((cmd) => (
                                <div
                                  key={cmd.id}
                                  className={`border rounded-md p-3 cursor-pointer hover:bg-slate-50 transition-colors ${
                                    selectedCommand?.id === cmd.id ? "border-primary bg-primary/5" : ""
                                  }`}
                                  onClick={() => setSelectedCommand(cmd)}
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <code className="text-sm font-mono">{cmd.command}</code>
                                      <p className="text-sm text-muted-foreground mt-1">{cmd.description}</p>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 ml-2"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        executeCommand(cmd)
                                      }}
                                    >
                                      <Play className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </TabsContent>

                      {Object.entries(groupedCommands).map(([category, commands]) => (
                        <TabsContent key={category} value={category} className="space-y-2">
                          {commands.map((cmd) => (
                            <div
                              key={cmd.id}
                              className={`border rounded-md p-3 cursor-pointer hover:bg-slate-50 transition-colors ${
                                selectedCommand?.id === cmd.id ? "border-primary bg-primary/5" : ""
                              }`}
                              onClick={() => setSelectedCommand(cmd)}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <code className="text-sm font-mono">{cmd.command}</code>
                                  <p className="text-sm text-muted-foreground mt-1">{cmd.description}</p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 ml-2"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    executeCommand(cmd)
                                  }}
                                >
                                  <Play className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="col-span-7 md:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">কমান্ড গাইড</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">প্রোডাক্ট কমান্ড</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <code className="text-xs">product-stats</code>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="text-xs">product-create</code>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="text-xs">product-update</code>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="text-xs">product-delete</code>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">সেলস কমান্ড</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <code className="text-xs">sales-report</code>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="text-xs">discount-create</code>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">ইউজার কমান্ড</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <code className="text-xs">user-growth</code>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="text-xs">user-list</code>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    সম্পূর্ণ গাইড দেখুন
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">সাম্প্রতিক কমান্ড</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {commandExamples.slice(0, 5).map((cmd) => (
                    <div key={cmd.id} className="flex items-center gap-2 text-sm">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <code className="text-xs truncate">{cmd.command}</code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>কমান্ড ক্যাটাগরি</CardTitle>
            <CardDescription>বিভিন্ন ধরনের কমান্ড ক্যাটাগরি</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">প্রোডাক্ট ম্যানেজমেন্ট</CardTitle>
                    <Package className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">প্রোডাক্ট তৈরি, আপডেট এবং ম্যানেজ করার কমান্ড</p>
                  <div className="space-y-2">
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>product-stats</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>product-create</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>product-update</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">সেলস এবং মার্কেটিং</CardTitle>
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">বিক্রয় এবং মার্কেটিং সম্পর্কিত কমান্ড</p>
                  <div className="space-y-2">
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>sales-report</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>marketing-performance</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>discount-create</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">ইউজার ম্যানেজমেন্ট</CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">ব্যবহারকারী সম্পর্কিত কমান্ড</p>
                  <div className="space-y-2">
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>user-growth</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>user-list</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>subscription-status</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">ফিনান্স এবং বিলিং</CardTitle>
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">আর্থিক এবং বিলিং সম্পর্কিত কমান্ড</p>
                  <div className="space-y-2">
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>revenue-forecast</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>subscription-status</code>
                    </div>
                    <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                      <code>invoice-generate</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
