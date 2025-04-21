import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommandTable } from "@/components/command-table"

export const metadata: Metadata = {
  title: "সরকারি প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান - T-ALLY CLI",
  description: "সরকারি প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড লাইন টুলস এবং সমাধান",
}

const governmentCommands = [
  {
    command: "Get-CitizenRecord",
    description: "নাগরিকদের রেকর্ড পুনরুদ্ধার করে",
    shell: "PowerShell",
    example: "Get-CitizenRecord -NID '1234567890' -Detailed",
  },
  {
    command: "New-ServiceRequest",
    description: "নতুন সেবা অনুরোধ তৈরি করে",
    shell: "PowerShell",
    example: "New-ServiceRequest -CitizenID 'C123' -ServiceType 'Birth Certificate' -Priority 'Normal'",
  },
  {
    command: "Export-DepartmentReport",
    description: "বিভাগীয় রিপোর্ট এক্সপোর্ট করে",
    shell: "PowerShell",
    example: "Export-DepartmentReport -Department 'Health' -Month 'June' -Year '2023' -Format 'PDF'",
  },
  {
    command: "Get-BudgetAllocation",
    description: "বাজেট বরাদ্দ সম্পর্কিত তথ্য দেখায়",
    shell: "PowerShell",
    example: "Get-BudgetAllocation -FiscalYear '2023-2024' -Department 'Education' -Detailed",
  },
  {
    command: "Update-ProjectStatus",
    description: "প্রকল্পের স্ট্যাটাস আপডেট করে",
    shell: "PowerShell",
    example: "Update-ProjectStatus -ProjectID 'P123' -Status 'In Progress' -CompletionPercentage 65",
  },
  {
    command: "Send-PublicNotification",
    description: "জনসাধারণের জন্য নোটিফিকেশন পাঠায়",
    shell: "PowerShell",
    example:
      "Send-PublicNotification -Title 'Tax Deadline' -Message 'Tax submission deadline extended' -Channels 'SMS,Email,Portal'",
  },
  {
    command: "Get-EmployeeAttendance",
    description: "কর্মচারীদের উপস্থিতি রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "Get-EmployeeAttendance -Department 'Administration' -Month 'July' -Year '2023'",
  },
  {
    command: "Backup-GovernmentData",
    description: "সরকারি ডেটা ব্যাকআপ নেয়",
    shell: "PowerShell",
    example: "Backup-GovernmentData -Path 'D:\\Backups' -Compress -EncryptBackup -Classification 'Confidential'",
  },
]

