import type React from "react"
import Link from "next/link"
import { CheckCircle, Clock, CreditCard, Download, Gift, Globe, Server, Shield, Terminal, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define pricing model types
type PricingModel = "Free" | "Freemium" | "Subscription" | "One-time"

// Define product interface
interface Product {
  id: string
  name: string
  description: string
  category: string
  icon: React.ReactNode
  pricingModel: PricingModel
  features: string[]
  price?: {
    free?: string
    premium?: string
    business?: string
    enterprise?: string
  }
  popular?: boolean
}

// Product data
const products: Product[] = [
  // Command Line Tools
  {
    id: "cli-master",
    name: "CLI Master",
    description: "Advanced command line interface with intelligent suggestions and auto-completion",
    category: "Command Line Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "terminal-pro",
    name: "Terminal Pro",
    description: "Professional terminal emulator with advanced features for developers",
    category: "Command Line Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "command-explorer",
    name: "Command Explorer",
    description: "Interactive command explorer with detailed documentation and examples",
    category: "Command Line Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    pricingModel: "Free",
    features: [
      "Comprehensive command database",
      "Interactive examples",
      "Command syntax highlighting",
      "Offline documentation",
      "Community contributions",
    ],
  },
  {
    id: "shell-scripter",
    name: "Shell Scripter",
    description: "Powerful shell script editor with debugging and testing capabilities",
    category: "Command Line Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "command-hub",
    name: "Command Hub",
    description: "Centralized command management for teams and enterprises",
    category: "Command Line Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
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
  },

  // System Administration
  {
    id: "system-monitor",
    name: "System Monitor",
    description: "Comprehensive system monitoring and performance analysis tool",
    category: "System Administration",
    icon: <Server className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "network-analyzer",
    name: "Network Analyzer",
    description: "Advanced network analysis and troubleshooting toolkit",
    category: "System Administration",
    icon: <Globe className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "backup-master",
    name: "Backup Master",
    description: "Automated backup solution for critical data and systems",
    category: "System Administration",
    icon: <Shield className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "patch-manager",
    name: "Patch Manager",
    description: "Automated system patching and update management",
    category: "System Administration",
    icon: <Shield className="h-8 w-8 text-primary" />,
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
  },

  // Development Tools
  {
    id: "code-commander",
    name: "Code Commander",
    description: "Command-line code generation and scaffolding tool",
    category: "Development Tools",
    icon: <Zap className="h-8 w-8 text-primary" />,
    pricingModel: "Free",
    features: ["Project templates", "Code scaffolding", "Framework integration", "Custom templates", "Plugin system"],
  },
  {
    id: "git-wizard",
    name: "Git Wizard",
    description: "Advanced Git command-line interface with visualization",
    category: "Development Tools",
    icon: <Zap className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "dev-environment",
    name: "Dev Environment",
    description: "Instant development environment setup and configuration",
    category: "Development Tools",
    icon: <Zap className="h-8 w-8 text-primary" />,
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
  },
  {
    id: "api-tester",
    name: "API Tester",
    description: "Command-line API testing and documentation tool",
    category: "Development Tools",
    icon: <Zap className="h-8 w-8 text-primary" />,
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
  },

  // Automation & Productivity
  {
    id: "task-automator",
    name: "Task Automator",
    description: "Powerful task automation and scheduling tool",
    category: "Automation & Productivity",
    icon: <Clock className="h-8 w-8 text-primary" />,
    pricingModel: "Freemium",
    features: [
      "Visual workflow builder",
      "Scheduled tasks",
      "Conditional logic",
      "Integration with popular services",
      "Error handling and notifications",
    ],
    price: {
      free: "0",
      premium: "9.99",
      business: "24.99",
    },
  },
  {
    id: "script-library",
    name: "Script Library",
    description: "Curated collection of productivity scripts and utilities",
    category: "Automation & Productivity",
    icon: <Clock className="h-8 w-8 text-primary" />,
    pricingModel: "Subscription",
    features: [
      "Hundreds of ready-to-use scripts",
      "Regular updates",
      "Customization options",
      "Cross-platform compatibility",
      "Community contributions",
    ],
    price: {
      premium: "7.99",
      business: "19.99",
    },
    popular: true,
  },
  {
    id: "file-wizard",
    name: "File Wizard",
    description: "Advanced file management and organization tool",
    category: "Automation & Productivity",
    icon: <Clock className="h-8 w-8 text-primary" />,
    pricingModel: "One-time",
    features: [
      "Batch file operations",
      "Advanced search and filtering",
      "Duplicate detection",
      "File organization rules",
      "Cloud storage integration",
    ],
    price: {
      premium: "39.99",
      business: "79.99",
    },
  },
  {
    id: "command-scheduler",
    name: "Command Scheduler",
    description: "Advanced command scheduling and execution management",
    category: "Automation & Productivity",
    icon: <Clock className="h-8 w-8 text-primary" />,
    pricingModel: "Free",
    features: [
      "Cron-like scheduling",
      "Dependency management",
      "Execution logging",
      "Failure recovery",
      "Resource throttling",
    ],
  },

  // Security & Compliance
  {
    id: "security-scanner",
    name: "Security Scanner",
    description: "Comprehensive security scanning and vulnerability assessment",
    category: "Security & Compliance",
    icon: <Shield className="h-8 w-8 text-primary" />,
    pricingModel: "Subscription",
    features: [
      "Vulnerability scanning",
      "Compliance checking",
      "Remediation guidance",
      "Scheduled scans",
      "Detailed reporting",
    ],
    price: {
      premium: "29.99",
      business: "59.99",
      enterprise: "119.99",
    },
    popular: true,
  },
  {
    id: "crypto-tools",
    name: "Crypto Tools",
    description: "Command-line cryptography and security utilities",
    category: "Security & Compliance",
    icon: <Shield className="h-8 w-8 text-primary" />,
    pricingModel: "Freemium",
    features: [
      "File encryption/decryption",
      "Password management",
      "Certificate handling",
      "Secure communication",
      "Key generation",
    ],
    price: {
      free: "0",
      premium: "14.99",
      business: "34.99",
    },
  },
  {
    id: "compliance-manager",
    name: "Compliance Manager",
    description: "Automated compliance checking and reporting tool",
    category: "Security & Compliance",
    icon: <Shield className="h-8 w-8 text-primary" />,
    pricingModel: "Subscription",
    features: [
      "Policy enforcement",
      "Compliance reporting",
      "Audit trail",
      "Remediation tracking",
      "Regulatory updates",
    ],
    price: {
      business: "49.99",
      enterprise: "99.99",
    },
  },
  {
    id: "access-control",
    name: "Access Control",
    description: "Advanced permission management and access control system",
    category: "Security & Compliance",
    icon: <Shield className="h-8 w-8 text-primary" />,
    pricingModel: "One-time",
    features: [
      "Role-based access control",
      "Fine-grained permissions",
      "Audit logging",
      "Integration with directory services",
      "Multi-factor authentication",
    ],
    price: {
      premium: "89.99",
      business: "179.99",
    },
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

// Pricing card component
function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}) {
  return (
    <Card className={`flex flex-col ${popular ? "border-primary shadow-lg" : ""}`}>
      <CardHeader>
        {popular && <Badge className="w-fit mb-2">Popular</Badge>}
        <CardTitle>{title}</CardTitle>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold">${price}</span>
          {price !== "0" && <span className="text-muted-foreground">/month</span>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {price === "0" ? "Get Started" : "Subscribe Now"}
        </Button>
      </CardFooter>
    </Card>
  )
}

// Product card component
function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {product.icon}
            <CardTitle>{product.name}</CardTitle>
          </div>
          {product.popular && <Badge className="bg-primary">Popular</Badge>}
        </div>
        <div className="flex items-center gap-2 mt-2">
          {product.pricingModel === "Free" && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Gift className="h-3 w-3 mr-1" />
              Free
            </Badge>
          )}
          {product.pricingModel === "Freemium" && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Gift className="h-3 w-3 mr-1" />
              Freemium
            </Badge>
          )}
          {product.pricingModel === "Subscription" && (
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <CreditCard className="h-3 w-3 mr-1" />
              Subscription
            </Badge>
          )}
          {product.pricingModel === "One-time" && (
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
              <Download className="h-3 w-3 mr-1" />
              One-time
            </Badge>
          )}
        </div>
        <CardDescription className="mt-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-sm text-muted-foreground pl-6">+{product.features.length - 3} more features</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        {product.price ? (
          <div className="w-full">
            <div className="flex justify-between items-center w-full mb-4">
              <span className="text-sm text-muted-foreground">Starting from</span>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold">
                  ${product.price.free === "0" ? product.price.premium || "0" : product.price.free || "0"}
                </span>
                {product.pricingModel === "Subscription" && <span className="text-muted-foreground">/month</span>}
              </div>
            </div>
            <Button className="w-full">View Pricing</Button>
          </div>
        ) : (
          <Button className="w-full">Get Started</Button>
        )}
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={`/pricing#${product.id}`}>View Pricing</Link>
          </Button>
        </CardFooter>
      </CardFooter>
    </Card>
  )
}

