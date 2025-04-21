import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ArrowLeft, Search, Type, Filter, SortAsc, FileSearch } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function TextProcessingPage() {
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
              <FileText className="h-8 w-8 text-primary" />
              Text Processing Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for text manipulation and processing commands
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-lg p-6 my-6 border border-blue-100 dark:border-blue-900 w-full">
          <h2 className="text-2xl font-bold mb-3">টেক্সট প্রসেসিং পরিচিতি</h2>
          <p className="text-muted-foreground mb-4">
            টেক্সট প্রসেসিং কমান্ডগুলি আপনাকে টেক্সট ফাইল এবং ডাটা ম্যানিপুলেট, সার্চ, ফিল্টার এবং ট্রান্সফর্ম করতে সাহায্য করে। এই কমান্ডগুলি
            ব্যবহার করে আপনি বড় টেক্সট ফাইল প্রসেস করতে, প্যাটার্ন খুঁজতে এবং ডাটা এক্সট্র্যাক্ট করতে পারবেন।
          </p>
          <Link href="/learn/text-processing">
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              টেক্সট প্রসেসিং সম্পর্কে বিস্তারিত জানুন
            </Button>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <Link href="/search?category=text-processing">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search Text Processing Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="search">Search & Replace</TabsTrigger>
            <TabsTrigger value="filter">Filter & Sort</TabsTrigger>
            <TabsTrigger value="transform">Transform</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5 text-primary" />
                  Basic Text Processing Commands
                </CardTitle>
                <CardDescription>Essential commands for working with text files</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "cat",
                      syntax: "cat [file]",
                      description: "Displays the contents of a file (Linux/Git Bash)",
                      example: "cat file.txt",
                    },
                    {
                      command: "type",
                      syntax: "type [file]",
                      description: "Displays the contents of a file (Windows)",
                      example: "type file.txt",
                    },
                    {
                      command: "Get-Content",
                      syntax: "Get-Content [file]",
                      description: "PowerShell cmdlet to get the content of a file",
                      example: "Get-Content file.txt",
                    },
                    {
                      command: "head",
                      syntax: "head [options] [file]",
                      description: "Displays the first lines of a file (Linux/Git Bash)",
                      example: "head -n 10 file.txt",
                    },
                    {
                      command: "tail",
                      syntax: "tail [options] [file]",
                      description: "Displays the last lines of a file (Linux/Git Bash)",
                      example: "tail -n 10 file.txt",
                    },
                    {
                      command: "more",
                      syntax: "more [file]",
                      description: "Displays output one screen at a time",
                      example: "more file.txt",
                    },
                    {
                      command: "less",
                      syntax: "less [file]",
                      description: "Similar to more but allows backward movement (Linux/Git Bash)",
                      example: "less file.txt",
                    },
                    {
                      command: "wc",
                      syntax: "wc [options] [file]",
                      description: "Counts lines, words, and characters in a file (Linux/Git Bash)",
                      example: "wc -l file.txt",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSearch className="h-5 w-5 text-primary" />
                  Search and Replace Commands
                </CardTitle>
                <CardDescription>Commands for finding and replacing text</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "grep",
                      syntax: "grep [options] pattern [file]",
                      description: "Searches for patterns in files (Linux/Git Bash)",
                      example: 'grep "error" log.txt',
                    },
                    {
                      command: "findstr",
                      syntax: "findstr [options] pattern [file]",
                      description: "Searches for strings in files (Windows)",
                      example: 'findstr "error" log.txt',
                    },
                    {
                      command: "Select-String",
                      syntax: "Select-String [options] pattern [file]",
                      description: "PowerShell cmdlet to search for text in files",
                      example: 'Select-String -Pattern "error" -Path log.txt',
                    },
                    {
                      command: "sed",
                      syntax: "sed [options] 's/pattern/replacement/' [file]",
                      description: "Stream editor for filtering and transforming text (Linux/Git Bash)",
                      example: "sed 's/old/new/g' file.txt",
                    },
                    {
                      command: "awk",
                      syntax: "awk [options] 'pattern {action}' [file]",
                      description: "Pattern scanning and processing language (Linux/Git Bash)",
                      example: "awk '{print $1}' file.txt",
                    },
                    {
                      command: "find",
                      syntax: "find [path] [expression]",
                      description: "Searches for files in a directory hierarchy (Linux/Git Bash)",
                      example: 'find . -name "*.txt"',
                    },
                    {
                      command: "where",
                      syntax: "where [pattern]",
                      description: "Locates files that match a pattern (Windows)",
                      example: "where *.txt",
                    },
                    {
                      command: "Get-ChildItem",
                      syntax: "Get-ChildItem [path] -Recurse | Select-String [pattern]",
                      description: "PowerShell cmdlet to search for text in multiple files",
                      example: 'Get-ChildItem -Path C:\\Logs -Recurse | Select-String -Pattern "error"',
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="filter" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Filter and Sort Commands
                </CardTitle>
                <CardDescription>Commands for filtering and sorting text data</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "sort",
                      syntax: "sort [options] [file]",
                      description: "Sorts lines of text files",
                      example: "sort names.txt",
                    },
                    {
                      command: "Sort-Object",
                      syntax: "Sort-Object -Property [property]",
                      description: "PowerShell cmdlet to sort objects by property values",
                      example: "Get-Content names.txt | Sort-Object",
                    },
                    {
                      command: "uniq",
                      syntax: "uniq [options] [file]",
                      description: "Reports or omits repeated lines (Linux/Git Bash)",
                      example: "sort names.txt | uniq",
                    },
                    {
                      command: "Get-Unique",
                      syntax: "Get-Unique",
                      description: "PowerShell cmdlet to return unique items from a sorted list",
                      example: "Get-Content names.txt | Sort-Object | Get-Unique",
                    },
                    {
                      command: "cut",
                      syntax: "cut [options] [file]",
                      description: "Removes sections from each line of files (Linux/Git Bash)",
                      example: "cut -d',' -f1,3 data.csv",
                    },
                    {
                      command: "tr",
                      syntax: "tr [options] set1 [set2]",
                      description: "Translates or deletes characters (Linux/Git Bash)",
                      example: "cat file.txt | tr '[:lower:]' '[:upper:]'",
                    },
                    {
                      command: "comm",
                      syntax: "comm [options] file1 file2",
                      description: "Compares two sorted files line by line (Linux/Git Bash)",
                      example: "comm -12 file1.txt file2.txt",
                    },
                    {
                      command: "Compare-Object",
                      syntax: "Compare-Object [reference] [difference]",
                      description: "PowerShell cmdlet to compare two sets of objects",
                      example: "Compare-Object (Get-Content file1.txt) (Get-Content file2.txt)",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transform" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SortAsc className="h-5 w-5 text-primary" />
                  Text Transformation Commands
                </CardTitle>
                <CardDescription>Commands for transforming and converting text data</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "iconv",
                      syntax: "iconv [options] -f [from-encoding] -t [to-encoding] [file]",
                      description: "Converts text from one character encoding to another (Linux/Git Bash)",
                      example: "iconv -f UTF-8 -t ASCII file.txt",
                    },
                    {
                      command: "expand",
                      syntax: "expand [options] [file]",
                      description: "Converts tabs to spaces (Linux/Git Bash)",
                      example: "expand -t 4 file.txt",
                    },
                    {
                      command: "unexpand",
                      syntax: "unexpand [options] [file]",
                      description: "Converts spaces to tabs (Linux/Git Bash)",
                      example: "unexpand -t 4 file.txt",
                    },
                    {
                      command: "fold",
                      syntax: "fold [options] [file]",
                      description: "Wraps each input line to fit in specified width (Linux/Git Bash)",
                      example: "fold -w 80 file.txt",
                    },
                    {
                      command: "ConvertTo-Html",
                      syntax: "ConvertTo-Html [options]",
                      description: "PowerShell cmdlet to convert objects to HTML",
                      example: "Get-Process | ConvertTo-Html | Out-File processes.html",
                    },
                    {
                      command: "ConvertTo-Csv",
                      syntax: "ConvertTo-Csv [options]",
                      description: "PowerShell cmdlet to convert objects to CSV format",
                      example: "Get-Process | ConvertTo-Csv | Out-File processes.csv",
                    },
                    {
                      command: "ConvertTo-Json",
                      syntax: "ConvertTo-Json [options]",
                      description: "PowerShell cmdlet to convert objects to JSON format",
                      example: "Get-Process | ConvertTo-Json | Out-File processes.json",
                    },
                    {
                      command: "ConvertFrom-Json",
                      syntax: "ConvertFrom-Json",
                      description: "PowerShell cmdlet to convert JSON to objects",
                      example: "Get-Content data.json | ConvertFrom-Json",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Advanced Text Processing Commands
                </CardTitle>
                <CardDescription>Advanced commands for complex text processing tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "perl",
                      syntax: "perl [options] [program] [file]",
                      description: "Perl programming language for text processing",
                      example: "perl -pe 's/old/new/g' file.txt",
                    },
                    {
                      command: "xargs",
                      syntax: "xargs [options] [command]",
                      description: "Builds and executes command lines from standard input (Linux/Git Bash)",
                      example: "find . -name '*.txt' | xargs grep 'pattern'",
                    },
                    {
                      command: "join",
                      syntax: "join [options] file1 file2",
                      description: "Joins lines of two files on a common field (Linux/Git Bash)",
                      example: "join -t, -1 2 -2 1 file1.csv file2.csv",
                    },
                    {
                      command: "paste",
                      syntax: "paste [options] [file]",
                      description: "Merges lines of files (Linux/Git Bash)",
                      example: "paste file1.txt file2.txt",
                    },
                    {
                      command: "csplit",
                      syntax: "csplit [options] file pattern",
                      description: "Splits a file into sections determined by context lines (Linux/Git Bash)",
                      example: "csplit report.txt '/CHAPTER/' '{*}'",
                    },
                    {
                      command: "split",
                      syntax: "split [options] [file] [prefix]",
                      description: "Splits a file into pieces",
                      example: "split -l 1000 large_file.txt part_",
                    },
                    {
                      command: "Invoke-Expression",
                      syntax: "Invoke-Expression [string]",
                      description: "PowerShell cmdlet to run commands constructed as strings",
                      example: "Invoke-Expression 'Get-Process | Where-Object { $_.CPU -gt 10 }'",
                    },
                    {
                      command: "ForEach-Object",
                      syntax: "ForEach-Object [script block]",
                      description: "PowerShell cmdlet to perform operations on each input object",
                      example: "Get-Content file.txt | ForEach-Object { $_.ToUpper() }",
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
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tools/notepad-plus-plus" className="text-blue-600 hover:underline">
                    Notepad++ - Advanced Text Editor
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tools/vscode" className="text-blue-600 hover:underline">
                    Visual Studio Code - Code Editor with Text Processing Extensions
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tools/grepwin" className="text-blue-600 hover:underline">
                    GrepWin - Windows Search and Replace Tool
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tools/powershell-ise" className="text-blue-600 hover:underline">
                    PowerShell ISE - Integrated Scripting Environment
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">Text Processing Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/regex-basics" className="text-blue-600 hover:underline">
                    Regular Expressions Basics
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/text-manipulation" className="text-blue-600 hover:underline">
                    Text Manipulation Techniques
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/powershell-text-processing" className="text-blue-600 hover:underline">
                    PowerShell Text Processing
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/batch-file-text-processing" className="text-blue-600 hover:underline">
                    Batch File Text Processing
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
