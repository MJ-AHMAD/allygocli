import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FreeSignupPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/pricing" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to pricing
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get Started with T-ALLY CLI Free</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Access essential command line tools at no cost</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl mb-2">Create your account</CardTitle>
            <CardDescription>Fill in your details to create your free account</CardDescription>
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" />
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-6">
            <Button className="w-full">Create Free Account</Button>
          </CardFooter>
        </Card>

        <div>
          <h3 className="text-xl font-bold mb-4">Free Plan Features:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Basic command line tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>File operations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Network diagnostics</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Community support</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Access to documentation</span>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Looking for more features?</h4>
            <p className="text-blue-700 text-sm mb-4">
              Upgrade to one of our premium plans to access advanced features and priority support.
            </p>
            <Button variant="outline" asChild>
              <Link href="/pricing">View Premium Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