export default function GovernmentAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">সরকারি প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান</h1>
      <p className="mb-8 text-lg">সরকারি প্রতিষ্ঠান পরিচালনায় কমান্ড লাইন টুলস ব্যবহার করে দক্ষতা বাড়ান এবং জনসেবা উন্নত করুন।</p>

      <Tabs defaultValue="commands" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="commands">কমান্ড সমূহ</TabsTrigger>
          <TabsTrigger value="benefits">উপকারিতা</TabsTrigger>
          <TabsTrigger value="tutorials">টিউটোরিয়াল</TabsTrigger>
          <TabsTrigger value="resources">রিসোর্স</TabsTrigger>
        </TabsList>

        <TabsContent value="commands" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">সরকারি প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড</h2>
          <p className="mb-6">
            নিচের কমান্ডগুলি সরকারি প্রতিষ্ঠান পরিচালনার বিভিন্ন দিক যেমন নাগরিক সেবা, প্রকল্প ম্যানেজমেন্ট, বাজেট ট্র্যাকিং, কর্মচারী
            ম্যানেজমেন্ট, এবং প্রশাসনিক কাজের জন্য বিশেষভাবে ডিজাইন করা হয়েছে।
          </p>
          <CommandTable commands={governmentCommands} />
        </TabsContent>

        <TabsContent value="benefits" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">কমান্ড লাইন ব্যবহারের উপকারিতা</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>সেবা প্রদানের দক্ষতা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  নাগরিক সেবা প্রদান প্রক্রিয়া স���বয়ংক্রিয় করে সেবা প্রদানের সময় উল্লেখযোগ্যভাবে কমান। ম্যানুয়াল প্রক্রিয়ার তুলনায় 5-10 গুণ দ্রুত সেবা
                  প্রদান করুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>স্বচ্ছতা এবং জবাবদিহিতা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>অটোমেটেড ট্র্যাকিং এবং রিপোর্টিং সিস্টেম ব্যবহার করে সরকারি কার্যক্রমের স্বচ্ছতা এবং জবাবদিহিতা বাড়ান।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>সম্পদের সর্বোত্তম ব্যবহার</CardTitle>
              </CardHeader>
              <CardContent>
                <p>বাজেট ট্র্যাকিং এবং রিসোর্স অ্যালোকেশন টুলস ব্যবহার করে সরকারি সম্পদের সর্বোত্তম ব্যবহার নিশ্চিত করুন।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ডেটা সুরক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>সরকারি ডেটা সুরক্ষার জন্য উন্নত সুরক্ষা প্রোটোকল এবং নিয়মিত ব্যাকআপ সিস্টেম ব্যবহার করুন।</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>কেস স্টাডি: বাংলাদেশের একটি সরকারি দপ্তরের সাফল্য গাথা</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                বাংলাদেশের একটি সরকারি দপ্তর T-ALLY CLI টুলস ব্যবহার করে তাদের প্রশাসনিক প্রক্রিয়া স্বয়ংক্রিয় করার পর:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>নাগরিক সেবা প্রদানের সময় 80% কমেছে</li>
                <li>প্রশাসনিক খরচ 35% কমেছে</li>
                <li>কাগজের ব্যবহার 90% কমেছে</li>
                <li>নাগরিক সন্তুষ্টি 75% বেড়েছে</li>
                <li>কর্মচারী দক্ষতা 60% বেড়েছে</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">সরকারি প্রতিষ্ঠানের জন্য কমান্ড লাইন টিউটোরিয়াল</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>শুরু করার টিউটোরিয়াল</CardTitle>
                <CardDescription>সরকারি প্রতিষ্ঠানের জন্য PowerShell ব্যবহার শুরু করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>PowerShell ইনস্টল এবং সেটআপ</li>
                  <li>প্রথম স্ক্রিপ্ট লেখা</li>
                  <li>নাগরিক ডেটা ম্যানেজমেন্ট</li>
                  <li>সেবা ট্র্যাকিং</li>
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
                <CardTitle>প্রকল্প ম্যানেজমেন্ট</CardTitle>
                <CardDescription>সরকারি প্রকল্প ম্যানেজমেন্ট অটোমেশন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>প্রকল্প সেটআপ</li>
                  <li>প্রকল্প ট্র্যাকিং</li>
                  <li>বাজেট ম্যানেজমেন্ট</li>
                  <li>প্রকল্প রিপোর্টিং</li>
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
                <CardTitle>ডেটা সুরক্ষা</CardTitle>
                <CardDescription>সরকারি ডেটা সুরক্ষা এবং ব্যাকআপ</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>ডেটা এনক্রিপশন</li>
                  <li>নিয়মিত ব্যাকআপ</li>
                  <li>অ্যাক্সেস কন্ট্রোল</li>
                  <li>সিকিউরিটি অডিট</li>
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
          <h2 className="text-2xl font-semibold mb-4">সরকারি প্রতিষ্ঠানের জন্য রিসোর্স</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ডাউনলোডযোগ্য টেমপ্লেট</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>নাগরিক সেবা ম্যানেজমেন্ট সিস্টেম</li>
                  <li>প্রকল্প ট্র্যাকিং টুল</li>
                  <li>বাজেট ম্যানেজমেন্ট সিস্টেম</li>
                  <li>কর্মচারী ম্যানেজমেন্ট টুল</li>
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
                  <li>সরকারি প্রতিষ্ঠানের জন্য PowerShell ভূমিকা</li>
                  <li>নাগরিক সেবা অটোমেশন</li>
                  <li>প্রকল্প ম্যানেজমেন্ট</li>
                  <li>ডেটা সুরক্ষা</li>
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
                <CardTitle>সরকারি প্রতিষ্ঠানের জন্য সম্পূর্ণ অটোমেশন সিস্টেম</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের সম্পূর্ণ সরকারি প্রতিষ্ঠান অটোমেশন প্যাকেজ ডাউনলোড করুন, যাতে রয়েছে:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>100+ প্রি-কনফিগারড স্ক্রিপ্ট</li>
                  <li>নাগরিক সেবা ম্যানেজমেন্ট সিস্টেম</li>
                  <li>প্রকল্প ট্র্যাকিং এবং রিপোর্টিং</li>
                  <li>বাজেট ম্যানেজমেন্ট টুলস</li>
                  <li>কর্মচারী ম্যানেজমেন্ট সিস্টেম</li>
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

          <Link href="/admin/business" className="block">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>ব্যবসায় প্রতিষ্ঠান প্রধানদের জন্য সমাধান</CardTitle>
              </CardHeader>
              <CardContent>
                <p>ব্যবসায় প্রতিষ্ঠান পরিচালনার জন্য বিশেষ কমান্ড লাইন টুলস এবং অটোমেশন সমাধান।</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/learn/powershell" className="block">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>PowerShell শিখুন</CardTitle>
              </CardHeader>
              <CardContent>
                <p>সরকারি প্রতিষ্ঠান পরিচালনার জন্য PowerShell শিখুন এবং আপনার দক্ষতা বাড়ান।</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
