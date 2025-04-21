import Link from "next/link"
import { ArrowLeft, Check, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSalesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/pricing" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to pricing
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Our Sales Team</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get personalized assistance and find the perfect solution for your organization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl mb-2">Get in Touch</CardTitle>
            <CardDescription>Fill in your details and our sales team will contact you shortly</CardDescription>
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
              <Label htmlFor="interest">I'm interested in</Label>
              <select id="interest" className="w-full p-2 border rounded-md">
                <option value="">Select your interest</option>
                <option value="subscription">Subscription plans</option>
                <option value="one-time">One-time purchase</option>
                <option value="enterprise">Enterprise solution</option>
                <option value="custom">Custom solution</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your requirements or questions"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-6">
            <Button className="w-full">Submit Request</Button>
          </CardFooter>
        </Card>

        <div>
          <h3 className="text-xl font-bold mb-6">Why Contact Sales?</h3>
          <ul className="space-y-5">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Get personalized recommendations based on your specific needs</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Learn about volume discounts and special pricing for larger teams</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Discuss custom deployment options and integrations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Get answers to your technical and licensing questions</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Request a personalized demo of our products</span>
            </li>
          </ul>

          <div className="mt-10 space-y-6">
            <h3 className="text-xl font-bold">Alternative Ways to Reach Us</h3>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="text-muted-foreground">sales@t-ally-cli.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Call Us</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-xs text-muted-foreground">Monday-Friday, 9am-5pm EST</p>
              </div>
            </div>

            <div className="flex items-start">
              <MessageSquare className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Live Chat</h4>
                <p className="text-muted-foreground">Chat with our sales team in real-time</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
