import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Package, Box } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn Package Management",
  description: "A comprehensive guide to learning package management tools and commands",
}

export default function LearnPackageManagementPage() {
  return (
    <div className="container mx-auto py-10">
      <Link
        href="/commands/package-management"
        className="flex items-center text-purple-600 hover:text-purple-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        ফিরে যান
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">প্যাকেজ ম্যানেজমেন্ট শিখুন</h1>
      </div>

      <div className="mb-8 text-center">
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          প্যাকেজ ম্যানেজমেন্ট টুল এবং কমান্ড সম্পর্কে জানুন এবং আপনার সফটওয়্যার ডিপেন্ডেন্সি দক্ষতার সাথে ম্যানেজ করুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
              <Package className="mr-2 h-5 w-5" />
              প্যাকেজ ম্যানেজমেন্ট কি?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              প্যাকেজ ম্যানেজমেন্ট হল সফটওয়্যার ইনস্টলেশন, আপডেট, কনফিগারেশন এবং রিমুভাল প্রক্রিয়া অটোমেট করার পদ্ধতি। প্যাকেজ ম্যানেজার
              সফটওয়্যার ডিপেন্ডেন্সি ট্র্যাক করে, ভার্সন কনফ্লিক্ট রেজোল্ভ করে এবং সফটওয়্যার আপডেট এবং রিমুভাল প্রক্রিয়া সহজ করে।
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
              <Box className="mr-2 h-5 w-5" />
              কেন প্যাকেজ ম্যানেজমেন্ট শিখবেন?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              প্যাকেজ ম্যানেজমেন্ট শেখা আপনাকে আপনার প্রজেক্টের ডিপেন্ডেন্সি দক্ষতার সাথে ম্যানেজ করতে সাহায্য করবে। এটি আপনাকে সফটওয়্যার
              ইনস্টলেশন অটোমেট করতে, ডিপেন্ডেন্সি কনফ্লিক্ট এড়াতে এবং সফটওয়্যার আপডেট প্রক্রিয়া সহজ করতে সক্ষম করবে। ডেভেলপার, সিস্টেম
              অ্যাডমিনিস্ট্রেটর এবং ডেভঅপস প্রফেশনালদের জন্য এটি একটি অপরিহার্য দক্ষতা।
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শুরু করার জন্য প্রয়োজনীয় কমান্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="bg-purple-100 dark:bg-purple-900">
            <CardTitle className="text-lg">npm install</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>JavaScript প্রজেক্টের জন্য প্যাকেজ ইনস্টল করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-purple-100 dark:bg-purple-900">
            <CardTitle className="text-lg">choco install</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Windows-এ সফটওয়্যার ইনস্টল করে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-purple-100 dark:bg-purple-900">
            <CardTitle className="text-lg">winget install</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Windows-এ সফটওয়্যার ইনস্টল করে</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট আইডিয়া</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle>ডিপেন্ডেন্সি অডিটর</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা প্রজেক্ট ডিপেন্ডেন্সি অডিট করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা আপনার প্রজেক্টের ডিপেন্ডেন্সি অডিট করবে এবং আউটডেটেড বা ভালনারেবল
              ডিপেন্ডেন্সি সনাক্ত করবে। এটি আপনাকে আপনার প্রজেক্টের ডিপেন্ডেন্সি আপ-টু-ডেট এবং সিকিউর রাখতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: ডিপেন্ডেন্সি ম্যানেজমেন্ট, সিকিউরিটি অডিট, স্ক্রিপ্টিং</p>
          </CardFooter>
        </Card>

        <Card className="border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle>সফটওয়্যার ইনস্টলেশন অটোমেটর</CardTitle>
            <CardDescription>একটি স্ক্রিপ্ট তৈরি করুন যা নতুন কম্পিউটারে সফটওয়্যার ইনস্টলেশন অটোমেট করে</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              এই প্রজেক্টে, আপনি একটি স্ক্রিপ্ট তৈরি করবেন যা নতুন কম্পিউটারে প্রয়োজনীয় সফটওয়্যার ইনস্টলেশন অটোমেট করবে। এটি আপনাকে
              নতুন কম্পিউটার সেটআপ প্রক্রিয়া দ্রুত এবং কনসিস্টেন্ট করতে সাহায্য করবে।
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">দক্ষতা: সফটওয়্যার ইনস্টলেশন, অটোমেশন, স্ক্রিপ্টিং</p>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য টিপস</h2>

      <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          প্যাকেজ ম্যানেজমেন্ট শেখার সেরা উপায়
        </h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>বিভিন্ন প্যাকেজ ম্যানেজার (npm, yarn, pnpm, chocolatey, winget) ব্যবহার করে দেখুন</li>
          <li>প্যাকেজ.json ফাইল এবং ডিপেন্ডেন্সি ম্যানেজমেন্ট সম্পর্কে শিখুন</li>
          <li>সেমান্টিক ভার্সনিং (SemVer) সম্পর্কে জানুন</li>
          <li>ডিপেন্ডেন্সি সিকিউরিটি অডিট প্র্যাকটিস করুন</li>
          <li>অনলাইন টিউটোরিয়াল এবং কোর্স ফলো করুন</li>
        </ul>
      </div>

      <div className="text-center">
        <Button asChild className="bg-purple-600 hover:bg-purple-700">
          <Link href="/commands/package-management">প্যাকেজ ম্যানেজমেন্ট কমান্ড লিস্ট দেখুন</Link>
        </Button>
      </div>
    </div>
  )
}
