import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, FileText, Terminal, GitBranch, Code } from "lucide-react"
import { CommandTable } from "@/components/command-table"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "File Operations Commands - T-ALLY CLI",
  description: "Comprehensive list of file operations commands for PowerShell, Command Prompt, Git Bash, and Node.js",
}

export default function FileOperationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
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

        <div className="flex justify-between items-center">
          <Link href="/learn/file-operations">
            <Button variant="outline" className="gap-2">
              <Terminal className="h-4 w-4" />
              Learn File Operations
            </Button>
          </Link>
          <Link href="/search?category=file-operations">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search File Commands
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              PowerShell File Operations
            </CardTitle>
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
                {
                  command: "Set-Content",
                  syntax: "Set-Content [path] [value]",
                  description: "Sets the content of the specified item",
                  example: "Set-Content -Path file.txt -Value 'New content'",
                },
                {
                  command: "Add-Content",
                  syntax: "Add-Content [path] [value]",
                  description: "Adds content to the specified item",
                  example: "Add-Content -Path log.txt -Value 'Log entry'",
                },
                {
                  command: "Get-ChildItem",
                  syntax: "Get-ChildItem [path] [-Recurse]",
                  description: "Gets the items and child items in the specified location",
                  example: "Get-ChildItem -Path C:\\temp -Recurse",
                },
                {
                  command: "Test-Path",
                  syntax: "Test-Path [path]",
                  description: "Determines whether all elements of a path exist",
                  example: "Test-Path -Path C:\\temp\\file.txt",
                },
                {
                  command: "Rename-Item",
                  syntax: "Rename-Item [path] [newname]",
                  description: "Renames an item in a specified location",
                  example: "Rename-Item -Path file.txt -NewName archive.txt",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Command Prompt File Operations
            </CardTitle>
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
                {
                  command: "dir",
                  syntax: "dir [options] [drive:][path][filename]",
                  description: "Displays a list of files and subdirectories in a directory",
                  example: "dir /a /s C:\\temp",
                },
                {
                  command: "ren (rename)",
                  syntax: "ren [oldname] [newname]",
                  description: "Renames a file or files",
                  example: "ren old.txt new.txt",
                },
                {
                  command: "rmdir (rd)",
                  syntax: "rmdir [/s] [/q] [drive:]path",
                  description: "Removes a directory",
                  example: "rmdir /s /q old_folder",
                },
                {
                  command: "xcopy",
                  syntax: "xcopy [source] [destination] [options]",
                  description: "Copies files and directory trees",
                  example: "xcopy C:\\source D:\\dest /e /i /h",
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary" />
              Git Bash File Operations
            </CardTitle>
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
                {
                  command: "ls",
                  syntax: "ls [options] [file/directory]",
                  description: "List directory contents",
                  example: "ls -la",
                },
                {
                  command: "touch",
                  syntax: "touch [options] [file]",
                  description: "Create an empty file or update timestamp",
                  example: "touch newfile.txt",
                },
                {
                  command: "chmod",
                  syntax: "chmod [options] mode file",
                  description: "Change file permissions",
                  example: "chmod +x script.sh",
                },
                {
                  command: "find",
                  syntax: "find [path] [expression]",
                  description: "Search for files in a directory hierarchy",
                  example: "find . -name '*.txt'",
                },
                {
                  command: "grep",
                  syntax: "grep [options] pattern [file]",
                  description: "Search for patterns in files",
                  example: "grep 'error' log.txt",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Node.js File Operations
            </CardTitle>
            <CardDescription>File system operations in Node.js</CardDescription>
          </CardHeader>
          <CardContent>
            <CommandTable
              commands={[
                {
                  command: "fs.readFile()",
                  syntax: "fs.readFile(path, [options], callback)",
                  description: "Asynchronously reads the entire contents of a file",
                  example: "fs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); })",
                },
                {
                  command: "fs.writeFile()",
                  syntax: "fs.writeFile(file, data, [options], callback)",
                  description: "Asynchronously writes data to a file",
                  example: "fs.writeFile('file.txt', 'Hello World', (err) => { if (err) throw err; })",
                },
                {
                  command: "fs.appendFile()",
                  syntax: "fs.appendFile(path, data, [options], callback)",
                  description: "Asynchronously append data to a file",
                  example: "fs.appendFile('file.txt', 'New content', (err) => { if (err) throw err; })",
                },
                {
                  command: "fs.unlink()",
                  syntax: "fs.unlink(path, callback)",
                  description: "Asynchronously removes a file",
                  example: "fs.unlink('file.txt', (err) => { if (err) throw err; })",
                },
                {
                  command: "fs.mkdir()",
                  syntax: "fs.mkdir(path, [options], callback)",
                  description: "Asynchronously creates a directory",
                  example: "fs.mkdir('newdir', { recursive: true }, (err) => { if (err) throw err; })",
                },
                {
                  command: "fs.readdir()",
                  syntax: "fs.readdir(path, [options], callback)",
                  description: "Asynchronously reads the contents of a directory",
                  example: "fs.readdir('.', (err, files) => { console.log(files); })",
                },
                {
                  command: "fs.stat()",
                  syntax: "fs.stat(path, callback)",
                  description: "Asynchronously retrieves file information",
                  example: "fs.stat('file.txt', (err, stats) => { console.log(stats.isFile()); })",
                },
                {
                  command: "fs.rename()",
                  syntax: "fs.rename(oldPath, newPath, callback)",
                  description: "Asynchronously renames a file",
                  example: "fs.rename('old.txt', 'new.txt', (err) => { if (err) throw err; })",
                },
                {
                  command: "fs.copyFile()",
                  syntax: "fs.copyFile(src, dest, [flags], callback)",
                  description: "Asynchronously copies a file",
                  example: "fs.copyFile('source.txt', 'dest.txt', (err) => { if (err) throw err; })",
                },
                {
                  command: "fs.rmdir()",
                  syntax: "fs.rmdir(path, [options], callback)",
                  description: "Asynchronously removes a directory",
                  example: "fs.rmdir('dir', { recursive: true }, (err) => { if (err) throw err; })",
                },
              ]}
            />
          </CardContent>
        </Card>

        <div className="flex justify-center mt-4">
          <Link href="/learn/file-operations">
            <Button className="gap-2">
              <Terminal className="h-4 w-4" />
              Learn More About File Operations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
