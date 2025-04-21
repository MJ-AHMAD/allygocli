import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommandTable } from "@/components/command-table"

export const metadata: Metadata = {
  title: "স্বাস্থ্যসেবা প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান - T-ALLY CLI",
  description: "স্বাস্থ্যসেবা প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড লাইন টুলস এবং সমাধান",
}

const healthcareCommands = [
  {
    command: "Get-PatientRecord",
    description: "রোগীর রেকর্ড পুনরুদ্ধার করে",
    shell: "PowerShell",
    example: "Get-PatientRecord -ID 'P12345' -Detailed",
  },
  {
    command: "New-Appointment",
    description: "নতুন অ্যাপয়েন্টমেন্ট তৈরি করে",
    shell: "PowerShell",
    example: "New-Appointment -PatientID 'P123' -DoctorID 'D456' -Date '2023-08-15' -Time '10:30'",
  },
  {
    command: "Export-MedicalReport",
    description: "মেডিকেল রিপোর্ট এক্সপোর্ট করে",
    shell: "PowerShell",
    example: "Export-MedicalReport -PatientID 'P123' -ReportType 'Lab' -Format 'PDF'",
  },
  {
    command: "Get-InventoryStatus",
    description: "মেডিকেল সাপ্লাই ইনভেন্টরি স্ট্যাটাস দেখায়",
    shell: "PowerShell",
    example: "Get-InventoryStatus -Category 'Medications' -BelowThreshold",
  },
  {
    command: "Update-TreatmentPlan",
    description: "রোগীর চিকিৎসা পরিকল্পনা আপডেট করে",
    shell: "PowerShell",
    example: "Update-TreatmentPlan -PatientID 'P123' -TreatmentID 'T789' -Status 'In Progress'",
  },
  {
    command: "Send-PatientReminder",
    description: "রোগীদের অ্যাপয়েন্টমেন্ট রিমাইন্ডার পাঠায়",
    shell: "PowerShell",
    example: "Send-PatientReminder -AppointmentDate '2023-08-15' -ReminderType 'SMS,Email'",
  },
  {
    command: "Get-StaffSchedule",
    description: "স্টাফদের সময়সূচী দেখায়",
    shell: "PowerShell",
    example: "Get-StaffSchedule -Department 'Cardiology' -Date '2023-08-15'",
  },
  {
    command: "Backup-MedicalData",
    description: "মেডিকেল ডেটা ব্যাকআপ নেয়",
    shell: "PowerShell",
    example: "Backup-MedicalData -Path 'D:\\Backups' -Compress -EncryptBackup -HIPAA",
  },
]

