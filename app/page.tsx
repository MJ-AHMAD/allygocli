import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, Command, GitBranch, Server, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Complete CLI Reference Guide
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive command-line reference for PowerShell, Command Prompt, Git Bash, Node.js and more.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/commands">
                  <Button>Browse Commands</Button>
                </Link>
                <Link href="/search">
                  <Button variant="outline">Search</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <Card className="border-2 border-primary/10 shadow-lg w-full mx-auto">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl md:text-3xl text-center">AllyGo CLI</CardTitle>
                <CardDescription className="text-center text-base">
                  A comprehensive CLI reference project that serves as a complete guide to various command-line
                  interfaces
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                  This web application provides detailed documentation for commands across different CLI environments:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <span className="text-primary">1.</span> Multi-Environment Support:
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 w-full">
                      <li className="flex items-center gap-2 p-2 rounded-md bg-muted">
                        <Command className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>PowerShell</span>
                      </li>
                      <li className="flex items-center gap-2 p-2 rounded-md bg-muted">
                        <Terminal className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Command Prompt (CMD)</span>
                      </li>
                      <li className="flex items-center gap-2 p-2 rounded-md bg-muted">
                        <GitBranch className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Git Bash</span>
                      </li>
                      <li className="flex items-center gap-2 p-2 rounded-md bg-muted">
                        <Server className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Node.js (npm, yarn, npx)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <span className="text-primary">2.</span> Organized Command Structure:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Commands are categorized by both environment and function</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Each command includes syntax, description, and practical examples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Copy functionality for easy use</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <span className="text-primary">3.</span> Search Functionality:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Search across all environments or filter by specific CLI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Find commands by name or description</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <span className="text-primary">4.</span> Detailed Documentation:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Basic and advanced commands for each environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Practical examples showing real-world usage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Syntax highlighting for better readability</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <span className="text-primary">5.</span> Responsive Design:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Works well on both desktop and mobile devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Clean, intuitive interface for easy navigation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-xl font-bold">How to Use:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Browse commands by environment (PowerShell, CMD, Git Bash, Node.js)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Browse commands by category (File Operations, Network, System, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Use the search function to find specific commands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>View detailed syntax and examples for each command</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Copy commands directly to your clipboard</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground pt-4 border-t">
                  This project serves as a valuable reference for developers, system administrators, and anyone who
                  works with command-line interfaces regularly. It provides a centralized location for finding and
                  learning CLI commands across multiple environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-[900px]">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
                <p className="text-muted-foreground md:text-xl">
                  Everything you need to master command-line interfaces
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive Command Library</h3>
                  <p className="text-muted-foreground">
                    Access a vast collection of commands for various CLI environments with detailed explanations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Practical Examples</h3>
                  <p className="text-muted-foreground">
                    Learn through real-world examples showing how to use each command effectively.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Command Comparison</h3>
                  <p className="text-muted-foreground">
                    Compare equivalent commands across different CLI environments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Categorized Organization</h3>
                  <p className="text-muted-foreground">
                    Find commands easily with our intuitive categorization system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              <span className="font-semibold">AllyGo_CLI</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 AllyGo. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
