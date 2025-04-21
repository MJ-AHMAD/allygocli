import type { Metadata } from "next"
import { CommandList } from "@/components/command-list"
import { commandPromptCommands } from "@/data/command-prompt"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Command Prompt Commands",
  description: "A list of commonly used Command Prompt commands",
}

export default function CommandPromptPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Command Prompt Commands</h1>

      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-800 dark:text-blue-300">কমান্ড প্রম্পট শিখুন</CardTitle>
          <CardDescription className="text-blue-700 dark:text-blue-400 text-lg">
            কমান্ড প্রম্পট হল উইন্ডোজ অপারেটিং সিস্টেমের একটি কমান্ড-লাইন ইন্টারপ্রেটার। এটি শিখে আপনি আপনার কম্পিউটারকে আরও দক্ষতার সাথে
            নিয়ন্ত্রণ করতে পারবেন।
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-blue-600 dark:text-blue-300">
            কমান্ড প্রম্পট সম্পর্কে আরও জানতে এবং এটি কীভাবে ব্যবহার করবেন তা শিখতে আমাদের বিস্তারিত গাইড দেখুন।
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/learn/command-prompt">বিস্তারিত জানুন</Link>
          </Button>
        </CardContent>
      </Card>

      <CommandList commands={commandPromptCommands} />
    </div>
  )
}
