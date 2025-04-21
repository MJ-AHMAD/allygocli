import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommandTable } from "@/components/command-table"

export const metadata: Metadata = {
  title: "ব্যবসায় প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান - T-ALLY CLI",
  description: "ব্যবসায় প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড লাইন টুলস এবং সমাধান",
}

const businessCommands = [
  {
    command: "Get-SalesReport",
    description: "বিক্রয় সংক্রান্ত রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "Get-SalesReport -StartDate '2023-01-01' -EndDate '2023-12-31' -Department 'Electronics'",
  },
  {
    command: "New-Invoice",
    description: "নতুন ইনভয়েস তৈরি করে",
    shell: "PowerShell",
    example: "New-Invoice -CustomerID 'C123' -Items 'Item1,Item2' -Amount 15000 -DueDate '2023-08-30'",
  },
  {
    command: "Export-InventoryStatus",
    description: "ইনভেন্টরি স্ট্যাটাস এক্সপোর্ট করে",
    shell: "PowerShell",
    example: "Export-InventoryStatus -Warehouse 'Main' -Category 'Electronics' -Format 'Excel'",
  },
  {
    command: "Get-CustomerAnalytics",
    description: "কাস্টমার অ্যানালিটিক্স রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "Get-CustomerAnalytics -Period 'LastQuarter' -Segment 'Premium' -Metrics 'Retention,Revenue'",
  },
  {
    command: "Update-PriceList",
    description: "প্রাইস লিস্ট আপডেট করে",
    shell: "PowerShell",
    example: "Update-PriceList -Category 'Smartphones' -Adjustment 5 -AdjustmentType 'Percent'",
  },
  {
    command: "New-MarketingCampaign",
    description: "নতুন মার্কেটিং ক্যাম্পেইন তৈরি করে",
    shell: "PowerShell",
    example: "New-MarketingCampaign -Name 'Summer Sale 2023' -Budget 100000 -StartDate '2023-06-01'",
  },
  {
    command: "Get-EmployeePerformance",
    description: "কর্মচারীদের পারফরম্যান্স রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "Get-EmployeePerformance -Department 'Sales' -Quarter 'Q2' -Year '2023'",
  },
  {
    command: "Backup-BusinessData",
    description: "ব্যবসায়িক ডেটা ব্যাকআপ নেয়",
    shell: "PowerShell",
    example: "Backup-BusinessData -Path 'D:\\Backups' -Compress -IncludeDatabase -EncryptBackup",
  },
]

