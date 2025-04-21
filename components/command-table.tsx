"use client"

import type React from "react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Command {
  command: React.ReactNode | string
  syntax: string
  description: string
  example: string
  environment?: string
  category?: string
}

interface CommandTableProps {
  commands: Command[]
}

export function CommandTable({ commands }: CommandTableProps) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Command</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="w-[100px] text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {commands.map((command, index) => (
            <TableRow key={index}>
              <TableCell className="font-mono font-medium">{command.command}</TableCell>
              <TableCell className="hidden md:table-cell">{command.description}</TableCell>
              <TableCell className="text-right">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="py-0">
                      <span className="sr-only">Details</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-2 space-y-4 text-sm">
                        <div>
                          <div className="font-semibold mb-1">Syntax:</div>
                          <div className="relative">
                            <pre className="font-mono bg-muted p-2 rounded-md overflow-x-auto">{command.syntax}</pre>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1 right-1 h-6 w-6"
                              onClick={() => {
                                navigator.clipboard.writeText(command.syntax)
                              }}
                            >
                              <Copy className="h-3 w-3" />
                              <span className="sr-only">Copy syntax</span>
                            </Button>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Example:</div>
                          <div className="relative">
                            <pre className="font-mono bg-muted p-2 rounded-md overflow-x-auto">{command.example}</pre>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1 right-1 h-6 w-6"
                              onClick={() => {
                                navigator.clipboard.writeText(command.example)
                              }}
                            >
                              <Copy className="h-3 w-3" />
                              <span className="sr-only">Copy example</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
