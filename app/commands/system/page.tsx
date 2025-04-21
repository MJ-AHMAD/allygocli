import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, ArrowLeft, Search, HardDrive, Cpu, BarChart, Shield } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function SystemCommandsPage() {
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
              <Server className="h-8 w-8 text-primary" />
              System Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for system management and information commands
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/40 dark:to-teal-950/40 rounded-lg p-6 my-6 border border-green-100 dark:border-green-900 w-full">
          <h2 className="text-2xl font-bold mb-3">সিস্টেম কমান্ড পরিচিতি</h2>
          <p className="text-muted-foreground mb-4">
            সিস্টেম কমান্ডগুলি আপনাকে আপনার কম্পিউটার সিস্টেম পরিচালনা, মনিটরিং এবং ট্রাবলশুটিং করতে সাহায্য করে। এই কমান্ডগুলি ব্যবহার করে
            আপনি হার্ডওয়্যার তথ্য দেখতে, প্রসেস ম্যানেজ করতে, সার্ভিস নিয়ন্ত্রণ করতে এবং সিস্টেম পারফরম্যান্স অপ্টিমাইজ করতে পারবেন।
          </p>
          <Link href="/learn/system">
            <Button variant="outline" className="gap-2">
              <Server className="h-4 w-4" />
              সিস্টেম কমান্ড সম্পর্কে বিস্তারিত জানুন
            </Button>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <Link href="/search?category=system">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search System Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="info">System Info</TabsTrigger>
            <TabsTrigger value="process">Process Mgmt</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  System Information Commands
                </CardTitle>
                <CardDescription>Commands for viewing system hardware and software information</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "systeminfo",
                      syntax: "systeminfo",
                      description:
                        "Displays detailed configuration information about a computer and its operating system",
                      example: "systeminfo",
                    },
                    {
                      command: "Get-ComputerInfo",
                      syntax: "Get-ComputerInfo",
                      description:
                        "PowerShell cmdlet to get a consolidated object of system and operating system properties",
                      example: "Get-ComputerInfo | Select-Object WindowsProductName, OsHardwareAbstractionLayer",
                    },
                    {
                      command: "dxdiag",
                      syntax: "dxdiag",
                      description: "Displays DirectX diagnostic information including hardware details",
                      example: "dxdiag",
                    },
                    {
                      command: "msinfo32",
                      syntax: "msinfo32",
                      description: "Opens System Information tool with comprehensive system information",
                      example: "msinfo32",
                    },
                    {
                      command: "Get-WmiObject",
                      syntax: "Get-WmiObject [class]",
                      description:
                        "PowerShell cmdlet to get instances of WMI classes or information about available classes",
                      example: "Get-WmiObject Win32_Processor",
                    },
                    {
                      command: "wmic",
                      syntax: "wmic [alias] [where clause] [verb clause]",
                      description: "Windows Management Instrumentation Command-line utility",
                      example: "wmic cpu get name, numberofcores, maxclockspeed",
                    },
                    {
                      command: "ver",
                      syntax: "ver",
                      description: "Displays the Windows version",
                      example: "ver",
                    },
                    {
                      command: "winver",
                      syntax: "winver",
                      description: "Displays Windows version information in a dialog box",
                      example: "winver",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Process Management Commands
                </CardTitle>
                <CardDescription>Commands for managing system processes</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "tasklist",
                      syntax: "tasklist [options]",
                      description: "Displays a list of applications and services running on the computer",
                      example: 'tasklist /fi "STATUS eq running"',
                    },
                    {
                      command: "taskkill",
                      syntax: "taskkill [options]",
                      description: "Terminates tasks by process ID (PID) or image name",
                      example: "taskkill /im notepad.exe /f",
                    },
                    {
                      command: "Get-Process",
                      syntax: "Get-Process [name]",
                      description: "PowerShell cmdlet to get the processes running on the local computer",
                      example: "Get-Process chrome",
                    },
                    {
                      command: "Stop-Process",
                      syntax: "Stop-Process [options]",
                      description: "PowerShell cmdlet to stop one or more running processes",
                      example: "Stop-Process -Name notepad -Force",
                    },
                    {
                      command: "ps",
                      syntax: "ps [options]",
                      description: "Reports a snapshot of the current processes (Linux/Git Bash)",
                      example: "ps -ef",
                    },
                    {
                      command: "Start-Process",
                      syntax: "Start-Process [options]",
                      description: "PowerShell cmdlet to start one or more processes",
                      example: "Start-Process notepad",
                    },
                    {
                      command: "wmic process",
                      syntax: "wmic process [where clause] [verb clause]",
                      description: "Manages processes using WMI",
                      example: "wmic process where name='chrome.exe' get processid,commandline",
                    },
                    {
                      command: "Get-Process | Sort-Object",
                      syntax: "Get-Process | Sort-Object [property]",
                      description: "PowerShell cmdlet to sort processes by a property",
                      example: "Get-Process | Sort-Object -Property CPU -Descending",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Service Management Commands
                </CardTitle>
                <CardDescription>Commands for managing system services</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "sc",
                      syntax: "sc [command] [service_name]",
                      description: "Communicates with the Service Control Manager and services",
                      example: "sc query spooler",
                    },
                    {
                      command: "Get-Service",
                      syntax: "Get-Service [name]",
                      description: "PowerShell cmdlet to get the services on a local or remote computer",
                      example: "Get-Service -Name BITS",
                    },
                    {
                      command: "Start-Service",
                      syntax: "Start-Service [name]",
                      description: "PowerShell cmdlet to start one or more stopped services",
                      example: "Start-Service -Name BITS",
                    },
                    {
                      command: "Stop-Service",
                      syntax: "Stop-Service [name]",
                      description: "PowerShell cmdlet to stop one or more running services",
                      example: "Stop-Service -Name BITS",
                    },
                    {
                      command: "Restart-Service",
                      syntax: "Restart-Service [name]",
                      description: "PowerShell cmdlet to stop and then start one or more services",
                      example: "Restart-Service -Name BITS",
                    },
                    {
                      command: "net start",
                      syntax: "net start [service]",
                      description: "Starts a service",
                      example: "net start spooler",
                    },
                    {
                      command: "net stop",
                      syntax: "net stop [service]",
                      description: "Stops a service",
                      example: "net stop spooler",
                    },
                    {
                      command: "services.msc",
                      syntax: "services.msc",
                      description: "Opens the Services management console",
                      example: "services.msc",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  Performance Monitoring Commands
                </CardTitle>
                <CardDescription>Commands for monitoring system performance</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "perfmon",
                      syntax: "perfmon",
                      description: "Opens the Performance Monitor console",
                      example: "perfmon",
                    },
                    {
                      command: "typeperf",
                      syntax: "typeperf [counter]",
                      description: "Writes performance data to the command window or to a file",
                      example: 'typeperf "\\Processor(_Total)\\% Processor Time"',
                    },
                    {
                      command: "Get-Counter",
                      syntax: "Get-Counter [counter]",
                      description: "PowerShell cmdlet to get performance counter data",
                      example: 'Get-Counter -Counter "\\Processor(_Total)\\% Processor Time"',
                    },
                    {
                      command: "logman",
                      syntax: "logman [command]",
                      description: "Manages and schedules performance counter and event trace log collections",
                      example: "logman query",
                    },
                    {
                      command: "resmon",
                      syntax: "resmon",
                      description: "Opens the Resource Monitor console",
                      example: "resmon",
                    },
                    {
                      command: "top",
                      syntax: "top [options]",
                      description: "Displays processor activity in real-time (Linux/Git Bash)",
                      example: "top",
                    },
                    {
                      command: "Get-Process | Measure-Object",
                      syntax: "Get-Process | Measure-Object -Property [property] -Sum",
                      description: "PowerShell cmdlet to measure the property values of processes",
                      example: "Get-Process | Measure-Object -Property WorkingSet -Sum",
                    },
                    {
                      command: "wmic cpu get loadpercentage",
                      syntax: "wmic cpu get loadpercentage",
                      description: "Displays CPU load percentage using WMI",
                      example: "wmic cpu get loadpercentage",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  System Security Commands
                </CardTitle>
                <CardDescription>Commands for system security and maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "sfc",
                      syntax: "sfc /scannow",
                      description: "System File Checker scans the integrity of all protected system files",
                      example: "sfc /scannow",
                    },
                    {
                      command: "DISM",
                      syntax: "DISM [options]",
                      description: "Deployment Image Servicing and Management tool",
                      example: "DISM /Online /Cleanup-Image /RestoreHealth",
                    },
                    {
                      command: "chkdsk",
                      syntax: "chkdsk [drive:] [parameters]",
                      description: "Checks a disk and displays a status report",
                      example: "chkdsk C: /f",
                    },
                    {
                      command: "gpupdate",
                      syntax: "gpupdate [/force]",
                      description: "Updates Group Policy settings",
                      example: "gpupdate /force",
                    },
                    {
                      command: "Get-Acl",
                      syntax: "Get-Acl [path]",
                      description: "PowerShell cmdlet to get the security descriptor for a resource",
                      example: "Get-Acl C:\\Windows",
                    },
                    {
                      command: "Set-Acl",
                      syntax: "Set-Acl [path] [acl]",
                      description: "PowerShell cmdlet to set the security descriptor for a resource",
                      example: "Set-Acl -Path C:\\Data -AclObject $acl",
                    },
                    {
                      command: "icacls",
                      syntax: "icacls [path] [options]",
                      description: "Displays or modifies Access Control Lists (ACLs) for files and directories",
                      example: "icacls C:\\Data /grant Users:R",
                    },
                    {
                      command: "secpol.msc",
                      syntax: "secpol.msc",
                      description: "Opens the Local Security Policy console",
                      example: "secpol.msc",
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
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tools/process-explorer" className="text-blue-600 hover:underline">
                    Process Explorer - Advanced Task Manager
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tools/autoruns" className="text-blue-600 hover:underline">
                    Autoruns - Startup Program Manager
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tools/hwinfo" className="text-blue-600 hover:underline">
                    HWiNFO - Hardware Information Tool
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tools/ccleaner" className="text-blue-600 hover:underline">
                    CCleaner - System Cleaning Tool
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">System Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/system-optimization" className="text-blue-600 hover:underline">
                    System Optimization Guide
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/windows-troubleshooting" className="text-blue-600 hover:underline">
                    Windows Troubleshooting Basics
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/backup-restore" className="text-blue-600 hover:underline">
                    Backup and Restore Procedures
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/system-security" className="text-blue-600 hover:underline">
                    System Security Best Practices
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
