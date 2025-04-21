import type React from "react"
import Link from "next/link"
import {
  Terminal,
  Command,
  GitBranch,
  Server,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  Globe,
  Download,
  Gift,
  CreditCard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OverviewBnPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Hero Section */}
      <section className="py-12 md:py-20 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">টি-অ্যালি সিএলআই প্রকল্পের সংক্ষিপ্ত বিবরণ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            পাওয়ারশেল, কমান্ড প্রম্পট, গিট ব্যাশ, নোড.জেএস এবং আরও অনেক কিছুর জন্য আপনার সম্পূর্ণ কমান্ড-লাইন রেফারেন্স এবং টুলসেট।
          </p>
        </div>

        <Card className="border-2 border-primary/10 shadow-lg w-full mx-auto mb-12">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl md:text-3xl text-center">প্রকল্পের লক্ষ্য</CardTitle>
            <CardDescription className="text-center text-base">
              ব্যবহারিক উদাহরণ এবং টুলস সহ বিভিন্ন কমান্ড-লাইন ইন্টারফেসের একটি সম্পূর্ণ গাইড প্রদান করা
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              টি-অ্যালি সিএলআই আপনার সমস্ত কমান্ড-লাইন প্রয়োজনীয়তার জন্য আপনার প্রথম পছন্দ হিসাবে ডিজাইন করা হয়েছে, আপনি যদি মৌলিক
              বিষয়গুলি শিখছেন বা উন্নত কৌশল খুঁজছেন এমন একজন বিশেষজ্ঞ হন। আমাদের প্ল্যাটফর্ম আপনার কমান্ড-লাইন অভিজ্ঞতা বাড়ানোর জন্য ব্যাপক
              ডকুমেন্টেশন এবং শক্তিশালী টুলগুলিকে একত্রিত করে।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Terminal className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">কমান্ড রেফারেন্স</h3>
                <p className="text-sm text-muted-foreground">একাধিক সিএলআই পরিবেশের জন্য ব্যাপক ডকুমেন্টেশন</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">উৎপাদনশীলতা টুলস</h3>
                <p className="text-sm text-muted-foreground">আপনার কমান্ড-লাইন ওয়ার্কফ্লো উন্নত করার জন্য সফটওয়্যার টুলস</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">নিরাপত্তা সমাধান</h3>
                <p className="text-sm text-muted-foreground">আপনার সিস্টেম সুরক্ষিত করতে এবং অনুবর্তিতা বজায় রাখার টুলস</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>প্রধান বৈশিষ্ট্য</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>মাল্টি-এনভায়রনমেন্ট সাপোর্ট (পাওয়ারশেল, সিএমডি, গিট ব্যাশ, নোড.জেএস)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>ব্যবহারিক উদাহরণ সহ সংগঠিত কমান্ড কাঠামো</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>সমস্ত পরিবেশে উন্নত সার্চ ফাংশনালিটি</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>সিনট্যাক্স হাইলাইটিং সহ বিস্তারিত ডকুমেন্টেশন</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>ডেস্কটপ এবং মোবাইল ডিভাইসের জন্য রেসপনসিভ ডিজাইন</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>টার্গেট অডিয়েন্স</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>কমান্ড-লাইন দক্ষতা উন্নত করতে চাওয়া ডেভেলপাররা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>সার্ভার এবং নেটওয়ার্ক পরিচালনাকারী সিস্টেম অ্যাডমিনিস্ট্রেটররা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>ওয়ার্কফ্লো অটোমেট করা ডেভঅপস প্রফেশনালরা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>কমান্ড-লাইন বেসিকস শিখতে চাওয়া ছাত্ররা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>রেফারেন্স মেটেরিয়াল খুঁজছেন এমন আইটি প্রফেশনালরা</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products and Services Section */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">পণ্য ও সেবাসমূহ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            আমাদের ব্যাপক কমান্ড-লাইন টুলস এবং সেবাগুলি অন্বেষণ করুন
          </p>
        </div>

        <Tabs defaultValue="command-line" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="command-line">কমান্ড লাইন টুলস</TabsTrigger>
            <TabsTrigger value="system-admin">সিস্টেম অ্যাডমিনিস্ট্রেশন</TabsTrigger>
            <TabsTrigger value="development">ডেভেলপমেন্ট টুলস</TabsTrigger>
            <TabsTrigger value="automation">অটোমেশন ও প্রোডাক্টিভিটি</TabsTrigger>
            <TabsTrigger value="security">সিকিউরিটি ও কমপ্লায়েন্স</TabsTrigger>
          </TabsList>

          {/* Command Line Tools */}
          <TabsContent value="command-line" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="সিএলআই মাস্টার"
                description="ইন্টেলিজেন্ট সাজেশন এবং অটো-কমপ্লিশন সহ উন্নত কমান্ড লাইন ইন্টারফেস"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রিমিয়াম"
                features={["ইন্টেলিজেন্ট কমান্ড সাজেশন", "ক্রস-প্ল্যাটফর্ম কম্প্যাটিবিলিটি", "কাস্টম এলিয়াস এবং শর্টকাট"]}
                price="৯.৯৯$/মাস থেকে"
              />
              <ProductCard
                name="টার্মিনাল প্রো"
                description="ডেভেলপারদের জন্য উন্নত বৈশিষ্ট্য সহ প্রফেশনাল টার্মিনাল এমুলেটর"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["মাল্টিপল ট্যাব এবং স্প্লিট ভিউ", "কাস্টমাইজেবল থিম এবং ফন্ট", "এসএসএইচ এবং এফটিপি ইন্টিগ্রেশন"]}
                price="১২.৯৯$/মাস থেকে"
                popular={true}
              />
              <ProductCard
                name="কমান্ড এক্সপ্লোরার"
                description="বিস্তারিত ডকুমেন্টেশন এবং উদাহরণ সহ ইন্টারেক্টিভ কমান্ড এক্সপ্লোরার"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রি"
                features={["ব্যাপক কমান্ড ডাটাবেস", "ইন্টারেক্টিভ উদাহরণ", "কমান্ড সিনট্যাক্স হাইলাইটিং"]}
                price="ফ্রি"
              />
              <ProductCard
                name="শেল স্ক্রিপ্টার"
                description="ডিবাগিং এবং টেস্টিং ক্যাপাবিলিটি সহ পাওয়ারফুল শেল স্ক্রিপ্ট এডিটর"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="ওয়ান-টাইম"
                features={["মাল্টিপল শেলের জন্য সিনট্যাক্স হাইলাইটিং", "ইন্টিগ্রেটেড ডিবাগার", "স্ক্রিপ্ট টেস্টিং ফ্রেমওয়ার্ক"]}
                price="৪৯.৯৯$ থেকে"
              />
              <ProductCard
                name="কমান্ড হাব"
                description="টিম এবং এন্টারপ্রাইজের জন্য সেন্ট্রালাইজড কমান্ড ম্যানেজমেন্ট"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["টিম কমান্ড শেয়ারিং", "রোল-বেসড অ্যাকসেস কন্ট্রোল", "কমান্ড অডিটিং এবং লগিং"]}
                price="১৪.৯৯$/মাস থেকে"
              />
            </div>
          </TabsContent>

          {/* System Administration */}
          <TabsContent value="system-admin" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="সিস্টেম মনিটর"
                description="ব্যাপক সিস্টেম মনিটরিং এবং পারফরম্যান্স অ্যানালাইসিস টুল"
                icon={<Server className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রিমিয়াম"
                features={["রিয়েল-টাইম রিসোর্স মনিটরিং", "পারফরম্যান্স অ্যানালিটিক্স", "অ্যালার্ট নোটিফিকেশন"]}
                price="১৯.৯৯$/মাস থেকে"
              />
              <ProductCard
                name="নেটওয়ার্ক অ্যানালাইজার"
                description="উন্নত নেটওয়ার্ক অ্যানালাইসিস এবং ট্রাবলশুটিং টুলকিট"
                icon={<Globe className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["নেটওয়ার্ক ট্রাফিক অ্যানালাইসিস", "ব্যান্ডউইথ মনিটরিং", "প্রোটোকল ইন্সপেকশন"]}
                price="২৪.৯৯$/মাস থেকে"
                popular={true}
              />
              <ProductCard
                name="ব্যাকআপ মাস্টার"
                description="ক্রিটিকাল ডাটা এবং সিস্টেমের জন্য অটোমেটেড ব্যাকআপ সলিউশন"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="ওয়ান-টাইম"
                features={["শিডিউলড ব্যাকআপ", "ইনক্রিমেন্টাল এবং ডিফারেনশিয়াল ব্যাকআপ", "ক্লাউড স্টোরেজ ইন্টিগ্রেশন"]}
                price="৭৯.৯৯$ থেকে"
              />
              <ProductCard
                name="প্যাচ ম্যানেজার"
                description="অটোমেটেড সিস্টেম প্যাচিং এবং আপডেট ম্যানেজমেন্ট"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["অটোমেটেড প্যাচ ডেপ্লয়মেন্ট", "কমপ্লায়েন্স রিপোর্টিং", "রোলব্যাক ক্যাপাবিলিটি"]}
                price="১৯.৯৯$/মাস থেকে"
              />
            </div>
          </TabsContent>

          {/* Development Tools */}
          <TabsContent value="development" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="কোড কমান্ডার"
                description="কমান্ড-লাইন কোড জেনারেশন এবং স্ক্যাফোল্ডিং টুল"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রি"
                features={["প্রজেক্ট টেমপ্লেট", "কোড স্ক্যাফোল্ডিং", "ফ্রেমওয়ার্ক ইন্টিগ্রেশন"]}
                price="ফ্রি"
              />
              <ProductCard
                name="গিট উইজার্ড"
                description="ভিজুয়ালাইজেশন সহ উন্নত গিট কমান্ড-লাইন ইন্টারফেস"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রিমিয়াম"
                features={["ভিজুয়াল ব্রাঞ্চ ম্যানেজমেন্ট", "ইন্টারেক্টিভ রিবেস", "কনফ্লিক্ট রেজোলিউশন"]}
                price="১৪.৯৯$/মাস থেকে"
                popular={true}
              />
              <ProductCard
                name="ডেভ এনভায়রনমেন্ট"
                description="ইনস্ট্যান্ট ডেভেলপমেন্ট এনভায়রনমেন্ট সেটআপ এবং কনফিগারেশন"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["ওয়ান-কমান্ড এনভায়রনমেন্ট সেটআপ", "ল্যাঙ্গুয়েজ এবং ফ্রেমওয়ার্ক প্রিসেট", "ডকার ইন্টিগ্রেশন"]}
                price="১৯.৯৯$/মাস থেকে"
              />
              <ProductCard
                name="এপিআই টেস্টার"
                description="কমান্ড-লাইন এপিআই টেস্টিং এবং ডকুমেন্টেশন টুল"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="ওয়ান-টাইম"
                features={["এইচটিটিপি রিকোয়েস্ট টেস্টিং", "অটোমেটেড টেস্ট স্ক্রিপ্ট", "রেসপন্স ভ্যালিডেশন"]}
                price="৫৯.৯৯$ থেকে"
              />
            </div>
          </TabsContent>

          {/* Automation & Productivity */}
          <TabsContent value="automation" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="টাস্ক অটোমেটর"
                description="পাওয়ারফুল টাস্ক অটোমেশন এবং শিডিউলিং টুল"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রিমিয়াম"
                features={["ভিজুয়াল ওয়ার্কফ্লো বিল্ডার", "শিডিউলড টাস্ক", "কন্ডিশনাল লজিক"]}
                price="৯.৯৯$/মাস থেকে"
              />
              <ProductCard
                name="স্ক্রিপ্ট লাইব্রেরি"
                description="প্রোডাক্টিভিটি স্ক্রিপ্ট এবং ইউটিলিটির কিউরেটেড কালেকশন"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["শত শত রেডি-টু-ইউজ স্ক্রিপ্ট", "রেগুলার আপডেট", "কাস্টমাইজেশন অপশন"]}
                price="৭.৯৯$/মাস থেকে"
                popular={true}
              />
              <ProductCard
                name="ফাইল উইজার্ড"
                description="উন্নত ফাইল ম্যানেজমেন্ট এবং অর্গানাইজেশন টুল"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="ওয়ান-টাইম"
                features={["ব্যাচ ফাইল অপারেশন", "উন্নত সার্চ এবং ফিল্টারিং", "ডুপ্লিকেট ডিটেকশন"]}
                price="৩৯.৯৯$ থেকে"
              />
              <ProductCard
                name="কমান্ড শিডিউলার"
                description="উন্নত কমান্ড শিডিউলিং এবং এক্সিকিউশন ম্যানেজমেন্ট"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রি"
                features={["ক্রন-লাইক শিডিউলিং", "ডিপেন্ডেন্সি ম্যানেজমেন্ট", "এক্সিকিউশন লগিং"]}
                price="ফ্রি"
              />
            </div>
          </TabsContent>

          {/* Security & Compliance */}
          <TabsContent value="security" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="সিকিউরিটি স্ক্যানার"
                description="ব্যাপক সিকিউরিটি স্ক্যানিং এবং ভালনারাবিলিটি অ্যাসেসমেন্ট"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["ভালনারাবিলিটি স্ক্যানিং", "কমপ্লায়েন্স চেকিং", "রেমেডিয়েশন গাইডেন্স"]}
                price="২৯.৯৯$/মাস থেকে"
                popular={true}
              />
              <ProductCard
                name="ক্রিপ্টো টুলস"
                description="কমান্ড-লাইন ক্রিপ্টোগ্রাফি এবং সিকিউরিটি ইউটিলিটি"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="ফ্রিমিয়াম"
                features={["ফাইল এনক্রিপশন/ডিক্রিপশন", "পাসওয়ার্ড ম্যানেজমেন্ট", "সার্টিফিকেট হ্যান্ডলিং"]}
                price="১৪.৯৯$/মাস থেকে"
              />
              <ProductCard
                name="কমপ্লায়েন্স ম্যানেজার"
                description="অটোমেটেড কমপ্লায়েন্স চেকিং এবং রিপোর্টিং টুল"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="সাবস্ক্রিপশন"
                features={["পলিসি এনফোর্সমেন্ট"]}
                pricingModel="সাবস্ক্রিপশন"
                features={["পলিসি এনফোর্সমেন্ট", "কমপ্লায়েন্স রিপোর্টিং", "অডিট ট্রেইল"]}
                price="৪৯.৯৯$/মাস থেকে"
              />
              <ProductCard
                name="অ্যাকসেস কন্ট্রোল"
                description="উন্নত পারমিশন ম্যানেজমেন্ট এবং অ্যাকসেস কন্ট্রোল সিস্টেম"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="ওয়ান-টাইম"
                features={["রোল-বেসড অ্যাকসেস কন্ট্রোল", "ফাইন-গ্রেইনড পারমিশন", "অডিট লগিং"]}
                price="৮৯.৯৯$ থেকে"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">মূল্য নির্ধারণ মডেল</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            আমরা বিভিন্ন চাহিদা এবং বাজেটের জন্য নমনীয় মূল্য নির্ধারণের বিকল্প অফার করি
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <PricingModelCard
              title="ফ্রি"
              icon={<Gift className="h-6 w-6 text-green-600" />}
              description="কোন খরচ ছাড়াই অত্যাবশ্যকীয় টুলস"
              color="green"
            />
            <PricingModelCard
              title="ফ্রিমিয়াম"
              icon={<Gift className="h-6 w-6 text-blue-600" />}
              description="প্রিমিয়াম আপগ্রেড সহ ফ্রি কোর ফিচার"
              color="blue"
            />
            <PricingModelCard
              title="সাবস্ক্রিপশন"
              icon={<CreditCard className="h-6 w-6 text-purple-600" />}
              description="নিরবিচ্ছিন্ন অ্যাকসেসের জন্য নিয়মিত পেমেন্ট"
              color="purple"
            />
            <PricingModelCard
              title="ওয়ান-টাইম"
              icon={<Download className="h-6 w-6 text-amber-600" />}
              description="চিরস্থায়ী অ্যাকসেসের জন্য একক পেমেন্ট"
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* CLI Environments Section */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">সমর্থিত সিএলআই এনভায়রনমেন্ট</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            একাধিক কমান্ড-লাইন ইন্টারফেসের জন্য ব্যাপক ডকুমেন্টেশন এবং টুলস
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <EnvironmentCard
            title="পাওয়ারশেল"
            icon={<Command className="h-10 w-10 text-primary" />}
            description="আধুনিক টাস্ক অটোমেশন এবং কনফিগারেশন ম্যানেজমেন্ট ফ্রেমওয়ার্ক"
            commandCount="৫০০+"
          />
          <EnvironmentCard
            title="কমান্ড প্রম্পট"
            icon={<Terminal className="h-10 w-10 text-primary" />}
            description="ট্র্যাডিশনাল উইন্ডোজ কমান্ড-লাইন ইন্টারপ্রেটার"
            commandCount="৩০০+"
          />
          <EnvironmentCard
            title="গিট ব্যাশ"
            icon={<GitBranch className="h-10 w-10 text-primary" />}
            description="গিট ভার্সন কন্ট্রোলের জন্য ইউনিক্স-লাইক কমান্ড লাইন"
            commandCount="২৫০+"
          />
          <EnvironmentCard
            title="নোড.জেএস"
            icon={<Server className="h-10 w-10 text-primary" />}
            description="জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট কমান্ড এবং টুলস"
            commandCount="২০০+"
          />
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/commands">সমস্ত কমান্ড ব্রাউজ করুন</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg w-full mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">কমান্ড লাইন মাস্টার করতে প্রস্তুত?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            আপনার কমান্ড-লাইন অভিজ্ঞতা বাড়াতে আমাদের ব্যাপক ডকুমেন্টেশন, টুলস এবং সেবাগুলি অন্বেষণ করুন।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">পণ্য অন্বেষণ করুন</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">মূল্য দেখুন</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Complete Product List */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">সম্পূর্ণ পণ্য ক্যাটালগ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">আমাদের সমস্ত পণ্য এবং সেবার একটি ব্যাপক তালিকা</p>
        </div>

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-12">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                  পণ্যের নাম
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold hidden md:table-cell">
                  ক্যাটাগরি
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold hidden lg:table-cell">
                  মূল্য নির্ধারণ মডেল
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                  শুরুর মূল্য
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold">
                  অ্যাকশন
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-background">
              {productList.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? undefined : "bg-muted/30"}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                    <div className="flex items-center gap-2">
                      {product.popular && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          জনপ্রিয়
                        </Badge>
                      )}
                      {product.nameBn || product.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground hidden md:table-cell">
                    {product.categoryBn || product.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm hidden lg:table-cell">
                    <PricingBadge model={product.pricingModel} modelBn={product.pricingModelBn} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {product.price === "Free" ? (
                      <span className="text-green-600 font-medium">ফ্রি</span>
                    ) : (
                      product.priceBn || product.price
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-right">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products#${product.id}`}>বিস্তারিত</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">সমস্ত পণ্য দেখুন</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Product Card Component
function ProductCard({
  name,
  description,
  icon,
  pricingModel,
  features,
  price,
  popular = false,
}: {
  name: string
  description: string
  icon: React.ReactNode
  pricingModel: string
  features: string[]
  price: string
  popular?: boolean
}) {
  return (
    <Card className={`flex flex-col h-full ${popular ? "border-primary shadow-md" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{name}</CardTitle>
          </div>
          {popular && <Badge className="bg-primary">জনপ্রিয়</Badge>}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <PricingBadge model={pricingModel} />
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="text-sm text-muted-foreground">মূল্য</span>
            <span className="font-medium">{price}</span>
          </div>
          <Button asChild className="w-full">
            <Link href="/products">আরও জানুন</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Pricing Model Card Component
function PricingModelCard({
  title,
  icon,
  description,
  color,
}: {
  title: string
  icon: React.ReactNode
  description: string
  color: "green" | "blue" | "purple" | "amber"
}) {
  const colorClasses = {
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    amber: "bg-amber-50 border-amber-200",
  }

  return (
    <Card className={`border-2 ${colorClasses[color]}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/pricing/${title.toLowerCase()}-model`}>আরও জানুন</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Environment Card Component
function EnvironmentCard({
  title,
  icon,
  description,
  commandCount,
}: {
  title: string
  icon: React.ReactNode
  description: string
  commandCount: string
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex flex-col items-center text-center">
          {icon}
          <CardTitle className="mt-4">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          {commandCount} কমান্ড
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href={`/commands/${title.toLowerCase().replace(" ", "-")}`}>কমান্ড ব্রাউজ করুন</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Pricing Badge Component
function PricingBadge({ model, modelBn }: { model: string; modelBn?: string }) {
  const displayModel = modelBn || model

  const badgeClasses = {
    Free: "bg-green-50 text-green-700 border-green-200",
    Freemium: "bg-blue-50 text-blue-700 border-blue-200",
    Subscription: "bg-purple-50 text-purple-700 border-purple-200",
    "One-time": "bg-amber-50 text-amber-700 border-amber-200",
    ফ্রি: "bg-green-50 text-green-700 border-green-200",
    ফ্রিমিয়াম: "bg-blue-50 text-blue-700 border-blue-200",
    সাবস্ক্রিপশন: "bg-purple-50 text-purple-700 border-purple-200",
    "ওয়ান-টাইম": "bg-amber-50 text-amber-700 border-amber-200",
  }

  const icons = {
    Free: <Gift className="h-3 w-3 mr-1" />,
    Freemium: <Gift className="h-3 w-3 mr-1" />,
    Subscription: <CreditCard className="h-3 w-3 mr-1" />,
    "One-time": <Download className="h-3 w-3 mr-1" />,
    ফ্রি: <Gift className="h-3 w-3 mr-1" />,
    ফ্রিমিয়াম: <Gift className="h-3 w-3 mr-1" />,
    সাবস্ক্রিপশন: <CreditCard className="h-3 w-3 mr-1" />,
    "ওয়ান-টাইম": <Download className="h-3 w-3 mr-1" />,
  }

  return (
    <Badge variant="outline" className={badgeClasses[displayModel] || badgeClasses[model]}>
      {icons[displayModel] || icons[model]}
      {displayModel}
    </Badge>
  )
}

// Complete product list data
const productList = [
  {
    id: "cli-master",
    name: "CLI Master",
    nameBn: "সিএলআই মাস্টার",
    category: "Command Line Tools",
    categoryBn: "কমান্ড লাইন টুলস",
    pricingModel: "Freemium",
    pricingModelBn: "ফ্রিমিয়াম",
    price: "From $9.99/mo",
    priceBn: "৯.৯৯$/মাস থেকে",
  },
  {
    id: "terminal-pro",
    name: "Terminal Pro",
    nameBn: "টার্মিনাল প্রো",
    category: "Command Line Tools",
    categoryBn: "কমান্ড লাইন টুলস",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $12.99/mo",
    priceBn: "১২.৯৯$/মাস থেকে",
    popular: true,
  },
  {
    id: "command-explorer",
    name: "Command Explorer",
    nameBn: "কমান্ড এক্সপ্লোরার",
    category: "Command Line Tools",
    categoryBn: "কমান্ড লাইন টুলস",
    pricingModel: "Free",
    pricingModelBn: "ফ্রি",
    price: "Free",
    priceBn: "ফ্রি",
  },
  {
    id: "shell-scripter",
    name: "Shell Scripter",
    nameBn: "শেল স্ক্রিপ্টার",
    category: "Command Line Tools",
    categoryBn: "কমান্ড লাইন টুলস",
    pricingModel: "One-time",
    pricingModelBn: "ওয়ান-টাইম",
    price: "From $49.99",
    priceBn: "৪৯.৯৯$ থেকে",
  },
  {
    id: "command-hub",
    name: "Command Hub",
    nameBn: "কমান্ড হাব",
    category: "Command Line Tools",
    categoryBn: "কমান্ড লাইন টুলস",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $14.99/mo",
    priceBn: "১৪.৯৯$/মাস থেকে",
  },
  {
    id: "system-monitor",
    name: "System Monitor",
    nameBn: "সিস্টেম মনিটর",
    category: "System Administration",
    categoryBn: "সিস্টেম অ্যাডমিনিস্ট্রেশন",
    pricingModel: "Freemium",
    pricingModelBn: "ফ্রিমিয়াম",
    price: "From $19.99/mo",
    priceBn: "১৯.৯৯$/মাস থেকে",
  },
  {
    id: "network-analyzer",
    name: "Network Analyzer",
    nameBn: "নেটওয়ার্ক অ্যানালাইজার",
    category: "System Administration",
    categoryBn: "সিস্টেম অ্যাডমিনিস্ট্রেশন",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $24.99/mo",
    priceBn: "২৪.৯৯$/মাস থেকে",
    popular: true,
  },
  {
    id: "backup-master",
    name: "Backup Master",
    nameBn: "ব্যাকআপ মাস্টার",
    category: "System Administration",
    categoryBn: "সিস্টেম অ্যাডমিনিস্ট্রেশন",
    pricingModel: "One-time",
    pricingModelBn: "ওয়ান-টাইম",
    price: "From $79.99",
    priceBn: "৭৯.৯৯$ থেকে",
  },
  {
    id: "patch-manager",
    name: "Patch Manager",
    nameBn: "প্যাচ ম্যানেজার",
    category: "System Administration",
    categoryBn: "সিস্টেম অ্যাডমিনিস্ট্রেশন",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $19.99/mo",
    priceBn: "১৯.৯৯$/মাস থেকে",
  },
  {
    id: "code-commander",
    name: "Code Commander",
    nameBn: "কোড কমান্ডার",
    category: "Development Tools",
    categoryBn: "ডেভেলপমেন্ট টুলস",
    pricingModel: "Free",
    pricingModelBn: "ফ্রি",
    price: "Free",
    priceBn: "ফ্রি",
  },
  {
    id: "git-wizard",
    name: "Git Wizard",
    nameBn: "গিট উইজার্ড",
    category: "Development Tools",
    categoryBn: "ডেভেলপমেন্ট টুলস",
    pricingModel: "Freemium",
    pricingModelBn: "ফ্রিমিয়াম",
    price: "From $14.99/mo",
    priceBn: "১৪.৯৯$/মাস থেকে",
    popular: true,
  },
  {
    id: "dev-environment",
    name: "Dev Environment",
    nameBn: "ডেভ এনভায়রনমেন্ট",
    category: "Development Tools",
    categoryBn: "ডেভেলপমেন্ট টুলস",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $19.99/mo",
    priceBn: "১৯.৯৯$/মাস থেকে",
  },
  {
    id: "api-tester",
    name: "API Tester",
    nameBn: "এপিআই টেস্টার",
    category: "Development Tools",
    categoryBn: "ডেভেলপমেন্ট টুলস",
    pricingModel: "One-time",
    pricingModelBn: "ওয়ান-টাইম",
    price: "From $59.99",
    priceBn: "৫৯.৯৯$ থেকে",
  },
  {
    id: "task-automator",
    name: "Task Automator",
    nameBn: "টাস্ক অটোমেটর",
    category: "Automation & Productivity",
    categoryBn: "অটোমেশন ও প্রোডাক্টিভিটি",
    pricingModel: "Freemium",
    pricingModelBn: "ফ্রিমিয়াম",
    price: "From $9.99/mo",
    priceBn: "৯.৯৯$/মাস থেকে",
  },
  {
    id: "script-library",
    name: "Script Library",
    nameBn: "স্ক্রিপ্ট লাইব্রেরি",
    category: "Automation & Productivity",
    categoryBn: "অটোমেশন ও প্রোডাক্টিভিটি",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $7.99/mo",
    priceBn: "৭.৯৯$/মাস থেকে",
    popular: true,
  },
  {
    id: "file-wizard",
    name: "File Wizard",
    nameBn: "ফাইল উইজার্ড",
    category: "Automation & Productivity",
    categoryBn: "অটোমেশন ও প্রোডাক্টিভিটি",
    pricingModel: "One-time",
    pricingModelBn: "ওয়ান-টাইম",
    price: "From $39.99",
    priceBn: "৩৯.৯৯$ থেকে",
  },
  {
    id: "command-scheduler",
    name: "Command Scheduler",
    nameBn: "কমান্ড শিডিউলার",
    category: "Automation & Productivity",
    categoryBn: "অটোমেশন ও প্রোডাক্টিভিটি",
    pricingModel: "Free",
    pricingModelBn: "ফ্রি",
    price: "Free",
    priceBn: "ফ্রি",
  },
  {
    id: "security-scanner",
    name: "Security Scanner",
    nameBn: "সিকিউরিটি স্ক্যানার",
    category: "Security & Compliance",
    categoryBn: "সিকিউরিটি ও কমপ্লায়েন্স",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $29.99/mo",
    priceBn: "২৯.৯৯$/মাস থেকে",
    popular: true,
  },
  {
    id: "crypto-tools",
    name: "Crypto Tools",
    nameBn: "ক্রিপ্টো টুলস",
    category: "Security & Compliance",
    categoryBn: "সিকিউরিটি ও কমপ্লায়েন্স",
    pricingModel: "Freemium",
    pricingModelBn: "ফ্রিমিয়াম",
    price: "From $14.99/mo",
    priceBn: "১৪.৯৯$/মাস থেকে",
  },
  {
    id: "compliance-manager",
    name: "Compliance Manager",
    nameBn: "কমপ্লায়েন্স ম্যানেজার",
    category: "Security & Compliance",
    categoryBn: "সিকিউরিটি ও কমপ্লায়েন্স",
    pricingModel: "Subscription",
    pricingModelBn: "সাবস্ক্রিপশন",
    price: "From $49.99/mo",
    priceBn: "৪৯.৯৯$/মাস থেকে",
  },
  {
    id: "access-control",
    name: "Access Control",
    nameBn: "অ্যাকসেস কন্ট্রোল",
    category: "Security & Compliance",
    categoryBn: "সিকিউরিটি ও কমপ্লায়েন্স",
    pricingModel: "One-time",
    pricingModelBn: "ওয়ান-টাইম",
    price: "From $89.99",
    priceBn: "৮৯.৯৯$ থেকে",
  },
]
