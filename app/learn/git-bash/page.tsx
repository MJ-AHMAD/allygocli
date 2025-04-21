import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, GitBranch, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Git Bash",
  description: "A comprehensive guide to learning Git Bash",
}

export default function LearnGitBashPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/git-bash" className="flex items-center text-amber-600 hover:text-amber-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">গিট ব্যাশ শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          উইন্ডোজে লিনাক্স-স্টাইল কমান্ড এবং গিট ভার্সন কন্ট্রোল সিস্টেম ব্যবহার করতে শিখুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
              <GitBranch className="mr-2 h-5 w-5" />
              গিট ব্যাশ কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              গিট ব্যাশ হল উইন্ডোজে গিট ্যবহার করার জন্য একটি অ্যাপ্লিকেশন যা একটি ব্যাশ শেল এমুলেশন প্রদান করে। এটি আপনাকে উইন্ডোজে
              লিনাক্স-স্টাইল কমান্ড এবং গিট কমান্ড উভয়ই ব্যবহার করতে দেয়। এটি সফটওয়্যার ডেভেলপারদের জন্য একটি অপরিহার্য টুল, বিশেষ করে যারা
              ক্রস-প্ল্যাটফর্ম ডেভেলপমেন্ট করেন।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
              <Code className="mr-2 h-5 w-5" />
              কেন গিট ব্যাশ শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              গিট ব্যাশ শেখা আপনাকে উইন্ডোজে লিনাক্স-স্টাইল কমান্ড ব্যবহার করতে সক্ষম করবে, যা ডেভেলপমেন্ট ওয়ার্কফ্লোতে অনেক সুবিধা দেয়। এটি
              আপনাকে গিট ভার্সন কন্ট্রোল সিস্টেম ব্যবহার করতে সাহায্য করবে, যা সফটওয়্যার ডেভেলপমেন্টে অপরিহার্য। এছাড়াও, এটি শেল স্ক্রিপ্টিং
              এবং অটোমেশনের জন্য দরকারী।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-amber-100 dark:bg-amber-900">
            <CardTitle className="text-lg">git init</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>একটি নতুন গিট রিপোজিটরি তৈরি করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-amber-100 dark:bg-amber-900">
            <CardTitle className="text-lg">git clone</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>একটি রিমোট রিপোজিটরি ক্লোন করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-amber-100 dark:bg-amber-900">
            <CardTitle className="text-lg">git status</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>ওয়ার্কিং ডিরেক্টরির অবস্থা দেখায়</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle>গিট অটোমেশন স্ক্রিপ্ট</CardTitle>
            <CardDescription>একটি শেল স্ক্রিপ্ট তৈরি করুন যা গিট ওয়ার্কফ্লো অটোমেট করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি শেল স্ক্রিপ্ট তৈরি করবেন যা আপনার গিট ওয়ার্কফ্লো অটোমেট করবে। উদাহরণস্বরূপ, এটি আপনার কোড চেক
              করতে পারে, টেস্ট রান করতে পারে, এবং সবকিছু ঠিক থাকলে কমিট এবং পুশ করতে পারে। এটি আপনার ডেভেলপমেন্ট প্রক্রিয়াকে আরও দক্ষ
              করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: শেল স্ক্রিপ্টিং, গিট কমান্ড, অটোমেশন</p>
          </CardFooter>
        </Card>

        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle>গিট স্ট্যাটিসটিক্স ড্যাশবোর্ড</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা আপনার গিট রিপোজিটরি সম্পর্কে তথ্য সংগ্রহ করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি শেল স্ক্রিপ্ট তৈরি করবেন যা আপনার গিট রিপোজিটরি সম্পর্কে বিভিন্ন তথ্য সংগ্রহ করবে (যেমন কমিট
              সংখ্যা, কন্ট্রিবিউটর, ব্রাঞ্চ, ইত্যাদি) এবং একটি সারাংশ রিপোর্ট তৈরি করবে। এটি আপনাকে আপনার প্র ্রজেক্টের অগ্রগতি ট্র্যাক করতে
              সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: গিট কমান্ড, ডাটা পার্সিং, রিপোর্ট জেনারেশন</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">গিট ব্যাশ শেখার সেরা উপায়</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>প্রথমে বেসিক লিনাক্স কমান্ড শিখুন (ls, cd, mkdir, ইত্যাদি)</li>
          <li>গিট কমান্ডগুলি ধাপে ধাপে শিখুন (init, add, commit, push, pull, ইত্যাদি)</li>
          <li>একটি প্র্যাকটিস রিপোজিটরি তৈরি করুন এবং বিভিন্ন গিট কমান্ড ব্যবহার করে দেখুন</li>
          <li>শেল স্ক্রিপ্টিং শিখুন এবং ছোট স্ক্রিপ্ট তৈরি করুন</li>
          <li>অনলাইন গিট টিউটোরিয়াল এবং ইন্টারেক্টিভ গাইড ব্যবহার করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-amber-600 hover:bg-amber-700">
          <Link href="/commands/git-bash">গিট ব্যাশ কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
