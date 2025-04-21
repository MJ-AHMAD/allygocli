"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Box,
  Command,
  CreditCard,
  Globe,
  Package,
  Settings,
  ShoppingCart,
  Terminal,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")

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
              <Link href="/products">View Site</Link>
            </Button>
            <Button size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">ড্যাশবোর্ড</h2>
          <div className="flex items-center space-x-2">
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">গত ২৪ ঘন্টা</SelectItem>
                <SelectItem value="7d">গত ৭ দিন</SelectItem>
                <SelectItem value="30d">গত ৩০ দিন</SelectItem>
                <SelectItem value="90d">গত ৯০ দিন</SelectItem>
              </SelectContent>
            </Select>
            <Button>রিফ্রেশ</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">ওভারভিউ</TabsTrigger>
            <TabsTrigger value="products">প্রোডাক্টস</TabsTrigger>
            <TabsTrigger value="commands">কমান্ডস</TabsTrigger>
            <TabsTrigger value="analytics">অ্যানালিটিক্স</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">মোট বিক্রয়</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">৳১,২৫,৪৩০</div>
                  <p className="text-xs text-muted-foreground">+২০.১% গত মাসের তুলনায়</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">সাবস্ক্রিপশন</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+২,৩৫০</div>
                  <p className="text-xs text-muted-foreground">+১৮০.১% গত মাসের তুলনায়</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">সক্রিয় প্রোডাক্ট</CardTitle>
                  <Box className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">২৩</div>
                  <p className="text-xs text-muted-foreground">+৩ গত মাসের তুলনায়</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">অর্ডার</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+৫৭৩</div>
                  <p className="text-xs text-muted-foreground">+২০১ গত মাসের তুলনায়</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>ওভারভিউ</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[240px] flex items-center justify-center bg-slate-50 rounded-md">
                    <BarChart3 className="h-16 w-16 text-slate-300" />
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>জনপ্রিয় প্রোডাক্ট</CardTitle>
                  <CardDescription>সর্বাধিক বিক্রিত প্রোডাক্ট</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className="mr-4 bg-blue-100 p-2 rounded-md">
                        <Terminal className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Terminal Pro</p>
                        <p className="text-sm text-muted-foreground">৫৬৮ বিক্রয়</p>
                      </div>
                      <div className="ml-auto font-medium">+৪৩%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 bg-green-100 p-2 rounded-md">
                        <Globe className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Network Analyzer</p>
                        <p className="text-sm text-muted-foreground">৪৮৯ বিক্রয়</p>
                      </div>
                      <div className="ml-auto font-medium">+২৭%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 bg-purple-100 p-2 rounded-md">
                        <Package className="h-4 w-4 text-purple-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Git Wizard</p>
                        <p className="text-sm text-muted-foreground">৪৫৬ বিক্রয়</p>
                      </div>
                      <div className="ml-auto font-medium">+৩৫%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="products" className="space-y-4">
            <div className="grid gap-4 grid-cols-1">
              <Card className="col-span-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>প্রোডাক্ট ম্যানেজমেন্ট</CardTitle>
                    <Button>নতুন প্রোডাক্ট</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Link href="/admin/dashboard/products/cli-master">
                        <Card className="cursor-pointer hover:bg-slate-50 transition-colors">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">CLI Master</CardTitle>
                              <Terminal className="h-4 w-4 text-primary" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Freemium</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm font-medium">৩৪৫ বিক্রয়</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">সক্রিয়</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="/admin/dashboard/products/terminal-pro">
                        <Card className="cursor-pointer hover:bg-slate-50 transition-colors">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">Terminal Pro</CardTitle>
                              <Terminal className="h-4 w-4 text-primary" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Subscription</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm font-medium">৫৬৮ বিক্রয়</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">সক্রিয়</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="/admin/dashboard/products/command-explorer">
                        <Card className="cursor-pointer hover:bg-slate-50 transition-colors">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">Command Explorer</CardTitle>
                              <Terminal className="h-4 w-4 text-primary" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Free</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm font-medium">১২৩৪ ডাউনলোড</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">সক্রিয়</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <Button variant="outline" asChild>
                        <Link href="/admin/dashboard/products">সকল প্রোডাক্ট দেখুন</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="commands" className="space-y-4">
            <div className="grid gap-4 grid-cols-1">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>কমান্ড ড্যাশবোর্ড</CardTitle>
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
                          />
                        </div>
                      </div>
                      <Button>চালান</Button>
                    </div>
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-2">জনপ্রিয় কমান্ড</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                          <code>product-stats --name="Terminal Pro"</code>
                        </div>
                        <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                          <code>sales-report --last=30d</code>
                        </div>
                        <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                          <code>user-growth --compare=prev-month</code>
                        </div>
                        <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                          <code>inventory-check --low-stock</code>
                        </div>
                        <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                          <code>marketing-performance --channel=all</code>
                        </div>
                        <div className="border rounded-md p-2 text-sm hover:bg-slate-50 cursor-pointer">
                          <code>subscription-status --active</code>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-2">কমান্ড আউটপুট</h3>
                      <div className="bg-black text-white p-4 rounded-md font-mono text-sm">
                        <div className="flex">
                          <span className="text-green-400">admin@tally-cli</span>
                          <span className="text-white">:</span>
                          <span className="text-blue-400">~</span>
                          <span className="text-white">$ product-stats --name="Terminal Pro"</span>
                        </div>
                        <div className="mt-2">
                          <p>Terminal Pro - Statistics Report</p>
                          <p>----------------------------</p>
                          <p>Total Sales: 568 units</p>
                          <p>Revenue: ৳7,378,432</p>
                          <p>Active Subscriptions: 432</p>
                          <p>Churn Rate: 3.2%</p>
                          <p>Average Rating: 4.8/5</p>
                          <p>Support Tickets (Open): 12</p>
                          <p>----------------------------</p>
                          <p>Growth (Last 30 days): +43%</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button variant="outline" asChild>
                        <Link href="/admin/dashboard/commands">সকল কমান্ড দেখুন</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>বিক্রয় বিশ্লেষণ</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] flex items-center justify-center bg-slate-50 rounded-md">
                    <BarChart3 className="h-16 w-16 text-slate-300" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ব্যবহারকারী বৃদ্ধি</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] flex items-center justify-center bg-slate-50 rounded-md">
                    <Users className="h-16 w-16 text-slate-300" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>মার্কেটিং ROI</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] flex items-center justify-center bg-slate-50 rounded-md">
                    <BarChart3 className="h-16 w-16 text-slate-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" className="w-full">
              সম্পূর্ণ অ্যানালিটিক্স রিপোর্ট দেখুন
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
