"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdContent() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AllyGo CLI Ad Content</h1>
      <p className="text-center mb-8 text-gray-600">Headlines, subheadlines, and descriptions for various ad formats</p>

      <Tabs defaultValue="bengali" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="bengali">Bengali Ad Content</TabsTrigger>
          <TabsTrigger value="english">English Ad Content</TabsTrigger>
        </TabsList>

        <TabsContent value="bengali">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>বাংলা বিজ্ঞাপন কন্টেন্ট</CardTitle>
              <CardDescription>বিভিন্ন ধরনের বিজ্ঞাপনের জন্য শিরোনাম, সাব-হেডলাইন এবং বর্ণনা</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="social-media-ads">
                  <AccordionTrigger>সোশ্যাল মিডিয়া বিজ্ঞাপন</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">হেডলাইন অপশন #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">শিরোনাম:</p>
                          <p className="bg-white p-2 rounded border mb-2">কমান্ড লাইন মাস্টারি এখন আপনার হাতের মুঠোয়!</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI দিয়ে টার্মিনাল কমান্ড শিখুন ৬০% দ্রুত</p>
                          <p className="font-medium">সংক্ষিপ্ত বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            PowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস। শিক্ষার্থী,
                            ডেভেলপার ও IT প্রফেশনালদের জন্য আদর্শ। আজই ফ্রি ট্রায়াল শুরু করুন!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "কমান্ড লাইন মাস্টারি এখন আপনার হাতের মুঠোয়!\n\nAllyGo CLI দিয়ে টার্মিনাল কমান্ড শিখুন ৬০% দ্রুত\n\nPowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস। শিক্ষার্থী, ডেভেলপার ও IT প্রফেশনালদের জন্য আদর্শ। আজই ফ্রি ট্রায়াল শুরু করুন!",
                                "bn-social-1",
                              )
                            }
                          >
                            {copied === "bn-social-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">হেডলাইন অপশন #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">শিরোনাম:</p>
                          <p className="bg-white p-2 rounded border mb-2">টার্মিনাল কমান্ড নিয়ে আর চিন্তা নয়!</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - আপনার ডিজিটাল সহকারী</p>
                          <p className="font-medium">সংক্ষিপ্ত বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            হাজার হাজার কমান্ড এক প্ল্যাটফর্মে। ক্যাটাগরি অনুযায়ী সাজানো। স্মার্ট সার্চ। ইন্টারেক্টিভ টিউটোরিয়াল। বাংলা ইন্টারফেস।
                            প্রোডাক্টিভিটি বাড়ান ৪০%। আজই জয়েন করুন!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "টার্মিনাল কমান্ড নিয়ে আর চিন্তা নয়!\n\nAllyGo CLI - আপনার ডিজিটাল সহকারী\n\nহাজার হাজার কমান্ড এক প্ল্যাটফর্মে। ক্যাটাগরি অনুযায়ী সাজানো। স্মার্ট সার্চ। ইন্টারেক্টিভ টিউটোরিয়াল। বাংলা ইন্টারফেস। প্রোডাক্টিভিটি বাড়ান ৪০%। আজই জয়েন করুন!",
                                "bn-social-2",
                              )
                            }
                          >
                            {copied === "bn-social-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="google-ads">
                  <AccordionTrigger>গুগল অ্যাডস</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">গুগল অ্যাড #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন 1:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI | কমান্ড লাইন শেখার সেরা প্ল্যাটফর্ম</p>
                          <p className="font-medium">হেডলাইন 2:</p>
                          <p className="bg-white p-2 rounded border mb-2">টার্মিনাল কমান্ড শিখুন সহজে</p>
                          <p className="font-medium">হেডলাইন 3:</p>
                          <p className="bg-white p-2 rounded border mb-2">বাংলা ভাষায় CLI শেখার সুযোগ</p>
                          <p className="font-medium">বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            PowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস। শিক্ষার্থী,
                            ডেভেলপার ও IT প্রফেশনালদের জন্য আদর্শ। আজই ফ্রি ট্রায়াল শুরু করুন!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI | কমান্ড লাইন শেখার সেরা প্ল্যাটফর্ম\nটার্মিনাল কমান্ড শিখুন সহজে\nবাংলা ভাষায় CLI শেখার সুযোগ\n\nPowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস। শিক্ষার্থী, ডেভেলপার ও IT প্রফেশনালদের জন্য আদর্শ। আজই ফ্রি ট্রায়াল শুরু করুন!",
                                "bn-google-1",
                              )
                            }
                          >
                            {copied === "bn-google-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">গুগল অ্যাড #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন 1:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI | প্রোডাক্টিভিটি বাড়ান ৪০%</p>
                          <p className="font-medium">হেডলাইন 2:</p>
                          <p className="bg-white p-2 rounded border mb-2">কমান্ড লাইন শেখার সময় কমান ৬০%</p>
                          <p className="font-medium">হেডলাইন 3:</p>
                          <p className="bg-white p-2 rounded border mb-2">শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ ছাড়</p>
                          <p className="font-medium">বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            সহজে টার্মিনাল কমান্ড শিখুন। বিভিন্ন ক্যাটাগরিতে সাজানো কমান্ড। স্মার্ট সার্চ। ইন্টারেক্টিভ টিউটোরিয়াল। বাংলা
                            ইন্টারফেস। আজই ফ্রি ট্রায়াল শুরু করুন!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI | প্রোডাক্টিভিটি বাড়ান ৪০%\nকমান্ড লাইন শেখার সময় কমান ৬০%\nশিক্ষা প্রতিষ্ঠানের জন্য বিশেষ ছাড়\n\nসহজে টার্মিনাল কমান্ড শিখুন। বিভিন্ন ক্যাটাগরিতে সাজানো কমান্ড। স্মার্ট সার্চ। ইন্টারেক্টিভ টিউটোরিয়াল। বাংলা ইন্টারফেস। আজই ফ্রি ট্রায়াল শুরু করুন!",
                                "bn-google-2",
                              )
                            }
                          >
                            {copied === "bn-google-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="display-ads">
                  <AccordionTrigger>ডিসপ্লে বিজ্ঞাপন</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">ডিসপ্লে অ্যাড #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">কমান্ড লাইন মাস্টারি এখন সহজ!</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - আপনার ডিজিটাল সহকারী</p>
                          <p className="font-medium">সংক্ষিপ্ত বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            টার্মিনাল কমান্ড শিখুন সহজে। বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস। আজই ফ্রি ট্রায়াল শুরু করুন!
                          </p>
                          <p className="font-medium">কল টু অ্যাকশন:</p>
                          <p className="bg-white p-2 rounded border mb-2">আজই শুরু করুন</p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "কমান্ড লাইন মাস্টারি এখন সহজ!\n\nAllyGo CLI - আপনার ডিজিটাল সহকারী\n\nটার্মিনাল কমান্ড শিখুন সহজে। বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস। আজই ফ্রি ট্রায়াল শুরু করুন!\n\nআজই শুরু করুন",
                                "bn-display-1",
                              )
                            }
                          >
                            {copied === "bn-display-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">ডিসপ্লে অ্যাড #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">প্রোডাক্টিভিটি বাড়ান ৪০%</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI দিয়ে টার্মিনাল কমান্ড শিখুন দ্রুত</p>
                          <p className="font-medium">সংক্ষিপ্ত বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            PowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। শিক্ষার্থী, ডেভেলপার ও IT প্রফেশনালদের জন্য আদর্শ।
                          </p>
                          <p className="font-medium">কল টু অ্যাকশন:</p>
                          <p className="bg-white p-2 rounded border mb-2">ফ্রি ট্রায়াল নিন</p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "প্রোডাক্টিভিটি বাড়ান ৪০%\n\nAllyGo CLI দিয়ে টার্মিনাল কমান্ড শিখুন দ্রুত\n\nPowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। শিক্ষার্থী, ডেভেলপার ও IT প্রফেশনালদের জন্য আদর্শ।\n\nফ্রি ট্রায়াল নিন",
                                "bn-display-2",
                              )
                            }
                          >
                            {copied === "bn-display-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="linkedin-ads">
                  <AccordionTrigger>লিংকডইন বিজ্ঞাপন</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">লিংকডইন অ্যাড #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">আপনার টিমের প্রোডাক্টিভিটি বাড়ান AllyGo CLI দিয়ে</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">কমান্ড লাইন শেখার সময় কমান ৬০%</p>
                          <p className="font-medium">সংক্ষিপ্ত বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            AllyGo CLI হল একটি সমন্বিত শিক্ষামূলক প্ল্যাটফর্ম যা বিভিন্ন টার্মিনাল এনভায়রনমেন্টের জন্য কমান্ড শেখা, অনুসন্ধান
                            করা এবং ব্যবহার করার প্রক্রিয়াকে সরলীকৃত করে। নতুন টিম সদস্যদের অনবোর্ডিং প্রক্রিয়া দ্রুত করুন। আজই ফ্রি ডেমো
                            বুক করুন!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "আপনার টিমের প্রোডাক্টিভিটি বাড়ান AllyGo CLI দিয়ে\n\nকমান্ড লাইন শেখার সময় কমান ৬০%\n\nAllyGo CLI হল একটি সমন্বিত শিক্ষামূলক প্ল্যাটফর্ম যা বিভিন্ন টার্মিনাল এনভায়রনমেন্টের জন্য কমান্ড শেখা, অনুসন্ধান করা এবং ব্যবহার করার প্রক্রিয়াকে সরলীকৃত করে। নতুন টিম সদস্যদের অনবোর্ডিং প্রক্রিয়া দ্রুত করুন। আজই ফ্রি ডেমো বুক করুন!",
                                "bn-linkedin-1",
                              )
                            }
                          >
                            {copied === "bn-linkedin-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">লিংকডইন অ্যাড #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            শিক্ষা প্রতিষ্ঠানের জন্য AllyGo CLI - কমান্ড লাইন শেখার সেরা সমাধান
                          </p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">ছাত্রদের টেকনিক্যাল দক্ষতা বাড়ান</p>
                          <p className="font-medium">সংক্ষিপ্ত বর্ণনা:</p>
                          <p className="bg-white p-2 rounded border">
                            AllyGo CLI শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ সমাধান প্রদান করে। বাংলা ও ইংরেজি ভাষায় ইন্টারেক্টিভ টিউটোরিয়াল।
                            PowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ ছাড়। আজই যোগাযোগ
                            করুন!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "শিক্ষা প্রতিষ্ঠানের জন্য AllyGo CLI - কমান্ড লাইন শেখার সেরা সমাধান\n\nছাত্রদের টেকনিক্যাল দক্ষতা বাড়ান\n\nAllyGo CLI শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ সমাধান প্রদান করে। বাংলা ও ইংরেজি ভাষায় ইন্টারেক্টিভ টিউটোরিয়াল। PowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়। শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ ছাড়। আজই যোগাযোগ করুন!",
                                "bn-linkedin-2",
                              )
                            }
                          >
                            {copied === "bn-linkedin-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="youtube-ads">
                  <AccordionTrigger>ইউটিউব বিজ্ঞাপন</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">ইউটিউব অ্যাড #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">কমান্ড লাইন শেখা কখনো ছিল না এত সহজ!</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - আপনার ডিজিটাল সহকারী</p>
                          <p className="font-medium">স্ক্রিপ্ট সারাংশ:</p>
                          <p className="bg-white p-2 rounded border whitespace-pre-line">
                            {`[ভিজ্যুয়াল: টার্মিনাল ব্যবহারে হিমশিম খাওয়া একজন ব্যক্তি]
  
  কমান্ড লাইন শেখা কি আপনার জন্য চ্যালেঞ্জিং?
  
  [ভিজ্যুয়াল: AllyGo CLI ইন্টারফেস দেখানো]
  
  পরিচয় করুন AllyGo CLI-এর সাথে - কমান্ড লাইন শেখার সবচেয়ে সহজ উপায়!
  
  PowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়।
  
  বাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস।
  
  [ভিজ্যুয়াল: ফিচার দেখানো]
  
  ৬০% দ্রুত শিখুন, ৪০% প্রোডাক্টিভিটি বাড়ান!`}
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "কমান্ড লাইন শেখা কখনো ছিল না এত সহজ!\n\nAllyGo CLI - আপনার ডিজিটাল সহকারী\n\n[ভিজ্যুয়াল: টার্মিনাল ব্যবহারে হিমশিম খাওয়া একজন ব্যক্তি]\n\nকমান্ড লাইন শেখা কি আপনার জন্য চ্যালেঞ্জিং?\n\n[ভিজ্যুয়াল: AllyGo CLI ইন্টারফেস দেখানো]\n\nপরিচয় করুন AllyGo CLI-এর সাথে - কমান্ড লাইন শেখার সবচেয়ে সহজ উপায়!\n\nPowerShell, CMD, Git Bash, Node.js - সব এক জায়গায়।\n\nবাংলা ও ইংরেজি ভাষায় সহজ ইন্টারফেস।\n\n[ভিজ্যুয়াল: ফিচার দেখানো]\n\n৬০% দ্রুত শিখুন, ৪০% প্রোডাক্টিভিটি বাড়ান!",
                                "bn-youtube-1",
                              )
                            }
                          >
                            {copied === "bn-youtube-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">ইউটিউব অ্যাড #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - এখন বাংলাতেও!</p>
                          <p className="font-medium">সাব-হেডলাইন:</p>
                          <p className="bg-white p-2 rounded border mb-2">কমান্ড লাইন শিখুন আপনার মাতৃভাষায়</p>
                          <p className="font-medium">স্ক্রিপ্ট সারাংশ:</p>
                          <p className="bg-white p-2 rounded border whitespace-pre-line">
                            {`[ভিজ্যুয়াল: AllyGo CLI বাংলা ইন্টারফেস দেখানো হচ্ছে]

                            কমান্ড লাইন শিখতে চান বাংলা ভাষায়?
                            
                            [ভিজ্যুয়াল: বিভিন্ন কমান্ড এবং টিউটোরিয়াল দেখানো হচ্ছে]
                            
                            AllyGo CLI নিয়ে এলো বাংলা ভাষায় কমান্ড লাইন শেখার সুযোগ।
                            
                            সহজে টার্মিনাল কমান্ড শিখুন।
                            
                            বিভিন্ন ক্যাটাগরিতে সাজানো কমান্ড।
                            
                            স্মার্ট সার্চ এবং ইন্টারেক্টিভ টিউটোরিয়াল।
                            
                            [ভিজ্যুয়াল: ব্যবহারকারী সফলভাবে কমান্ড ব্যবহার করছে]
                            
                            আজই আমাদের ফ্রি ট্রায়াল শুরু করুন আর কমান্ড লাইন মাস্টারি করুন বাংলাতে!`}
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI - এখন বাংলাতেও!\n\nকমান্ড লাইন শিখুন আপনার মাতৃভাষায়\n\n[ভিজ্যুয়াল: AllyGo CLI বাংলা ইন্টারফেস দেখানো হচ্ছে]\n\nকমান্ড লাইন শিখতে চান বাংলা ভাষায়?\n\n[ভিজ্যুয়াল: বিভিন্ন কমান্ড এবং টিউটোরিয়াল দেখানো হচ্ছে]\n\nAllyGo CLI নিয়ে এলো বাংলা ভাষায় কমান্ড লাইন শেখার সুযোগ।\n\nসহজে টার্মিনাল কমান্ড শিখুন।\n\nবিভিন্ন ক্যাটাগরিতে সাজানো কমান্ড।\n\nস্মার্ট সার্চ এবং ইন্টারেক্টিভ টিউটোরিয়াল।\n\n[ভিজ্যুয়াল: ব্যবহারকারী সফলভাবে কমান্ড ব্যবহার করছে]\n\nআজই আমাদের ফ্রি ট্রায়াল শুরু করুন আর কমান্ড লাইন মাস্টারি করুন বাংলাতে!",
                                "bn-youtube-2",
                              )
                            }
                          >
                            {copied === "bn-youtube-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> কপি হয়েছে
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> কপি করুন
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="english">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>English Ad Content</CardTitle>
              <CardDescription>Headlines, subheadlines, and descriptions for various ad formats</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="social-media-ads">
                  <AccordionTrigger>Social Media Ads</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Headline Option #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            Master the Command Line Now at Your Fingertips!
                          </p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            Learn Terminal Commands 60% Faster with AllyGo CLI
                          </p>
                          <p className="font-medium">Short Description:</p>
                          <p className="bg-white p-2 rounded border">
                            PowerShell, CMD, Git Bash, Node.js - All in one place. Easy interface in Bengali and
                            English. Ideal for students, developers, and IT professionals. Start your free trial today!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "Master the Command Line Now at Your Fingertips!\n\nLearn Terminal Commands 60% Faster with AllyGo CLI\n\nPowerShell, CMD, Git Bash, Node.js - All in one place. Easy interface in Bengali and English. Ideal for students, developers, and IT professionals. Start your free trial today!",
                                "en-social-1",
                              )
                            }
                          >
                            {copied === "en-social-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Headline Option #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">No More Worries About Terminal Commands!</p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - Your Digital Assistant</p>
                          <p className="font-medium">Short Description:</p>
                          <p className="bg-white p-2 rounded border">
                            Thousands of commands on one platform. Organized by category. Smart search. Interactive
                            tutorials. Bengali interface. Increase productivity by 40%. Join today!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "No More Worries About Terminal Commands!\n\nAllyGo CLI - Your Digital Assistant\n\nThousands of commands on one platform. Organized by category. Smart search. Interactive tutorials. Bengali interface. Increase productivity by 40%. Join today!",
                                "en-social-2",
                              )
                            }
                          >
                            {copied === "en-social-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="google-ads">
                  <AccordionTrigger>Google Ads</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Google Ad #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline 1:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            AllyGo CLI | The Best Platform to Learn Command Line
                          </p>
                          <p className="font-medium">Headline 2:</p>
                          <p className="bg-white p-2 rounded border mb-2">Learn Terminal Commands Easily</p>
                          <p className="font-medium">Headline 3:</p>
                          <p className="bg-white p-2 rounded border mb-2">Opportunity to Learn CLI in Bengali</p>
                          <p className="font-medium">Description:</p>
                          <p className="bg-white p-2 rounded border">
                            PowerShell, CMD, Git Bash, Node.js - All in one place. Easy interface in Bengali and
                            English. Ideal for students, developers, and IT professionals. Start your free trial today!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI | The Best Platform to Learn Command Line\nLearn Terminal Commands Easily\nOpportunity to Learn CLI in Bengali\n\nPowerShell, CMD, Git Bash, Node.js - All in one place. Easy interface in Bengali and English. Ideal for students, developers, and IT professionals. Start your free trial today!",
                                "en-google-1",
                              )
                            }
                          >
                            {copied === "en-google-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Google Ad #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline 1:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI | Increase Productivity by 40%</p>
                          <p className="font-medium">Headline 2:</p>
                          <p className="bg-white p-2 rounded border mb-2">Reduce Command Line Learning Time by 60%</p>
                          <p className="font-medium">Headline 3:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            Special Discount for Educational Institutions
                          </p>
                          <p className="font-medium">Description:</p>
                          <p className="bg-white p-2 rounded border">
                            Learn terminal commands easily. Commands organized in different categories. Smart search.
                            Interactive tutorials. Bengali interface. Start your free trial today!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI | Increase Productivity by 40%\nReduce Command Line Learning Time by 60%\nSpecial Discount for Educational Institutions\n\nLearn terminal commands easily. Commands organized in different categories. Smart search. Interactive tutorials. Bengali interface. Start your free trial today!",
                                "en-google-2",
                              )
                            }
                          >
                            {copied === "en-google-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="display-ads">
                  <AccordionTrigger>Display Ads</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Display Ad #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">Command Line Mastery Made Easy!</p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - Your Digital Assistant</p>
                          <p className="font-medium">Short Description:</p>
                          <p className="bg-white p-2 rounded border">
                            Learn terminal commands easily. Easy interface in Bengali and English. Start your free trial
                            today!
                          </p>
                          <p className="font-medium">Call to Action:</p>
                          <p className="bg-white p-2 rounded border mb-2">Start Today</p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "Command Line Mastery Made Easy!\n\nAllyGo CLI - Your Digital Assistant\n\nLearn terminal commands easily. Easy interface in Bengali and English. Start your free trial today!\n\nStart Today",
                                "en-display-1",
                              )
                            }
                          >
                            {copied === "en-display-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Display Ad #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">Increase Productivity by 40%</p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            Learn Terminal Commands Quickly with AllyGo CLI
                          </p>
                          <p className="font-medium">Short Description:</p>
                          <p className="bg-white p-2 rounded border">
                            PowerShell, CMD, Git Bash, Node.js - All in one place. Ideal for students, developers, and
                            IT professionals.
                          </p>
                          <p className="font-medium">Call to Action:</p>
                          <p className="bg-white p-2 rounded border mb-2">Take a Free Trial</p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "Increase Productivity by 40%\n\nLearn Terminal Commands Quickly with AllyGo CLI\n\nPowerShell, CMD, Git Bash, Node.js - All in one place. Ideal for students, developers, and IT professionals.\n\nTake a Free Trial",
                                "en-display-2",
                              )
                            }
                          >
                            {copied === "en-display-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="linkedin-ads">
                  <AccordionTrigger>LinkedIn Ads</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">LinkedIn Ad #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            Increase Your Team's Productivity with AllyGo CLI
                          </p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">Reduce Command Line Learning Time by 60%</p>
                          <p className="font-medium">Short Description:</p>
                          <p className="bg-white p-2 rounded border">
                            AllyGo CLI is an integrated educational platform that simplifies the process of learning,
                            searching, and using commands for various terminal environments. Expedite the onboarding
                            process for new team members. Book a free demo today!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "Increase Your Team's Productivity with AllyGo CLI\n\nReduce Command Line Learning Time by 60%\n\nAllyGo CLI is an integrated educational platform that simplifies the process of learning, searching, and using commands for various terminal environments. Expedite the onboarding process for new team members. Book a free demo today!",
                                "en-linkedin-1",
                              )
                            }
                          >
                            {copied === "en-linkedin-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">LinkedIn Ad #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            AllyGo CLI for Educational Institutions - The Best Solution for Learning Command Line
                          </p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">Enhance Students' Technical Skills</p>
                          <p className="font-medium">Short Description:</p>
                          <p className="bg-white p-2 rounded border">
                            AllyGo CLI provides special solutions for educational institutions. Interactive tutorials in
                            Bengali and English. PowerShell, CMD, Git Bash, Node.js - All in one place. Special
                            discounts for educational institutions. Contact us today!
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI for Educational Institutions - The Best Solution for Learning Command Line\n\nEnhance Students' Technical Skills\n\nAllyGo CLI provides special solutions for educational institutions. Interactive tutorials in Bengali and English. PowerShell, CMD, Git Bash, Node.js - All in one place. Special discounts for educational institutions. Contact us today!",
                                "en-linkedin-2",
                              )
                            }
                          >
                            {copied === "en-linkedin-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="youtube-ads">
                  <AccordionTrigger>YouTube Ads</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">YouTube Ad #1</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">
                            Learning Command Line Has Never Been Easier!
                          </p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - Your Digital Assistant</p>
                          <p className="font-medium">Script Summary:</p>
                          <p className="bg-white p-2 rounded border whitespace-pre-line">
                            {`[Visual: A person struggling to use the terminal]

                            Is learning the command line challenging for you?

                            [Visual: AllyGo CLI interface shown]

                            Introducing AllyGo CLI - the easiest way to learn the command line!

                            PowerShell, CMD, Git Bash, Node.js - All in one place.

                            Easy interface in Bengali and English.

                            [Visual: Features shown]

                            Learn 60% faster, increase productivity by 40%!`}
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "Learning Command Line Has Never Been Easier!\n\nAllyGo CLI - Your Digital Assistant\n\n[Visual: A person struggling to use the terminal]\n\nIs learning the command line challenging for you?\n\n[Visual: AllyGo CLI interface shown]\n\nIntroducing AllyGo CLI - the easiest way to learn the command line!\n\nPowerShell, CMD, Git Bash, Node.js - All in one place.\n\nEasy interface in Bengali and English.\n\n[Visual: Features shown]\n\nLearn 60% faster, increase productivity by 40%!",
                                "en-youtube-1",
                              )
                            }
                          >
                            {copied === "en-youtube-1" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">YouTube Ad #2</h3>
                        <div className="mb-4">
                          <p className="font-medium">Headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">AllyGo CLI - Now in Bengali Too!</p>
                          <p className="font-medium">Sub-headline:</p>
                          <p className="bg-white p-2 rounded border mb-2">Learn Command Line in Your Native Language</p>
                          <p className="font-medium">Script Summary:</p>
                          <p className="bg-white p-2 rounded border whitespace-pre-line">
                            {`[Visual: AllyGo CLI Bengali interface is being shown]

                            Want to learn the command line in Bengali?

                            [Visual: Various commands and tutorials are being shown]

                            AllyGo CLI brings the opportunity to learn the command line in Bengali.

                            Learn terminal commands easily.

                            Commands organized in different categories.

                            Smart search and interactive tutorials.

                            [Visual: User successfully using commands]

                            Start our free trial today and master the command line in Bengali!`}
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() =>
                              copyToClipboard(
                                "AllyGo CLI - Now in Bengali Too!\n\nLearn Command Line in Your Native Language\n\n[Visual: AllyGo CLI Bengali interface is being shown]\n\nWant to learn the command line in Bengali?\n\n[Visual: Various commands and tutorials are being shown]\n\nAllyGo CLI brings the opportunity to learn the command line in Bengali.\n\nLearn terminal commands easily.\n\nCommands organized in different categories.\n\nSmart search and interactive tutorials.\n\n[Visual: User successfully using commands]\n\nStart our free trial today and master the command line in Bengali!",
                                "en-youtube-2",
                              )
                            }
                          >
                            {copied === "en-youtube-2" ? (
                              <>
                                <Check className="h-4 w-4 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
