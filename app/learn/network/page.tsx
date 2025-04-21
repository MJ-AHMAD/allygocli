import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Globe, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Network Commands",
  description: "A comprehensive guide to learning network commands and tools",
}

export default function LearnNetworkPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/network" className="flex items-center text-cyan-600 hover:text-cyan-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">নেটওয়ার্ক কমান্ড শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          নেটওয়ার্ক ডায়াগনস্টিক, কনফিগারেশন এবং মনিটরিং কমান্ড সম্পর্কে জানুন এবং আপনার নেটওয়ার্ক সমস্যা সমাধান করুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle className="flex items-center text-cyan-700 dark:text-cyan-300">
              <Globe className="mr-2 h-5 w-5" />
              নেটওয়ার্ক কমান্ড কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              নেটওয়ার্ক কমান্ড হল এমন টুল যা আপনাকে আপনার কম্পিউটার নেটওয়ার্ক কানেকশন ডায়াগনোস, কনফিগার এবং মনিটর করতে সাহায্য করে। এই
              কমান্ডগুলি ব্যবহার করে আপনি নেটওয়ার্ক সমস্যা সমাধান করতে, কানেকশন টেস্ট করতে, নেটওয়ার্ক ট্র্যাফিক অ্যানালাইজ করতে এবং নেটওয়ার্ক
              পারফরম্যান্স অপ্টিমাইজ করতে পারবেন।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle className="flex items-center text-cyan-700 dark:text-cyan-300">
              <Network className="mr-2 h-5 w-5" />
              কেন নেটওয়ার্ক কমান্ড শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              নেটওয়ার্ক কমান্ড শেখা আপনাকে আপনার নেটওয়ার্ক সমস্যা নিজেই সমাধান করতে সক্ষম করবে। এটি আপনাকে নেটওয়ার্ক কানেকশন ট্রাবলশুট করতে,
              নেটওয়ার্ক পারফরম্যান্স অপ্টিমাইজ করতে এবং নেটওয়ার্ক সিকিউরিটি ইস্যু ডিটেক্ট করতে সাহায্য করবে। আইটি প্রফেশনাল, নেটওয়ার্ক
              অ্যাডমিনিস্ট্রেটর এবং সাধারণ ব্যবহারকারীদের জন্য এটি একটি অপরিহার্য দক্ষতা।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-cyan-100 dark:bg-cyan-900">
            <CardTitle className="text-lg">ping</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>নেটওয়ার্ক কানেকশন টেস্ট করে এবং রেসপন্স টাইম মাপে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-cyan-100 dark:bg-cyan-900">
            <CardTitle className="text-lg">ipconfig / ifconfig</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>নেটওয়ার্ক ইন্টারফেস কনফিগারেশন দেখায় এবং পরিবর্তন করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-cyan-100 dark:bg-cyan-900">
            <CardTitle className="text-lg">tracert / traceroute</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>নেটওয়ার্ক প্যাকেট যে পথ ধরে যায় তা দেখায়</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle>নেটওয়ার্ক মনিটরিং টুল</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা আপনার নেটওয়ার্ক কানেকশন মনিটর করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা নিয়মিত বিরতিতে আপনার নেটওয়ার্ক কানেকশন চেক করবে এবং কানেকশন ডাউন হলে
              আপনাকে নোটিফিকেশন দেবে। এটি পিং, ট্রেসরাউট এবং অন্যান্য নেটওয়ার্ক ডায়াগনস্টিক কমান্ড ব্যবহার করবে এবং একটি লগ ফাইল তৈরি
              করবে যা আপনি পরে অ্যানালাইজ করতে পারবেন।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: নেটওয়ার্ক ডায়াগনস্টিক, স্ক্রিপ্টিং, ডাটা লগিং</p>
          </CardFooter>
        </Card>

        <Card className="border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle>হোম নেটওয়ার্ক ম্যাপার</CardTitle>
            <CardDescription>আপনার হোম নেটওয়ার্কে কানেক্টেড ডিভাইসগুলি ম্যাপ করুন</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা আপনার হোম নেটওয়ার্কে কানেক্টেড সমস্ত ডিভাইস স্ক্যান করবে এবং তাদের IP
              অ্যাড্রেস, MAC অ্যাড্রেস এবং হোস্টনেম সহ একটি রিপোর্ট তৈরি করবে। এটি আপনাকে আপনার নেটওয়ার্কে কোন ডিভাইস কানেক্টেড আছে তা
              ট্র্যাক করতে সাহায্য করবে এবং অনাকাঙ্ক্ষিত ডিভাইস সনাক্ত করতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: নেটওয়ার্ক স্ক্যানিং, IP অ্যাড্রেসিং, ডাটা ভিজুয়ালাইজেশন</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">নেটওয়ার্ক কমান্ড শেখার সেরা উপায়</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>প্রতিদিন অন্তত একটি নতুন নেটওয়ার্ক কমান্ড শিখুন এবং অনুশীলন করুন</li>
          <li>আপনার নিজের নেটওয়ার্ক সেটআপে কমান্ডগুলি ব্যবহার করে দেখুন</li>
          <li>নেটওয়ার্ক সমস্যা সমাধানের জন্য একটি ট্রাবলশুটিং চেকলিস্ট তৈরি করুন</li>
          <li>নেটওয়ার্ক মনিটরিং এবং ডায়াগনস্টিক টুল ব্যবহার করে অভিজ্ঞতা অর্জন করুন</li>
          <li>অনলাইন টিউটোরিয়াল এবং কোর্স ফলো করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
          <Link href="/commands/network">নেটওয়ার্ক কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
