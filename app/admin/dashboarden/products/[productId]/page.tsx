import Link from "next/link"
import { ArrowLeft, CheckCircle, Download, Edit, Star, Terminal, Server, Globe, Shield, Zap, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DhakaTime } from "@/components/admin/dhaka-time"
import type { Product } from "@/types/product"

// Product data
const products: Product[] = [
  // Command Line Tools
  {
    id: "cli-master",
    name: "CLI Master",
    description: "Advanced command line interface with intelligent suggestions and auto-completion",
    category: "Command Line Tools",
    pricingModel: "Freemium",
    features: [
      "Intelligent command suggestions",
      "Cross-platform compatibility",
      "Custom aliases and shortcuts",
      "Command history with search",
      "Syntax highlighting",
    ],
    price: {
      free: "0",
      premium: "9.99",
      business: "19.99",
    },
    status: "Active",
    sales: 876,
    stock: 999,
    lastUpdated: "2025-04-15",
  },
  {
    id: "terminal-pro",
    name: "Terminal Pro",
    description: "Professional terminal emulator with advanced features for developers",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    features: [
      "Multiple tabs and split views",
      "Customizable themes and fonts",
      "SSH and FTP integration",
      "Script automation",
      "Advanced logging and monitoring",
    ],
    price: {
      free: "0",
      premium: "12.99",
      business: "24.99",
      enterprise: "49.99",
    },
    popular: true,
    status: "Active",
    sales: 1245,
    stock: 999,
    lastUpdated: "2025-04-18",
  },
  {
    id: "command-explorer",
    name: "Command Explorer",
    description: "Interactive command explorer with detailed documentation and examples",
    category: "Command Line Tools",
    pricingModel: "Free",
    features: [
      "Comprehensive command database",
      "Interactive examples",
      "Command syntax highlighting",
      "Offline documentation",
      "Community contributions",
    ],
    status: "Active",
    sales: 543,
    stock: 999,
    lastUpdated: "2025-04-10",
  },
  {
    id: "shell-scripter",
    name: "Shell Scripter",
    description: "Powerful shell script editor with debugging and testing capabilities",
    category: "Command Line Tools",
    pricingModel: "One-time",
    features: [
      "Syntax highlighting for multiple shells",
      "Integrated debugger",
      "Script testing framework",
      "Version control integration",
      "Cross-platform compatibility",
    ],
    price: {
      premium: "49.99",
      business: "99.99",
    },
    status: "Active",
    sales: 321,
    stock: 999,
    lastUpdated: "2025-04-05",
  },
  {
    id: "command-hub",
    name: "Command Hub",
    description: "Centralized command management for teams and enterprises",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    features: [
      "Team command sharing",
      "Role-based access control",
      "Command auditing and logging",
      "Custom command repositories",
      "Integration with CI/CD pipelines",
    ],
    price: {
      premium: "14.99",
      business: "29.99",
      enterprise: "59.99",
    },
    status: "Active",
    sales: 432,
    stock: 999,
    lastUpdated: "2025-04-12",
  },

  // System Administration
  {
    id: "system-monitor",
    name: "System Monitor",
    description: "Comprehensive system monitoring and performance analysis tool",
    category: "System Administration",
    pricingModel: "Freemium",
    features: [
      "Real-time resource monitoring",
      "Performance analytics",
      "Alert notifications",
      "Historical data tracking",
      "Custom dashboard",
    ],
    price: {
      free: "0",
      premium: "19.99",
      business: "39.99",
    },
    status: "Active",
    sales: 890,
    stock: 999,
    lastUpdated: "2025-04-17",
  },
  {
    id: "network-analyzer",
    name: "Network Analyzer",
    description: "Advanced network analysis and troubleshooting toolkit",
    category: "System Administration",
    pricingModel: "Subscription",
    features: [
      "Network traffic analysis",
      "Bandwidth monitoring",
      "Protocol inspection",
      "Security scanning",
      "Performance optimization",
    ],
    price: {
      premium: "24.99",
      business: "49.99",
      enterprise: "99.99",
    },
    popular: true,
    status: "Active",
    sales: 765,
    stock: 999,
    lastUpdated: "2025-04-16",
  },
  {
    id: "backup-master",
    name: "Backup Master",
    description: "Automated backup solution for critical data and systems",
    category: "System Administration",
    pricingModel: "One-time",
    features: [
      "Scheduled backups",
      "Incremental and differential backups",
      "Cloud storage integration",
      "Encryption and compression",
      "Disaster recovery planning",
    ],
    price: {
      premium: "79.99",
      business: "149.99",
    },
    status: "Active",
    sales: 543,
    stock: 999,
    lastUpdated: "2025-04-09",
  },
  {
    id: "patch-manager",
    name: "Patch Manager",
    description: "Automated system patching and update management",
    category: "System Administration",
    pricingModel: "Subscription",
    features: [
      "Automated patch deployment",
      "Compliance reporting",
      "Rollback capabilities",
      "Scheduling and prioritization",
      "Multi-platform support",
    ],
    price: {
      premium: "19.99",
      business: "39.99",
      enterprise: "79.99",
    },
    status: "Active",
    sales: 432,
    stock: 999,
    lastUpdated: "2025-04-11",
  },

  // Development Tools
  {
    id: "code-commander",
    name: "Code Commander",
    description: "Command-line code generation and scaffolding tool",
    category: "Development Tools",
    pricingModel: "Free",
    features: ["Project templates", "Code scaffolding", "Framework integration", "Custom templates", "Plugin system"],
    status: "Active",
    sales: 654,
    stock: 999,
    lastUpdated: "2025-04-14",
  },
  {
    id: "git-wizard",
    name: "Git Wizard",
    description: "Advanced Git command-line interface with visualization",
    category: "Development Tools",
    pricingModel: "Freemium",
    features: [
      "Visual branch management",
      "Interactive rebase",
      "Conflict resolution",
      "Performance optimization",
      "GitHub/GitLab integration",
    ],
    price: {
      free: "0",
      premium: "14.99",
      business: "29.99",
    },
    popular: true,
    status: "Active",
    sales: 987,
    stock: 999,
    lastUpdated: "2025-04-19",
  },
  {
    id: "dev-environment",
    name: "Dev Environment",
    description: "Instant development environment setup and configuration",
    category: "Development Tools",
    pricingModel: "Subscription",
    features: [
      "One-command environment setup",
      "Language and framework presets",
      "Docker integration",
      "Cloud development environments",
      "Team synchronization",
    ],
    price: {
      premium: "19.99",
      business: "39.99",
      enterprise: "79.99",
    },
    status: "Active",
    sales: 765,
    stock: 999,
    lastUpdated: "2025-04-15",
  },
  {
    id: "api-tester",
    name: "API Tester",
    description: "Command-line API testing and documentation tool",
    category: "Development Tools",
    pricingModel: "One-time",
    features: [
      "HTTP request testing",
      "Automated test scripts",
      "Response validation",
      "Documentation generation",
      "CI/CD integration",
    ],
    price: {
      premium: "59.99",
      business: "119.99",
    },
    status: "Active",
    sales: 543,
    stock: 999,
    lastUpdated: "2025-04-08",
  },
]

