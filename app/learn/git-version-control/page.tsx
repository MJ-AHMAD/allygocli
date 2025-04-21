import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, GitBranch, GitCommit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Git & Version Control",
  description: "A comprehensive guide to learning Git and version control systems",
}

export default function LearnGitVersionControlPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/git-version-control" className="flex items-center text-amber-600 hover:text-amber-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">গিট এবং ভার্সন কন্ট্রোল শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          গিট এবং ভার্সন কন্ট্রোল সিস্টেম সম্পর্কে জানুন এবং আপনার প্রজেক্টের কোড ইতিহাস দক্ষতার সাথে ম্যানেজ করুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
              <GitBranch className="mr-2 h-5 w-5" />
              গিট এবং ভার্সন কন্ট্রোল কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              গিট হল একটি বিতরণকৃত ভার্সন কন্ট্রোল সিস্টেম যা সফটওয়্যার ডেভেলপমেন্টে কোড ট্র্যাকিং, ব্রাঞ্চিং, মার্জিং এবং সহযোগিতা সহজ
              করে। এটি আপনাকে আপনার প্রজেক্টের ইতিহাস ট্র্যাক করতে, পরিবর্তন ম্যানেজ করতে এবং টিমের সাথে কাজ করতে সাহায্য করে।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
              <GitCommit className="mr-2 h-5 w-5" />
              কেন গিট এবং ভার্সন কন্ট্রোল শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              গিট এবং ভার্সন কন্ট্রোল শেখা ��পনাকে আপনার কোড ইতিহাস দক্ষতার সাথে ম্যানেজ করতে সাহায্য করবে। এটি আপনাকে টিমের সাথে সহযোগিতা
              করতে, কোড পরিবর্তন ট্র্যাক করতে এবং প্রয়োজনে আগের ভার্সনে ফিরে যেতে সক্ষম করবে। সফটওয়্যার ডেভেলপার, ডেভঅপস ইঞ্জিনিয়ার
              এবং প্রজেক্ট ম্যানেজারদের জন্য এটি একটি অপরিহার্য দক্ষতা।
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
            <CardTitle className="text-lg">git add</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>ফাইল স্টেজিং এরিয়াতে যোগ করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-amber-100 dark:bg-amber-900">
            <CardTitle className="text-lg">git commit</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>পরিবর্তনগুলি রিপোজিটরিতে রেকর্ড করে</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle>গিট ওয়ার্কফ্লো টেম্পলেট</CardTitle>
            <CardDescription>একটি গিট ওয়ার্কফ্লো টেম্পলেট তৈরি করুন</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি গিট ওয়ার্কফ্লো টেম্পলেট তৈরি করবেন যা আপনার টিম ব্যবহার করতে পারে। এটি ব্রাঞ্চিং স্ট্র্যাটেজি, কমিট
              কনভেনশন, পুল রিকোয়েস্ট প্রসেস এবং কোড রিভিউ গাইডলাইন অন্তর্ভুক্ত করবে। এটি আপনার টিমকে কনসিস্টেন্ট গিট প্র্যাকটিস ফলো
              করতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: গিট ওয়ার্কফ্লো, ব্রাঞ্চিং স্ট্র্যাটেজি, টিম কোলাোরেশন</p>
          </CardFooter>
        </Card>

        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle>গিট হুক স্ক্রিপ্ট</CardTitle>
            <CardDescription>কাস্টম গিট হুক স্ক্রিপ্ট তৈরি করুন</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি কাস্টম গিট হুক স্ক্রিপ্ট তৈরি করবেন যা কমিট করার আগে কোড লিন্টিং, টেস্টিং এবং ফরম্যাটিং অটোমেট করবে।
              এটি আপনার প্রজেক্টে কোড কোয়ালিটি বজায় রাখতে সাহায্য করবে এবং কোড রিভিউ প্রসেস সহজ করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: গিট হুক, স্ক্রিপ্টিং, কোড কোয়ালিটি অটোমেশন</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">
          গিট এবং ভার্সন কন্ট্রোল শেখার সেরা উপায়
        </h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>প্রতিদিন গিট কমান্ড ব্যবহার করে অভ্যাস করুন</li>
          <li>একটি প্র্যাকটিস রিপোজিটরি তৈরি করে বিভিন্ন গিট ফিচার ব্যবহার করে দেখুন</li>
          <li>ব্রাঞ্চিং, মার্জিং এবং রিবেসিং প্র্যাকটিস করুন</li>
          <li>গিট ওয়ার্কফ্লো এবং ব্রাঞ্চিং স্ট্র্যাটেজি সম্পর্কে জানুন</li>
          <li>অনলাইন টিউটোরিয়াল এবং ইন্টারেক্টিভ গিট কোর্স ফলো করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-amber-600 hover:bg-amber-700">
          <Link href="/commands/git-version-control">গিট এবং ভার্সন কন্ট্রোল কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
