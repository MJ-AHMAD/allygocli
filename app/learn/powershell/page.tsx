import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Command, ArrowLeft, Terminal, Code, Lightbulb, BookOpen, Rocket, Sparkles, Zap } from "lucide-react"

export default function PowerShellLearnPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Link href="/commands/powershell">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl flex items-center gap-2">
              <Command className="h-8 w-8 text-primary" />
              পাওয়ারশেল শিখুন
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">কমান্ড লাইন ইন্টারফেসের মজাদার দুনিয়ায় স্বাগতম</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-lg p-6 border border-blue-100 dark:border-blue-900">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                <Terminal className="h-32 w-32 text-primary" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">পাওয়ারশেল - আধুনিক কমান্ড লাইন অভিজ্ঞতা</h2>
              <p className="mb-4">
                পাওয়ারশেল শুধু একটি কমান্ড লাইন টুল নয়, এটি একটি সম্পূর্ণ নতুন ধরনের কম্পিউটিং অভিজ্ঞতা। এটি আপনাকে আপনার কম্পিউটারের সাথে
                সরাসরি যোগাযোগ করতে সাহায্য করে, যেন আপনি একটি জাদুকরের মতো আপনার সিস্টেমকে নিয়ন্ত্রণ করছেন।
              </p>
              <p>
                পাওয়ারশেল শেখা শুধু কমান্ড মুখস্থ করা নয়, এটি একটি নতুন ভাষা শেখার মতো - একটি ভাষা যা আপনার কম্পিউটার বোঝে এবং সম্মান করে। এই
                পৃষ্ঠায়, আমরা আপনাকে পাওয়ারশেলের মজাদার দিকগুলি দেখাব, যাতে আপনি এটি শিখতে উৎসাহিত হন।
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="intro" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="intro">পরিচিতি</TabsTrigger>
            <TabsTrigger value="why">কেন শিখবেন</TabsTrigger>
            <TabsTrigger value="fun">মজাদার প্রজেক্ট</TabsTrigger>
            <TabsTrigger value="start">শুরু করুন</TabsTrigger>
          </TabsList>

          <TabsContent value="intro" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  পাওয়ারশেল কি?
                </CardTitle>
                <CardDescription>পাওয়ারশেলের মূল ধারণা এবং ইতিহাস</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  পাওয়ারশেল হল মাইক্রোসফ্টের একটি শক্তিশালী কমান্ড-লাইন শেল এবং স্ক্রিপ্টিং ভাষা, যা ২০০৬ সালে প্রথম প্রকাশিত হয়। এটি উইন্ডোজ
                  অপারেটিং সিস্টেমের জন্য বিশেষভাবে ডিজাইন করা হয়েছে, কিন্তু এখন লিনাক্স এবং ম্যাকওএসেও উপলব্ধ।
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    আকর্ষণীয় তথ্য
                  </h3>
                  <p>
                    পাওয়ারশেলের নাম "Monad" ছিল এর প্রাথমিক বিকাশের সময়। এটি একটি দার্শনিক ধারণা থেকে নেওয়া, যা একক একক থেকে জটিল
                    সিস্টেম তৈরি করার ধারণাকে বোঝায়। ঠিক যেমন পাওয়ারশেল সহজ কমান্ড থেকে জটিল স্ক্রিপ্ট তৈরি করতে পারে!
                  </p>
                </div>
                <p>
                  পাওয়ারশেল সাধারণ কমান্ড প্রম্পট (CMD) থেকে অনেক বেশি শক্তিশালী। এটি .NET ফ্রেমওয়ার্কের উপর ভিত্তি করে তৈরি, যা এটিকে
                  অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং এর সুবিধা দেয়। এর মানে হল আপনি শুধু টেক্সট নয়, বরং সম্পূর্ণ অবজেক্ট নিয়ে কাজ করতে পারেন।
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">CMD vs PowerShell</h4>
                    <p className="text-sm">
                      CMD শুধু টেক্সট আউটপুট দেয়, কিন্তু পাওয়ারশেল স্ট্রাকচার্ড ডেটা দেয় যা আপনি ফিল্টার, সর্ট, এবং ম্যানিপুলেট করতে পারেন।
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">পাওয়ারশেলের বিশেষত্ব</h4>
                    <p className="text-sm">
                      পাওয়ারশেল "cmdlet" (কমান্ডলেট) ব্যবহার করে, যা "Verb-Noun" প্যাটার্নে লেখা হয়, যেমন Get-Process বা
                      Set-Location।
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  পাওয়ারশেলের মূল বৈশিষ্ট্য
                </CardTitle>
                <CardDescription>পাওয়ারশেলকে অনন্য করে তোলে এমন বৈশিষ্ট্য</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      অবজেক্ট-ওরিয়েন্টেড
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      পাওয়ারশেল টেক্সট নয়, অবজেক্ট নিয়ে কাজ করে। এটি আপনাকে ডেটা নিয়ে আরও সহজে কাজ করতে দেয়।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      পাইপলাইন
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      একটি কমান্ডের আউটপুট অন্য কমান্ডের ইনপুট হিসেবে ব্যবহার করতে পারেন, যা জটিল কাজগুলিকে সহজ করে।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      স্ক্রিপ্টিং ক্ষমতা
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      পাওয়ারশেল একটি পূর্ণাঙ্গ স্ক্রিপ্টিং ভাষা, যা আপনাকে জটিল অটোমেশন স্ক্রিপ্ট লিখতে দেয়।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      রিমোট ম্যানেজমেন্ট
                    </h3>
                    <p className="text-sm text-muted-foreground">দূরবর্তী কম্পিউটার এবং সার্ভারগুলি সহজেই নিয়ন্ত্রণ করতে পারেন।</p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-semibold mb-2">উদাহরণ: পাওয়ারশেল পাইপলাইন</h3>
                  <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                    Get-Process | Where-Object &#123; $_.CPU -gt 10 &#125; | Sort-Object -Property CPU -Descending
                  </pre>
                  <p className="text-sm mt-2">
                    এই কমান্ডটি সব প্রসেস পায়, তারপর শুধু যেগুলি ১০% এর বেশি CPU ব্যবহার করছে সেগুলি ফিল্টার করে, এবং CPU ব্যবহারের ক্রম
                    অনুসারে সাজায়।
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="why" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  পাওয়ারশেল শেখার সুবিধা
                </CardTitle>
                <CardDescription>কেন আপনার পাওয়ারশেল শেখা উচিত</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  পাওয়ারশেল শেখা আপনার কম্পিউটার দক্ষতা এবং কর্মক্ষমতা বাড়াতে সাহায্য করবে। এটি আপনাকে একজন সাধারণ ব্যবহারকারী থেকে একজন পাওয়ার
                  ইউজারে পরিণত করবে।
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      অটোমেশন
                    </h4>
                    <p className="text-sm">পুনরাবৃত্তিমূলক কাজগুলি স্বয়ংক্রিয় করে সময় বাঁচান। একবার স্ক্রিপ্ট লিখুন, বারবার ব্যবহার করুন।</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/40 p-4 rounded-lg border border-purple-100 dark:border-purple-900">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      কর্মক্ষমতা
                    </h4>
                    <p className="text-sm">GUI এর তুলনায় কমান্ড লাইন দিয়ে অনেক কাজ দ্রুত করা যায়, বিশেষ করে বড় স্কেলের কাজ।</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 p-4 rounded-lg border border-green-100 dark:border-green-900">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      কন্ট্রোল
                    </h4>
                    <p className="text-sm">আপনার সিস্টেমের উপর আরও বেশি নিয়ন্ত্রণ পান, এমন কিছু করুন যা GUI দিয়ে সম্ভব নয়।</p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-semibold mb-2">কেরিয়ার সুযোগ</h3>
                  <p className="mb-2">পাওয়ারশেল দক্ষতা আইটি ক্ষেত্রে অনেক দরজা খুলে দিতে পারে:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>সিস্টেম অ্যাডমিনিস্ট্রেটর</li>
                    <li>ডেভঅপস ইঞ্জিনিয়ার</li>
                    <li>ক্লাউড ইঞ্জিনিয়ার</li>
                    <li>সাইবার সিকিউরিটি স্পেশালিস্ট</li>
                    <li>আইটি অটোমেশন স্পেশালিস্ট</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mt-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    জানেন কি?
                  </h3>
                  <p className="text-sm">
                    মাইক্রোসফ্টের অনেক প্রোডাক্ট এবং সার্ভিস, যেমন Azure, Microsoft 365, এবং Windows Server, পাওয়ারশেল দিয়ে ম্যানেজ
                    করা যায়। এই দক্ষতা আপনাকে এই প্ল্যাটফর্মগুলিতে কাজ করার জন্য আরও মূল্যবান করে তুলবে।
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  শিক্ষার্থীদের জন্য সুবিধা
                </CardTitle>
                <CardDescription>শিক্ষার্থী হিসেবে পাওয়ারশেল শেখার সুবিধা</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>শিক্ষার্থী হিসেবে, পাওয়ারশেল শেখা আপনাকে অনেক সুবিধা দিতে পারে:</p>

                <div className="space-y-4 mt-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">প্রোগ্রামিং ধারণা শেখা</h4>
                      <p className="text-sm text-muted-foreground">
                        পাওয়ারশেল শেখার মাধ্যমে আপনি প্রোগ্রামিং এর মৌলিক ধারণাগুলি শিখতে পারেন, যেমন ভেরিয়েবল, লুপ, কন্ডিশন, ফাংশন
                        ইত্যাদি।
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">অ্যাসাইনমেন্ট এবং প্রজেক্ট অটোমেশন</h4>
                      <p className="text-sm text-muted-foreground">
                        ফাইল অর্গানাইজ করা, ডেটা প্রসেসিং, বা রিপোর্ট তৈরি করার মতো অ্যাকাডেমিক কাজগুলি অটোমেট করতে পাওয়ারশেল ব্যবহার করতে
                        পারেন।
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">সিস্টেম অ্যাডমিনিস্ট্রেশন দক্ষতা</h4>
                      <p className="text-sm text-muted-foreground">
                        আপনার কম্পিউটার এবং নেটওয়ার্ক সম্পর্কে গভীর জ্ঞান অর্জন করুন, যা আইটি কোর্সের জন্য অত্যন্ত মূল্যবান।
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">সিভি বা রেজুমে বাড়ানো</h4>
                      <p className="text-sm text-muted-foreground">
                        পাওয়ারশেল দক্ষতা আপনার সিভিতে যোগ করে আপনার চাকরির সম্ভাবনা বাড়ান, বিশেষ করে আইটি সেক্টরে।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 p-4 rounded-lg mt-4 border border-indigo-100 dark:border-indigo-900">
                  <h3 className="font-semibold mb-2">শিক্ষার্থীদের অভিজ্ঞতা</h3>
                  <blockquote className="italic text-sm border-l-4 border-primary/30 pl-4 py-1">
                    "পাওয়ারশেল শেখার পর, আমি আমার কম্পিউটার সাইন্স প্রজেক্টগুলি অনেক দ্রুত করতে পারি। বিশেষ করে বড় ডেটাসেট নিয়ে কাজ করার
                    সময় এটি অনেক সময় বাঁচায়। এছাড়া, এটি আমাকে ইন্টার্নশিপের সাক্ষাৎকারে অন্যদের থেকে আলাদা করেছে!"
                    <footer className="mt-1 text-muted-foreground">- রাহুল, কম্পিউটার সাইন্স শিক্ষার্থী</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fun" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  মজাদার পাওয়ারশেল প্রজেক্ট
                </CardTitle>
                <CardDescription>শেখার সময় আনন্দ করার জন্য কিছু প্রজেক্ট আইডিয়া</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  পাওয়ারশেল শেখার সবচেয়ে ভালো উপায় হল প্রজেক্ট করে শেখা। এখানে কিছু মজাদার প্রজেক্ট আইডিয়া দেওয়া হল যা আপনি চেষ্টা করতে
                  পারেন:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                    <h4 className="font-semibold mb-2">ওয়েদার নোটিফিকেশন সিস্টেম</h4>
                    <p className="text-sm">
                      একটি স্ক্রিপ্ট তৈরি করুন যা প্রতিদিন সকালে আবহাওয়া API থেকে আজকের আবহাওয়া তথ্য নিয়ে আপনাকে নোটিফিকেশন দেবে।
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        স্ক্রিপ্ট দেখুন
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/40 p-4 rounded-lg border border-purple-100 dark:border-purple-900">
                    <h4 className="font-semibold mb-2">ফাইল অর্গানাইজার</h4>
                    <p className="text-sm">
                      একটি স্ক্রিপ্ট তৈরি করুন যা আপনার ডাউনলোড ফোল্ডার স্বয়ংক্রিয়ভাবে পরিষ্কার করে, ফাইলগুলিকে তাদের ধরন অনুসারে সাজায়।
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        স্ক্রিপ্ট দেখুন
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 p-4 rounded-lg border border-green-100 dark:border-green-900">
                    <h4 className="font-semibold mb-2">স্টাডি টাইমার</h4>
                    <p className="text-sm">
                      একটি পমোডোরো টাইমার তৈরি করুন যা আপনাকে পড়াশোনার সময় মনে করিয়ে দেবে এবং বিরতির সময় নোটিফিকেশন দেবে।
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        স্ক্রিপ্ট দেখুন
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/40 p-4 rounded-lg border border-amber-100 dark:border-amber-900">
                    <h4 className="font-semibold mb-2">সিস্টেম হেলথ মনিটর</h4>
                    <p className="text-sm">আপনার কম্পিউটারের CPU, মেমরি, এবং ডিস্ক ব্যবহার মনিটর করে রিপোর্ট তৈরি করুন।</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        স্ক্রিপ্ট দেখুন
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-6">
                  <h3 className="font-semibold mb-2">গেম তৈরি করুন!</h3>
                  <p className="mb-3">হ্যাঁ, আপনি পাওয়ারশেল দিয়ে সহজ গেমও তৈরি করতে পারেন! এখানে কিছু আইডিয়া দেওয়া হল:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>গেস দ্য নাম্বার - একটি র‍্যান্ডম নাম্বার জেনারেট করে প্লেয়ারকে অনুমান করতে বলুন</li>
                    <li>হ্যাংম্যান - শব্দ অনুমান করার গেম</li>
                    <li>টিক-টাক-টো - কনসোলে খেলা যায় এমন একটি সহজ গেম</li>
                    <li>কুইজ গেম - বিভিন্ন বিষয়ে প্রশ্ন জিজ্ঞাসা করে স্কোর রাখুন</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 p-4 rounded-lg mt-4 border border-indigo-100 dark:border-indigo-900">
                  <h3 className="font-semibold mb-2">শিক্ষার্থীদের অভিজ্ঞতা</h3>
                  <blockquote className="italic text-sm border-l-4 border-primary/30 pl-4 py-1">
                    "আমি পাওয়ারশেল দিয়ে একটি সহজ কুইজ গেম তৈরি করেছিলাম আমার প্রোগ্রামিং ক্লাসের জন্য। এটি শুধু আমার গ্রেড ভালো করেনি,
                    আমার বন্ধুরাও এটি খেলতে পছন্দ করেছিল! এটি আমাকে দেখিয়েছে যে প্রোগ্রামিং শুধু কাজের জন্য নয়, মজার জন্যও হতে পারে।"
                    <footer className="mt-1 text-muted-foreground">- অনিকা, কম্পিউটার সাইন্স শিক্ষার্থী</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  মজাদার পাওয়ারশেল ট্রিক
                </CardTitle>
                <CardDescription>আপনার বন্ধুদের অবাক করার জন্য কিছু কুল ট্রিক</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>এখানে কিছু মজাদার পাওয়ারশেল ট্রিক দেওয়া হল যা আপনি চেষ্টা করতে পারেন:</p>

                <div className="space-y-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">স্পিচ সিন্থেসাইজার</h4>
                    <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                      Add-Type -AssemblyName System.Speech{"\n"}
                      $synthesizer = New-Object -TypeName System.Speech.Synthesis.SpeechSynthesizer{"\n"}
                      $synthesizer.Speak("হ্যালো, আমি পাওয়ারশেল। আমি কথা বলতে পারি!")
                    </pre>
                    <p className="text-sm mt-2">এই কমান্ডটি আপনার কম্পিউটারকে কথা বলাবে!</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">ASCII আর্ট</h4>
                    <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                      Write-Host @" .--. |o_o | |:_/ | // \ \ (| | ) /'\_ _/`\ \___)=(___/ "@
                    </pre>
                    <p className="text-sm mt-2">কনসোলে ASCII আর্ট প্রিন্ট করুন!</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">র‍্যান্ডম জোক জেনারেটর</h4>
                    <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                      $jokes = @({"\n"}
                      "Why don't programmers like nature? It has too many bugs.",{"\n"}
                      "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",{"\n"}
                      "A programmer walks into a bar and orders 1.0000001 beers. The bartender says, 'I'll round that to
                      1.'"{"\n"}){"\n"}
                      $jokes | Get-Random
                    </pre>
                    <p className="text-sm mt-2">র‍্যান্ডম প্রোগ্রামিং জোক দেখান!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="start" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  পাওয়ারশেল শুরু করুন
                </CardTitle>
                <CardDescription>শুরু করার জন্য সহজ পদক্ষেপ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>পাওয়ারশেল শেখা শুরু করা সহজ! এখানে কিছু পদক্ষেপ দেওয়া হল:</p>

                <div className="space-y-6 mt-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">পাওয়ারশেল খুলুন</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        উইন্ডোজে, Start মেনুতে "PowerShell" সার্চ করুন এবং "Windows PowerShell" খুলুন।
                      </p>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">
                          টিপ: PowerShell ISE (Integrated Scripting Environment) ব্যবহার করুন স্ক্রিপ্ট লেখার জন্য, এটি একটি
                          বিল্ট-ইন কোড এডিটর।
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">প্রথম কমান্ড চালান</h4>
                      <p className="text-sm text-muted-foreground mb-2">নিচের সহজ কমান্ডগুলি দিয়ে শুরু করুন:</p>
                      <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                        Get-Date{"\n"}
                        Get-Process{"\n"}
                        Get-Location
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">হেল্প ব্যবহার করুন</h4>
                      <p className="text-sm text-muted-foreground mb-2">কোন কমান্ড সম্পর্কে জানতে Get-Help ব্যবহার করুন:</p>
                      <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                        Get-Help Get-Process{"\n"}
                        Get-Help Get-Process -Examples
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">প্রথম স্ক্রিপ্ট লিখুন</h4>
                      <p className="text-sm text-muted-foreground mb-2">একটি সহজ স্ক্রিপ্ট লিখুন এবং সেভ করুন:</p>
                      <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
                        # My First PowerShell Script{"\n"}
                        $name = Read-Host "What is your name?"{"\n"}
                        Write-Host "Hello, $name! Welcome to PowerShell!"
                      </pre>
                      <p className="text-sm mt-2">এটি FirstScript.ps1 নামে সেভ করুন এবং চালান।</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 p-4 rounded-lg mt-6 border border-blue-100 dark:border-blue-900">
                  <h3 className="font-semibold mb-2">শেখার রিসোর্স</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>
                        Microsoft Learn -{" "}
                        <a href="#" className="text-primary hover:underline">
                          PowerShell Documentation
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>
                        YouTube -{" "}
                        <a href="#" className="text-primary hover:underline">
                          PowerShell for Beginners
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>
                        GitHub -{" "}
                        <a href="#" className="text-primary hover:underline">
                          PowerShell Scripts Repository
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>
                        Reddit -{" "}
                        <a href="#" className="text-primary hover:underline">
                          r/PowerShell Community
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    শুরুর টিপস
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>প্রতিদিন অল্প সময় করে অভ্যাস করুন</li>
                    <li>ছোট প্রজেক্ট দিয়ে শুরু করুন</li>
                    <li>কমান্ড মুখস্থ করার চেষ্টা করবেন না, বরং কীভাবে কাজ করে তা বোঝার চেষ্টা করুন</li>
                    <li>অন্যদের সাথে শেখার চেষ্টা করুন, একে অপরকে সাহায্য করুন</li>
                    <li>ভুল করতে ভয় পাবেন না - এটাই শেখার সেরা উপায়!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Link href="/commands/powershell">
                <Button className="gap-2">
                  <Command className="h-4 w-4" />
                  পাওয়ারশেল কমান্ড দেখুন
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
