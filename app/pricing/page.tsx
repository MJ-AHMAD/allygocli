import Link from "next/link"
import { Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing for Every Need</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the perfect plan for your organization. All plans include access to our core CLI tools.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center mb-12">
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="mt-8">
            {/* Pricing Cards - Monthly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Free Tier */}
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Free</CardTitle>
                  <CardDescription>Essential tools for individual use</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>Basic command line tools</FeatureItem>
                    <FeatureItem included>File operations</FeatureItem>
                    <FeatureItem included>Network diagnostics</FeatureItem>
                    <FeatureItem included>Community support</FeatureItem>
                    <FeatureItem>Advanced system tools</FeatureItem>
                    <FeatureItem>Priority support</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/signup/free">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Starter Tier */}
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfect for small teams and startups</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>All Free features</FeatureItem>
                    <FeatureItem included>Advanced system tools</FeatureItem>
                    <FeatureItem included>Package management</FeatureItem>
                    <FeatureItem included>Git & version control</FeatureItem>
                    <FeatureItem included>Email support</FeatureItem>
                    <FeatureItem>Custom scripts</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup/starter/monthly">Choose Starter</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional Tier */}
              <Card className="flex flex-col border-2 border-primary">
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>Ideal for growing organizations</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>All Starter features</FeatureItem>
                    <FeatureItem included>Custom scripts</FeatureItem>
                    <FeatureItem included>Text processing tools</FeatureItem>
                    <FeatureItem included>Administrative solutions</FeatureItem>
                    <FeatureItem included>Priority support</FeatureItem>
                    <FeatureItem included>Team management</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup/professional/monthly">Choose Professional</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Tier */}
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For large organizations with complex needs</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$149</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>All Professional features</FeatureItem>
                    <FeatureItem included>Unlimited users</FeatureItem>
                    <FeatureItem included>Custom integrations</FeatureItem>
                    <FeatureItem included>Advanced security</FeatureItem>
                    <FeatureItem included>Dedicated support</FeatureItem>
                    <FeatureItem included>On-premise deployment</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/signup/enterprise/monthly">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="annual" className="mt-8">
            {/* Pricing Cards - Annual */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Free Tier */}
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Free</CardTitle>
                  <CardDescription>Essential tools for individual use</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-1">/year</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>Basic command line tools</FeatureItem>
                    <FeatureItem included>File operations</FeatureItem>
                    <FeatureItem included>Network diagnostics</FeatureItem>
                    <FeatureItem included>Community support</FeatureItem>
                    <FeatureItem>Advanced system tools</FeatureItem>
                    <FeatureItem>Priority support</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/signup/free">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Starter Tier */}
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfect for small teams and startups</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$182</span>
                    <span className="text-muted-foreground ml-1">/year</span>
                    <div className="text-sm text-green-600 font-medium">Save $46</div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>All Free features</FeatureItem>
                    <FeatureItem included>Advanced system tools</FeatureItem>
                    <FeatureItem included>Package management</FeatureItem>
                    <FeatureItem included>Git & version control</FeatureItem>
                    <FeatureItem included>Email support</FeatureItem>
                    <FeatureItem>Custom scripts</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup/starter/annual">Choose Starter</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional Tier */}
              <Card className="flex flex-col border-2 border-primary">
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>Ideal for growing organizations</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$470</span>
                    <span className="text-muted-foreground ml-1">/year</span>
                    <div className="text-sm text-green-600 font-medium">Save $118</div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>All Starter features</FeatureItem>
                    <FeatureItem included>Custom scripts</FeatureItem>
                    <FeatureItem included>Text processing tools</FeatureItem>
                    <FeatureItem included>Administrative solutions</FeatureItem>
                    <FeatureItem included>Priority support</FeatureItem>
                    <FeatureItem included>Team management</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup/professional/annual">Choose Professional</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Tier */}
              <Card className="flex flex-col border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For large organizations with complex needs</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$1,430</span>
                    <span className="text-muted-foreground ml-1">/year</span>
                    <div className="text-sm text-green-600 font-medium">Save $358</div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <FeatureItem included>All Professional features</FeatureItem>
                    <FeatureItem included>Unlimited users</FeatureItem>
                    <FeatureItem included>Custom integrations</FeatureItem>
                    <FeatureItem included>Advanced security</FeatureItem>
                    <FeatureItem included>Dedicated support</FeatureItem>
                    <FeatureItem included>On-premise deployment</FeatureItem>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/signup/enterprise/annual">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Feature Comparison */}
      <div className="mt-20 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 w-1/3">Feature</th>
                <th className="text-center py-4 px-4">Free</th>
                <th className="text-center py-4 px-4">Starter</th>
                <th className="text-center py-4 px-4">Professional</th>
                <th className="text-center py-4 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Basic CLI Tools</td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">File Operations</td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Network Tools</td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">System Tools</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Package Management</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Git & Version Control</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Text Processing</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Custom Scripts</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Administrative Solutions</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Team Management</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Custom Integrations</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Advanced Security</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">On-premise Deployment</td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <X className="mx-auto h-5 w-5 text-gray-300" />
                </td>
                <td className="text-center py-4 px-4">
                  <Check className="mx-auto h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Support</td>
                <td className="text-center py-4 px-4">Community</td>
                <td className="text-center py-4 px-4">Email</td>
                <td className="text-center py-4 px-4">Priority</td>
                <td className="text-center py-4 px-4">Dedicated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* One-time Purchase Options */}
      <div className="mt-20 mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">One-time Purchase Options</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          Prefer a one-time purchase? We offer perpetual licenses for select products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>T-ALLY CLI Basic</CardTitle>
              <CardDescription>Essential command line tools for everyday use</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-muted-foreground ml-1">one-time</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <FeatureItem included>File operations</FeatureItem>
                <FeatureItem included>Network tools</FeatureItem>
                <FeatureItem included>System tools</FeatureItem>
                <FeatureItem included>1 year of updates</FeatureItem>
                <FeatureItem included>Email support</FeatureItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/purchase/basic">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>T-ALLY CLI Professional</CardTitle>
              <CardDescription>Advanced tools for professional developers</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$599</span>
                <span className="text-muted-foreground ml-1">one-time</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <FeatureItem included>All Basic features</FeatureItem>
                <FeatureItem included>Package management</FeatureItem>
                <FeatureItem included>Git & version control</FeatureItem>
                <FeatureItem included>Text processing</FeatureItem>
                <FeatureItem included>2 years of updates</FeatureItem>
                <FeatureItem included>Priority support</FeatureItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/purchase/professional">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>T-ALLY CLI Enterprise</CardTitle>
              <CardDescription>Complete solution for organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$1,999</span>
                <span className="text-muted-foreground ml-1">one-time</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <FeatureItem included>All Professional features</FeatureItem>
                <FeatureItem included>Administrative solutions</FeatureItem>
                <FeatureItem included>Custom scripts</FeatureItem>
                <FeatureItem included>Team management</FeatureItem>
                <FeatureItem included>Lifetime updates</FeatureItem>
                <FeatureItem included>Dedicated support</FeatureItem>
                <FeatureItem included>On-premise deployment</FeatureItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/purchase/enterprise">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What's the difference between subscription and one-time purchase?</AccordionTrigger>
              <AccordionContent>
                Subscriptions provide continuous updates, new features, and ongoing support for as long as you're
                subscribed. One-time purchases give you perpetual access to the version you purchase, with updates for a
                specified period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade your subscription plan at any time. When you upgrade, you'll be charged the
                prorated difference for the remainder of your billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer discounts for educational institutions?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer special pricing for educational institutions, non-profits, and open source projects.
                Please contact our sales team for more information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can
                also pay by invoice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What happens when my subscription ends?</AccordionTrigger>
              <AccordionContent>
                When your subscription ends, you'll lose access to premium features and ongoing updates. Your data will
                remain intact, and you can access it using the free version or by renewing your subscription.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 14-day free trial for all our subscription plans. No credit card is required to start
                your trial.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Choose the plan that's right for you and start optimizing your command line experience today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact-sales">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Helper component for feature list items
function FeatureItem({ children, included = false }) {
  return (
    <li className="flex items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {included ? (
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            ) : (
              <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
            )}
          </TooltipTrigger>
          <TooltipContent>{included ? "Included in this plan" : "Not included in this plan"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <span className={included ? "" : "text-muted-foreground"}>{children}</span>
    </li>
  )
}
