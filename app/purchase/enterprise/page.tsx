import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EnterprisePurchasePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/pricing" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to pricing
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Purchase T-ALLY CLI Enterprise</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Complete solution for organizations - One-time payment of $1,999
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl mb-2">Contact Sales</CardTitle>
            <CardDescription>
              Fill in your details and our sales team will contact you to complete your Enterprise purchase
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" placeholder="Enter your work email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company name</Label>
              <Input id="company" placeholder="Enter your company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-size">Company size</Label>
              <select id="company-size" className="w-full p-2 border rounded-md">
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="requirements">Specific requirements</Label>
              <Textarea
                id="requirements"
                placeholder="Tell us about your specific requirements"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-6">
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>

        <div>
          <h3 className="text-xl font-bold mb-4">T-ALLY CLI Enterprise Features:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>All Professional features</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Administrative solutions</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Custom scripts</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Team management</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Lifetime updates</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Dedicated support</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>On-premise deployment</span>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Need a custom solution?</h4>
            <p className="text-blue-700 text-sm mb-4">
              Our team can work with you to create a custom solution tailored to your organization's specific needs.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
