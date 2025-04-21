import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, FileText } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function FileOperationsPage() {
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
              <FileText className="h-8 w-8 text-primary" />
              File Operations
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Commands for managing files and directories across different CLI environments
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href="/search?category=file-operations">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search File Commands
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>PowerShell File Operations</CardTitle>
            <CardDescription>File and directory management commands in PowerShell</CardDescription>
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
                  command: "Get-Content",
                  syntax: "Get-Content [path] [-TotalCount n]",
                  description: "Gets the content of the item at the specified location",
                  example: "Get-Content log.txt -TotalCount 10",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Command Prompt File Operations</CardTitle>
            <CardDescription>File and directory management commands in CMD</CardDescription>
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
                  command: "copy",
                  syntax: "copy [source] [destination]",
                  description: "Copies one or more files to another location",
                  example: "copy file.txt D:\\backup\\",
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
                  command: "type",
                  syntax: "type [file]",
                  description: "Displays the contents of a text file",
                  example: "type readme.txt",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Git Bash File Operations</CardTitle>
            <CardDescription>File and directory management commands in Git Bash</CardDescription>
          </CardHeader>
          <CardContent>
            <CommandTable
              commands={[
                {
                  command: "mkdir",
                  syntax: "mkdir [options] [directory]",
                  description: "Create a new directory",
                  example: "mkdir -p projects/new-project",
                },
                {
                  command: "cp",
                  syntax: "cp [options] [source] [destination]",
                  description: "Copy files and directories",
                  example: "cp -r source_dir destination_dir",
                },
                {
                  command: "mv",
                  syntax: "mv [options] [source] [destination]",
                  description: "Move or rename files and directories",
                  example: "mv old_name.txt new_name.txt",
                },
                {
                  command: "rm",
                  syntax: "rm [options] [file]",
                  description: "Remove files or directories",
                  example: "rm -rf old-directory",
                },
                {
                  command: "cat",
                  syntax: "cat [options] [file]",
                  description: "Concatenate and display file content",
                  example: "cat file.txt",
                },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