export default function HealthcareAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">স্বাস্থ্যসেবা প্রতিষ্ঠান প্রধানদের জন্য কমান্ড লাইন সমাধান</h1>
      <p className="mb-8 text-lg">
        স্বাস্থ্যসেবা প্রতিষ্ঠান পরিচালনায় কমান্ড লাইন টুলস ব্যবহার করে দক্ষতা বাড়ান এবং রোগী সেবার মান উন্নত করুন।
      </p>

      <Tabs defaultValue="commands" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="commands">কমান্ড সমূহ</TabsTrigger>
          <TabsTrigger value="benefits">উপকারিতা</TabsTrigger>
          <TabsTrigger value="tutorials">টিউটোরিয়াল</TabsTrigger>
          <TabsTrigger value="resources">রিসোর্স</TabsTrigger>
        </TabsList>

        <TabsContent value="commands" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">স্বাস্থ্যসেবা প্রতিষ্ঠান পরিচালনার জন্য উপযোগী কমান্ড</h2>
          <p className="mb-6">
            নিচের কমান্ডগুলি স্বাস্থ্যসেবা প্রতিষ্ঠান পরিচালনার বিভিন্ন দিক যেমন রোগী ম্যানেজমেন্ট, অ্যাপয়েন্টমেন্ট শিডিউলিং, মেডিকেল রেকর্ড,
            ইনভেন্টরি ম্যানেজমেন্ট, এবং প্রশাসনিক কাজের জন্য বিশেষভাবে ডিজাইন করা হয়েছে।
          </p>
          <CommandTable commands={healthcareCommands} />
        </TabsContent>

        <TabsContent value="benefits" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">কমান্ড লাইন ব্যবহারের উপকারিতা</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>রোগী সেবার উন্নতি</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  রোগী ম্যানেজমেন্ট এবং অ্যাপয়েন্টমেন্ট প্রক্রিয়া স্বয়ংক্রিয় করে রোগী সেবার মান উন্নত করুন। অপেক্ষার সময় কমান এবং সেবা
                  প্রদানের দক্ষতা বাড়ান।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>মেডিকেল ত্রুটি হ্রাস</CardTitle>
              </CardHeader>
              <CardContent>
                <p>অটোমেটেড মেডিকেল রেকর্ড এবং প্রেসক্রিপশন সিস্টেম ব্যবহার করে মেডিকেল ত্রুটি উল্লেখযোগ্যভাবে কমান।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>সম্পদের সর্বোত্তম ব্যবহার</CardTitle>
              </CardHeader>
              <CardContent>
                <p>স্টাফ শিডিউলিং এবং রিসোর্স অ্যালোকেশন টুলস ব্যবহার করে হাসপাতালের সম্পদের সর্বোত্তম ব্যবহার নিশ্চিত করুন।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ডেটা সুরক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <p>সংবেদনশীল মেডিকেল ডেটা সুরক্ষার জন্য উন্নত সুরক্ষা প্রোটোকল এবং নিয়মিত ব্যাকআপ সিস্টেম ব্যবহার করুন।</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>কেস স্টাডি: ঢাকার একটি হাসপাতালের সাফল্য গাথা</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                ঢাকার একটি মাঝারি আকারের হাসপাতাল T-ALLY CLI টুলস ব্যবহার করে তাদের প্রশাসনিক প্রক্রিয়া স্বয়ংক্রিয় করার পর:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>রোগী অপেক্ষার সময় 70% কমেছে</li>
                <li>মেডিকেল ত্রুটি 85% কমেছে</li>
                <li>স্টাফ প্রোডাক্টিভিটি 45% বেড়েছে</li>
                <li>প্রশাসনিক খরচ 30% কমেছে</li>
                <li>রোগী সন্তুষ্টি 90% বেড়েছে</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য কমান্ড লাইন টিউটোরিয়াল</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>শুরু করার টিউটোরিয়াল</CardTitle>
                <CardDescription>স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য PowerShell ব্যবহার শুরু করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>PowerShell ইনস্টল এবং সেটআপ</li>
                  <li>প্রথম স্ক্রিপ্ট লেখা</li>
                  <li>রোগী ডেটা ম্যানেজমেন্ট</li>
                  <li>অ্যাপয়েন্টমেন্ট শিডিউলিং</li>
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
                <CardTitle>মেডিকেল রেকর্ড ম্যানেজমেন্ট</CardTitle>
                <CardDescription>মেডিকেল রেকর্ড ম্যানেজমেন্ট অটোমেশন</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>রোগী রেকর্ড সেটআপ</li>
                  <li>মেডিকেল হিস্ট্রি ট্র্যাকিং</li>
                  <li>ল্যাব রিপোর্ট ম্যানেজমেন্ট</li>
                  <li>প্রেসক্রিপশন সিস্টেম</li>
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
                <CardTitle>মেডিকেল ডেটা সুরক্ষা</CardTitle>
                <CardDescription>মেডিকেল ডেটা সুরক্ষা এবং ব্যাকআপ</CardDescription>
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
          <h2 className="text-2xl font-semibold mb-4">স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য রিসোর্স</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ডাউনলোডযোগ্য টেমপ্লেট</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>রোগী ম্যানেজমেন্ট সিস্টেম</li>
                  <li>অ্যাপয়েন্টমেন্ট শিডিউলার</li>
                  <li>মেডিকেল ইনভেন্টরি ট্র্যাকার</li>
                  <li>স্টাফ শিডিউলিং টুল</li>
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
                  <li>স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য PowerShell ভূমিকা</li>
                  <li>রোগী ম্যানেজমেন্ট অটোমেশন</li>
                  <li>মেডিকেল রেকর্ড ম্যানেজমেন্ট</li>
                  <li>মেডিকেল ডেটা সুরক্ষা</li>
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
                <CardTitle>স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য সম্পূর্ণ অটোমেশন সিস্টেম</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের সম্পূর্ণ স্বাস্থ্যসেবা প্রতিষ্ঠান অটোমেশন প্যাকেজ ডাউনলোড করুন, যাতে রয়েছে:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>100+ প্রি-কনফিগারড স্ক্রিপ্ট</li>
                  <li>রোগী ম্যানেজমেন্ট সিস্টেম</li>
                  <li>অ্যাপয়েন্টমেন্ট শিডিউলিং টুলস</li>
                  <li>মেডিকেল রেকর্ড ম্যানেজমেন্ট</li>
                  <li>মেডিকেল ইনভেন্টরি ট্র্যাকিং</li>
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
                <p>স্বাস্থ্যসেবা প্রতিষ্ঠান পরিচালনার জন্য PowerShell শিখুন এবং আপনার দক্ষতা বাড়ান।</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
