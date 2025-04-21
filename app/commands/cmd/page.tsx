import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, ArrowLeft, Search } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function CmdCommandsPage() {
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
              <Terminal className="h-8 w-8 text-primary" />
              Command Prompt Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for Windows Command Prompt (CMD)
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href="/search?env=cmd">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search CMD Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="files">Files & Folders</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="batch">Batch Scripts</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic CMD Commands</CardTitle>
                <CardDescription>Essential commands for navigating and working with Command Prompt</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "help",
                      syntax: "help [command]",
                      description: "Provides help information for Windows commands",
                      example: "help dir",
                    },
                    {
                      command: "cd",
                      syntax: "cd [path]",
                      description: "Displays the name of or changes the current directory",
                      example: "cd C:\\Users",
                    },
                    {
                      command: "dir",
                      syntax: "dir [path] [options]",
                      description: "Displays a list of files and subdirectories in a directory",
                      example: "dir /a /s",
                    },
                    {
                      command: "cls",
                      syntax: "cls",
                      description: "Clears the screen",
                      example: "cls",
                    },
                    {
                      command: "echo",
                      syntax: "echo [message]",
                      description: "Displays messages or turns command echoing on or off",
                      example: "echo Hello World",
                    },
                    {
                      command: "exit",
                      syntax: "exit",
                      description: "Exits the CMD.EXE program (command interpreter)",
                      example: "exit",
                    },
                    {
                      command: "type",
                      syntax: "type [file]",
                      description: "Displays the contents of a text file",
                      example: "type readme.txt",
                    },
                    {
                      command: "date",
                      syntax: "date [/t]",
                      description: "Displays or sets the date",
                      example: "date /t",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="files" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>File and Folder Operations</CardTitle>
                <CardDescription>Commands for managing files and directories in Command Prompt</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "mkdir (md)",
                      syntax: "mkdir [directory]",
                      description: "Creates a directory",
                      example: "mkdir new_folder",
                    },
                    {
                      command: "rmdir (rd)",
                      syntax: "rmdir [directory] [/s] [/q]",
                      description: "Removes a directory (/s removes all subdirectories and files)",
                      example: "rmdir /s /q old_folder",
                    },
                    {
                      command: "copy",
                      syntax: "copy [source] [destination]",
                      description: "Copies one or more files to another location",
                      example: "copy file.txt D:\\backup\\",
                    },
                    {
                      command: "xcopy",
                      syntax: "xcopy [source] [destination] [options]",
                      description: "Copies files and directory trees",
                      example: "xcopy C:\\source D:\\destination /e /i /h",
                    },
                    {
                      command: "move",
                      syntax: "move [source] [destination]",
                      description: "Moves files and renames files and directories",
                      example: "move file.txt D:\\archive\\",
                    },
                    {
                      command: "del (erase)",
                      syntax: "del [file] [options]",
                      description: "Deletes one or more files",
                      example: "del /f /q temp.txt",
                    },
                    {
                      command: "ren (rename)",
                      syntax: "ren [oldname] [newname]",
                      description: "Renames a file or files",
                      example: "ren old.txt new.txt",
                    },
                    {
                      command: "attrib",
                      syntax: "attrib [+r|-r] [+a|-a] [+s|-s] [+h|-h] [file]",
                      description: "Displays or changes file attributes",
                      example: "attrib +r important.txt",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>System Commands</CardTitle>
                <CardDescription>Commands for system management and information</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "tasklist",
                      syntax: "tasklist [options]",
                      description: "Displays a list of applications and services running",
                      example: 'tasklist /fi "STATUS eq running"',
                    },
                    {
                      command: "taskkill",
                      syntax: "taskkill /pid [processid] /f",
                      description: "Terminates tasks by process ID (PID) or image name",
                      example: "taskkill /pid 1234 /f",
                    },
                    {
                      command: "sc",
                      syntax: "sc [command] [service_name]",
                      description: "Displays or configures services (background processes)",
                      example: "sc query spooler",
                    },
                    {
                      command: "systeminfo",
                      syntax: "systeminfo",
                      description: "Displays detailed configuration information about a computer",
                      example: "systeminfo",
                    },
                    {
                      command: "sfc",
                      syntax: "sfc /scannow",
                      description: "Scans the integrity of all protected system files",
                      example: "sfc /scannow",
                    },
                    {
                      command: "chkdsk",
                      syntax: "chkdsk [volume] [/f] [/r]",
                      description: "Checks a disk and displays a status report",
                      example: "chkdsk C: /f",
                    },
                    {
                      command: "shutdown",
                      syntax: "shutdown /s /t [seconds]",
                      description: "Shuts down or restarts the computer",
                      example: "shutdown /r /t 60",
                    },
                    {
                      command: "gpupdate",
                      syntax: "gpupdate /force",
                      description: "Updates Group Policy settings",
                      example: "gpupdate /force",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Network Commands</CardTitle>
                <CardDescription>Commands for network diagnostics and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "ping",
                      syntax: "ping [host]",
                      description: "Tests a network connection",
                      example: "ping google.com",
                    },
                    {
                      command: "ipconfig",
                      syntax: "ipconfig [/all]",
                      description: "Displays all current TCP/IP network configuration values",
                      example: "ipconfig /all",
                    },
                    {
                      command: "netstat",
                      syntax: "netstat [options]",
                      description: "Displays active TCP connections, ports, and more",
                      example: "netstat -ano",
                    },
                    {
                      command: "tracert",
                      syntax: "tracert [host]",
                      description: "Traces the route taken by packets to a destination",
                      example: "tracert google.com",
                    },
                    {
                      command: "nslookup",
                      syntax: "nslookup [host]",
                      description: "Displays information about DNS records",
                      example: "nslookup google.com",
                    },
                    {
                      command: "netsh",
                      syntax: "netsh [context] [command]",
                      description: "Configures network settings",
                      example: "netsh interface show interface",
                    },
                    {
                      command: "route",
                      syntax: "route [command]",
                      description: "Displays or modifies the network routing tables",
                      example: "route print",
                    },
                    {
                      command: "arp",
                      syntax: "arp [options]",
                      description: "Displays and modifies the IP-to-Physical address translation tables",
                      example: "arp -a",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="batch" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Batch Script Commands</CardTitle>
                <CardDescription>Commands and syntax for batch file scripting</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "if",
                      syntax: "if [condition] (command) else (command)",
                      description: "Performs conditional processing in batch programs",
                      example: "if exist file.txt (echo File exists) else (echo File not found)",
                    },
                    {
                      command: "for",
                      syntax: "for %variable in (set) do command",
                      description: "Runs a specified command for each file in a set of files",
                      example: "for %i in (*.txt) do echo %i",
                    },
                    {
                      command: "set",
                      syntax: "set [variable=[string]]",
                      description: "Displays, sets, or removes environment variables",
                      example: "set PATH=C:\\bin;%PATH%",
                    },
                    {
                      command: "call",
                      syntax: "call [batch_file]",
                      description: "Calls one batch program from another",
                      example: "call subroutine.bat",
                    },
                    {
                      command: "goto",
                      syntax: "goto label",
                      description: "Directs batch processing to a labeled line",
                      example: "goto end",
                    },
                    {
                      command: "rem",
                      syntax: "rem [comment]",
                      description: "Records comments in a batch file",
                      example: "rem This is a comment",
                    },
                    {
                      command: "pause",
                      syntax: "pause",
                      description: "Suspends processing of a batch file and displays a message",
                      example: "pause",
                    },
                    {
                      command: "start",
                      syntax: "start [title] [/d path] [options] [command]",
                      description: "Starts a separate window to run a specified program or command",
                      example: "start notepad file.txt",
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
