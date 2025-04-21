import type { Metadata } from "next"
import { CommandList } from "@/components/command-list"
import { nodejsCommands } from "@/data/nodejs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Node.js Commands",
  description: "A list of commonly used Node.js commands",
}

export default function NodejsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Node.js Commands</h1>

      <Card className="mb-8 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-300">নোড.জেএস শিখুন</CardTitle>
          <CardDescription className="text-green-700 dark:text-green-400 text-lg">
            নোড.জেএস হল একটি জাভাস্ক্রিপ্ট রানটাইম যা সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি করতে ব্যবহৃত হয়। এটি শিখে আপনি ওয়েব অ্যাপ্লিকেশন
            ডেভেলপমেন্টে দক্ষতা অর্জন করতে পারবেন।
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-green-600 dark:text-green-300">
            নোড.জেএস সম্পর্কে আরও জানতে এবং এটি কীভাবে ব্যবহার করবেন তা শিখতে আমাদের বিস্তারিত গাইড দেখুন।
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/learn/nodejs">বিস্তারিত জানুন</Link>
          </Button>
        </CardContent>
      </Card>

      <CommandList commands={nodejsCommands} />
    </div>
  )
}
