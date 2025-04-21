"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Terminal,
  Code,
  BookOpen,
  Users,
  Rocket,
  CheckCircle,
  ChevronRight,
  Star,
  Zap,
  Cpu,
  Globe,
  Server,
} from "lucide-react"

const MotionCard = motion(Card)
const MotionDiv = motion.div

export default function WelcomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="container relative px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="px-4 py-1.5 text-base font-medium bg-primary/10">
              AllyGo CLI
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              <span className="block">কমান্ড লাইন মাস্টারি</span>
              <span className="block mt-2">Command Line Mastery</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              আপনার কম্পিউটারের সম্পূর্ণ নিয়ন্ত্রণ নিন। PowerShell, Command Prompt, Git Bash, এবং Node.js এর মাধ্যমে আপনার দক্ষতা নতুন
              উচ্চতায় নিয়ে যান।
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/commands">
                <Button size="lg" className="text-base h-12 px-8 rounded-full">
                  শুরু করুন <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learn/powershell">
                <Button size="lg" variant="outline" className="text-base h-12 px-8 rounded-full">
                  আরও জানুন
                </Button>
              </Link>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 md:mt-24 max-w-5xl mx-auto"
          >
            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-10 bg-black/90 flex items-center px-4 gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-white font-mono">AllyGo Terminal</div>
              </div>
              <div className="absolute top-10 left-0 right-0 bottom-0 bg-black/90 p-6 font-mono text-sm overflow-hidden">
                <div className="terminal-content h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="typing-effect">welcome to AllyGo CLI</span>
                  </div>
                  <div className="command-line mb-2">
                    <span className="text-green-400">AllyGo</span>
                    <span className="text-white">&gt;</span>
                    <span className="text-yellow-200">
                      {" "}
                      আপনাকে স্বাগতম! Welcome to the future of command line learning.
                    </span>
                  </div>
                  <div className="command-line mb-2">
                    <span className="text-green-400">AllyGo</span>
                    <span className="text-white">&gt;</span>
                    <span className="text-yellow-200"> Loading resources...</span>
                  </div>
                  <div className="command-line mb-2">
                    <span className="text-green-400">AllyGo</span>
                    <span className="text-white">></span>
                    <span className="text-yellow-200"> Initializing learning modules...</span>
                  </div>
                  <div className="command-line mb-2">
                    <span className="text-green-400">AllyGo</span>
                    <span className="text-white">></span>
                    <span className="text-yellow-200">
                      {" "}
                      PowerShell, Command Prompt, Git Bash, and Node.js modules ready.
                    </span>
                  </div>
                  <div className="command-line mb-2">
                    <span className="text-green-400">AllyGo</span>
                    <span className="text-white">></span>
                    <span className="text-yellow-200">
                      {" "}
                      Type 'help' to see available commands or 'start' to begin your journey.
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="typing-cursor">_</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                আমাদের বৈশিষ্ট্য
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AllyGo CLI is designed to make learning command line interfaces intuitive and enjoyable
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Interactive Learning",
                description: "ইন্টারেক্টিভ টিউটোরিয়াল এবং অনুশীলনের মাধ্যমে হাতে-কলমে শিখুন।",
                delay: 0.1,
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Comprehensive Commands",
                description: "সমস্ত জনপ্রিয় কমান্ড লাইন ইন্টারফেসের জন্য বিস্তৃত কমান্ড রেফারেন্স।",
                delay: 0.2,
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Bilingual Support",
                description: "বাংলা এবং ইংরেজি উভয় ভাষায় সমর্থন, যাতে সবাই সহজে শিখতে পারে।",
                delay: 0.3,
              },
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "Real-world Examples",
                description: "বাস্তব জীবনের উদাহরণ এবং প্রজেক্ট যা আপনার দক্ষতা বাড়াতে সাহায্য করবে।",
                delay: 0.4,
              },
              {
                icon: <Server className="h-10 w-10 text-primary" />,
                title: "Multiple Environments",
                description: "PowerShell, Command Prompt, Git Bash, এবং Node.js - সবই একই প্ল্যাটফর্মে।",
                delay: 0.5,
              },
              {
                icon: <Rocket className="h-10 w-10 text-primary" />,
                title: "Career Advancement",
                description: "আপনার কেরিয়ার উন্নত করতে প্রয়োজনীয় দক্ষতা অর্জন করুন।",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
                className="bg-background border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* For Different Users Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                আপনার জার্নি, আপনার গতিতে
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a student, teacher, administrator, or tech enthusiast - AllyGo CLI has something for
              everyone
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "নতুন শিক্ষার্থীদের জন্য",
                subtitle: "For Beginners",
                description:
                  "কমান্ড লাইন সম্পর্কে কোন ধারণা নেই? চিন্তা করবেন না! আমরা আপনাকে প্রাথমিক ধারণা থেকে শুরু করে ধাপে ধাপে শিখাব।",
                features: ["Step-by-step tutorials", "Visual examples", "Practice exercises"],
                cta: "শুরু করুন",
                link: "/learn/command-prompt",
                delay: 0.1,
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "মধ্যবর্তী ব্যবহারকারীদের জন্য",
                subtitle: "For Intermediate Users",
                description: "আপনি যদি ইতিমধ্যে কিছু কমান্ড জানেন, তবে আপনার দক্ষতা আরও উন্নত করুন এবং নতুন টেকনিক শিখুন।",
                features: ["Advanced commands", "Automation techniques", "Practical examples"],
                cta: "এখনই শুরু করুন",
                link: "/commands",
                delay: 0.2,
              },
              {
                icon: <Terminal className="h-8 w-8" />,
                title: "অভিজ্ঞ ব্যবহারকারীদের জন্য",
                subtitle: "For Advanced Users",
                description:
                  "আপনার উন্নত দক্ষতাকে আরও শানিত করুন। জটিল স্ক্রিপ্টিং, অটোমেশন এবং সিস্টেম অ্যাডমিনিস্ট্রেশন টেকনিক শিখুন।",
                features: ["Complex scripting", "System administration", "Performance optimization"],
                cta: "আরও অন্বেষণ করুন",
                link: "/commands/powershell",
                delay: 0.3,
              },
            ].map((user, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: user.delay }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                      {user.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{user.title}</CardTitle>
                      <CardDescription>{user.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{user.description}</p>
                  <ul className="space-y-2">
                    {user.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={user.link} className="w-full">
                    <Button variant="default" className="w-full">
                      {user.cta} <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="w-full py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                আপনার শেখার পথ
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your learning path and start your command line journey today
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl border border-border shadow-lg overflow-hidden"
          >
            <Tabs defaultValue="powershell" className="w-full">
              <div className="bg-muted/50 p-2">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-transparent">
                  <TabsTrigger value="powershell" className="data-[state=active]:bg-background rounded-lg">
                    PowerShell
                  </TabsTrigger>
                  <TabsTrigger value="cmd" className="data-[state=active]:bg-background rounded-lg">
                    Command Prompt
                  </TabsTrigger>
                  <TabsTrigger value="git" className="data-[state=active]:bg-background rounded-lg">
                    Git Bash
                  </TabsTrigger>
                  <TabsTrigger value="node" className="data-[state=active]:bg-background rounded-lg">
                    Node.js
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="powershell" className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">PowerShell</h3>
                      <p className="text-muted-foreground">
                        Microsoft's powerful automation and configuration management framework
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">কেন PowerShell শিখবেন?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Windows সিস্টেম অ্যাডমিনিস্ট্রেশন</span>
                            <p className="text-sm text-muted-foreground">
                              Automate administrative tasks and system configuration
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Cloud automation</span>
                            <p className="text-sm text-muted-foreground">
                              Manage Azure, AWS, and other cloud platforms
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">DevOps integration</span>
                            <p className="text-sm text-muted-foreground">
                              Integrate with CI/CD pipelines and automation tools
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <Link href="/commands/powershell">
                      <Button className="mt-4">
                        PowerShell শিখুন <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-semibold mb-3">Popular Commands</h4>
                      <div className="space-y-3">
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">PS&gt;</span>
                            <span>Get-Process</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Gets the processes that are running on the local computer
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">PS&gt;</span>
                            <span>Set-Location</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Sets the current working location to a specified location
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">PS&gt;</span>
                            <span>Invoke-WebRequest</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Gets content from a web page on the internet
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold">Did you know?</h4>
                      </div>
                      <p className="text-muted-foreground">
                        PowerShell is cross-platform and runs on Windows, macOS, and Linux. It's open source and
                        available on GitHub.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cmd" className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Command Prompt</h3>
                      <p className="text-muted-foreground">The traditional Windows command-line interpreter</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">কেন Command Prompt শিখবেন?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Windows compatibility</span>
                            <p className="text-sm text-muted-foreground">
                              Available on all Windows systems without additional installation
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Legacy system management</span>
                            <p className="text-sm text-muted-foreground">
                              Manage older Windows systems and applications
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Batch file scripting</span>
                            <p className="text-sm text-muted-foreground">
                              Create batch files to automate repetitive tasks
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <Link href="/commands/cmd">
                      <Button className="mt-4">
                        Command Prompt শিখুন <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-semibold mb-3">Popular Commands</h4>
                      <div className="space-y-3">
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">C:\&gt;</span>
                            <span>dir</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Displays a list of files and subdirectories in a directory
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">C:\&gt;</span>
                            <span>cd</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Changes the current directory or displays the current directory
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">C:\&gt;</span>
                            <span>ipconfig</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Displays all current TCP/IP network configuration values
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold">Did you know?</h4>
                      </div>
                      <p className="text-muted-foreground">
                        Command Prompt has been a part of Windows since the very beginning, evolving from MS-DOS, and
                        remains useful even in modern Windows versions.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="git" className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Git Bash</h3>
                      <p className="text-muted-foreground">A Bash emulation for Git command line access on Windows</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">কেন Git Bash শিখবেন?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Version control</span>
                            <p className="text-sm text-muted-foreground">Manage code repositories and track changes</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Unix-like environment on Windows</span>
                            <p className="text-sm text-muted-foreground">
                              Access Unix commands and utilities on Windows
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Software development workflow</span>
                            <p className="text-sm text-muted-foreground">
                              Streamline development with powerful Git commands
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <Link href="/commands/git-bash">
                      <Button className="mt-4">
                        Git Bash শিখুন <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-semibold mb-3">Popular Commands</h4>
                      <div className="space-y-3">
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">$</span>
                            <span>git clone</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Clone a repository into a new directory
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">$</span>
                            <span>git commit -m "message"</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Record changes to the repository with a message
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">$</span>
                            <span>git push origin main</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Update remote refs along with associated objects
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold">Did you know?</h4>
                      </div>
                      <p className="text-muted-foreground">
                        Git Bash not only provides Git commands but also includes many common Unix utilities like grep,
                        find, and ssh.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="node" className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Node.js</h3>
                      <p className="text-muted-foreground">JavaScript runtime for server-side applications</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">কেন Node.js শিখবেন?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Web development</span>
                            <p className="text-sm text-muted-foreground">Build scalable web applications and APIs</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Package management</span>
                            <p className="text-sm text-muted-foreground">
                              Access thousands of open-source packages with npm
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">JavaScript everywhere</span>
                            <p className="text-sm text-muted-foreground">
                              Use the same language for frontend and backend
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <Link href="/commands/node">
                      <Button className="mt-4">
                        Node.js শিখুন <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-semibold mb-3">Popular Commands</h4>
                      <div className="space-y-3">
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">$</span>
                            <span>npm install</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Install a package and its dependencies
                          </div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">$</span>
                            <span>node app.js</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Run a JavaScript file with Node.js</div>
                        </div>
                        <div className="bg-background p-3 rounded-md font-mono text-sm border border-border">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">$</span>
                            <span>npx create-next-app</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Create a new Next.js application</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold">Did you know?</h4>
                      </div>
                      <p className="text-muted-foreground">
                        Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient,
                        perfect for data-intensive real-time applications.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                ব্যবহারকারীদের অভিজ্ঞতা
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our users are saying about AllyGo CLI
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "রাহুল আহমেদ",
                role: "Computer Science Student",
                testimonial:
                  "AllyGo CLI সাইটটি আমার কমান্ড লাইন শেখার যাত্রাকে অনেক সহজ করে দিয়েছে। বাংলা এবং ইংরেজি উভয় ভাষায় ব্যাখ্যা থাকায় আমি সহজেই বুঝতে পারি।",
                delay: 0.1,
              },
              {
                name: "Sarah Johnson",
                role: "Web Developer",
                testimonial:
                  "The structured approach to learning command line interfaces on AllyGo CLI has significantly improved my workflow. I can now automate tasks that used to take hours.",
                delay: 0.2,
              },
              {
                name: "মোহাম্মদ হাসান",
                role: "IT Administrator",
                testimonial:
                  "আমি একজন আইটি অ্যাডমিনিস্ট্রেটর হিসেবে, AllyGo CLI আমাকে PowerShell এর উন্নত বৈশিষ্ট্যগুলি শিখতে সাহায্য করেছে। এখন আমি আমার সিস্টেম ম্যানেজমেন্ট কাজগুলি অনেক দ্রুত করতে পারি।",
                delay: 0.3,
              },
            ].map((testimonial, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.delay }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-4 -left-2 text-4xl text-primary/20">"</div>
                    <p className="italic relative z-10 pl-4">{testimonial.testimonial}</p>
                    <div className="absolute -bottom-8 -right-2 text-4xl text-primary/20">"</div>
                  </div>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                সাধারণ প্রশ্নাবলী
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to commonly asked questions about command line interfaces and AllyGo CLI
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "কমান্ড লাইন শেখা কি কঠিন?",
                answer:
                  "না, সঠিক গাইডেন্স এবং অনুশীলনের সাথে কমান্ড লাইন শেখা সহজ। AllyGo CLI আপনাকে ধাপে ধাপে শিখাবে, যাতে আপনি সহজেই শিখতে পারেন।",
                delay: 0.1,
              },
              {
                question: "Which command line interface should I learn first?",
                answer:
                  "If you're using Windows, we recommend starting with Command Prompt for basic operations, then moving to PowerShell for more advanced tasks. For developers, Git Bash and Node.js are excellent choices.",
                delay: 0.2,
              },
              {
                question: "কমান্ড লাইন শেখার সুবিধা কী?",
                answer:
                  "কমান্ড লাইন শেখার অনেক সুবিধা রয়েছে, যেমন: কাজের গতি বাড়ানো, অটোমেশন, সিস্টেম অ্যাডমিনিস্ট্রেশন দক্ষতা, এবং ডেভেলপমেন্ট ওয়ার্কফ্লো উন্নত করা।",
                delay: 0.3,
              },
              {
                question: "How long does it take to become proficient?",
                answer:
                  "With regular practice, you can become comfortable with basic commands in just a few weeks. Mastery comes with continued use and exploration of more advanced features, which AllyGo CLI helps you discover at your own pace.",
                delay: 0.4,
              },
            ].map((faq, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: faq.delay }}
                viewport={{ once: true }}
                className="bg-background border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold">আজই আপনার যাত্রা শুরু করুন</h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Join thousands of users who are mastering command line interfaces with AllyGo CLI
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/commands">
                <Button size="lg" variant="secondary" className="text-base h-12 px-8 rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-12 px-8 rounded-full bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Browse Commands
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-background border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">AllyGo CLI</h3>
              <p className="text-sm text-muted-foreground">
                Your comprehensive guide to mastering command line interfaces.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commands"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Commands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Search
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Command Types</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/commands/powershell"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    PowerShell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commands/cmd"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Command Prompt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commands/git-bash"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Git Bash
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commands/node"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Node.js
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} AllyGo CLI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, hsl(var(--primary) / 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .typing-cursor {
          animation: blink 1s step-end infinite;
        }
        
        .typing-effect {
          overflow: hidden;
          border-right: 2px solid white;
          white-space: nowrap;
          margin: 0;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: white }
        }
        
        @keyframes blink {
          from, to { opacity: 1 }
          50% { opacity: 0 }
        }
        
        .terminal-content {
          animation: fadeIn 1s ease-in;
        }
        
        .command-line {
          animation: fadeInUp 0.5s ease-out;
          animation-fill-mode: both;
        }
        
        .command-line:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .command-line:nth-child(3) {
          animation-delay: 1s;
        }
        
        .command-line:nth-child(4) {
          animation-delay: 1.5s;
        }
        
        .command-line:nth-child(5) {
          animation-delay: 2s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
