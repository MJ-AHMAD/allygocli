"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, Edit, Save, Star, Terminal, Trash2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProductDetailPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [productData, setProductData] = useState({
    name: "Terminal Pro",
    description: "Professional terminal emulator with advanced features for developers",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    price: {
      free: "0",
      premium: "12.99",
      business: "24.99",
      enterprise: "49.99",
    },
    features: [
      "Multiple tabs and split views",
      "Customizable themes and fonts",
      "SSH and FTP integration",
      "Script automation",
      "Advanced logging and monitoring",
    ],
    sales: 568,
    status: "active",
    lastUpdated: "2023-12-20",
    rating: 4.8,
    reviews: 156,
    activeUsers: 432,
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the data to your backend
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
              <Link href="/admin/dashboard/products">সকল প্রোডাক্ট</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/dashboard">ড্যাশবোর্ড</Link>
            </Button>
          </nav>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/admin/dashboard/products">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h2 className="text-3xl font-bold tracking-tight">Terminal Pro</h2>
            <Badge className="ml-2" variant="outline">
              Subscription
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  সেভ করুন
                </Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  বাতিল
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => setIsEditing(true)}>
                  <Edit className="mr-2 h-4 w-4" />
                  এডিট
                </Button>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  ডিলিট
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <div className="col-span-7 md:col-span-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>প্রোডাক্ট ডিটেইলস</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">প্রোডাক্ট নাম</Label>
                      <Input
                        id="name"
                        value={productData.name}
                        onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">বিবরণ</Label>
                      <Textarea
                        id="description"
                        value={productData.description}
                        onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="category">ক্যাটাগরি</Label>
                        <Select
                          value={productData.category}
                          onValueChange={(value) => setProductData({ ...productData, category: value })}
                        >
                          <SelectTrigger id="category">
                            <SelectValue placeholder="ক্যাটাগরি নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Command Line Tools">Command Line Tools</SelectItem>
                            <SelectItem value="System Administration">System Administration</SelectItem>
                            <SelectItem value="Development Tools">Development Tools</SelectItem>
                            <SelectItem value="Automation & Productivity">Automation & Productivity</SelectItem>
                            <SelectItem value="Security & Compliance">Security & Compliance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="pricing-model">প্রাইসিং মডেল</Label>
                        <Select
                          value={productData.pricingModel}
                          onValueChange={(value) => setProductData({ ...productData, pricingModel: value })}
                        >
                          <SelectTrigger id="pricing-model">
                            <SelectValue placeholder="প্রাইসিং মডেল নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Free">Free</SelectItem>
                            <SelectItem value="Freemium">Freemium</SelectItem>
                            <SelectItem value="Subscription">Subscription</SelectItem>
                            <SelectItem value="One-time">One-time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>প্রাইসিং</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="price-free">Free</Label>
                          <Input
                            id="price-free"
                            value={productData.price.free}
                            onChange={(e) =>
                              setProductData({
                                ...productData,
                                price: { ...productData.price, free: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="price-premium">Premium</Label>
                          <Input
                            id="price-premium"
                            value={productData.price.premium}
                            onChange={(e) =>
                              setProductData({
                                ...productData,
                                price: { ...productData.price, premium: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="price-business">Business</Label>
                          <Input
                            id="price-business"
                            value={productData.price.business}
                            onChange={(e) =>
                              setProductData({
                                ...productData,
                                price: { ...productData.price, business: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="price-enterprise">Enterprise</Label>
                          <Input
                            id="price-enterprise"
                            value={productData.price.enterprise}
                            onChange={(e) =>
                              setProductData({
                                ...productData,
                                price: { ...productData.price, enterprise: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>ফিচার</Label>
                      <div className="space-y-2">
                        {productData.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              value={feature}
                              onChange={(e) => {
                                const newFeatures = [...productData.features]
                                newFeatures[index] = e.target.value
                                setProductData({ ...productData, features: newFeatures })
                              }}
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                const newFeatures = productData.features.filter((_, i) => i !== index)
                                setProductData({ ...productData, features: newFeatures })
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          onClick={() => {
                            setProductData({
                              ...productData,
                              features: [...productData.features, ""],
                            })
                          }}
                        >
                          ফিচার যোগ করুন
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="status">স্ট্যাটাস</Label>
                        <Select
                          value={productData.status}
                          onValueChange={(value) => setProductData({ ...productData, status: value })}
                        >
                          <SelectTrigger id="status">
                            <SelectValue placeholder="স্ট্যাটাস নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">সক্রিয়</SelectItem>
                            <SelectItem value="draft">ড্রাফট</SelectItem>
                            <SelectItem value="archived">আর্কাইভড</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-1">বিবরণ</h3>
                      <p>{productData.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">ক্যাটাগরি</h3>
                        <p>{productData.category}</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">প্রাইসিং মডেল</h3>
                        <p>{productData.pricingModel}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-1">প্রাইসিং</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm">Free: ${productData.price.free}</p>
                        </div>
                        <div>
                          <p className="text-sm">Premium: ${productData.price.premium}/month</p>
                        </div>
                        <div>
                          <p className="text-sm">Business: ${productData.price.business}/month</p>
                        </div>
                        <div>
                          <p className="text-sm">Enterprise: ${productData.price.enterprise}/month</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-1">ফিচার</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {productData.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">স্ট্যাটাস</h3>
                        <Badge
                          variant="outline"
                          className={
                            productData.status === "active"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : productData.status === "draft"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-gray-100 text-gray-800 border-gray-200"
                          }
                        >
                          {productData.status === "active"
                            ? "সক্রিয়"
                            : productData.status === "draft"
                              ? "ড্রাফট"
                              : "আর্কাইভড"}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">সর্বশেষ আপডেট</h3>
                        <p>{productData.lastUpdated}</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">রেটিং</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span>{productData.rating}/5</span>
                          <span className="text-sm text-muted-foreground ml-1">({productData.reviews} রিভিউ)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>সাম্প্রতিক অর্ডার</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>অর্ডার আইডি</TableHead>
                      <TableHead>ইউজার</TableHead>
                      <TableHead>প্ল্যান</TableHead>
                      <TableHead>তারিখ</TableHead>
                      <TableHead className="text-right">মূল্য</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">ORD-7829</TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>Premium</TableCell>
                      <TableCell>2023-12-20</TableCell>
                      <TableCell className="text-right">$12.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ORD-7830</TableCell>
                      <TableCell>jane.smith@example.com</TableCell>
                      <TableCell>Business</TableCell>
                      <TableCell>2023-12-20</TableCell>
                      <TableCell className="text-right">$24.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ORD-7831</TableCell>
                      <TableCell>robert.johnson@example.com</TableCell>
                      <TableCell>Enterprise</TableCell>
                      <TableCell>2023-12-19</TableCell>
                      <TableCell className="text-right">$49.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ORD-7832</TableCell>
                      <TableCell>sarah.williams@example.com</TableCell>
                      <TableCell>Premium</TableCell>
                      <TableCell>2023-12-19</TableCell>
                      <TableCell className="text-right">$12.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ORD-7833</TableCell>
                      <TableCell>michael.brown@example.com</TableCell>
                      <TableCell>Business</TableCell>
                      <TableCell>2023-12-18</TableCell>
                      <TableCell className="text-right">$24.99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex justify-center mt-4">
                  <Button variant="outline">সকল অর্ডার দেখুন</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-7 md:col-span-3 space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">মোট বিক্রয়</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{productData.sales}</div>
                  <p className="text-xs text-muted-foreground">+২০.১% গত মাসের তুলনায়</p>
                  <div className="mt-4 h-[60px] flex items-center justify-center bg-slate-50 rounded-md">
                    <BarChart3 className="h-8 w-8 text-slate-300" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">সক্রিয় ব্যবহারকারী</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{productData.activeUsers}</div>
                  <p className="text-xs text-muted-foreground">+১৫.৩% গত মাসের তুলনায়</p>
                  <div className="mt-4 h-[60px] flex items-center justify-center bg-slate-50 rounded-md">
                    <Users className="h-8 w-8 text-slate-300" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>প্রোডাক্ট পারফরম্যান্স</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">মাসিক রাজস্ব</span>
                      <span className="text-sm font-medium">৳5,612,568</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">গ্রাহক সন্তুষ্টি</span>
                      <span className="text-sm font-medium">96%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[96%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">চার্ন রেট</span>
                      <span className="text-sm font-medium">3.2%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[3.2%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">মার্কেট শেয়ার</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[42%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>সাম্প্রতিক রিভিউ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2">John D.</span>
                      <span className="text-xs text-muted-foreground ml-auto">2023-12-18</span>
                    </div>
                    <p className="text-sm">
                      অসাধারণ টার্মিনাল এমুলেটর! মাল্টিপল ট্যাব এবং স্প্লিট ভিউ ফিচার আমার কাজকে অনেক সহজ করে দিয়েছে।
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2">Sarah W.</span>
                      <span className="text-xs text-muted-foreground ml-auto">2023-12-15</span>
                    </div>
                    <p className="text-sm">SSH ইন্টিগ্রেশন অসাধারণ কাজ করে। শুধু একটি ছোট বাগ আছে যা ফিক্স করা দরকার।</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2">Robert J.</span>
                      <span className="text-xs text-muted-foreground ml-auto">2023-12-10</span>
                    </div>
                    <p className="text-sm">স্ক্রিপ্ট অটোমেশন ফিচার অসাধারণ। আমি এখন আমার সমস্ত রুটিন টাস্ক অটোমেট করতে পারি।</p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Button variant="outline">সকল রিভিউ দেখুন</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="analytics">অ্যানালিটিক্স</TabsTrigger>
            <TabsTrigger value="marketing">মার্কেটিং</TabsTrigger>
            <TabsTrigger value="support">সাপোর্ট</TabsTrigger>
            <TabsTrigger value="settings">সেটিংস</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>বিক্রয় ট্রেন্ড</CardTitle>
                <CardDescription>গত ৬ মাসের বিক্রয় ট্রেন্ড</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-slate-50 rounded-md">
                  <BarChart3 className="h-16 w-16 text-slate-300" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="marketing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>মার্কেটিং ক্যাম্পেইন</CardTitle>
                <CardDescription>সক্রিয় এবং আসন্ন মার্কেটিং ক্যাম্পেইন</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Terminal Pro Launch</h3>
                      <Badge className="bg-green-100 text-green-800 border-green-200">সক্রিয়</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">নতুন ফিচার সহ Terminal Pro লঞ্চ ক্যাম্পেইন</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">শুরু:</span> 2023-12-01
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">শেষ:</span> 2024-01-31
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">বাজেট:</span> ৳500,000
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Holiday Special</h3>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">আসন্ন</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">ছুটির দিনে বিশেষ ডিসকাউন্ট অফার</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">শুরু:</span> 2023-12-25
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">শেষ:</span> 2024-01-05
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">বাজেট:</span> ৳300,000
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Developer Conference</h3>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">প্ল্যানিং</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">ডেভেলপার কনফারেন্সে Terminal Pro প্রমোশন</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">শুরু:</span> 2024-02-15
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">শেষ:</span> 2024-02-17
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">বাজেট:</span> ৳250,000
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>সাপোর্ট টিকেট</CardTitle>
                <CardDescription>Terminal Pro সম্পর্কিত সাপোর্ট টিকেট</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>টিকেট আইডি</TableHead>
                      <TableHead>বিষয়</TableHead>
                      <TableHead>ইউজার</TableHead>
                      <TableHead>স্ট্যাটাস</TableHead>
                      <TableHead>তারিখ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">TKT-1234</TableCell>
                      <TableCell>SSH কানেকশন ইস্যু</TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">পেন্ডিং</Badge>
                      </TableCell>
                      <TableCell>2023-12-20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TKT-1235</TableCell>
                      <TableCell>কাস্টম থিম লোড হচ্ছে না</TableCell>
                      <TableCell>jane.smith@example.com</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 border-green-200">সমাধান হয়েছে</Badge>
                      </TableCell>
                      <TableCell>2023-12-19</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TKT-1236</TableCell>
                      <TableCell>স্প্লিট ভিউ ক্র্যাশ করছে</TableCell>
                      <TableCell>robert.johnson@example.com</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">প্রক্রিয়াধীন</Badge>
                      </TableCell>
                      <TableCell>2023-12-18</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TKT-1237</TableCell>
                      <TableCell>বিলিং ইস্যু</TableCell>
                      <TableCell>sarah.williams@example.com</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800 border-red-200">অপেক্ষমান</Badge>
                      </TableCell>
                      <TableCell>2023-12-17</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TKT-1238</TableCell>
                      <TableCell>ফিচার রিকোয়েস্ট</TableCell>
                      <TableCell>michael.brown@example.com</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-200">রিভিউ</Badge>
                      </TableCell>
                      <TableCell>2023-12-16</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex justify-center mt-4">
                  <Button variant="outline">সকল টিকেট দেখুন</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>প্রোডাক্ট সেটিংস</CardTitle>
                <CardDescription>Terminal Pro এর অ্যাডভান্সড সেটিংস</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">ফিচার ফ্ল্যাগ</h3>
                      <p className="text-sm text-muted-foreground">নতুন ফিচার পরীক্ষামূলকভাবে চালু করুন</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        কনফিগার
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">API অ্যাকসেস</h3>
                      <p className="text-sm text-muted-foreground">API কী এবং ইন্টিগ্রেশন সেটিংস</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        ম্যানেজ
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">ডিস্ট্রিবিউশন চ্যানেল</h3>
                      <p className="text-sm text-muted-foreground">প্রোডাক্ট ডিস্ট্রিবিউশন চ্যানেল কনফিগার করুন</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        এডিট
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">ডেটা রিটেনশন</h3>
                      <p className="text-sm text-muted-foreground">ইউজার ডেটা রিটেনশন পলিসি</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        কনফিগার
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
