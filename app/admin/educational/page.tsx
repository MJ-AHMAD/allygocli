import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommandTable } from "@/components/command-table"

export const metadata: Metadata = {
  title: "শিক্ষা প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান - T-ALLY CLI",
  description: "শিক্ষা প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড লাইন টুলস এবং সমাধান",
}

const educationalCommands = [
  {
    command: "Get-StudentRecord",
    description: "ছাত্র-ছাত্রীদের রেকর্ড পুনরুদ্ধার করে",
    shell: "PowerShell",
    example: "Get-StudentRecord -ID 12345 -Detailed",
  },
  {
    command: "Export-GradeSheet",
    description: "গ্রেড শীট এ���্সেল ফাইলে এক্সপোর্ট করে",
    shell: "PowerShell",
    example: "Export-GradeSheet -Class '10A' -Subject 'Math' -OutputPath 'C:\\Grades'",
  },
  {
    command: "New-AdmissionForm",
    description: "নতুন ভর্তি ফর্ম তৈরি করে",
    shell: "PowerShell",
    example: "New-AdmissionForm -TemplatePath 'C:\\Templates\\Admission.docx' -OutputPath 'C:\\Forms'",
  },
  {
    command: "Send-ParentNotification",
    description: "অভিভাবকদের নোটিফিকেশন পাঠায়",
    shell: "PowerShell",
    example: "Send-ParentNotification -Class '9B' -Message 'আগামীকাল স্কুল বন্ধ থাকবে' -Channel 'Email,SMS'",
  },
  {
    command: "Update-TeacherSchedule",
    description: "শিক্ষকদের সময়সূচী আপডেট করে",
    shell: "PowerShell",
    example: "Update-TeacherSchedule -TeacherID 'T123' -Day 'Monday' -Period '2' -Subject 'Science'",
  },
  {
    command: "Backup-SchoolDatabase",
    description: "স্কুলের ডাটাবেস ব্যাকআপ নেয়",
    shell: "PowerShell",
    example: "Backup-SchoolDatabase -Path 'D:\\Backups' -Compress",
  },
  {
    command: "Get-AttendanceReport",
    description: "উপস্থিতি রিপোর্ট তৈরি করে",
    shell: "PowerShell",
    example: "Get-AttendanceReport -Class '8C' -Month 'March' -Year '2023' -Format 'PDF'",
  },
  {
    command: "New-ExamSchedule",
    description: "পরীক্ষার সময়সূচী তৈরি করে",
    shell: "PowerShell",
    example: "New-ExamSchedule -Term 'Midterm' -StartDate '2023-04-10' -EndDate '2023-04-20'",
  },
]

