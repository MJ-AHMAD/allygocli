"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function PromotionAppeal() {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({
    bengali: false,
    english: false,
  })

  const copyToClipboard = (text: string, language: string) => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [language]: true })
    setTimeout(() => {
      setCopied({ ...copied, [language]: false })
    }, 2000)
  }

  const bengaliAppeal = `
প্রিয় সম্মানিত ব্যক্তিত্ব/পেইজ অ্যাডমিন/গ্রুপ মডারেটর,

আশা করি আপনি ভালো আছেন। আমি [আপনার নাম], AllyGo CLI প্রজেক্টের প্রতিনিধি হিসেবে আপনার মূল্যবান সহযোগিতা চাইছি।

**AllyGo CLI সম্পর্কে:**
AllyGo CLI হল একটি অভিনব কমান্ড লাইন ইন্টারফেস শিক্ষা প্ল্যাটফর্ম যা বাংলাদেশের শিক্ষার্থী, শিক্ষক এবং আইটি পেশাদারদের জন্য বিশেষভাবে ডিজাইন করা হয়েছে। আমাদের প্ল্যাটফর্ম টার্মিনাল কমান্ড শেখার প্রক্রিয়াকে সহজ, আনন্দদায়ক এবং কার্যকর করে তোলে, যা ডিজিটাল দক্ষতা বৃদ্ধি এবং কর্মসংস্থানের সুযোগ বাড়াতে সাহায্য করে।

**আপনার সহযোগিতার গুরুত্ব:**
আপনার প্রভাবশালী অবস্থান এবং সম্মানিত অনুসরণকারীদের কারণে, আপনার সমর্থন আমাদের প্রজেক্টকে সঠিক দর্শকদের কাছে পৌঁছাতে অমূল্য হবে। আমরা বিশ্বাস করি যে আপনার অনুসরণকারীরা AllyGo CLI-এর উপকারিতা থেকে সরাসরি উপকৃত হবেন, বিশেষ করে যারা:
- আইটি ক্যারিয়ার শুরু করতে চান
- প্রোগ্রামিং দক্ষতা উন্নত করতে চান
- শিক্ষা প্রতিষ্ঠানে প্রযুক্তিগত শিক্ষা প্রদান করেন
- স্টার্টআপ বা টেক কোম্পানি পরিচালনা করেন

**আমাদের অনুরোধ:**
আমরা আপনাকে নিম্নলিখিত যেকোনো উপায়ে আমাদের সহায়তা করার অনুরোধ জানাচ্ছি:
1. আপনার পেইজ/গ্রুপে AllyGo CLI সম্পর্কে একটি পোস্ট শেয়ার করা
2. আমাদের প্রজেক্টের একটি সংক্ষিপ্ত পরিচয় ভিডিও শেয়ার করা
3. আপনার অনুসরণকারীদের জন্য একটি বিশেষ ডিসকাউন্ট কোড প্রদান করা
4. আমাদের সাথে একটি লাইভ সেশন বা ওয়েবিনার আয়োজন করা
5. আপনার অনুসরণকারীদের মধ্যে আমাদের সম্পর্কে জানানো

**আপনার অনুসরণকারীদের জন্য উপকারিতা:**
আপনার সহযোগিতার মাধ্যমে, আপনার অনুসরণকারীরা পাবেন:
- টেক ইন্ডাস্ট্রিতে চাকরির জন্য প্রয়োজনীয় দক্ষতা
- বিশেষ ডিসকাউন্ট (আপনার অনুসরণকারীদের জন্য বিশেষ কোড)
- ফ্রি ট্রেনিং সেশন
- কমান্ড লাইন ব্যবহারে দক্ষতা যা তাদের কাজের গতি বাড়াবে
- বাংলা ভাষায় সহজবোধ্য টিউটোরিয়াল

**আমাদের প্রস্তাব:**
আপনার সহযোগিতার বিনিময়ে, আমরা আপনাকে প্রদান করতে পারি:
- আমাদের প্ল্যাটফর্মে আপনার ব্র্যান্ড/নাম উল্লেখ
- আপনার জন্য AllyGo CLI-এর প্রিমিয়াম সাবস্ক্রিপশন
- আপনার অনুসরণকারীদের জন্য বিশেষ ওয়েবিনার
- আমাদের ভবিষ্যত প্রোডাক্ট লঞ্চে অংশগ্রহণের সুযোগ
- আপনার প্রতিষ্ঠানের জন্য কাস্টমাইজড সলিউশন

আমরা আপনার সাথে আলোচনা করে আপনার অনুসরণকারীদের জন্য সবচেয়ে উপযুক্ত সহযোগিতার মডেল নির্ধারণ করতে আগ্রহী।

অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন [আপনার ইমেইল/ফোন] এ অথবা আমাদের ওয়েবসাইট [ওয়েবসাইট লিংক] ভিজিট করুন আরও তথ্যের জন্য।

আপনার মূল্যবান সময় এবং বিবেচনার জন্য আন্তরিক ধন্যবাদ। আমরা আপনার সাথে কাজ করার সম্ভাবনা নিয়ে উত্সাহিত।

শুভেচ্ছান্তে,
[আপনার নাম]
[আপনার পদবি]
AllyGo CLI
[যোগাযোগের তথ্য]
`

  const englishAppeal = `
Dear Respected Influencer/Page Admin/Group Moderator,

I hope this message finds you well. I am [Your Name], representing the AllyGo CLI project, and I'm reaching out to request your valuable support.

**About AllyGo CLI:**
AllyGo CLI is an innovative command line interface education platform specifically designed for students, educators, and IT professionals in Bangladesh. Our platform makes learning terminal commands simple, enjoyable, and effective, helping to increase digital literacy and enhance employment opportunities.

**The Importance of Your Support:**
Given your influential position and respected following, your endorsement would be invaluable in helping our project reach the right audience. We believe your followers would directly benefit from AllyGo CLI, especially those who:
- Are looking to start careers in IT
- Want to improve their programming skills
- Teach technology in educational institutions
- Run startups or tech companies

**Our Request:**
We kindly ask for your support in any of the following ways:
1. Sharing a post about AllyGo CLI on your page/group
2. Sharing a brief introduction video of our project
3. Providing a special discount code for your followers
4. Hosting a live session or webinar with us
5. Spreading the word about us among your followers

**Benefits for Your Followers:**
Through your collaboration, your followers will gain:
- Skills necessary for jobs in the tech industry
- Special discounts (exclusive code for your followers)
- Free training sessions
- Command line proficiency that will speed up their work
- Easy-to-understand tutorials in Bengali

**Our Offer:**
In exchange for your support, we can provide:
- Mention of your brand/name on our platform
- Premium subscription to AllyGo CLI for you
- Special webinars for your followers
- Opportunity to participate in our future product launches
- Customized solutions for your organization

We are eager to discuss and determine the most suitable collaboration model for your followers.

Please contact us at [Your Email/Phone] or visit our website [Website Link] for more information.

Thank you sincerely for your valuable time and consideration. We are excited about the possibility of working with you.

Best regards,
[Your Name]
[Your Position]
AllyGo CLI
[Contact Information]
`

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Promotion Appeal Letter</h1>
      <p className="text-center mb-8 text-gray-600">
        Use these templates to request promotion support from influencers, page admins, and group moderators
      </p>

      <Tabs defaultValue="bengali" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="bengali">Bengali</TabsTrigger>
          <TabsTrigger value="english">English</TabsTrigger>
        </TabsList>

        <TabsContent value="bengali">
          <Card>
            <CardHeader>
              <CardTitle>প্রচার প্রচারণার আবেদন পত্র</CardTitle>
              <CardDescription>প্রভাবশালী ব্যক্তি, পেইজ অ্যাডমিন এবং গ্রুপ মডারেটরদের কাছে পাঠানোর জন্য</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-md whitespace-pre-line">{bengaliAppeal}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-gray-500">ব্যবহারের আগে প্রয়োজনীয় তথ্য পূরণ করুন</p>
              <Button onClick={() => copyToClipboard(bengaliAppeal, "bengali")} variant="outline">
                {copied.bengali ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied.bengali ? "কপি করা হয়েছে" : "কপি করুন"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="english">
          <Card>
            <CardHeader>
              <CardTitle>Promotion Appeal Letter</CardTitle>
              <CardDescription>For sending to influencers, page admins, and group moderators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-md whitespace-pre-line">{englishAppeal}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-gray-500">Fill in the necessary information before use</p>
              <Button onClick={() => copyToClipboard(englishAppeal, "english")} variant="outline">
                {copied.english ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied.english ? "Copied" : "Copy"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Tips for Using This Appeal:</h3>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>Personalize the letter with the recipient's name and specific details</li>
          <li>Adjust the benefits and offers based on the specific influencer's audience</li>
          <li>Include relevant statistics or success stories if available</li>
          <li>Follow up politely if you don't receive a response within a week</li>
          <li>Be prepared to negotiate different terms based on the influencer's requirements</li>
        </ul>
      </div>
    </div>
  )
}
