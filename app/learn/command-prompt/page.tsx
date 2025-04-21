import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Terminal, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Command Prompt",
  description: "A comprehensive guide to learning Command Prompt",
}

export default function LearnCommandPromptPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/command-prompt" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">কমান্ড প্রম্পট শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          উইন্ডোজের শক্তিশালী কমান্ড-লাইন ইন্টারফেস সম্পর্কে জানুন এবং আপনার কম্পিউটারকে আরও দক্ষতার সাথে নিয়ন্ত্রণ করুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
              <Terminal className="mr-2 h-5 w-5" />
              কমান্ড প্রম্পট কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              কমান্ড প্রম্পট (CMD) হল উইন্ডোজ অপারেটিং সিস্টেমের একটি কমান্ড-লাইন ইন্টারপ্রেটার। এটি ব্যবহারকারীদের টেক্সট-ভিত্তিক কমান্ড
              দিয়ে কম্পিউটারের সাথে ইন্টারঅ্যাক্ট করতে দেয়। এটি ফাইল ম্যানেজমেন্ট, নেটওয়ার্ক কনফিগারেশন, সিস্টেম অ্যাডমিনিস্ট্রেশন এবং আরও
              অনেক কিছুর জন্য ব্যবহার করা যেতে পারে।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
              <FileText className="mr-2 h-5 w-5" />
              কেন কমান্ড প্রম্পট শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              কমান্ড প্রম্পট শেখা আপনাকে আপনার কম্পিউটারের সাথে আরও দক্ষতার সাথে কাজ করতে সাহায্য করবে। এটি অটোমেশন, ব্যাচ প্রসেসিং, এবং এমন
              কাজগুলি সম্পাদন করতে সাহায্য করে যা গ্রাফিকাল ইন্টারফেসে করা কঠিন বা অসম্ভব। প্রোগ্রামিং এবং সিস্টেম অ্যাডমিনিস্ট্রেশনে এটি একটি
              অপরিহার্য দক্ষতা।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-blue-100 dark:bg-blue-900">
            <CardTitle className="text-lg">dir</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>বর্তমান ডিরেক্টরিতে থাকা ফাইল এবং ফোল্ডারগুলি দেখায়</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-100 dark:bg-blue-900">
            <CardTitle className="text-lg">cd</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>ডিরেক্টরি পরিবর্তন করে (Change Directory)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-100 dark:bg-blue-900">
            <CardTitle className="text-lg">mkdir</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>নতুন ফোল্ডার তৈরি করে (Make Directory)</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>ফাইল অর্গানাইজার</CardTitle>
            <CardDescription>একটি ব্যাচ স্ক্রিপ্ট তৈরি করুন যা ফাইলগুলিকে তাদের এক্সটেনশন অনুসারে সাজায়</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি ব্যাচ স্ক্রিপ্ট (.bat) তৈরি করবেন যা একটি ফোল্ডারের সমস্ত ফাইল স্ক্যান করবে এবং তাদের এক্সটেনশন
              অনুসারে আলাদা ফোল্ডারে সাজাবে। উদাহরণস্বরূপ, সমস্ত .jpg ফাইল "Images" ফোল্ডারে যাবে, সমস্ত .docx ফাইল "Documents" ফোল্ডারে
              যাবে, ইত্যাদি।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: ফাইল ম্যানিপুলেশন, ব্যাচ স্ক্রিপ্টিং, কন্ডিশনাল লজিক</p>
          </CardFooter>
        </Card>

        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>সিস্টেম ডায়াগনস্টিক টুল</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা সিস্টেম তথ্য সংগ্রহ করে এবং রিপোর্ট তৈরি করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি ব্যাচ স্ক্রিপ্ট তৈরি করবেন যা আপনার কম্পিউটার সম্পর্কে বিভিন্ন তথ্য সংগ্রহ করবে (যেমন হার্ডওয়্যার
              স্পেসিফিকেশন, ইনস্টল করা সফটওয়্যার, নেটওয়ার্ক কনফিগারেশন) এবং একটি টেক্সট ফাইলে একটি সুন্দর ফরম্যাট করা রিপোর্ট তৈরি করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: সিস্টেম কমান্ড, আউটপুট পার্সিং, ফাইল আউটপুট</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">কমান্ড প্রম্পট শেখার সেরা উপায়</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>প্রতিদিন অন্তত একটি নতুন কমান্ড শিখুন এবং অনুশীলন করুন</li>
          <li>ছোট ব্যাচ স্ক্রিপ্ট তৈরি করে অনুশীলন করুন</li>
          <li>
            কমান্ড প্রম্পটের ভিতরে <code>help</code> কমান্ড ব্যবহার করুন অথবা <code>command /?</code> লিখুন যেকোনো কমান্ডের সাহায্য পেতে
          </li>
          <li>আপনার প্রতিদিনের কাজগুলি অটোমেট করার চেষ্টা করুন</li>
          <li>অনলাইন টিউটোরিয়াল এবং চ্যালেঞ্জগুলি অনুসরণ করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/commands/command-prompt">কমান্ড প্রম্পট কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
