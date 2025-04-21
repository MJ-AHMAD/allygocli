import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Server, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn System Commands",
  description: "A comprehensive guide to learning system commands and tools",
}

export default function LearnSystemPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/system" className="flex items-center text-green-600 hover:text-green-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">সিস্টেম কমান্ড শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          সিস্টেম ম্যানেজমেন্ট, মনিটরিং এবং ট্রাবলশুটিং কমান্ড সম্পর্কে জানুন এবং আপনার কম্পিউটার সিস্টেম অপ্টিমাইজ করুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
              <Server className="mr-2 h-5 w-5" />
              সিস্টেম কমান্ড কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              সিস্টেম কমান্ড হল এমন টুল যা আপনাকে আপনার কম্পিউটার সিস্টেম পরিচালনা, মনিটরিং এবং ট্রাবলশুটিং করতে সাহায্য করে। এই কমান্ডগুলি
              ব্যবহার করে আপনি হার্ডওয়্যার তথ্য দেখতে, প্রসেস ম্যানেজ করতে, সার্ভিস নিয়ন্ত্রণ করতে এবং সিস্টেম পারফরম্যান্স অপ্টিমাইজ করতে
              পারবেন।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
              <Cpu className="mr-2 h-5 w-5" />
              কেন সিস্টেম কমান্ড শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              সিস্টেম কমান্ড শেখা আপনাকে আপনার কম্পিউটার সিস্টেম সম্পর্কে গভীর জ্ঞান অর্জন করতে সাহায্য করবে। এটি আপনাকে সিস্টেম সমস্যা
              ডায়াগনোস করতে, পারফরম্যান্স অপ্টিমাইজ করতে এবং সিস্টেম সিকিউরিটি বজায় রাখতে সক্ষম করবে। সিস্টেম অ্যাডমিনিস্ট্রেটর, আইটি
              প্রফেশনাল এবং পাওয়ার ইউজারদের জন্য এটি একটি অপরিহার্য দক্ষতা।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-green-100 dark:bg-green-900">
            <CardTitle className="text-lg">systeminfo</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>সিস্টেম হার্ডওয়্যার এবং সফটওয়্যার কনফিগারেশন সম্পর্কে বিস্তারিত তথ্য দেখায়</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-100 dark:bg-green-900">
            <CardTitle className="text-lg">tasklist / Get-Process</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>চলমান প্রসেসগুলি দেখায় এবং ম্যানেজ করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-100 dark:bg-green-900">
            <CardTitle className="text-lg">sc / Get-Service</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>সিস্টেম সার্ভিসগুলি দেখায় এবং নিয়ন্ত্রণ করে</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle>সিস্টেম হেলথ মনিটর</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা আপনার সিস্টেম হেলথ মনিটর করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা আপনার কম্পিউটারের CPU, মেমরি, ডিস্ক এবং নেটওয়ার্ক ব্যবহার মনিটর করবে এবং
              একটি রিপোর্ট তৈরি করবে। এটি আপনাকে আপনার সিস্টেম পারফরম্যান্স ট্র্যাক করতে এবং পারফরম্যান্স বটলনেক আইডেন্টিফাই করতে সাহায্য
              করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: সিস্টেম মনিটরিং, পারফরম্যান্স অ্যানালাইসিস, স্ক্রিপ্টিং</p>
          </CardFooter>
        </Card>

        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle>অটোমেটিক ম্যাইন্টেনেন্স টুল</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা রুটিন সিস্টেম ম্যাইন্টেনেন্স টাস্ক অটোমেট করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা টেম্পোরারি ফাইল ক্লিনআপ, ডিস্ক ডিফ্র্যাগমেন্টেশন, সিস্টেম আপডেট চেক এবং
              অন্যান্য রুটিন ম্যাইন্টেনেন্স টাস্ক অটোমেট করবে। এটি আপনাকে আপনার সিস্টেম অপ্টিমাল পারফরম্যান্সে রাখতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: সিস্টেম ম্যাইন্টেনেন্স, অটোমেশন, স্ক্রিপ্টিং</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">সিস্টেম কমান্ড শেখার সেরা উপায়</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>প্রতিদিন অন্তত একটি নতুন সিস্টেম কমান্ড শিখুন এবং অনুশীলন করুন</li>
          <li>একটি টেস্ট এনভায়রনমেন্টে কমান্ডগুলি ব্যবহার করে দেখুন</li>
          <li>সিস্টেম ট্রাবলশুটিং সিনারিও প্র্যাকটিস করুন</li>
          <li>সিস্টেম মনিটরিং এবং ডায়াগনস্টিক টুল ব্যবহার করে অভিজ্ঞতা অর্জন করুন</li>
          <li>অনলাইন টিউটোরিয়াল এবং কোর্স ফলো করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/commands/system">সিস্টেম কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
