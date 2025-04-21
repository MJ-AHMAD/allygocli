"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Terminal, Command, GitBranch, Server, SearchIcon, ArrowLeft } from "lucide-react"
import { CommandTable } from "@/components/command-table"

// Sample data for demonstration
const commandData = {
  powershell: [
    {
      command: "Get-Help",
      syntax: "Get-Help [cmdlet] [-Full]",
      description: "Displays help information about PowerShell commands",
      example: "Get-Help Get-Process -Full",
      category: "basics",
    },
    {
      command: "Get-Process",
      syntax: "Get-Process [name]",
      description: "Gets the processes running on the local computer",
      example: "Get-Process chrome",
      category: "system",
    },
    {
      command: "New-Item",
      syntax: "New-Item -Path [path] -ItemType [type]",
      description: "Creates a new item (file, directory, etc.)",
      example: "New-Item -Path C:\\temp\\test.txt -ItemType File",
      category: "files",
    },
    // More PowerShell commands...
  ],
  cmd: [
    {
      command: "dir",
      syntax: "dir [path] [options]",
      description: "Displays a list of files and subdirectories in a directory",
      example: "dir /a /s",
      category: "basics",
    },
    {
      command: "ipconfig",
      syntax: "ipconfig [/all]",
      description: "Displays all current TCP/IP network configuration values",
      example: "ipconfig /all",
      category: "network",
    },
    {
      command: "tasklist",
      syntax: "tasklist [options]",
      description: "Displays a list of applications and services running",
      example: 'tasklist /fi "STATUS eq running"',
      category: "system",
    },
    // More CMD commands...
  ],
  "git-bash": [
    {
      command: "git clone",
      syntax: "git clone [url]",
      description: "Clone a repository into a new directory",
      example: "git clone https://github.com/user/repo.git",
      category: "git-basics",
    },
    {
      command: "ls",
      syntax: "ls [options] [path]",
      description: "List directory contents",
      example: "ls -la",
      category: "bash",
    },
    {
      command: "grep",
      syntax: "grep [options] [pattern] [file]",
      description: "Search for patterns in files",
      example: 'grep -r "function" *.js',
      category: "unix",
    },
    // More Git Bash commands...
  ],
  node: [
    {
      command: "npm install",
      syntax: "npm install [package] [--save|--save-dev]",
      description: "Install a package and dependencies",
      example: "npm install express --save",
      category: "npm",
    },
    {
      command: "node",
      syntax: "node [options] [file]",
      description: "Run a JavaScript file with Node.js",
      example: "node app.js",
      category: "node",
    },
    {
      command: "npx create-react-app",
      syntax: "npx create-react-app [app-name]",
      description: "Create a new React application",
      example: "npx create-react-app my-app",
      category: "npx",
    },
    // More Node.js commands...
  ],
}

const environmentIcons = {
  powershell: <Command className="h-5 w-5" />,
  cmd: <Terminal className="h-5 w-5" />,
  "git-bash": <GitBranch className="h-5 w-5" />,
  node: <Server className="h-5 w-5" />,
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [environment, setEnvironment] = useState("all")

  // Filter commands based on search query and selected environment
  const filteredCommands = Object.entries(commandData)
    .filter(([env]) => environment === "all" || env === environment)
    .flatMap(([env, commands]) =>
      commands
        .filter(
          (cmd) =>
            cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cmd.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((cmd) => ({ ...cmd, environment: env })),
    )

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl flex items-center gap-2">
              <SearchIcon className="h-8 w-8 text-primary" />
              Command Search
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">Find commands across different CLI environments</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={environment} onValueChange={setEnvironment}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Environment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Environments</SelectItem>
              <SelectItem value="powershell">PowerShell</SelectItem>
              <SelectItem value="cmd">Command Prompt</SelectItem>
              <SelectItem value="git-bash">Git Bash</SelectItem>
              <SelectItem value="node">Node.js</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredCommands.length > 0 ? (
          <div className="space-y-6">
            {environment === "all" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(
                  filteredCommands.reduce((acc, cmd) => {
                    acc[cmd.environment] = (acc[cmd.environment] || 0) + 1
                    return acc
                  }, {}),
                ).map(([env, count]) => (
                  <div key={env} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-2">
                      {environmentIcons[env]}
                      <span className="font-medium capitalize">
                        {env === "git-bash"
                          ? "Git Bash"
                          : env === "cmd"
                            ? "Command Prompt"
                            : env === "node"
                              ? "Node.js"
                              : "PowerShell"}
                      </span>
                    </div>
                    <span className="text-muted-foreground">{count} results</span>
                  </div>
                ))}
              </div>
            )}

            <CommandTable
              commands={filteredCommands.map((cmd) => ({
                ...cmd,
                command: (
                  <div className="flex items-center gap-2">
                    {environment === "all" && environmentIcons[cmd.environment]}
                    <span>{cmd.command}</span>
                  </div>
                ),
              }))}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <SearchIcon className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium">No commands found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
