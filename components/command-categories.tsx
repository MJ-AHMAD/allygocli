import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, GitBranch, Server, FileText, Globe, Database, Code, Package } from "lucide-react"

export interface Category {
  id: string
  title: string
  description: string
  icon: string
  href: string
  commandCount?: number
}

interface CommandCategoriesProps {
  categories: Category[]
}

// Helper function to render the appropriate icon
const getIcon = (iconName: string, className = "h-6 w-6") => {
  switch (iconName) {
    case "terminal":
      return <Terminal className={className} />
    case "git-branch":
      return <GitBranch className={className} />
    case "server":
      return <Server className={className} />
    case "file-text":
      return <FileText className={className} />
    case "globe":
      return <Globe className={className} />
    case "database":
      return <Database className={className} />
    case "code":
      return <Code className={className} />
    case "package":
      return <Package className={className} />
    default:
      return <Terminal className={className} />
  }
}

export function CommandCategories({ categories }: CommandCategoriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={category.href}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                {getIcon(category.icon)}
                <CardTitle>{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {category.commandCount && `${category.commandCount} commands available`}
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-blue-600">View commands →</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
