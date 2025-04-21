import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommandTable } from "@/components/command-table"

export const metadata: Metadata = {
  title: "অলাভজনক প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান - T-ALLY CLI",
  description: "অলাভজনক প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড লাইন টুলস এবং সমাধান",
}

const nonprofitCommands = [
  {
    command: "Get-DonorReport",
    description: "দাতাদের তথ্য এবং দান সংক্রান্ত রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "Get-DonorReport -StartDate '2023-01-01' -EndDate '2023-12-31' -Format 'CSV'",
  },
  {
    command: "New-FundraisingCampaign",
    description: "নতুন ফান্ডরেইজিং ক্যাম্পেইন তৈরি করে",
    shell: "PowerShell",
    example: "New-FundraisingCampaign -Name 'Winter Relief 2023' -Goal 500000 -StartDate '2023-11-01'",
  },
  {
    command: "Send-ThankYouEmail",
    description: "দাতাদের ধন্যবাদ ইমেইল পাঠায়",
    shell: "PowerShell",
    example: "Send-ThankYouEmail -DonorID 'D123' -TemplatePath 'C:\\Templates\\ThankYou.html'",
  },
  {
    command: "Export-VolunteerHours",
    description: "স্বেচ্ছাসেবকদের কাজের ঘন্টা এক্সপোর্ট করে",
    shell: "PowerShell",
    example: "Export-VolunteerHours -Month 'June' -Year '2023' -OutputPath 'C:\\Reports'",
  },
  {
    command: "Get-GrantDeadlines",
    description: "আসন্ন গ্রান্ট ডেডলাইন দেখায়",
    shell: "PowerShell",
    example: "Get-GrantDeadlines -NextDays 30 -Category 'Education'",
  },
  {
    command: "New-BudgetReport",
    description: "বাজেট রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "New-BudgetReport -Quarter 'Q2' -Year '2023' -Department 'Programs'",
  },
  {
    command: "Update-BeneficiaryDatabase",
    description: "উপকারভোগীদের ডাটাবেস আপডেট করে",
    shell: "PowerShell",
    example: "Update-BeneficiaryDatabase -ImportFile 'C:\\Data\\NewBeneficiaries.csv'",
  },
  {
    command: "Backup-OrganizationData",
    description: "প্রতিষ্ঠানের ডেটা ব্যাকআপ নেয়",
    shell: "PowerShell",
    example: "Backup-OrganizationData -Path 'D:\\Backups' -Compress -IncludeDatabase",
  },
]

