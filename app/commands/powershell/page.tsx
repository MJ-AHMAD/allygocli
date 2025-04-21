import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Command, ArrowLeft, Search, BookOpen } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function PowerShellCommandsPage() {
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
              <Command className="h-8 w-8 text-primary" />
              PowerShell Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for PowerShell commands and cmdlets
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-lg p-6 my-6 border border-blue-100 dark:border-blue-900 w-full">
          <h2 className="text-2xl font-bold mb-3">পাওয়ারশেল পরিচিতি</h2>
          <p className="text-muted-foreground mb-4">
            পাওয়ারশেল হল মাইক্রোসফ্টের একটি শক্তিশালী কমান্ড-লাইন শেল এবং স্ক্রিপ্টিং ভাষা, যা উইন্ডোজ অপারেটিং সিস্টেমের জন্য বিশেষভাবে
            ডিজাইন করা হয়েছে। এটি সিস্টেম অ্যাডমিনিস্ট্রেটর এবং পাওয়ার ইউজারদের জন্য সিস্টেম ম্যানেজমেন্ট এবং অটোমেশনের জন্য অত্যন্ত
            উপযোগী। পাওয়ারশেল ব্যবহার করে আপনি সহজেই ফাইল ম্যানেজমেন্ট, নেটওয়ার্ক কনফিগারেশন, সিস্টেম মনিটরিং এবং আরও অনেক কিছু করতে
            পারেন।
          </p>
          <Link href="/learn/powershell">
            <Button variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              পাওয়ারশেল সম্পর্কে বিস্তারিত জানুন
            </Button>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <Link href="/search?env=powershell">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search PowerShell Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="files">Files & Folders</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Basic PowerShell Commands</CardTitle>
                <CardDescription>Essential commands for navigating and working with PowerShell</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "Get-Help",
                      syntax: "Get-Help [cmdlet] [-Full]",
                      description: "Displays help information about PowerShell commands",
                      example: "Get-Help Get-Process -Full",
                    },
                    {
                      command: "Get-Command",
                      syntax: "Get-Command [-Name pattern]",
                      description: "Lists all available commands in the current session",
                      example: "Get-Command -Name *process*",
                    },
                    {
                      command: "Get-Location (pwd)",
                      syntax: "Get-Location",
                      description: "Shows the current directory path",
                      example: "Get-Location",
                    },
                    {
                      command: "Set-Location (cd)",
                      syntax: "Set-Location [path]",
                      description: "Changes the current directory to the specified location",
                      example: "Set-Location C:\\Users",
                    },
                    {
                      command: "Clear-Host (cls)",
                      syntax: "Clear-Host",
                      description: "Clears the display in the host program",
                      example: "Clear-Host",
                    },
                    {
                      command: "Get-ChildItem (ls, dir)",
                      syntax: "Get-ChildItem [path] [-Recurse]",
                      description: "Lists items in the specified location",
                      example: "Get-ChildItem -Path C:\\Windows -Recurse",
                    },
                    {
                      command: "Write-Output (echo)",
                      syntax: "Write-Output [object]",
                      description: "Sends objects to the next command in the pipeline",
                      example: 'Write-Output "Hello, World!"',
                    },
                    {
                      command: "Get-Content (cat)",
                      syntax: "Get-Content [path]",
                      description: "Gets the content of the item at the specified location",
                      example: "Get-Content C:\\logs\\system.log",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="files" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>File and Folder Operations</CardTitle>
                <CardDescription>Commands for managing files and directories in PowerShell</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "New-Item",
                      syntax: "New-Item -Path [path] -ItemType [type]",
                      description: "Creates a new item (file, directory, etc.)",
                      example: "New-Item -Path C:\\temp\\test.txt -ItemType File",
                    },
                    {
                      command: "Copy-Item",
                      syntax: "Copy-Item [source] [destination]",
                      description: "Copies an item from one location to another",
                      example: "Copy-Item C:\\source\\file.txt C:\\destination\\",
                    },
                    {
                      command: "Move-Item",
                      syntax: "Move-Item [source] [destination]",
                      description: "Moves an item from one location to another",
                      example: "Move-Item C:\\temp\\file.txt C:\\archive\\",
                    },
                    {
                      command: "Remove-Item",
                      syntax: "Remove-Item [path] [-Recurse]",
                      description: "Deletes the specified items",
                      example: "Remove-Item C:\\temp\\logs -Recurse",
                    },
                    {
                      command: "Rename-Item",
                      syntax: "Rename-Item [path] [newname]",
                      description: "Renames an item at the specified location",
                      example: "Rename-Item C:\\temp\\old.txt new.txt",
                    },
                    {
                      command: "Test-Path",
                      syntax: "Test-Path [path]",
                      description: "Returns true if the path exists, false otherwise",
                      example: "Test-Path C:\\Windows\\System32",
                    },
                    {
                      command: "Get-Content",
                      syntax: "Get-Content [path] [-TotalCount n]",
                      description: "Gets the content of the item at the specified location",
                      example: "Get-Content log.txt -TotalCount 10",
                    },
                    {
                      command: "Set-Content",
                      syntax: "Set-Content [path] [value]",
                      description: "Writes or replaces content in the specified item",
                      example: 'Set-Content file.txt "New content"',
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>System Management</CardTitle>
                <CardDescription>Commands for managing system processes and services</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "Get-Process",
                      syntax: "Get-Process [name]",
                      description: "Gets the processes running on the local computer",
                      example: "Get-Process chrome",
                    },
                    {
                      command: "Stop-Process",
                      syntax: "Stop-Process -Name [name] -Force",
                      description: "Stops one or more running processes",
                      example: "Stop-Process -Name notepad -Force",
                    },
                    {
                      command: "Get-Service",
                      syntax: "Get-Service [name]",
                      description: "Gets the services on the computer",
                      example: "Get-Service spooler",
                    },
                    {
                      command: "Start-Service",
                      syntax: "Start-Service [name]",
                      description: "Starts one or more stopped services",
                      example: "Start-Service wuauserv",
                    },
                    {
                      command: "Stop-Service",
                      syntax: "Stop-Service [name]",
                      description: "Stops one or more running services",
                      example: "Stop-Service spooler",
                    },
                    {
                      command: "Restart-Service",
                      syntax: "Restart-Service [name]",
                      description: "Stops and then starts one or more services",
                      example: "Restart-Service spooler",
                    },
                    {
                      command: "Get-EventLog",
                      syntax: "Get-EventLog [logname] -Newest [n]",
                      description: "Gets the events in an event log",
                      example: "Get-EventLog System -Newest 10",
                    },
                    {
                      command: "Restart-Computer",
                      syntax: "Restart-Computer [-Force]",
                      description: "Restarts the operating system on local and remote computers",
                      example: "Restart-Computer -Force",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Network Commands</CardTitle>
                <CardDescription>Commands for network diagnostics and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "Test-Connection",
                      syntax: "Test-Connection [destination]",
                      description: "Sends ICMP echo request packets (pings) to one or more computers",
                      example: "Test-Connection google.com",
                    },
                    {
                      command: "Get-NetIPAddress",
                      syntax: "Get-NetIPAddress",
                      description: "Gets IP address configuration",
                      example: "Get-NetIPAddress | Where-Object AddressFamily -eq IPv4",
                    },
                    {
                      command: "Get-NetAdapter",
                      syntax: "Get-NetAdapter",
                      description: "Gets the basic network adapter properties",
                      example: "Get-NetAdapter | Where-Object Status -eq 'Up'",
                    },
                    {
                      command: "Invoke-WebRequest",
                      syntax: "Invoke-WebRequest [uri]",
                      description: "Gets content from a web page on the Internet",
                      example: "Invoke-WebRequest -Uri https://example.com",
                    },
                    {
                      command: "Resolve-DnsName",
                      syntax: "Resolve-DnsName [name]",
                      description: "Performs a DNS name query resolution",
                      example: "Resolve-DnsName google.com",
                    },
                    {
                      command: "Get-NetTCPConnection",
                      syntax: "Get-NetTCPConnection",
                      description: "Gets TCP connections",
                      example: "Get-NetTCPConnection -State Established",
                    },
                    {
                      command: "New-NetFirewallRule",
                      syntax:
                        "New-NetFirewallRule -Name [name] -DisplayName [displayname] -Direction [direction] -Action [action]",
                      description: "Creates a new inbound or outbound firewall rule",
                      example:
                        'New-NetFirewallRule -Name "Allow Port 80" -DisplayName "Allow Port 80" -Protocol TCP -LocalPort 80 -Action Allow -Direction Inbound',
                    },
                    {
                      command: "Get-NetFirewallRule",
                      syntax: "Get-NetFirewallRule",
                      description: "Retrieves firewall rules from the target computer",
                      example: "Get-NetFirewallRule | Where-Object Enabled -eq 'True'",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Advanced PowerShell Features</CardTitle>
                <CardDescription>Advanced commands and scripting techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "ForEach-Object",
                      syntax: "ForEach-Object { [script block] }",
                      description: "Performs an operation on each item in a collection of input objects",
                      example: "Get-Process | ForEach-Object { $_.Name }",
                    },
                    {
                      command: "Where-Object",
                      syntax: "Where-Object { [script block] }",
                      description: "Selects objects from a collection based on their property values",
                      example: "Get-Service | Where-Object { $_.Status -eq 'Running' }",
                    },
                    {
                      command: "Select-Object",
                      syntax: "Select-Object [property]",
                      description: "Selects specified properties of objects",
                      example: "Get-Process | Select-Object Name, CPU, WorkingSet",
                    },
                    {
                      command: "Sort-Object",
                      syntax: "Sort-Object [property]",
                      description: "Sorts objects by property values",
                      example: "Get-Process | Sort-Object -Property CPU -Descending",
                    },
                    {
                      command: "Measure-Object",
                      syntax: "Measure-Object [property]",
                      description: "Calculates the numeric properties of objects",
                      example: "Get-Process | Measure-Object -Property WorkingSet -Sum",
                    },
                    {
                      command: "Export-Csv",
                      syntax: "Export-Csv [path]",
                      description:
                        "Converts objects into a series of comma-separated value strings and saves them to a CSV file",
                      example: "Get-Process | Export-Csv -Path processes.csv",
                    },
                    {
                      command: "ConvertTo-Json",
                      syntax: "ConvertTo-Json",
                      description: "Converts an object to a JSON-formatted string",
                      example: "Get-Process | Select-Object Name, CPU | ConvertTo-Json",
                    },
                    {
                      command: "Invoke-Command",
                      syntax: "Invoke-Command -ComputerName [computer] -ScriptBlock { [script] }",
                      description: "Runs commands on local and remote computers",
                      example: "Invoke-Command -ComputerName Server01 -ScriptBlock { Get-Process }",
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
