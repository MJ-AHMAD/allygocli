import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SubscriptionModelPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Link href="/products" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Subscription Products</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Regular payments for continuous access and updates</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose a Subscription?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Regular Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get continuous access to the latest features, improvements, and security updates.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flexible Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose between monthly or annual billing with significant savings for annual plans.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Priority Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Subscribers get priority access to our support team and exclusive resources.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Subscription Products</h2>

        <Tabs defaultValue="terminal-pro">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="terminal-pro">Terminal Pro</TabsTrigger>
            <TabsTrigger value="network-analyzer">Network Analyzer</TabsTrigger>
            <TabsTrigger value="dev-environment">Dev Environment</TabsTrigger>
            <TabsTrigger value="security-scanner">Security Scanner</TabsTrigger>
            <TabsTrigger value="command-hub">Command Hub</TabsTrigger>
          </TabsList>

          <TabsContent value="terminal-pro" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Terminal Pro</CardTitle>
                <CardDescription>Professional terminal emulator with advanced features for developers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$0</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Single terminal window</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Basic syntax highlighting</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Command history</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/free">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Popular</Badge>
                      <CardTitle>Premium</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$12.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Multiple tabs and split views</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Advanced syntax highlighting</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Custom themes and fonts</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/starter/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Business</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$24.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Premium features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Team sharing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Custom scripts library</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/professional/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$49.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Business features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>SSO integration</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Audit logging</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/enterprise/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-4">Save 20% with annual billing</p>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">View Annual Plans</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network-analyzer" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Network Analyzer</CardTitle>
                <CardDescription>Advanced network analysis and troubleshooting toolkit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$24.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Network traffic analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Bandwidth monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Basic protocol inspection</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/starter/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Popular</Badge>
                      <CardTitle>Business</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$49.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Premium features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Deep packet inspection</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Security scanning</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/professional/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$99.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Business features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Multi-network management</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Advanced security features</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/enterprise/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-4">Save 20% with annual billing</p>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">View Annual Plans</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dev-environment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Dev Environment</CardTitle>
                <CardDescription>Instant development environment setup and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$19.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>One-command environment setup</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Basic language presets</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Docker integration</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/starter/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Popular</Badge>
                      <CardTitle>Business</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$39.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Premium features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Advanced language presets</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Cloud development environments</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/professional/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$79.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Business features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Team synchronization</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Custom integrations</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/enterprise/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-4">Save 20% with annual billing</p>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">View Annual Plans</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security-scanner" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Scanner</CardTitle>
                <CardDescription>Comprehensive security scanning and vulnerability assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$29.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Vulnerability scanning</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Monthly scans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Basic remediation guidance</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/starter/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Popular</Badge>
                      <CardTitle>Business</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$59.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Advanced vulnerability scanning</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Weekly scans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Detailed remediation guidance</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/professional/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$119.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Comprehensive scanning</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Daily scans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Custom remediation plans</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/enterprise/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-4">Save 20% with annual billing</p>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">View Annual Plans</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="command-hub" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Command Hub</CardTitle>
                <CardDescription>Centralized command management for teams and enterprises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$14.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Team command sharing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Basic access control</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Command auditing</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/starter/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Popular</Badge>
                      <CardTitle>Business</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$29.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Premium features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Role-based access control</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Custom command repositories</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/professional/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="flex items-end gap-1 mt-2">
                        <span className="text-3xl font-bold">$59.99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>All Business features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Integration with CI/CD pipelines</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Advanced logging and analytics</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup/enterprise/monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-4">Save 20% with annual billing</p>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">View Annual Plans</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Subscribe?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Choose the plan that works best for you and start using our premium features today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact-sales">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
