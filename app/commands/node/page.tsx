import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, ArrowLeft, Search } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function NodeCommandsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
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
              <Server className="h-8 w-8 text-primary" />
              Node.js Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for Node.js and npm commands
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href="/search?env=node">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search Node.js Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="node" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="node">Node.js</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="npx">npx</TabsTrigger>
          </TabsList>

          <TabsContent value="node" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Node.js Commands</CardTitle>
                <CardDescription>Commands for running and managing Node.js applications</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "node",
                      syntax: "node [options] [file]",
                      description: "Run a JavaScript file with Node.js",
                      example: "node app.js",
                    },
                    {
                      command: "node --version",
                      syntax: "node --version",
                      description: "Display Node.js version",
                      example: "node --version",
                    },
                    {
                      command: "node -e",
                      syntax: 'node -e "[code]"',
                      description: "Evaluate JavaScript code",
                      example: "node -e \"console.log('Hello, World!')\"",
                    },
                    {
                      command: "node --inspect",
                      syntax: "node --inspect [file]",
                      description: "Enable inspector for debugging",
                      example: "node --inspect app.js",
                    },
                    {
                      command: "node --trace-warnings",
                      syntax: "node --trace-warnings [file]",
                      description: "Show stack traces for warnings",
                      example: "node --trace-warnings app.js",
                    },
                    {
                      command: "node --max-old-space-size",
                      syntax: "node --max-old-space-size=[size] [file]",
                      description: "Set max memory size (in MB)",
                      example: "node --max-old-space-size=4096 app.js",
                    },
                    {
                      command: "node REPL",
                      syntax: "node",
                      description: "Start Node.js REPL (Read-Eval-Print Loop)",
                      example: "node",
                    },
                    {
                      command: "node --require",
                      syntax: "node --require [module] [file]",
                      description: "Preload a module before running script",
                      example: "node --require dotenv/config app.js",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="npm" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>npm Commands</CardTitle>
                <CardDescription>Node Package Manager commands for managing dependencies</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "npm init",
                      syntax: "npm init [--yes]",
                      description: "Create a new package.json file",
                      example: "npm init --yes",
                    },
                    {
                      command: "npm install",
                      syntax: "npm install [package] [--save|--save-dev]",
                      description: "Install a package and dependencies",
                      example: "npm install express --save",
                    },
                    {
                      command: "npm uninstall",
                      syntax: "npm uninstall [package]",
                      description: "Remove a package",
                      example: "npm uninstall lodash",
                    },
                    {
                      command: "npm update",
                      syntax: "npm update [package]",
                      description: "Update packages to latest version",
                      example: "npm update",
                    },
                    {
                      command: "npm run",
                      syntax: "npm run [script]",
                      description: "Run a script defined in package.json",
                      example: "npm run start",
                    },
                    {
                      command: "npm list",
                      syntax: "npm list [--depth=n]",
                      description: "List installed packages",
                      example: "npm list --depth=0",
                    },
                    {
                      command: "npm outdated",
                      syntax: "npm outdated",
                      description: "Check for outdated packages",
                      example: "npm outdated",
                    },
                    {
                      command: "npm audit",
                      syntax: "npm audit [fix]",
                      description: "Run a security audit on dependencies",
                      example: "npm audit fix",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="yarn" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Yarn Commands</CardTitle>
                <CardDescription>Alternative package manager for Node.js</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "yarn init",
                      syntax: "yarn init [-y]",
                      description: "Create a new package.json file",
                      example: "yarn init -y",
                    },
                    {
                      command: "yarn add",
                      syntax: "yarn add [package] [--dev]",
                      description: "Add a package to dependencies",
                      example: "yarn add react",
                    },
                    {
                      command: "yarn remove",
                      syntax: "yarn remove [package]",
                      description: "Remove a package",
                      example: "yarn remove lodash",
                    },
                    {
                      command: "yarn upgrade",
                      syntax: "yarn upgrade [package]",
                      description: "Upgrade packages to their latest version",
                      example: "yarn upgrade",
                    },
                    {
                      command: "yarn",
                      syntax: "yarn",
                      description: "Install all dependencies listed in package.json",
                      example: "yarn",
                    },
                    {
                      command: "yarn run",
                      syntax: "yarn run [script]",
                      description: "Run a script defined in package.json",
                      example: "yarn run build",
                    },
                    {
                      command: "yarn list",
                      syntax: "yarn list [--depth=n]",
                      description: "List installed packages",
                      example: "yarn list --depth=0",
                    },
                    {
                      command: "yarn info",
                      syntax: "yarn info [package]",
                      description: "Show information about a package",
                      example: "yarn info react",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="npx" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>npx Commands</CardTitle>
                <CardDescription>Execute Node.js packages without installation</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "npx",
                      syntax: "npx [command]",
                      description: "Execute a command from a local or remote npm package",
                      example: 'npx cowsay "Hello"',
                    },
                    {
                      command: "npx create-react-app",
                      syntax: "npx create-react-app [app-name]",
                      description: "Create a new React application",
                      example: "npx create-react-app my-app",
                    },
                    {
                      command: "npx --no-install",
                      syntax: "npx --no-install [command]",
                      description: "Execute only if the package is already installed",
                      example: "npx --no-install eslint .",
                    },
                    {
                      command: "npx --ignore-existing",
                      syntax: "npx --ignore-existing [command]",
                      description: "Ignore locally installed packages",
                      example: "npx --ignore-existing prettier --write .",
                    },
                    {
                      command: "npx -p",
                      syntax: "npx -p [package] [command]",
                      description: "Specify package to install before execution",
                      example: "npx -p typescript tsc --init",
                    },
                    {
                      command: "npx -c",
                      syntax: "npx -c '[command]'",
                      description: "Execute a command string in npm package execution environment",
                      example: "npx -c 'eslint . && prettier --write .'",
                    },
                    {
                      command: "npx --node-arg",
                      syntax: "npx --node-arg=[arg] [command]",
                      description: "Pass additional arguments to node when executing",
                      example: "npx --node-arg=--max-old-space-size=4096 next build",
                    },
                    {
                      command: "npx -q",
                      syntax: "npx -q [command]",
                      description: "Suppress output from npx itself (quiet mode)",
                      example: "npx -q jest",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
