"use client"

import type { Command } from "@/data/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface CommandListProps {
  commands: Command[]
}

export function CommandList({ commands }: CommandListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCommands = commands.filter(
    (command) =>
      command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (command.syntax && command.syntax.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (command.example && command.example.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search commands..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Commands</CardTitle>
          <CardDescription>{filteredCommands.length} commands found</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Command</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="hidden md:table-cell">Syntax</TableHead>
                <TableHead className="hidden lg:table-cell">Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCommands.map((command) => (
                <TableRow key={command.id}>
                  <TableCell className="font-medium">
                    <code>{command.name}</code>
                  </TableCell>
                  <TableCell>{command.description}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {command.syntax && <code>{command.syntax}</code>}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {command.example && <code>{command.example}</code>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