export default function EducationalAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">শিক্ষা প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান</h1>
      <p className="mb-8 text-lg">
        আধুনিক শিক্ষা প্রতিষ্ঠান পরিচালনায় কমান্ড লাইন টুলস ব্যবহার করে দক্ষতা বাড়ান এবং প্রশাসনিক কাজকে স্বয়ংক্রিয় করুন।
      </p>

      <Tabs defaultValue="commands" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="commands">কমান্ড সমূহ</TabsTrigger>
          <TabsTrigger value="benefits">উপকারিতা</TabsTrigger>
          <TabsTrigger value="tutorials">টিউটোরিয়াল</TabsTrigger>
          <TabsTrigger value="resources">রিসোর্স</TabsTrigger>
        </TabsList>

        <TabsContent value="commands" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">শিক্ষা প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড</h2>
          <p className="mb-6">
            নিচের কমান্ডগুলি শিক্ষা প্রতিষ্ঠান পরিচালনার বিভিন্ন দিক যেমন ছাত্র রেকর্ড ম্যানেজমেন্ট, গ্রেডিং, উপস্থিতি ট্র্যাকিং, এবং প্রশাসনিক
            কাজের জন্য বিশেষভাবে ডিজাইন করা হয়েছে।
          </p>
          <CommandTable commands={educationalCommands} />
        </TabsContent>

        <TabsContent value="benefits" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">কমান্ড লাইন ব্যবহারের উপকারিতা</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>সময় সাশ্রয়</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  রুটিন কাজগুলি স্বয়ংক্রিয় করে প্রতিদিন কয়েক ঘন্টা সময় বাঁচান। উদাহরণস্বরূপ, একটি সিঙ্গেল কমান্ড দিয়ে সমস্ত ছাত্রের গ্রেড শীট
                  জেনারেট করুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ত্রুটি হ্রাস</CardTitle>
              </CardHeader>
              <CardContent>
                <p>ম্যানুয়াল ডেটা এন্ট্রি এবং প্রক্রিয়াকরণের তুলনায় স্বয়ংক্রিয় কমান্ড ব্যবহার করে মানবিক ত্রুটি উল্লেখযোগ্যভাবে কমান।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>স্কেলেবিলিটি</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  আপনার প্রতিষ্ঠান বড় হওয়ার সাথে সাথে, কমান্ড লাইন টুলস সহজেই স্কেল করতে পারে। একই কমান্ড 10 জন ছাত্র বা 10,000 জন ছাত্রের
                  জন্য কাজ করতে পারে।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ডেটা সুরক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>নিয়মিত অটোমেটেড ব্যাকআপ এবং সুরক্ষা প্রোটোকল ব্যবহার করে গুরুত্বপূর্ণ শিক্ষা সংক্রান্ত ডেটা সুরক্ষিত রাখুন।</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>কেস স্টাডি: ঢাকার একটি স্কুলের সাফল্য গাথা</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                ঢাকার একটি প্রতিষ্ঠিত স্কুল T-ALLY CLI টুলস ব্যবহার করে তাদের প্রশাসনিক প্রক্রিয়া স্বয়ংক্রিয় করার পর:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>প্রশাসনিক কাজে সময় 68% কমেছে</li>
                <li>ডেটা এন্ট্রি ত্রুটি 92% কমেছে</li>
                <li>শিক্ষকদের প্রতিবেদন তৈরিতে সময় 75% কমেছে</li>
                <li>অভিভাবকদের সাথে যোগাযোগ 3 গুণ বেড়েছে</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">শিক্ষা প্রতিষ্ঠানের জন্য কমান্ড লাইন টিউটোরিয়াল</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>শুরু করার টিউটোরিয়াল</CardTitle>
                <CardDescription>শিক্ষা প্রতিষ্ঠানের জন্য PowerShell ব্যবহার শুরু করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>PowerShell ইনস্টল এবং সেটআপ</li>
                  <li>প্রথম স্ক্রিপ্ট লেখা</li>
                  <li>ছাত্র ডেটা ম্যানেজমেন্ট অটোমেশন</li>
                  <li>রিপোর্ট জেনারেশন</li>
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
                <CardTitle>উন্নত অটোমেশন</CardTitle>
                <CardDescription>শিক্ষা প্রতিষ্ঠানের জন্য উন্নত অটোমেশন টেকনিক</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>স্কেজুলড টাস্ক সেটআপ</li>
                  <li>ব্যাচ প্রসেসিং</li>
                  <li>ডেটাবেস ইন্টিগ্রেশন</li>
                  <li>রিপোর্ট অটোমেশন</li>
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
                <CardTitle>ডেটা এনালিটিক্স</CardTitle>
                <CardDescription>শিক্ষা প্রতিষ্ঠানের ডেটা এনালাইসিস</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>ছাত্র পারফরম্যান্স ট্র্যাকিং</li>
                  <li>উপস্থিতি প্যাটার্ন বিশ্লেষণ</li>
                  <li>শিক্ষক কার্যকারিতা মূল্যায়ন</li>
                  <li>ট্রেন্ড রিপোর্টিং</li>
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
          <h2 className="text-2xl font-semibold mb-4">শিক্ষা প্রতিষ্ঠানের জন্য রিসোর্স</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ডাউনলোডযোগ্য টেমপ্লেট</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ছাত্র ডেটাবেস স্কিমা</li>
                  <li>রিপোর্ট কার্ড জেনারেটর</li>
                  <li>উপস্থিতি ট্র্যাকার</li>
                  <li>পরীক্ষা সময়সূচী জেনারেটর</li>
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
                  <li>শিক্ষা প্রতিষ্ঠানের জন্য PowerShell ভূমিকা</li>
                  <li>ছাত্র ডেটা ম্যানেজমেন্ট অটোমেশন</li>
                  <li>রিপোর্ট জেনারেশন মাস্টারক্লাস</li>
                  <li>ডেটা সুরক্ষা এবং ব্যাকআপ</li>
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
                <CardTitle>শিক্ষা প্রতিষ্ঠানের জন্য সম্পূর্ণ অটোমেশন সিস্টেম</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের সম্পূর্ণ শিক্ষা প্রতিষ্ঠান অটোমেশন প্যাকেজ ডাউনলোড করুন, যাতে রয়েছে:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>100+ প্রি-কনফিগারড স্ক্রিপ্ট</li>
                  <li>ছাত্র ম্যানেজমেন্ট সিস্টেম</li>
                  <li>গ্রেড ট্র্যাকিং এবং রিপোর্টিং</li>
                  <li>অভিভাবক যোগাযোগ সিস্টেম</li>
                  <li>ফিন্যান্সিয়াল ট্র্যাকিং টুলস</li>
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
                <p>শিক্ষা প্রতিষ্ঠান পরিচালনার জন্য PowerShell শিখুন এবং আপনার দক্ষতা বাড়ান।</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
