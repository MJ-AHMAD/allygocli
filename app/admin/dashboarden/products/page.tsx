import Link from "next/link"
import { PlusCircle, Search, Terminal, Server, Globe, Shield, Zap, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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

// Group products by category
const groupedProducts = products.reduce(
  (acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  },
  {} as Record<string, Product[]>,
)

// Get icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Command Line Tools":
      return <Terminal className="h-4 w-4" />
    case "System Administration":
      return <Server className="h-4 w-4" />
    case "Development Tools":
      return <Zap className="h-4 w-4" />
    case "Automation & Productivity":
      return <Clock className="h-4 w-4" />
    case "Security & Compliance":
      return <Shield className="h-4 w-4" />
    default:
      return <Globe className="h-4 w-4" />
  }
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <div className="flex items-center space-x-4">
          <DhakaTime />
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <Card key={category} className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              {getCategoryIcon(category)}
              <CardTitle>{category}</CardTitle>
            </div>
            <Badge variant="outline">{categoryProducts.length} Products</Badge>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Pricing Model</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categoryProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-mono text-xs">{product.id}</TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                      {product.popular && (
                        <Badge variant="secondary" className="ml-2">
                          Popular
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell>{product.sales}</TableCell>
                    <TableCell>{product.lastUpdated}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/dashboarden/products/${product.id}`}>View</Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
