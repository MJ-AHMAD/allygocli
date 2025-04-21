"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaymentProvider } from "@/components/payment-provider"

export default function BasicPurchasePage() {
  const router = useRouter()
  const [step, setStep] = useState<"details" | "payment">("details")
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  })

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentComplete = (paymentMethod: string, paymentDetails: any) => {
    console.log("Payment completed with", paymentMethod, paymentDetails)
    // In a real app, you would process the order on the server
    router.push("/payment/success")
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/pricing" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to pricing
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Purchase T-ALLY CLI Basic</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Essential command line tools for everyday use - One-time payment of $299
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {step === "details" ? (
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl mb-2">Your Details</CardTitle>
              <CardDescription>Fill in your details to purchase T-ALLY CLI Basic</CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <form onSubmit={handleDetailsSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      value={userDetails.firstName}
                      onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      value={userDetails.lastName}
                      onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="company">Company name (optional)</Label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    value={userDetails.company}
                    onChange={(e) => setUserDetails({ ...userDetails, company: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full mt-6">
                  Continue to Payment
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl mb-2">Payment Details</CardTitle>
              <CardDescription>Choose your payment method</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <PaymentProvider onPaymentComplete={handlePaymentComplete} amount={299} />
            </CardContent>
            <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
              <p>By completing this purchase, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </Card>
        )}

        <div>
          <h3 className="text-xl font-bold mb-4">T-ALLY CLI Basic Features:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>File operations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Network tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>System tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>1 year of updates</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Email support</span>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Looking for more features?</h4>
            <p className="text-blue-700 text-sm mb-4">
              Check out our Professional and Enterprise options for advanced features.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" asChild size="sm">
                <Link href="/purchase/professional">Professional</Link>
              </Button>
              <Button variant="outline" asChild size="sm">
                <Link href="/purchase/enterprise">Enterprise</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
