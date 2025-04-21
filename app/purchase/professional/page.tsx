import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfessionalPurchasePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/pricing" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to pricing
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Purchase T-ALLY CLI Professional</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Advanced tools for professional developers - One-time payment of $599
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl mb-2">Purchase Details</CardTitle>
            <CardDescription>Fill in your details to purchase T-ALLY CLI Professional</CardDescription>
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
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company name</Label>
              <Input id="company" placeholder="Enter your company name" />
            </div>
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-4">Payment Details</h4>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-6">
            <Button className="w-full">Purchase Now - $599</Button>
          </CardFooter>
        </Card>

        <div>
          <h3 className="text-xl font-bold mb-4">T-ALLY CLI Professional Features:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>All Basic features</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Package management</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Git & version control</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Text processing</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>2 years of updates</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Priority support</span>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Need more power?</h4>
            <p className="text-blue-700 text-sm mb-4">
              Check out our Enterprise option for unlimited users and advanced features.
            </p>
            <Button variant="outline" asChild>
              <Link href="/purchase/enterprise">View Enterprise</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
