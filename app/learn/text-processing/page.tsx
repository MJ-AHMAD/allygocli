import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Text Processing",
  description: "A comprehensive guide to learning text processing commands and tools",
}

export default function LearnTextProcessingPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/text-processing" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">টেক্সট প্রসেসিং শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          টেক্সট প্রসেসিং কমান্ড এবং টুল সম্পর্কে জানুন এবং টেক্সট ডাটা দক্ষতার সাথে ম্যানিপুলেট করুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
              <FileText className="mr-2 h-5 w-5" />
              টেক্সট প্রসেসিং কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              টেক্সট প্রসেসিং হল টেক্সট ডাটা ম্যানিপুলেট, সার্চ, ফিল্টার এবং ট্রান্সফর্ম করার প্রক্রিয়া। এটি কমান্ড লাইন টুল, স্ক্রিপ্টিং ল্যাঙ্গুয়েজ
              এবং স্পেশালাইজড সফটওয়্যার ব্যবহার করে করা হয়। টেক্সট প্রসেসিং টুল আপনাকে বড় টেক্সট ফাইল প্রসেস করতে, প্যাটার্ন খুঁজতে এবং ডাটা
              এক্সট্র্যাক্ট করতে সাহায্য করে।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
              <Type className="mr-2 h-5 w-5" />
              কেন টেক্সট প্রসেসিং শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              টেক্সট প্রসেসিং শেখা আপনাকে টেক্সট ডাটা দক্ষতার সাথে ম্যানিপুলেট করতে সাহায্য করবে। এটি আপনাকে লগ ফাইল অ্যানালাইজ করতে, ডাটা
              এক্সট্র্যাক্ট করতে, রিপোর্ট জেনারেট করতে এবং টেক্সট ট্রান্সফরমেশন অটোমেট করতে সক্ষম করবে। ডেভেলপার, ডাটা অ্যানালিস্ট এবং
              সিস্টেম অ্যাডমিনিস্ট্রেটরদের জন্য এটি একটি অপরিহার্য দক্ষতা।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-blue-100 dark:bg-blue-900">
            <CardTitle className="text-lg">grep / findstr</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>ফাইলে প্যাটার্ন খোঁজে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-100 dark:bg-blue-900">
            <CardTitle className="text-lg">sort</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>টেক্সট লাইন সর্ট করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-100 dark:bg-blue-900">
            <CardTitle className="text-lg">sed / awk</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>টেক্সট ট্রান্সফর্ম এবং ম্যানিপুলেট করে</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>লগ ফাইল অ্যানালাইজার</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা লগ ফাইল অ্যানালাইজ করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা লগ ফাইল অ্যানালাইজ করে এবং এরর, ওয়ার্নিং এবং অন্যান্য ইম্পর্ট্যান্ট ইভেন্ট
              এক্সট্র্যাক্ট করে। এটি আপনাকে সিস্টেম ইস্যু ডায়াগনোস করতে এবং পারফরম্যান্স মনিটর করতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: টেক্সট সার্চিং, প্যাটার্ন ম্যাচিং, ডাটা এক্সট্র্যাকশন</p>
          </CardFooter>
        </Card>

        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>ডাটা ফরম্যাট কনভার্টার</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা ডাটা ফরম্যাট কনভার্ট করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা CSV, JSON, XML এবং অন্যান্য ফরম্যাট মধ্যে ডাটা কনভার্ট করবে। এটি আপনাকে
              বিভিন্ন সিস্টেম এবং অ্যাপ্লিকেশনের মধ্যে ডাটা এক্সচেঞ্জ সহজ করতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: ডাটা পার্সিং, ফরম্যাট কনভার্শন, স্ক্রিপ্টিং</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">টেক্সট প্রসেসিং শেখার সেরা উপায়</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>রেগুলার এক্সপ্রেশন (regex) শিখুন, এটি টেক্সট প্রসেসিংয়ের একটি অপরিহার্য টুল</li>
          <li>বিভিন্ন টেক্সট প্রসেসিং কমান্ড (grep, sed, awk, sort) ব্যবহার করে অভ্যাস করুন</li>
          <li>বাস্তব-জীবনের সমস্যা সমাধানের জন্য টেক্সট প্রসেসিং ব্যবহার করুন</li>
          <li>পাইপিং এবং রিডাইরেকশন সম্পর্কে জানুন</li>
          <li>অনলাইন টিউটোরিয়াল এবং কোর্স ফলো করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/commands/text-processing">টেক্সট প্রসেসিং কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
