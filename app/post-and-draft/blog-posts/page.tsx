"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function BlogPosts() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AllyGo CLI Blog Posts</h1>
      <p className="text-center mb-8 text-gray-600">Promotional blog content in Bengali and English</p>

      <Tabs defaultValue="bengali" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="bengali">Bengali Blog Post</TabsTrigger>
          <TabsTrigger value="english">English Blog Post</TabsTrigger>
        </TabsList>

        <TabsContent value="bengali">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>কমান্ড লাইন মাস্টারি সহজ করুন: AllyGo CLI-এর সাথে পরিচয়</CardTitle>
              <CardDescription>টার্মিনাল কমান্ড শেখার নতুন যুগ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bengali-blog-content">
                <h2 className="text-xl font-semibold mb-3">ভূমিকা</h2>
                <p className="mb-4">
                  আধুনিক সফটওয়্যার ডেভেলপমেন্টে কমান্ড লাইন ইন্টারফেস (CLI) ব্যবহার একটি অপরিহার্য দক্ষতা। কিন্তু অনেক শিক্ষার্থী, নতুন
                  ডেভেলপার এবং এমনকি অভিজ্ঞ প্রফেশনালরাও বিভিন্ন টার্মিনাল কমান্ড মনে রাখতে এবং সঠিকভাবে ব্যবহার করতে সমস্যার সম্মুখীন হন।
                  এই সমস্যার সমাধানে আমরা নিয়ে এসেছি AllyGo CLI - একটি অভিনব শিক্ষামূলক প্ল্যাটফর্ম যা কমান্ড লাইন শেখা এবং ব্যবহার করাকে
                  আগের চেয়ে অনেক সহজ করে তুলেছে।
                </p>

                <h2 className="text-xl font-semibold mb-3">AllyGo CLI কী?</h2>
                <p className="mb-4">
                  AllyGo CLI হল একটি সমন্বিত শিক্ষামূলক প্ল্যাটফর্ম যা বিভিন্ন টার্মিনাল এনভায়রনমেন্ট (PowerShell, Command Prompt, Git
                  Bash, Node.js) এর জন্য কমান্ড শেখা, অনুসন্ধান করা এবং ব্যবহার করার প্রক্রিয়াকে সরলীকৃত করে। এটি শুধুমাত্র একটি রেফারেন্স টুল
                  নয়, বরং একটি সম্পূর্ণ শিক্ষামূলক ইকোসিস্টেম যা ব্যবহারকারীদের ধাপে ধাপে কমান্ড লাইন মাস্টারি অর্জনে সাহায্য করে।
                </p>

                <h2 className="text-xl font-semibold mb-3">প্রধান বৈশিষ্ট্য</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>বহু-প্ল্যাটফর্ম সমর্থন:</strong> PowerShell, Command Prompt, Git Bash, এবং Node.js সহ বিভিন্ন
                    টার্মিনাল এনভায়রনমেন্টের জন্য বিস্তৃত কমান্ড লাইব্রেরি।
                  </li>
                  <li>
                    <strong>ক্যাটাগরি-ভিত্তিক সংগঠন:</strong> ফাইল অপারেশন, নেটওয়ার্কিং, সিস্টেম কমান্ড, প্যাকেজ ম্যানেজমেন্ট, গিট ভার্সন
                    কন্ট্রোল, এবং টেক্সট প্রসেসিং সহ বিভিন্ন ক্যাটাগরিতে সাজানো কমান্ড।
                  </li>
                  <li>
                    <strong>অ্যাডভান্সড সার্চ ফাংশন:</strong> দ্রুত এবং সঠিক কমান্ড খুঁজে পাওয়ার জন্য স্মার্ট সার্চ সিস্টেম।
                  </li>
                  <li>
                    <strong>ইন্টারেক্টিভ লার্নিং মডিউল:</strong> হাতে-কলমে অভিজ্ঞতার মাধ্যমে কমান্ড শেখার জন্য ইন্টারেক্টিভ টিউটোরিয়াল।
                  </li>
                  <li>
                    <strong>বাংলা ও ইংরেজি ভাষা সমর্থন:</strong> দুটি ভাষায় সম্পূর্ণ ইন্টারফেস, যা বাংলাভাষী ব্যবহারকারীদের জন্য শেখার
                    প্রক্রিয়াকে আরও সহজ করে তোলে।
                  </li>
                  <li>
                    <strong>প্রতিষ্ঠান-ভিত্তিক সমাধান:</strong> শিক্ষা প্রতিষ্ঠান, ব্যবসা, সরকারি সংস্থা, স্বাস্থ্যসেবা, এবং অলাভজনক সংস্থার জন্য
                    বিশেষ সমাধান।
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">কারা উপকৃত হবেন?</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>শিক্ষার্থী ও নতুন ডেভেলপাররা:</strong> যারা কমান্ড লাইন ব্যবহারে নতুন এবং দক্ষতা অর্জন করতে চান।
                  </li>
                  <li>
                    <strong>শিক্ষকগণ:</strong> যারা ছাত্রদের কমান্ড লাইন দক্ষতা শেখাতে চান।
                  </li>
                  <li>
                    <strong>অভিজ্ঞ ডেভেলপাররা:</strong> যারা কম ব্যবহৃত কমান্ড দ্রুত খুঁজে পেতে চান।
                  </li>
                  <li>
                    <strong>IT ম্যানেজাররা:</strong> যারা তাদের টিমের জন্য স্ট্যান্ডার্ডাইজড কমান্ড রেফারেন্স চান।
                  </li>
                  <li>
                    <strong>সিস্টেম অ্যাডমিনিস্ট্রেটররা:</strong> যারা জটিল সিস্টেম কমান্ড ব্যবহার করেন।
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">ব্যবহারের সুবিধা</h2>
                <p className="mb-4">AllyGo CLI ব্যবহার করে আপনি:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>কমান্ড লাইন শেখার সময় 60% পর্যন্ত কমাতে পারবেন</li>
                  <li>প্রোডাক্টিভিটি 40% পর্যন্ত বাড়াতে পারবেন</li>
                  <li>কোডিং ওয়ার্কফ্লো অপ্টিমাইজ করতে পারবেন</li>
                  <li>টিম মেম্বারদের মধ্যে জ্ঞান শেয়ারিং উন্নত করতে পারবেন</li>
                  <li>নতুন টিম সদস্যদের অনবোর্ডিং প্রক্রিয়া দ্রুত করতে পারবেন</li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">মূল্য পরিকল্পনা</h2>
                <p className="mb-4">AllyGo CLI বিভিন্ন চাহিদা ও বাজেট অনুযায়ী বিভিন্ন প্ল্যান অফার করে:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>ফ্রি প্ল্যান:</strong> মৌলিক কমান্ড রেফারেন্স ও সীমিত ফিচার
                  </li>
                  <li>
                    <strong>স্টার্টার প্ল্যান:</strong> ব্যক্তিগত ব্যবহারকারীদের জন্য উন্নত ফিচার
                  </li>
                  <li>
                    <strong>প্রফেশনাল প্ল্যান:</strong> পেশাদারদের জন্য সম্পূর্ণ ফিচার সেট
                  </li>
                  <li>
                    <strong>এন্টারপ্রাইজ প্ল্যান:</strong> বড় টিম ও প্রতিষ্ঠানের জন্য কাস্টমাইজড সমাধান
                  </li>
                  <li>
                    <strong>শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ ছাড়:</strong> শিক্ষার্থী ও শিক্ষকদের জন্য বিশেষ মূল্য
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">শুরু করুন</h2>
                <p className="mb-4">
                  AllyGo CLI ব্যবহার শুরু করা সহজ। আমাদের ওয়েবসাইট থেকে সাইন আপ করুন, আপনার পছন্দের প্ল্যান বেছে নিন, এবং অবিলম্বে কমান্ড
                  লাইন মাস্টারি শুরু করুন। শিক্ষা প্রতিষ্ঠান, সরকারি সংস্থা, বা বড় প্রতিষ্ঠানের জন্য, আমাদের সেলস টিমের সাথে যোগাযোগ করুন
                  কাস্টমাইজড সমাধানের জন্য।
                </p>

                <h2 className="text-xl font-semibold mb-3">উপসংহার</h2>
                <p className="mb-4">
                  কমান্ড লাইন ইন্টারফেস আর ভয়ের বিষয় নয়। AllyGo CLI-এর সাথে, আপনি সহজেই টার্মিনাল কমান্ড শিখতে, অনুসন্ধান করতে এবং
                  ব্যবহার করতে পারবেন। আজই যোগ দিন হাজার হাজার সন্তুষ্ট ব্যবহারকারীর সাথে যারা ইতিমধ্যে তাদের কমান্ড লাইন দক্ষতা উন্নত করেছেন।
                  আপনার CLI যাত্রা শুরু করুন - আপনার প্রোডাক্টিভিটি ও দক্ষতা নতুন উচ্চতায় নিয়ে যান!
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                  <p className="font-semibold text-blue-800">
                    আজই AllyGo CLI ব্যবহার শুরু করুন! সাইন আপ করুন আমাদের ওয়েবসাইটে:{" "}
                    <a href="#" className="text-blue-600 underline">
                      www.allygocli.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => copyToClipboard(document.querySelector(".bengali-blog-content")?.textContent || "")}
                className="w-full"
              >
                <Copy className="mr-2 h-4 w-4" /> কপি করুন
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="english">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mastering Command Line Made Easy: Introducing AllyGo CLI</CardTitle>
              <CardDescription>A New Era in Learning Terminal Commands</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="english-blog-content">
                <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                <p className="mb-4">
                  In modern software development, proficiency with command line interfaces (CLI) is an essential skill.
                  However, many students, new developers, and even experienced professionals struggle to remember and
                  correctly use various terminal commands. To address this challenge, we've developed AllyGo CLI – an
                  innovative educational platform that makes learning and using command line interfaces easier than ever
                  before.
                </p>

                <h2 className="text-xl font-semibold mb-3">What is AllyGo CLI?</h2>
                <p className="mb-4">
                  AllyGo CLI is an integrated educational platform that simplifies the process of learning, searching,
                  and using commands across different terminal environments (PowerShell, Command Prompt, Git Bash,
                  Node.js). It's not just a reference tool but a complete educational ecosystem that helps users achieve
                  command line mastery step by step.
                </p>

                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Multi-Platform Support:</strong> Extensive command library for various terminal environments
                    including PowerShell, Command Prompt, Git Bash, and Node.js.
                  </li>
                  <li>
                    <strong>Category-Based Organization:</strong> Commands organized into categories such as file
                    operations, networking, system commands, package management, git version control, and text
                    processing.
                  </li>
                  <li>
                    <strong>Advanced Search Functionality:</strong> Smart search system for quick and accurate command
                    discovery.
                  </li>
                  <li>
                    <strong>Interactive Learning Modules:</strong> Interactive tutorials for hands-on command learning
                    experiences.
                  </li>
                  <li>
                    <strong>Bilingual Support:</strong> Complete interface in both English and Bengali, making the
                    learning process more accessible for Bengali-speaking users.
                  </li>
                  <li>
                    <strong>Institution-Specific Solutions:</strong> Specialized solutions for educational institutions,
                    businesses, government agencies, healthcare, and non-profit organizations.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">Who Benefits?</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Students & New Developers:</strong> Those new to command line usage who want to build
                    proficiency.
                  </li>
                  <li>
                    <strong>Educators:</strong> Teachers looking to instruct students in command line skills.
                  </li>
                  <li>
                    <strong>Experienced Developers:</strong> Professionals seeking quick reference for less-frequently
                    used commands.
                  </li>
                  <li>
                    <strong>IT Managers:</strong> Leaders wanting standardized command references for their teams.
                  </li>
                  <li>
                    <strong>System Administrators:</strong> Professionals who work with complex system commands.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">Benefits of Use</h2>
                <p className="mb-4">By using AllyGo CLI, you can:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Reduce command line learning time by up to 60%</li>
                  <li>Increase productivity by up to 40%</li>
                  <li>Optimize your coding workflow</li>
                  <li>Improve knowledge sharing among team members</li>
                  <li>Accelerate onboarding process for new team members</li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">Pricing Plans</h2>
                <p className="mb-4">AllyGo CLI offers various plans to suit different needs and budgets:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Free Plan:</strong> Basic command reference and limited features
                  </li>
                  <li>
                    <strong>Starter Plan:</strong> Enhanced features for individual users
                  </li>
                  <li>
                    <strong>Professional Plan:</strong> Complete feature set for professionals
                  </li>
                  <li>
                    <strong>Enterprise Plan:</strong> Customized solutions for large teams and organizations
                  </li>
                  <li>
                    <strong>Special Educational Discounts:</strong> Special pricing for students and educators
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
                <p className="mb-4">
                  Getting started with AllyGo CLI is easy. Sign up on our website, choose your preferred plan, and begin
                  your command line mastery journey immediately. For educational institutions, government agencies, or
                  large organizations, contact our sales team for customized solutions.
                </p>

                <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
                <p className="mb-4">
                  Command line interfaces no longer need to be intimidating. With AllyGo CLI, you can easily learn,
                  search, and use terminal commands. Join thousands of satisfied users who have already improved their
                  command line skills. Start your CLI journey today – take your productivity and efficiency to new
                  heights!
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                  <p className="font-semibold text-blue-800">
                    Start using AllyGo CLI today! Sign up at our website:{" "}
                    <a href="#" className="text-blue-600 underline">
                      www.allygocli.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => copyToClipboard(document.querySelector(".english-blog-content")?.textContent || "")}
                className="w-full"
              >
                <Copy className="mr-2 h-4 w-4" /> Copy Content
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
