import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ArrowLeft, Search, Box, Download, RefreshCw, Archive } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function PackageManagementPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 mx-auto max-w-7xl">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Link href="/commands">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl flex items-center gap-2">
              <Package className="h-8 w-8 text-primary" />
              Package Management Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for package managers and dependency tools
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 rounded-lg p-6 my-6 border border-purple-100 dark:border-purple-900 w-full">
          <h2 className="text-2xl font-bold mb-3">প্যাকেজ ম্যানেজমেন্ট পরিচিতি</h2>
          <p className="text-muted-foreground mb-4">
            প্যাকেজ ম্যানেজমেন্ট টুলগুলি সফটওয়্যার ইনস্টলেশন, আপডেট, কনফিগারেশন এবং রিমুভাল প্রক্রিয়া সহজ করে। এই কমান্ডগুলি ব্যবহার করে আপনি
            বিভিন্ন প্ল্যাটফর্মে সফটওয়্যার ডিপেন্ডেন্সি ম্যানেজ করতে পারবেন, যা ডেভেলপমেন্ট এবং সিস্টেম অ্যাডমিনিস্ট্রেশনের জন্য অপরিহার্য।
          </p>
          <Link href="/learn/package-management">
            <Button variant="outline" className="gap-2">
              <Package className="h-4 w-4" />
              প্যাকেজ ম্যানেজমেন্ট সম্পর্কে বিস্তারিত জানুন
            </Button>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <Link href="/search?category=package-management">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search Package Management Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="npm" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="chocolatey">Chocolatey</TabsTrigger>
            <TabsTrigger value="winget">WinGet</TabsTrigger>
          </TabsList>

          <TabsContent value="npm" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  npm Commands
                </CardTitle>
                <CardDescription>Node Package Manager commands for JavaScript projects</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "npm init",
                      syntax: "npm init [--yes|-y]",
                      description: "Creates a package.json file in the current directory",
                      example: "npm init -y",
                    },
                    {
                      command: "npm install",
                      syntax: "npm install [package] [--save|--save-dev]",
                      description: "Installs a package and any packages it depends on",
                      example: "npm install express --save",
                    },
                    {
                      command: "npm uninstall",
                      syntax: "npm uninstall [package]",
                      description: "Removes a package from the current package and its dependencies",
                      example: "npm uninstall lodash",
                    },
                    {
                      command: "npm update",
                      syntax: "npm update [package]",
                      description: "Updates packages to their latest version based on the specified range",
                      example: "npm update",
                    },
                    {
                      command: "npm list",
                      syntax: "npm list [--depth=n]",
                      description: "Lists installed packages",
                      example: "npm list --depth=0",
                    },
                    {
                      command: "npm run",
                      syntax: "npm run [script]",
                      description: "Runs a script defined in package.json",
                      example: "npm run build",
                    },
                    {
                      command: "npm audit",
                      syntax: "npm audit [fix]",
                      description: "Runs a security audit on the project dependencies",
                      example: "npm audit fix",
                    },
                    {
                      command: "npm publish",
                      syntax: "npm publish [folder]",
                      description: "Publishes a package to the npm registry",
                      example: "npm publish",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="yarn" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Box className="h-5 w-5 text-primary" />
                  Yarn Commands
                </CardTitle>
                <CardDescription>Fast, reliable, and secure dependency management for JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "yarn init",
                      syntax: "yarn init [--yes|-y]",
                      description: "Creates a package.json file in the current directory",
                      example: "yarn init -y",
                    },
                    {
                      command: "yarn add",
                      syntax: "yarn add [package] [--dev|-D]",
                      description: "Installs a package and any packages it depends on",
                      example: "yarn add react",
                    },
                    {
                      command: "yarn remove",
                      syntax: "yarn remove [package]",
                      description: "Removes a package from the current package and its dependencies",
                      example: "yarn remove lodash",
                    },
                    {
                      command: "yarn upgrade",
                      syntax: "yarn upgrade [package]",
                      description: "Upgrades packages to their latest version based on the specified range",
                      example: "yarn upgrade",
                    },
                    {
                      command: "yarn list",
                      syntax: "yarn list [--depth=n]",
                      description: "Lists installed packages",
                      example: "yarn list --depth=0",
                    },
                    {
                      command: "yarn run",
                      syntax: "yarn run [script]",
                      description: "Runs a script defined in package.json",
                      example: "yarn run build",
                    },
                    {
                      command: "yarn audit",
                      syntax: "yarn audit",
                      description: "Checks for known security issues with the installed packages",
                      example: "yarn audit",
                    },
                    {
                      command: "yarn publish",
                      syntax: "yarn publish [folder]",
                      description: "Publishes a package to the npm registry",
                      example: "yarn publish",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pnpm" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  pnpm Commands
                </CardTitle>
                <CardDescription>Fast, disk space efficient package manager for JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "pnpm init",
                      syntax: "pnpm init",
                      description: "Creates a package.json file in the current directory",
                      example: "pnpm init",
                    },
                    {
                      command: "pnpm add",
                      syntax: "pnpm add [package] [--save-dev|-D]",
                      description: "Installs a package and any packages it depends on",
                      example: "pnpm add express",
                    },
                    {
                      command: "pnpm remove",
                      syntax: "pnpm remove [package]",
                      description: "Removes a package from the current package and its dependencies",
                      example: "pnpm remove lodash",
                    },
                    {
                      command: "pnpm update",
                      syntax: "pnpm update [package]",
                      description: "Updates packages to their latest version based on the specified range",
                      example: "pnpm update",
                    },
                    {
                      command: "pnpm list",
                      syntax: "pnpm list [--depth=n]",
                      description: "Lists installed packages",
                      example: "pnpm list --depth=0",
                    },
                    {
                      command: "pnpm run",
                      syntax: "pnpm run [script]",
                      description: "Runs a script defined in package.json",
                      example: "pnpm run build",
                    },
                    {
                      command: "pnpm audit",
                      syntax: "pnpm audit",
                      description: "Checks for known security issues with the installed packages",
                      example: "pnpm audit",
                    },
                    {
                      command: "pnpm publish",
                      syntax: "pnpm publish [folder]",
                      description: "Publishes a package to the npm registry",
                      example: "pnpm publish",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chocolatey" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Archive className="h-5 w-5 text-primary" />
                  Chocolatey Commands
                </CardTitle>
                <CardDescription>Package manager for Windows software installation and management</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "choco install",
                      syntax: "choco install [package] [options]",
                      description: "Installs a package or a list of packages",
                      example: "choco install nodejs -y",
                    },
                    {
                      command: "choco uninstall",
                      syntax: "choco uninstall [package] [options]",
                      description: "Uninstalls a package or a list of packages",
                      example: "choco uninstall git -y",
                    },
                    {
                      command: "choco upgrade",
                      syntax: "choco upgrade [package] [options]",
                      description: "Upgrades a package or a list of packages",
                      example: "choco upgrade all -y",
                    },
                    {
                      command: "choco list",
                      syntax: "choco list [options]",
                      description: "Lists packages installed locally or available from a source",
                      example: "choco list --local-only",
                    },
                    {
                      command: "choco search",
                      syntax: "choco search [term] [options]",
                      description: "Searches for packages available from a source",
                      example: "choco search vscode",
                    },
                    {
                      command: "choco info",
                      syntax: "choco info [package] [options]",
                      description: "Retrieves package information",
                      example: "choco info git",
                    },
                    {
                      command: "choco outdated",
                      syntax: "choco outdated [options]",
                      description: "Shows a list of outdated packages",
                      example: "choco outdated",
                    },
                    {
                      command: "choco pin",
                      syntax: "choco pin [command] [package] [options]",
                      description: "Pins a package to suppress upgrades",
                      example: "choco pin add nodejs",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="winget" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  WinGet Commands
                </CardTitle>
                <CardDescription>Windows Package Manager for software installation and management</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "winget install",
                      syntax: "winget install [package]",
                      description: "Installs the specified application",
                      example: "winget install Microsoft.VisualStudioCode",
                    },
                    {
                      command: "winget uninstall",
                      syntax: "winget uninstall [package]",
                      description: "Uninstalls the specified application",
                      example: "winget uninstall Microsoft.VisualStudioCode",
                    },
                    {
                      command: "winget upgrade",
                      syntax: "winget upgrade [package]",
                      description: "Upgrades the specified application or all applications",
                      example: "winget upgrade --all",
                    },
                    {
                      command: "winget list",
                      syntax: "winget list [options]",
                      description: "Displays a list of installed applications",
                      example: "winget list",
                    },
                    {
                      command: "winget search",
                      syntax: "winget search [query]",
                      description: "Searches for applications",
                      example: "winget search terminal",
                    },
                    {
                      command: "winget show",
                      syntax: "winget show [package]",
                      description: "Shows information about an application",
                      example: "winget show Microsoft.PowerShell",
                    },
                    {
                      command: "winget source",
                      syntax: "winget source [command]",
                      description: "Manages package sources",
                      example: "winget source list",
                    },
                    {
                      command: "winget export",
                      syntax: "winget export [file]",
                      description: "Exports a list of installed applications",
                      example: "winget export installed-apps.json",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">Related Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tools/npm-check" className="text-blue-600 hover:underline">
                    npm-check - Check for outdated, incorrect, and unused dependencies
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tools/verdaccio" className="text-blue-600 hover:underline">
                    Verdaccio - A lightweight private npm proxy registry
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tools/scoop" className="text-blue-600 hover:underline">
                    Scoop - A command-line installer for Windows
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tools/nvm" className="text-blue-600 hover:underline">
                    NVM - Node Version Manager
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">Package Management Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/npm-basics" className="text-blue-600 hover:underline">
                    npm Basics for Beginners
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/yarn-vs-npm" className="text-blue-600 hover:underline">
                    Yarn vs npm: Which One to Choose?
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/chocolatey-guide" className="text-blue-600 hover:underline">
                    Chocolatey: Windows Software Management
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/package-json-explained" className="text-blue-600 hover:underline">
                    package.json Explained
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