// Get icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Command Line Tools":
      return <Terminal className="h-6 w-6 text-primary" />
    case "System Administration":
      return <Server className="h-6 w-6 text-primary" />
    case "Development Tools":
      return <Zap className="h-6 w-6 text-primary" />
    case "Automation & Productivity":
      return <Clock className="h-6 w-6 text-primary" />
    case "Security & Compliance":
      return <Shield className="h-6 w-6 text-primary" />
    default:
      return <Globe className="h-6 w-6 text-primary" />
  }
}

// Sales data for charts
const salesData = {
  monthly: [
    { month: "Jan", sales: 65 },
    { month: "Feb", sales: 78 },
    { month: "Mar", sales: 90 },
    { month: "Apr", sales: 120 },
    { month: "May", sales: 100 },
    { month: "Jun", sales: 110 },
  ],
  quarterly: [
    { quarter: "Q1", sales: 233 },
    { quarter: "Q2", sales: 330 },
    { quarter: "Q3", sales: 290 },
    { quarter: "Q4", sales: 392 },
  ],
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find((p) => p.id === params.productId)

  if (!product) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/dashboarden/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Product Not Found</CardTitle>
            <CardDescription>The product you are looking for does not exist.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/dashboarden/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {product.popular && (
            <Badge variant="secondary" className="ml-2">
              Popular
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <DhakaTime />
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center space-x-2">
              {getCategoryIcon(product.category)}
              <CardTitle>Product Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Description</h3>
                <p>{product.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Category</h3>
                  <p>{product.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Pricing Model</h3>
                  <Badge
                    variant="outline"
                    className={
                      product.pricingModel === "Free"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : product.pricingModel === "Freemium"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : product.pricingModel === "Subscription"
                            ? "bg-purple-50 text-purple-700 border-purple-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                    }
                  >
                    {product.pricingModel}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {product.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Updated</h3>
                  <p>{product.lastUpdated}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {product.price?.free && (
                <div className="flex justify-between items-center">
                  <span className="font-medium">Free</span>
                  <span className="text-lg font-bold">${product.price.free}</span>
                </div>
              )}
              {product.price?.premium && (
                <div className="flex justify-between items-center">
                  <span className="font-medium">Premium</span>
                  <span className="text-lg font-bold">${product.price.premium}</span>
                </div>
              )}
              {product.price?.business && (
                <div className="flex justify-between items-center">
                  <span className="font-medium">Business</span>
                  <span className="text-lg font-bold">${product.price.business}</span>
                </div>
              )}
              {product.price?.enterprise && (
                <div className="flex justify-between items-center">
                  <span className="font-medium">Enterprise</span>
                  <span className="text-lg font-bold">${product.price.enterprise}</span>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Price Sheet
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales Analytics</TabsTrigger>
          <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{product.sales}</div>
                <p className="text-sm text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  ${(product.sales * Number.parseFloat(product.price?.premium || "0")).toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground">Based on premium tier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{product.stock}</div>
                <p className="text-sm text-muted-foreground">Digital product</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Monthly and quarterly sales data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Sales chart visualization would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Customer Reviews</CardTitle>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 font-medium">4.2/5</span>
                </div>
              </div>
              <CardDescription>Based on 128 reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">John Doe</div>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm">
                    This product has completely transformed my workflow. The features are intuitive and powerful.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">April 15, 2025</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Jane Smith</div>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm">
                    Great product overall, but there are a few features I wish were included. Customer support is
                    excellent.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">April 10, 2025</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Robert Johnson</div>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm">
                    It does what it promises, but the interface could be more intuitive. I had to refer to the
                    documentation frequently.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">April 5, 2025</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Reviews
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