export default function NonprofitAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">অলাভজনক প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান</h1>
      <p className="mb-8 text-lg">অলাভজনক প্রতিষ্ঠান পরিচালনায় কমান্ড লাইন টুলস ব্যবহার করে দক্ষতা বাড়ান এবং আপনার সংস্থার প্রভাব বাড়ান।</p>

      <Tabs defaultValue="commands" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="commands">কমান্ড সমূহ</TabsTrigger>
          <TabsTrigger value="benefits">উপকারিতা</TabsTrigger>
          <TabsTrigger value="tutorials">টিউটোরিয়াল</TabsTrigger>
          <TabsTrigger value="resources">রিসোর্স</TabsTrigger>
        </TabsList>

        <TabsContent value="commands" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">অলাভজনক প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড</h2>
          <p className="mb-6">
            নিচের কমান্ডগুলি অলাভজনক প্রতিষ্ঠান পরিচালনার বিভিন্ন দিক যেমন দাতা ম্যানেজমেন্ট, ফান্ডরেইজিং, স্বেচ্ছাসেবক ম্যানেজমেন্ট, এবং
            প্রশাসনিক কাজের জন্য বিশেষভাবে ডিজাইন করা হয়েছে।
          </p>
          <CommandTable commands={nonprofitCommands} />
        </TabsContent>

        <TabsContent value="benefits" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">কমান্ড লাইন ব্যবহারের উপকারিতা</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>সীমিত সম্পদের সর্বোত্তম ব্যবহার</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  অলাভজনক প্রতিষ্ঠানগুলি প্রায়ই সীমিত সম্পদ নিয়ে কাজ করে। কমান্ড লাইন অটোমেশন আপনাকে কম সময়ে এবং কম খরচে আরও বেশি কাজ
                  করতে সাহায্য করে।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>দাতা সম্পর্ক উন্নতি</CardTitle>
              </CardHeader>
              <CardContent>
                <p>অটোমেটেড দাতা ম্যানেজমেন্ট এবং যোগাযোগ সিস্টেম ব্যবহার করে দাতাদের সাথে আরও ভালো সম্পর্ক গড়ে তুলুন এবং দান বাড়ান।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>স্বচ্ছতা এবং জবাবদিহিতা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>অটোমেটেড রিপোর্টিং এবং ট্র্যাকিং সিস্টেম ব্যবহার করে আপনার প্রতিষ্ঠানের স্বচ্ছতা এবং জবাবদিহিতা বাড়ান।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>প্রভাব পরিমাপ</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  ডেটা-ড্রিভেন টুলস ব্যবহার করে আপনার প্রতিষ্ঠানের প্রভাব পরিমাপ করুন এবং ফান্ডিং সংস্থাগুলিকে আরও ভালো রিপোর্ট প্রদান করুন।
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>কেস স্টাডি: বাংলাদেশের একটি এনজিও-এর সাফল্য গাথা</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                বাংলাদেশের একটি মাঝারি আকারের এনজিও T-ALLY CLI টুলস ব্যবহার করে তাদের প্রশাসনিক প্রক্রিয়া স্বয়ংক্রিয় করার পর:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>প্রশাসনিক খরচ 45% কমেছে</li>
                <li>দাতাদের সাথে যোগাযোগ 200% বেড়েছে</li>
                <li>ফান্ডরেইজিং 78% বেড়েছে</li>
                <li>স্বেচ্ছাসেবক রিটেনশন 60% বেড়েছে</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">অলাভজনক প্রতিষ্ঠানের জন্য কমান্ড লাইন টিউটোরিয়াল</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>শুরু করার টিউটোরিয়াল</CardTitle>
                <CardDescription>অলাভজনক প্রতিষ্ঠানের জন্য PowerShell ব্যবহার শুরু করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>PowerShell ইনস্টল এবং সেটআপ</li>
                  <li>প্রথম স্ক্রিপ্ট লেখা</li>
                  <li>দাতা ডেটাবেস ম্যানেজমেন্ট</li>
                  <li>ফান্ডরেইজিং ট্র্যাকিং</li>
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
                <CardTitle>দাতা ম্যানেজমেন্ট</CardTitle>
                <CardDescription>দাতা ম্যানেজমেন্ট এবং যোগাযোগ অটোমেশন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>দাতা ডেটাবেস সেটআপ</li>
                  <li>অটোমেটেড থ্যাংক-ইউ ইমেইল</li>
                  <li>দান ট্র্যাকিং এবং রিপোর্টিং</li>
                  <li>রিকারিং দান ম্যানেজমেন্ট</li>
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
                <CardTitle>গ্রান্ট ম্যানেজমেন্ট</CardTitle>
                <CardDescription>গ্রান্ট ট্র্যাকিং এবং রিপোর্টিং</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>গ্রান্ট অপরচুনিটি ট্র্যাকিং</li>
                  <li>গ্রান্ট অ্যাপ্লিকেশন ম্যানেজমেন্ট</li>
                  <li>গ্রান্ট রিপোর্টিং অটোমেশন</li>
                  <li>ডেডলাইন রিমাইন্ডার সিস্টেম</li>
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
          <h2 className="text-2xl font-semibold mb-4">অলাভজনক প্রতিষ্ঠানের জন্য রিসোর্স</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ডাউনলোডযোগ্য টেমপ্লেট</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>দাতা ডেটাবেস স্কিমা</li>
                  <li>ফান্ডরেইজিং ট্র্যাকার</li>
                  <li>গ্রান্ট ম্যানেজমেন্ট সিস্টেম</li>
                  <li>স্বেচ্ছাসেবক ম্যানেজমেন্ট টুল</li>
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
                  <li>অলাভজনক প্রতিষ্ঠানের জন্য PowerShell ভূমিকা</li>
                  <li>দাতা ম্যানেজমেন্ট অটোমেশন</li>
                  <li>ফান্ডরেইজিং ট্র্যাকিং মাস্টারক্লাস</li>
                  <li>প্রভাব রিপোর্টিং</li>
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
                <CardTitle>অলাভজনক প্রতিষ্ঠানের জন্য সম্পূর্ণ অটোমেশন সিস্টেম</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের সম্পূর্ণ অলাভজনক প্রতিষ্ঠান অটোমেশন প্যাকেজ ডাউনলোড করুন, যাতে রয়েছে:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>100+ প্রি-কনফিগারড স্ক্রিপ্ট</li>
                  <li>দাতা ম্যানেজমেন্ট সিস্টেম</li>
                  <li>ফান্ডরেইজিং ট্র্যাকিং টুলস</li>
                  <li>স্বেচ্ছাসেবক ম্যানেজমেন্ট সিস্টেম</li>
                  <li>গ্রান্ট ট্র্যাকিং এবং রিপোর্টিং</li>
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
                <p>অলাভজনক প্রতিষ্ঠান পরিচালনার জন্য PowerShell শিখুন এবং আপনার দক্ষতা বাড়ান।</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
