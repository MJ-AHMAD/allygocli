import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Terminal, GitBranch, Code, BookOpen, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn File Operations - AllyGo CLI",
  description: "Learn about file operations commands and techniques across different command-line interfaces",
}

export default function LearnFileOperationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Link href="/commands/file-operations">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              Learn File Operations
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Master file operations across different command-line interfaces
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                Understanding File Systems
              </CardTitle>
              <CardDescription>Learn the basics of file systems and paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  File systems organize how data is stored and retrieved. Understanding file paths is essential for
                  working with files in any command-line interface.
                </p>
                <h3 className="text-lg font-semibold">Absolute vs. Relative Paths</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Absolute paths</strong> start from the root directory (e.g., <code>C:\Users\name</code> in
                    Windows or <code>/home/user</code> in Linux)
                  </li>
                  <li>
                    <strong>Relative paths</strong> are relative to the current working directory (e.g.,{" "}
                    <code>./documents</code> or <code>../downloads</code>)
                  </li>
                </ul>
                <h3 className="text-lg font-semibold">Path Separators</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Windows uses backslash (<code>\</code>) as the path separator
                  </li>
                  <li>
                    Unix-like systems (Linux, macOS) use forward slash (<code>/</code>)
                  </li>
                  <li>Git Bash on Windows accepts both, but forward slash is preferred</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Common File Operations
              </CardTitle>
              <CardDescription>Essential file operations across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Despite differences in syntax, all command-line interfaces provide similar core functionality for
                  working with files.
                </p>
                <h3 className="text-lg font-semibold">Basic Operations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Creating files and directories</strong> - making new files or folders
                  </li>
                  <li>
                    <strong>Reading files</strong> - viewing the contents of files
                  </li>
                  <li>
                    <strong>Writing/appending to files</strong> - adding or changing file content
                  </li>
                  <li>
                    <strong>Copying files</strong> - duplicating files or directories
                  </li>
                  <li>
                    <strong>Moving/renaming files</strong> - changing file location or name
                  </li>
                  <li>
                    <strong>Deleting files</strong> - removing files or directories
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                PowerShell File Handling
              </CardTitle>
              <CardDescription>Advanced file operations in PowerShell</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  PowerShell provides powerful object-oriented approaches to file operations, treating files as objects
                  with properties and methods.
                </p>
                <h3 className="text-lg font-semibold">PowerShell Advantages</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Pipeline support</strong> - chain commands together for complex operations
                  </li>
                  <li>
                    <strong>Object-based</strong> - work with file objects rather than text output
                  </li>
                  <li>
                    <strong>Rich filtering</strong> - use Where-Object and other cmdlets to filter files
                  </li>
                </ul>
                <h3 className="text-lg font-semibold">Example: Finding Large Files</h3>
                <pre className="bg-muted p-2 rounded-md overflow-x-auto text-sm">
                  <code>
                    Get-ChildItem -Path C:\Users -Recurse -File | Where-Object {"{$_.Length -gt 100MB}"} | Sort-Object
                    Length -Descending | Select-Object Name, Length
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Unix-Style File Operations
              </CardTitle>
              <CardDescription>File handling in Git Bash and Unix-like environments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Git Bash and other Unix-like shells provide powerful text-based tools for file manipulation that can
                  be combined using pipes.
                </p>
                <h3 className="text-lg font-semibold">Unix File Operation Principles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Everything is a file</strong> - even directories and devices are treated as files
                  </li>
                  <li>
                    <strong>Small, specialized tools</strong> - each command does one thing well
                  </li>
                  <li>
                    <strong>Composability</strong> - combine commands with pipes (|) for complex operations
                  </li>
                </ul>
                <h3 className="text-lg font-semibold">Example: Finding Text in Files</h3>
                <pre className="bg-muted p-2 rounded-md overflow-x-auto text-sm">
                  <code>find . -name "*.js" -type f | xargs grep "function" | wc -l</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Node.js File System Module
              </CardTitle>
              <CardDescription>Working with files programmatically in Node.js</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Node.js provides the fs module for file system operations, with both synchronous and asynchronous
                  versions of most methods.
                </p>
                <h3 className="text-lg font-semibold">Asynchronous vs. Synchronous</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Asynchronous methods</strong> (e.g., fs.readFile) use callbacks or promises and don't block
                    execution
                  </li>
                  <li>
                    <strong>Synchronous methods</strong> (e.g., fs.readFileSync) block execution until completed
                  </li>
                </ul>
                <h3 className="text-lg font-semibold">Example: Reading a File</h3>
                <pre className="bg-muted p-2 rounded-md overflow-x-auto text-sm">
                  <code>
                    {`const fs = require('fs');\n\n// Asynchronous\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Synchronous\ntry {\n  const data = fs.readFileSync('file.txt', 'utf8');\n  console.log(data);\n} catch (err) {\n  console.error(err);\n}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Best Practices & Resources
              </CardTitle>
              <CardDescription>Tips and resources for mastering file operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Use relative paths</strong> when possible for more portable scripts
                  </li>
                  <li>
                    <strong>Be careful with recursive operations</strong> that can affect many files
                  </li>
                  <li>
                    <strong>Test file operations</strong> on a small subset before applying to many files
                  </li>
                  <li>
                    <strong>Use error handling</strong> to gracefully handle missing files or permissions issues
                  </li>
                </ul>
                <h3 className="text-lg font-semibold">Learning Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://learn.microsoft.com/en-us/powershell/scripting/samples/working-with-files-and-folders"
                      className="flex items-center gap-1 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      PowerShell File Operations Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.gnu.org/software/bash/manual/bash.html"
                      className="flex items-center gap-1 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Bash Reference Manual
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://nodejs.org/api/fs.html"
                      className="flex items-center gap-1 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Node.js File System Documentation
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/commands/file-operations">
            <Button className="gap-2">
              <FileText className="h-4 w-4" />
              View File Operations Commands
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