export default function BusinessAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ব্যবসায় প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান</h1>
      <p className="mb-8 text-lg">
        ব্যবসায় প্রতিষ্ঠান পরিচালনায় কমান্ড লাইন টুলস ব্যবহার করে দক্ষতা বাড়ান এবং আপনার ব্যবসার প্রবৃদ্ধি ত্বরান্বিত করুন।
      </p>

      <Tabs defaultValue="commands" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="commands">কমান্ড সমূহ</TabsTrigger>
          <TabsTrigger value="benefits">উপকারিতা</TabsTrigger>
          <TabsTrigger value="tutorials">টিউটোরিয়াল</TabsTrigger>
          <TabsTrigger value="resources">রিসোর্স</TabsTrigger>
        </TabsList>

        <TabsContent value="commands" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">ব্যবসায় প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড</h2>
          <p className="mb-6">
            নিচের কমান্ডগুলি ব্যবসায় প্রতিষ্ঠান পরিচালনার বিভিন্ন দিক যেমন বিক্রয়, ইনভেন্টরি, কাস্টমার ম্যানেজমেন্ট, মার্কেটিং, এবং প্রশাসনিক
            কাজের জন্য বিশেষভাবে ডিজাইন করা হয়েছে।
          </p>
          <CommandTable commands={businessCommands} />
        </TabsContent>

        <TabsContent value="benefits" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">কমান্ড লাইন ব্যবহারের উপকারিতা</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>অপারেশনাল দক্ষতা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>রুটিন ব্যবসায়িক প্রক্রিয়াগুলি স্বয়ংক্রিয় করে সময় এবং সম্পদ বাঁচান। ম্যানুয়াল কাজের তুলনায় 10 গুণ দ্রুত কাজ সম্পন্ন করুন।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ডেটা-ড্রিভেন সিদ্ধান্ত</CardTitle>
              </CardHeader>
              <CardContent>
                <p>দ্রুত এবং সঠিক ব্যবসায়িক রিপোর্ট তৈরি করে আরও ভালো সিদ্ধান্ত নিন। রিয়েল-টাইম ডেটা অ্যাক্সেস করুন যখনই প্রয়োজন।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>স্কেলেবিলিটি</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  আপনার ব্যবসা বড় হওয়ার সাথে সাথে, কমান্ড লাইন টুলস সহজেই স্কেল করতে পারে। একই অটোমেশন ছোট থেকে বড় অপারেশনে কাজ করে।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>খরচ সাশ্রয়</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  অটোমেশন ব্যবহার করে কর্মী খরচ কমান এবং মানবিক ত্রুটি থেকে সৃষ্ট খরচ এড়ান। গবেষণা দেখায় যে এটি অপারেশনাল খরচ 30-50%
                  কমাতে পারে।
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>কেস স্টাডি: ঢাকার একটি ই-কমার্স কোম্পানির সাফল্য গাথা</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                ঢাকার একটি মাঝারি আকারের ই-কমার্স কোম্পানি T-ALLY CLI টুলস ব্যবহার করে তাদের অপারেশন স্ব���়ংক্রিয় করার পর:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>অর্ডার প্রসেসিং সময় 85% কমেছে</li>
                <li>ইনভেন্টরি ম্যানেজমেন্ট ত্রুটি 95% কমেছে</li>
                <li>কাস্টমার সার্ভিস রেসপন্স টাইম 70% কমেছে</li>
                <li>অপারেশনাল খরচ 40% কমেছে</li>
                <li>বিক্রয় 120% বেড়েছে</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">ব্যবসায় প্রতিষ্ঠানের জন্য কমান্ড লাইন টিউটোরিয়াল</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>শুরু করার টিউটোরিয়াল</CardTitle>
                <CardDescription>ব্যবসায় প্রতিষ্ঠানের জন্য PowerShell ব্যবহার শুরু করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>PowerShell ইনস্টল এবং সেটআপ</li>
                  <li>প্রথম স্ক্রিপ্ট লেখা</li>
                  <li>বিক্রয় ডেটা প্রসেসিং</li>
                  <li>ইনভেন্টরি ম্যানেজমেন্ট</li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  টিউটোরিয়াল দেখুন
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>বিক্রয় এবং মার্কেটিং অটোমেশন</CardTitle>
                <CardDescription>বিক্রয় এবং মার্কেটিং প্রক্রিয়া স্বয়ংক্রিয় করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>বিক্রয় ডেটা অ্যানালাইসিস</li>
                  <li>কাস্টমার সেগমেন্টেশন</li>
                  <li>মার্কেটিং ক্যাম্পেইন ট্র্যাকিং</li>
                  <li>ROI অ্যানালাইসিস</li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  টিউটোরিয়াল দেখুন
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ফিন্যান্সিয়াল ম্যানেজমেন্ট</CardTitle>
                <CardDescription>ফিন্যান্সিয়াল প্রক্রিয়া স্বয়ংক্রিয় করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>ইনভয়েস জেনারেশন</li>
                  <li>এক্সপেন্স ট্র্যাকিং</li>
                  <li>ফিন্যান্সিয���াল রিপোর্টিং</li>
                  <li>ক্যাশ ফ্লো অ্যানালাইসিস</li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  টিউটোরিয়াল দেখুন
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">ব্যবসায় প্রতিষ্ঠানের জন্য রিসোর্স</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ডাউনলোডযোগ্য টেমপ্লেট</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>বিক্রয় ট্র্যাকিং সিস্টেম</li>
                  <li>ইনভেন্টরি ম্যানেজমেন্ট</li>
                  <li>কাস্টমার ম্যানেজমেন্ট</li>
                  <li>ফিন্যান্সিয়াল রিপোর্টিং</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  টেমপ্লেট ডাউনলোড করুন
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>প্রশিক্ষণ ভিডিও</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ব্যবসায় প্রতিষ্ঠানের জন্য PowerShell ভূমিকা</li>
                  <li>বিক্রয় ডেটা অ্যানালাইসিস</li>
                  <li>ইনভেন্টরি ম্যানেজমেন্ট অটোমেশন</li>
                  <li>ফিন্যান্সিয়াল রিপোর্টিং</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  ভিডিও দেখুন
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>ব্যবসায় প্রতিষ্ঠানের জন্য সম্পূর্ণ অটোমেশন সিস্টেম</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের সম্পূর্ণ ব্যবসায় প্রতিষ্ঠান অটোমেশন প্যাকেজ ডাউনলোড করুন, যাতে রয়েছে:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>100+ প্রি-কনফিগারড স্ক্রিপ্ট</li>
                  <li>বিক্রয় ম্যানেজমেন্ট সিস্টেম</li>
                  <li>ইনভেন্টরি ট্র্যাকিং টুলস</li>
                  <li>কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট</li>
                  <li>ফিন্যান্সিয়াল রিপোর্টিং টুলস</li>
                  <li>বিস্তারিত ডকুমেন্টেশন</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">সম্পূর্ণ প্যাকেজ ডাউনলোড করুন</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">আরও জানুন</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/educational" className="block">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>শিক্ষা প্রতিষ্ঠান প্রধানদের জন্য সমাধান</CardTitle>
              </CardHeader>
              <CardContent>
                <p>শিক্ষা প্রতিষ্ঠান পরিচালনার জন্য বিশেষ কমান্ড লাইন টুলস এবং অটোমেশন সমাধান।</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/nonprofit" className="block">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>অলাভজনক প্রতিষ্ঠান প্রধানদের জন্য সমাধান</CardTitle>
              </CardHeader>
              <CardContent>
                <p>অলাভজনক প্রতিষ্ঠান পরিচালনার জন্য বিশেষ কমান্ড লাইন টুলস এবং অটোমেশন সমাধান।</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/learn/powershell" className="block">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>PowerShell শিখুন</CardTitle>
              </CardHeader>
              <CardContent>
                <p>ব্যবসায় প্রতিষ্ঠান পরিচালনার জন্য PowerShell শিখুন এবং আপনার দক্ষতা বাড়ান।</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
