import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">AllyGo CLI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/commands" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Commands
            </Link>
            <Link href="/search" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Search
            </Link>
            <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Products
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="p-0">
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Command Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/commands/file-operations">File Operations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/commands/network">Network</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/commands/system">System</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/commands/package-management">Package Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/commands/git-version-control">Git & Version Control</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/commands/text-processing">Text Processing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="p-0">
                  Admin Solutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Administrative Solutions</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="hover:text-foreground/80 text-foreground/60">
                Home
              </Link>
              <Link href="/commands" className="hover:text-foreground/80 text-foreground/60">
                Commands
              </Link>
              <Link href="/search" className="hover:text-foreground/80 text-foreground/60">
                Search
              </Link>
              <Link href="/products" className="hover:text-foreground/80 text-foreground/60">
                Products
              </Link>
              <Link href="/pricing" className="hover:text-foreground/80 text-foreground/60">
                Pricing
              </Link>
              <div>
                <h4 className="font-medium mb-1">Command Categories</h4>
                <div className="grid gap-3 pl-2">
                  <Link
                    href="/commands/file-operations"
                    className="text-sm hover:text-foreground/80 text-foreground/60"
                  >
                    File Operations
                  </Link>
                  <Link href="/commands/network" className="text-sm hover:text-foreground/80 text-foreground/60">
                    Network
                  </Link>
                  <Link href="/commands/system" className="text-sm hover:text-foreground/80 text-foreground/60">
                    System
                  </Link>
                  <Link
                    href="/commands/package-management"
                    className="text-sm hover:text-foreground/80 text-foreground/60"
                  >
                    Package Management
                  </Link>
                  <Link
                    href="/commands/git-version-control"
                    className="text-sm hover:text-foreground/80 text-foreground/60"
                  >
                    Git & Version Control
                  </Link>
                  <Link
                    href="/commands/text-processing"
                    className="text-sm hover:text-foreground/80 text-foreground/60"
                  >
                    Text Processing
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-1">Administrative Solutions</h4>
                <div className="grid gap-3 pl-2">
                  <Link href="/admin/educational" className="text-sm hover:text-foreground/80 text-foreground/60">
                    Educational
                  </Link>
                  <Link href="/admin/nonprofit" className="text-sm hover:text-foreground/80 text-foreground/60">
                    Non-Profit
                  </Link>
                  <Link href="/admin/business" className="text-sm hover:text-foreground/80 text-foreground/60">
                    Business
                  </Link>
                  <Link href="/admin/government" className="text-sm hover:text-foreground/80 text-foreground/60">
                    Government
                  </Link>
                  <Link href="/admin/healthcare" className="text-sm hover:text-foreground/80 text-foreground/60">
                    Healthcare
                  </Link>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">{/* Search or other elements can go here */}</div>
          <nav className="flex items-center">{/* Additional navigation items can go here */}</nav>
        </div>
      </div>
    </header>
  )
}
