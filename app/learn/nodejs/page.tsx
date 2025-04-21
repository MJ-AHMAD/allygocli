import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Server, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Node.js",
  description: "A comprehensive guide to learning Node.js",
}

export default function LearnNodejsPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/commands/nodejs" className="flex items-center text-green-600 hover:text-green-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">নোড.জেএস শিখুন</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          জাভাস্ক্রিপ্ট দিয়ে সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি করতে শিখুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
              <Server className="mr-2 h-5 w-5" />
              নোড.জেএস কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              নোড.জেএস হল একটি জাভাস্ক্রিপ্ট রানটাইম যা ক্রোম ভি৮ জাভাস্ক্রিপ্ট ইঞ্জিন ব্যবহার করে। এটি আপনাকে ব্রাউজারের বাইরে জাভাস্ক্রিপ্ট কোড
              চালাতে দেয়, যা সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি করতে ব্যবহার করা যেতে পারে। এটি ইভেন্ট-ড্রিভেন, নন-ব্লকিং I/O মডেল ব্যবহার করে,
              যা এটিকে হালকা এবং দক্ষ করে তোলে।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
              <Package className="mr-2 h-5 w-5" />
              কেন নোড.জেএস শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              নোড.জেএস শেখা আপনাকে ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট করতে সক্ষম করবে, যেখানে আপনি ক্লায়েন্ট এবং সার্ভার উভয় সাইডেই জাভাস্ক্রিপ্ট
              ব্যবহার করতে পারবেন। এটি একটি বিশাল প্যাকেজ ইকোসিস্টেম (npm) সহ আসে, যা আপনাকে হাজার হাজার ওপেন-সোর্স লাইব্রেরি ব্যবহার করতে
              দেয়। এটি API, মাইক্রোসার্ভিস, এবং রিয়েল-টাইম অ্যাপ্লিকেশন তৈরির জন্য বিশেষভাবে উপযুক্ত।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-green-100 dark:bg-green-900">
            <CardTitle className="text-lg">node</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>জাভাস্ক্রিপ্ট ফাইল রান করে বা REPL মোড শুরু করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-100 dark:bg-green-900">
            <CardTitle className="text-lg">npm init</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>একটি নতুন নোড.জেএস প্রজেক্ট তৈরি করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-100 dark:bg-green-900">
            <CardTitle className="text-lg">npm install</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>প্যাকেজ ইনস্টল করে</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle>ওয়েদার অ্যাপ</CardTitle>
            <CardDescription>একটি সিম্পল ওয়েদার অ্যাপ তৈরি করুন যা API ব্যবহার করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি নোড.জেএস অ্যাপ্লিকেশন তৈরি করবেন যা একটি ওয়েদার API ব্যবহার করে বিভিন্ন শহরের আবহাওয়া সম্পর্কে
              তথ্য সংগ্রহ করবে। আপনি এক্সপ্রেস.জেএস ব্যবহার করে একটি সিম্পল ওয়েব ইন্টারফেস তৈরি করতে পারেন যেখানে ব্যবহারকারীরা শহরের
              নাম সার্চ করতে পারবেন এবং বর্তমান আবহাওয়া দেখতে পারবেন।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: API ইন্টিগ্রেশন, এক্সপ্রেস.জেএস, অ্যাসিঙ্ক প্রোগ্রামিং</p>
          </CardFooter>
        </Card>

        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle>টু-ডু অ্যাপ</CardTitle>
            <CardDescription>একটি টু-ডু অ্যাপ্লিকেশন তৈরি করুন ডাটাবেস ইন্টিগ্রেশন সহ</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি টু-ডু অ্যাপ্লিকেশন তৈরি করবেন যা ব্যবহারকারীদের টাস্ক তৈরি, আপডেট, এবং ডিলিট করতে দেবে। আপনি
              এক্সপ্রেস.জেএস ব্যবহার করবেন ব্যাকএ্ডের জন্য এবং মঙ্গোডিবি বা এসকিউএল ব্যবহার করবেন ডাটা স্টোর করার জন্য। এটি আপনাকে ডাটাবেস
              ইন্টিগ্রেশন এবং CRUD অপারেশন শিখতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: ডাটাবেস ইন্টিগ্রেশন, CRUD অপারেশন, রেস্টফুল API</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">নোড.জেএস শেখার সেরা উপায়</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>প্রথমে জাভাস্ক্রিপ্টের মৌলিক বিষয়গুলি শিখুন (যদি আপনি ইতিমধ্যে না জানেন)</li>
          <li>নোড.জেএস এর কোর মডিউলগুলি শিখুন (fs, http, path, ইত্যাদি)</li>
          <li>npm এবং প্যাকেজ ম্যানেজমেন্ট শিখুন</li>
          <li>এক্সপ্রেস.জেএস ফ্রেমওয়ার্ক শিখুন ওয়েব অ্যাপ্লিকেশন তৈরির জন্য</li>
          <li>অ্যাসিঙ্ক প্রোগ্রামিং এবং প্রমিস শিখুন</li>
          <li>ছোট প্রজেক্ট তৈরি করে অনুশীলন করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/commands/nodejs">নোড.জেএস কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