// Category section component
function CategorySection({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="py-8 w-full">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">T-ALLY CLI Products & Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Explore our comprehensive suite of command line tools and services designed to boost your productivity.
          </p>
          <Button asChild size="lg">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#products">Browse Products</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#pricing">View Pricing</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products
            .filter((product) => product.popular)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Pricing Models Section */}
      <section id="pricing" className="mb-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Flexible Pricing Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-green-600" />
                <CardTitle>Free</CardTitle>
              </div>
              <CardDescription>Essential tools with no cost, perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span>Basic functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span>Community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span>Documentation access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span>Limited usage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/pricing/free-model">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-blue-600" />
                <CardTitle>Freemium</CardTitle>
              </div>
              <CardDescription>Free core features with premium upgrades for power users</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>All free features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Advanced functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Usage limits</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/pricing/freemium-model">Explore Plans</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary shadow-lg">
            <CardHeader>
              <Badge className="w-fit mb-2">Popular</Badge>
              <div className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-purple-600" />
                <CardTitle>Subscription</CardTitle>
              </div>
              <CardDescription>Regular payments for continuous access and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 shrink-0" />
                  <span>Full feature access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 shrink-0" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 shrink-0" />
                  <span>Unlimited usage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/pricing/subscription-model">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="h-6 w-6 text-amber-600" />
                <CardTitle>One-time</CardTitle>
              </div>
              <CardDescription>Single payment for perpetual access to the software</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>Lifetime access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>Free minor updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>Standard support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>No recurring fees</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/pricing/one-time-model">Purchase</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* All Products Section */}
      <section id="products" className="mb-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">All Products & Services</h2>

        {/* Command Line Tools */}
        <CategorySection title="Command Line Tools" products={groupedProducts["Command Line Tools"]} />

        {/* System Administration */}
        <CategorySection title="System Administration" products={groupedProducts["System Administration"]} />

        {/* Development Tools */}
        <CategorySection title="Development Tools" products={groupedProducts["Development Tools"]} />

        {/* Automation & Productivity */}
        <CategorySection title="Automation & Productivity" products={groupedProducts["Automation & Productivity"]} />

        {/* Security & Compliance */}
        <CategorySection title="Security & Compliance" products={groupedProducts["Security & Compliance"]} />
      </section>

      {/* Detailed Pricing Section */}
      <section className="mb-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Detailed Pricing</h2>
        <Tabs defaultValue="terminal-pro" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8">
            <TabsTrigger value="terminal-pro">Terminal Pro</TabsTrigger>
            <TabsTrigger value="network-analyzer">Network Analyzer</TabsTrigger>
            <TabsTrigger value="git-wizard">Git Wizard</TabsTrigger>
            <TabsTrigger value="script-library">Script Library</TabsTrigger>
            <TabsTrigger value="security-scanner">Security Scanner</TabsTrigger>
          </TabsList>

          <TabsContent value="terminal-pro" className="space-y-4">
            <h3 className="text-xl font-bold">Terminal Pro Pricing</h3>
            <p className="text-muted-foreground mb-6">
              Professional terminal emulator with advanced features for developers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <PricingCard
                title="Free"
                price="0"
                description="Basic terminal features"
                features={[
                  "Single terminal window",
                  "Basic syntax highlighting",
                  "Command history",
                  "Community support",
                  "Limited customization",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/free">Get Started</Link>
              </Button>
              <PricingCard
                title="Premium"
                price="12.99"
                description="Advanced features for professionals"
                features={[
                  "Multiple tabs and split views",
                  "Advanced syntax highlighting",
                  "Custom themes and fonts",
                  "SSH integration",
                  "Email support",
                ]}
                popular={true}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/starter/monthly">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Business"
                price="24.99"
                description="Team collaboration features"
                features={[
                  "All Premium features",
                  "Team sharing",
                  "Custom scripts library",
                  "Advanced logging",
                  "Priority support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/professional/monthly">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Enterprise"
                price="49.99"
                description="Enterprise-grade solution"
                features={[
                  "All Business features",
                  "SSO integration",
                  "Audit logging",
                  "Custom deployment",
                  "Dedicated support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/enterprise/monthly">Subscribe Now</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="network-analyzer" className="space-y-4">
            <h3 className="text-xl font-bold">Network Analyzer Pricing</h3>
            <p className="text-muted-foreground mb-6">Advanced network analysis and troubleshooting toolkit</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PricingCard
                title="Premium"
                price="24.99"
                description="Professional network analysis"
                features={[
                  "Network traffic analysis",
                  "Bandwidth monitoring",
                  "Basic protocol inspection",
                  "Performance reports",
                  "Email support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/network-analyzer/premium">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Business"
                price="49.99"
                description="Advanced network management"
                features={[
                  "All Premium features",
                  "Deep packet inspection",
                  "Security scanning",
                  "Custom alerts",
                  "Priority support",
                ]}
                popular={true}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/network-analyzer/business">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Enterprise"
                price="99.99"
                description="Enterprise-grade solution"
                features={["All Business features", "Multi-network management", "Advanced security features"]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/network-analyzer/enterprise">Subscribe Now</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="git-wizard" className="space-y-4">
            <h3 className="text-xl font-bold">Git Wizard Pricing</h3>
            <p className="text-muted-foreground mb-6">Advanced Git command-line interface with visualization</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PricingCard
                title="Free"
                price="0"
                description="Basic Git management"
                features={[
                  "Basic branch visualization",
                  "Command suggestions",
                  "Simple conflict resolution",
                  "GitHub integration",
                  "Community support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/git-wizard/free">Get Started</Link>
              </Button>
              <PricingCard
                title="Premium"
                price="14.99"
                description="Advanced Git features"
                features={[
                  "Advanced visualization",
                  "Interactive rebase",
                  "Advanced conflict resolution",
                  "GitHub/GitLab integration",
                  "Email support",
                ]}
                popular={true}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/git-wizard/premium">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Business"
                price="29.99"
                description="Team collaboration"
                features={[
                  "All Premium features",
                  "Team permissions",
                  "Workflow automation",
                  "Performance optimization",
                  "Priority support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/git-wizard/business">Subscribe Now</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="script-library" className="space-y-4">
            <h3 className="text-xl font-bold">Script Library Pricing</h3>
            <p className="text-muted-foreground mb-6">Curated collection of productivity scripts and utilities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PricingCard
                title="Premium"
                price="7.99"
                description="Personal productivity"
                features={[
                  "200+ ready-to-use scripts",
                  "Monthly updates",
                  "Basic customization",
                  "Cross-platform support",
                  "Email support",
                ]}
                popular={true}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/script-library/premium">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Business"
                price="19.99"
                description="Team productivity"
                features={[
                  "500+ ready-to-use scripts",
                  "Weekly updates",
                  "Advanced customization",
                  "Team sharing",
                  "Priority support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/script-library/business">Subscribe Now</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="security-scanner" className="space-y-4">
            <h3 className="text-xl font-bold">Security Scanner Pricing</h3>
            <p className="text-muted-foreground mb-6">Comprehensive security scanning and vulnerability assessment</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PricingCard
                title="Premium"
                price="29.99"
                description="Personal security"
                features={[
                  "Vulnerability scanning",
                  "Monthly scans",
                  "Basic remediation guidance",
                  "Simple reporting",
                  "Email support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/security-scanner/premium">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Business"
                price="59.99"
                description="Business security"
                features={[
                  "Advanced vulnerability scanning",
                  "Weekly scans",
                  "Detailed remediation guidance",
                  "Compliance checking",
                  "Priority support",
                ]}
                popular={true}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/security-scanner/business">Subscribe Now</Link>
              </Button>
              <PricingCard
                title="Enterprise"
                price="119.99"
                description="Enterprise security"
                features={[
                  "Comprehensive scanning",
                  "Daily scans",
                  "Custom remediation plans",
                  "Advanced compliance features",
                  "Dedicated support",
                ]}
              />
              <Button className="w-full" asChild>
                <Link href="/signup/security-scanner/enterprise">Subscribe Now</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How do I choose the right product?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We recommend starting with our free or freemium options to explore the features. You can then upgrade to
                premium versions based on your specific needs. Our support team is also available to provide
                personalized recommendations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can I switch between pricing plans?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, you can upgrade or downgrade your subscription at any time. When upgrading, you'll get immediate
                access to additional features. When downgrading, the changes will take effect at the end of your current
                billing cycle.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Do you offer discounts for multiple products?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, we offer bundle discounts when you purchase multiple products. Contact our sales team for custom
                pricing based on your specific needs and the number of products you're interested in.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What payment methods do you accept?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We accept all major credit cards, PayPal, and bank transfers for annual subscriptions. For enterprise
                customers, we also offer invoice-based payment options with net-30 terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg w-full">
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Command Line Experience?</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Choose from our 23 powerful products and services to boost your productivity and streamline your workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started Today</Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  )
}
