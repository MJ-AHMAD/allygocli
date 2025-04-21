import type { Metadata } from "next"
import { CommandList } from "@/components/command-list"
import { gitBashCommands } from "@/data/git-bash"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Git Bash Commands",
  description: "A list of commonly used Git Bash commands",
}

export default function GitBashPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Git Bash Commands</h1>

      <Card className="mb-8 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-amber-800 dark:text-amber-300">গিট ব্যাশ শিখুন</CardTitle>
          <CardDescription className="text-amber-700 dark:text-amber-400 text-lg">
            গিট ব্যাশ হল উইন্ডোজে গিট ব্যবহার করার জন্য একটি কমান্ড লাইন টুল। এটি লিনাক্স-স্টাইল কমান্ড এবং গিট কমান্ড উভয়ই সমর্থন করে।
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-amber-600 dark:text-amber-300">
            গিট ব্যাশ সম্পর্কে আরও জানতে এবং এটি কীভাবে ব্যবহার করবেন তা শিখতে আমাদের বিস্তারিত গাইড দেখুন।
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/learn/git-bash">বিস্তারিত জানুন</Link>
          </Button>
        </CardContent>
      </Card>

      <CommandList commands={gitBashCommands} />
    </div>
  )
}
