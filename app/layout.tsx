import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>T_ALLY_CLI - Command Line Reference</title>
        <meta
          name="description"
          content="Comprehensive command-line reference for PowerShell, Command Prompt, Git Bash, Node.js and more."
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="border-b sticky top-0 z-40 bg-background">
              <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  <Terminal className="h-6 w-6" />
                  <span>AllyGo CLI</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                  <Link
                    href="/commands/file-operations"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    File Operations
                  </Link>
                  <Link href="/commands/network" className="text-sm font-medium hover:text-primary transition-colors">
                    Network
                  </Link>
                  <Link href="/commands/system" className="text-sm font-medium hover:text-primary transition-colors">
                    System
                  </Link>
                  <Link
                    href="/commands/package-management"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Package Management
                  </Link>
                  <Link
                    href="/commands/git-version-control"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Git & Version Control
                  </Link>
                  <Link
                    href="/commands/text-processing"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Text Processing
                  </Link>

                  {/* Administrative Solutions Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors p-0"
                      >
                        Administrative Solutions
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/admin/educational">Educational</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/admin/nonprofit">Non-Profit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/admin/business">Business</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/admin/government">Government</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/admin/healthcare">Healthcare</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="/search" className="text-sm font-medium hover:text-primary transition-colors">
                    Search
                  </Link>
                </nav>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>Categories</SheetTitle>
                        <SheetDescription>Browse commands by category</SheetDescription>
                      </SheetHeader>
                      <nav className="flex flex-col gap-4 mt-6">
                        <Link
                          href="/commands/file-operations"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          File Operations
                        </Link>
                        <Link
                          href="/commands/network"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          Network
                        </Link>
                        <Link
                          href="/commands/system"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          System
                        </Link>
                        <Link
                          href="/commands/package-management"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          Package Management
                        </Link>
                        <Link
                          href="/commands/git-version-control"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          Git & Version Control
                        </Link>
                        <Link
                          href="/commands/text-processing"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          Text Processing
                        </Link>

                        <div className="border-t my-2"></div>
                        <SheetTitle className="text-sm">Administrative Solutions</SheetTitle>
                        <Link
                          href="/admin/educational"
                          className="text-sm font-medium hover:text-primary transition-colors pl-2"
                        >
                          শিক্ষা প্রতিষ্ঠান প্রধান
                        </Link>
                        <Link
                          href="/admin/nonprofit"
                          className="text-sm font-medium hover:text-primary transition-colors pl-2"
                        >
                          অলাভজনক প্রতিষ্ঠান প্রধান
                        </Link>
                        <Link
                          href="/admin/business"
                          className="text-sm font-medium hover:text-primary transition-colors pl-2"
                        >
                          ব্যবসায় প্রতিষ্ঠান প্রধান
                        </Link>
                        <Link
                          href="/admin/government"
                          className="text-sm font-medium hover:text-primary transition-colors pl-2"
                        >
                          সরকারি প্রতিষ্ঠান প্রধান
                        </Link>
                        <Link
                          href="/admin/healthcare"
                          className="text-sm font-medium hover:text-primary transition-colors pl-2"
                        >
                          স্বাস্থ্যসেবা প্রতিষ্ঠান প্রধান
                        </Link>

                        <div className="border-t my-2"></div>
                        <Link href="/search" className="text-sm font-medium hover:text-primary transition-colors">
                          Search
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1 w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
