import type React from "react"
import Link from "next/link"
import {
  Terminal,
  Command,
  GitBranch,
  Server,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  Globe,
  Download,
  Gift,
  CreditCard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OverviewPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Hero Section */}
      <section className="py-12 md:py-20 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">T-ALLY CLI Project Overview</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive command-line reference and toolset for PowerShell, Command Prompt, Git Bash, Node.js and
            more.
          </p>
        </div>

        <Card className="border-2 border-primary/10 shadow-lg w-full mx-auto mb-12">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl md:text-3xl text-center">Project Mission</CardTitle>
            <CardDescription className="text-center text-base">
              Providing a complete guide to various command-line interfaces with practical examples and tools
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              T-ALLY CLI is designed to be your go-to resource for all command-line needs, whether you're a beginner
              learning the basics or an expert looking for advanced techniques. Our platform combines comprehensive
              documentation with powerful tools to enhance your command-line experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Terminal className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Command Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive documentation for multiple CLI environments
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Productivity Tools</h3>
                <p className="text-sm text-muted-foreground">Software tools to enhance your command-line workflow</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security Solutions</h3>
                <p className="text-sm text-muted-foreground">Tools to secure your systems and maintain compliance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multi-environment support (PowerShell, CMD, Git Bash, Node.js)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Organized command structure with practical examples</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced search functionality across all environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Detailed documentation with syntax highlighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Responsive design for desktop and mobile devices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Developers seeking to improve command-line efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>System administrators managing servers and networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>DevOps professionals automating workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Students learning command-line basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>IT professionals seeking reference materials</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products and Services Section */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of command-line tools and services
          </p>
        </div>

        <Tabs defaultValue="command-line" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="command-line">Command Line Tools</TabsTrigger>
            <TabsTrigger value="system-admin">System Administration</TabsTrigger>
            <TabsTrigger value="development">Development Tools</TabsTrigger>
            <TabsTrigger value="automation">Automation & Productivity</TabsTrigger>
            <TabsTrigger value="security">Security & Compliance</TabsTrigger>
          </TabsList>

          {/* Command Line Tools */}
          <TabsContent value="command-line" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="CLI Master"
                description="Advanced command line interface with intelligent suggestions and auto-completion"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="Freemium"
                features={[
                  "Intelligent command suggestions",
                  "Cross-platform compatibility",
                  "Custom aliases and shortcuts",
                ]}
                price="From $9.99/month"
              />
              <ProductCard
                name="Terminal Pro"
                description="Professional terminal emulator with advanced features for developers"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Multiple tabs and split views", "Customizable themes and fonts", "SSH and FTP integration"]}
                price="From $12.99/month"
                popular={true}
              />
              <ProductCard
                name="Command Explorer"
                description="Interactive command explorer with detailed documentation and examples"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="Free"
                features={["Comprehensive command database", "Interactive examples", "Command syntax highlighting"]}
                price="Free"
              />
              <ProductCard
                name="Shell Scripter"
                description="Powerful shell script editor with debugging and testing capabilities"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="One-time"
                features={[
                  "Syntax highlighting for multiple shells",
                  "Integrated debugger",
                  "Script testing framework",
                ]}
                price="From $49.99"
              />
              <ProductCard
                name="Command Hub"
                description="Centralized command management for teams and enterprises"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Team command sharing", "Role-based access control", "Command auditing and logging"]}
                price="From $14.99/month"
              />
            </div>
          </TabsContent>

          {/* System Administration */}
          <TabsContent value="system-admin" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="System Monitor"
                description="Comprehensive system monitoring and performance analysis tool"
                icon={<Server className="h-8 w-8 text-primary" />}
                pricingModel="Freemium"
                features={["Real-time resource monitoring", "Performance analytics", "Alert notifications"]}
                price="From $19.99/month"
              />
              <ProductCard
                name="Network Analyzer"
                description="Advanced network analysis and troubleshooting toolkit"
                icon={<Globe className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Network traffic analysis", "Bandwidth monitoring", "Protocol inspection"]}
                price="From $24.99/month"
                popular={true}
              />
              <ProductCard
                name="Backup Master"
                description="Automated backup solution for critical data and systems"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="One-time"
                features={["Scheduled backups", "Incremental and differential backups", "Cloud storage integration"]}
                price="From $79.99"
              />
              <ProductCard
                name="Patch Manager"
                description="Automated system patching and update management"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Automated patch deployment", "Compliance reporting", "Rollback capabilities"]}
                price="From $19.99/month"
              />
            </div>
          </TabsContent>

          {/* Development Tools */}
          <TabsContent value="development" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="Code Commander"
                description="Command-line code generation and scaffolding tool"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="Free"
                features={["Project templates", "Code scaffolding", "Framework integration"]}
                price="Free"
              />
              <ProductCard
                name="Git Wizard"
                description="Advanced Git command-line interface with visualization"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="Freemium"
                features={["Visual branch management", "Interactive rebase", "Conflict resolution"]}
                price="From $14.99/month"
                popular={true}
              />
              <ProductCard
                name="Dev Environment"
                description="Instant development environment setup and configuration"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["One-command environment setup", "Language and framework presets", "Docker integration"]}
                price="From $19.99/month"
              />
              <ProductCard
                name="API Tester"
                description="Command-line API testing and documentation tool"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="One-time"
                features={["HTTP request testing", "Automated test scripts", "Response validation"]}
                price="From $59.99"
              />
            </div>
          </TabsContent>

          {/* Automation & Productivity */}
          <TabsContent value="automation" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="Task Automator"
                description="Powerful task automation and scheduling tool"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="Freemium"
                features={["Visual workflow builder", "Scheduled tasks", "Conditional logic"]}
                price="From $9.99/month"
              />
              <ProductCard
                name="Script Library"
                description="Curated collection of productivity scripts and utilities"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Hundreds of ready-to-use scripts", "Regular updates", "Customization options"]}
                price="From $7.99/month"
                popular={true}
              />
              <ProductCard
                name="File Wizard"
                description="Advanced file management and organization tool"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="One-time"
                features={["Batch file operations", "Advanced search and filtering", "Duplicate detection"]}
                price="From $39.99"
              />
              <ProductCard
                name="Command Scheduler"
                description="Advanced command scheduling and execution management"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="Free"
                features={["Cron-like scheduling", "Dependency management", "Execution logging"]}
                price="Free"
              />
            </div>
          </TabsContent>

          {/* Security & Compliance */}
          <TabsContent value="security" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="Security Scanner"
                description="Comprehensive security scanning and vulnerability assessment"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Vulnerability scanning", "Compliance checking", "Remediation guidance"]}
                price="From $29.99/month"
                popular={true}
              />
              <ProductCard
                name="Crypto Tools"
                description="Command-line cryptography and security utilities"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="Freemium"
                features={["File encryption/decryption", "Password management", "Certificate handling"]}
                price="From $14.99/month"
              />
              <ProductCard
                name="Compliance Manager"
                description="Automated compliance checking and reporting tool"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="Subscription"
                features={["Policy enforcement", "Compliance reporting", "Audit trail"]}
                price="From $49.99/month"
              />
              <ProductCard
                name="Access Control"
                description="Advanced permission management and access control system"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="One-time"
                features={["Role-based access control", "Fine-grained permissions", "Audit logging"]}
                price="From $89.99"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Pricing Models</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer flexible pricing options to suit different needs and budgets
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <PricingModelCard
              title="Free"
              icon={<Gift className="h-6 w-6 text-green-600" />}
              description="Essential tools with no cost"
              color="green"
            />
            <PricingModelCard
              title="Freemium"
              icon={<Gift className="h-6 w-6 text-blue-600" />}
              description="Free core features with premium upgrades"
              color="blue"
            />
            <PricingModelCard
              title="Subscription"
              icon={<CreditCard className="h-6 w-6 text-purple-600" />}
              description="Regular payments for continuous access"
              color="purple"
            />
            <PricingModelCard
              title="One-time"
              icon={<Download className="h-6 w-6 text-amber-600" />}
              description="Single payment for perpetual access"
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* CLI Environments Section */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Supported CLI Environments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive documentation and tools for multiple command-line interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <EnvironmentCard
            title="PowerShell"
            icon={<Command className="h-10 w-10 text-primary" />}
            description="Modern task automation and configuration management framework"
            commandCount="500+"
          />
          <EnvironmentCard
            title="Command Prompt"
            icon={<Terminal className="h-10 w-10 text-primary" />}
            description="Traditional Windows command-line interpreter"
            commandCount="300+"
          />
          <EnvironmentCard
            title="Git Bash"
            icon={<GitBranch className="h-10 w-10 text-primary" />}
            description="UNIX-like command line for Git version control"
            commandCount="250+"
          />
          <EnvironmentCard
            title="Node.js"
            icon={<Server className="h-10 w-10 text-primary" />}
            description="JavaScript runtime environment commands and tools"
            commandCount="200+"
          />
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/commands">Browse All Commands</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg w-full mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Master the Command Line?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our comprehensive documentation, tools, and services to enhance your command-line experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Complete Product List */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Complete Product Catalog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive list of all our products and services
          </p>
        </div>

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-12">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                  Product Name
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold hidden md:table-cell">
                  Category
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold hidden lg:table-cell">
                  Pricing Model
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                  Starting Price
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-background">
              {productList.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? undefined : "bg-muted/30"}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                    <div className="flex items-center gap-2">
                      {product.popular && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Popular
                        </Badge>
                      )}
                      {product.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground hidden md:table-cell">
                    {product.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm hidden lg:table-cell">
                    <PricingBadge model={product.pricingModel} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {product.price === "Free" ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      product.price
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-right">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products#${product.id}`}>Details</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Product Card Component
function ProductCard({
  name,
  description,
  icon,
  pricingModel,
  features,
  price,
  popular = false,
}: {
  name: string
  description: string
  icon: React.ReactNode
  pricingModel: "Free" | "Freemium" | "Subscription" | "One-time"
  features: string[]
  price: string
  popular?: boolean
}) {
  return (
    <Card className={`flex flex-col h-full ${popular ? "border-primary shadow-md" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{name}</CardTitle>
          </div>
          {popular && <Badge className="bg-primary">Popular</Badge>}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <PricingBadge model={pricingModel} />
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="text-sm text-muted-foreground">Price</span>
            <span className="font-medium">{price}</span>
          </div>
          <Button asChild className="w-full">
            <Link href="/products">Learn More</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Pricing Model Card Component
function PricingModelCard({
  title,
  icon,
  description,
  color,
}: {
  title: string
  icon: React.ReactNode
  description: string
  color: "green" | "blue" | "purple" | "amber"
}) {
  const colorClasses = {
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    amber: "bg-amber-50 border-amber-200",
  }

  return (
    <Card className={`border-2 ${colorClasses[color]}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/pricing/${title.toLowerCase()}-model`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Environment Card Component
function EnvironmentCard({
  title,
  icon,
  description,
  commandCount,
}: {
  title: string
  icon: React.ReactNode
  description: string
  commandCount: string
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex flex-col items-center text-center">
          {icon}
          <CardTitle className="mt-4">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          {commandCount} Commands
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href={`/commands/${title.toLowerCase().replace(" ", "-")}`}>Browse Commands</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Pricing Badge Component
function PricingBadge({ model }: { model: "Free" | "Freemium" | "Subscription" | "One-time" }) {
  const badgeClasses = {
    Free: "bg-green-50 text-green-700 border-green-200",
    Freemium: "bg-blue-50 text-blue-700 border-blue-200",
    Subscription: "bg-purple-50 text-purple-700 border-purple-200",
    "One-time": "bg-amber-50 text-amber-700 border-amber-200",
  }

  const icons = {
    Free: <Gift className="h-3 w-3 mr-1" />,
    Freemium: <Gift className="h-3 w-3 mr-1" />,
    Subscription: <CreditCard className="h-3 w-3 mr-1" />,
    "One-time": <Download className="h-3 w-3 mr-1" />,
  }

  return (
    <Badge variant="outline" className={badgeClasses[model]}>
      {icons[model]}
      {model}
    </Badge>
  )
}

// Complete product list data
const productList = [
  {
    id: "cli-master",
    name: "CLI Master",
    category: "Command Line Tools",
    pricingModel: "Freemium",
    price: "From $9.99/mo",
  },
  {
    id: "terminal-pro",
    name: "Terminal Pro",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    price: "From $12.99/mo",
    popular: true,
  },
  {
    id: "command-explorer",
    name: "Command Explorer",
    category: "Command Line Tools",
    pricingModel: "Free",
    price: "Free",
  },
  {
    id: "shell-scripter",
    name: "Shell Scripter",
    category: "Command Line Tools",
    pricingModel: "One-time",
    price: "From $49.99",
  },
  {
    id: "command-hub",
    name: "Command Hub",
    category: "Command Line Tools",
    pricingModel: "Subscription",
    price: "From $14.99/mo",
  },
  {
    id: "system-monitor",
    name: "System Monitor",
    category: "System Administration",
    pricingModel: "Freemium",
    price: "From $19.99/mo",
  },
  {
    id: "network-analyzer",
    name: "Network Analyzer",
    category: "System Administration",
    pricingModel: "Subscription",
    price: "From $24.99/mo",
    popular: true,
  },
  {
    id: "backup-master",
    name: "Backup Master",
    category: "System Administration",
    pricingModel: "One-time",
    price: "From $79.99",
  },
  {
    id: "patch-manager",
    name: "Patch Manager",
    category: "System Administration",
    pricingModel: "Subscription",
    price: "From $19.99/mo",
  },
  { id: "code-commander", name: "Code Commander", category: "Development Tools", pricingModel: "Free", price: "Free" },
  {
    id: "git-wizard",
    name: "Git Wizard",
    category: "Development Tools",
    pricingModel: "Freemium",
    price: "From $14.99/mo",
    popular: true,
  },
  {
    id: "dev-environment",
    name: "Dev Environment",
    category: "Development Tools",
    pricingModel: "Subscription",
    price: "From $19.99/mo",
  },
  {
    id: "api-tester",
    name: "API Tester",
    category: "Development Tools",
    pricingModel: "One-time",
    price: "From $59.99",
  },
  {
    id: "task-automator",
    name: "Task Automator",
    category: "Automation & Productivity",
    pricingModel: "Freemium",
    price: "From $9.99/mo",
  },
  {
    id: "script-library",
    name: "Script Library",
    category: "Automation & Productivity",
    pricingModel: "Subscription",
    price: "From $7.99/mo",
    popular: true,
  },
  {
    id: "file-wizard",
    name: "File Wizard",
    category: "Automation & Productivity",
    pricingModel: "One-time",
    price: "From $39.99",
  },
  {
    id: "command-scheduler",
    name: "Command Scheduler",
    category: "Automation & Productivity",
    pricingModel: "Free",
    price: "Free",
  },
  {
    id: "security-scanner",
    name: "Security Scanner",
    category: "Security & Compliance",
    pricingModel: "Subscription",
    price: "From $29.99/mo",
    popular: true,
  },
  {
    id: "crypto-tools",
    name: "Crypto Tools",
    category: "Security & Compliance",
    pricingModel: "Freemium",
    price: "From $14.99/mo",
  },
  {
    id: "compliance-manager",
    name: "Compliance Manager",
    category: "Security & Compliance",
    pricingModel: "Subscription",
    price: "From $49.99/mo",
  },
  {
    id: "access-control",
    name: "Access Control",
    category: "Security & Compliance",
    pricingModel: "One-time",
    price: "From $89.99",
  },
]
