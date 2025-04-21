import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function OneTimeModelPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Link href="/products" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">One-Time Purchase Products</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Single payment for perpetual access to the software</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose a One-Time Purchase?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Lifetime Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Pay once and own the software forever, with no recurring fees or subscriptions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Predictable Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Know exactly what you're paying upfront with no surprise charges or billing changes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Free Minor Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Receive minor updates and bug fixes at no additional cost for the supported period.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular One-Time Purchase Products</h2>

        <Tabs defaultValue="shell-scripter">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="shell-scripter">Shell Scripter</TabsTrigger>
            <TabsTrigger value="backup-master">Backup Master</TabsTrigger>
            <TabsTrigger value="api-tester">API Tester</TabsTrigger>
            <TabsTrigger value="access-control">Access Control</TabsTrigger>
          </TabsList>

          <TabsContent value="shell-scripter" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Shell Scripter</CardTitle>
                <CardDescription>Powerful shell script editor with debugging and testing capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Shell Scripter interface"
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Syntax highlighting for multiple shells</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Integrated debugger</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Script testing framework</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Version control integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Cross-platform compatibility</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle>Premium Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$49.99</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>All core features</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>1 year of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Standard support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/basic">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-primary">
                      <CardHeader>
                        <Badge className="w-fit mb-2">Popular</Badge>
                        <CardTitle>Business Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$99.99</span>
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
                            <span>2 years of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Priority support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Team licensing</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/professional">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup-master" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Backup Master</CardTitle>
                <CardDescription>Automated backup solution for critical data and systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Backup Master interface"
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Scheduled backups</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Incremental and differential backups</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Cloud storage integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Encryption and compression</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Disaster recovery planning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle>Premium Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$79.99</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>All core features</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>1 year of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Standard support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/basic">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-primary">
                      <CardHeader>
                        <Badge className="w-fit mb-2">Popular</Badge>
                        <CardTitle>Business Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$149.99</span>
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
                            <span>2 years of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Priority support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Enterprise features</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/professional">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api-tester" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>API Tester</CardTitle>
                <CardDescription>Command-line API testing and documentation tool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="API Tester interface"
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>HTTP request testing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Automated test scripts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Response validation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Documentation generation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>CI/CD integration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle>Premium Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$59.99</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>All core features</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>1 year of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Standard support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/basic">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-primary">
                      <CardHeader>
                        <Badge className="w-fit mb-2">Popular</Badge>
                        <CardTitle>Business Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$119.99</span>
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
                            <span>2 years of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Priority support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Team licensing</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/professional">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access-control" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Access Control</CardTitle>
                <CardDescription>Advanced permission management and access control system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Access Control interface"
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Role-based access control</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Fine-grained permissions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Audit logging</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Integration with directory services</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Multi-factor authentication</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle>Premium Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$89.99</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>All core features</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>1 year of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Standard support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/basic">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-primary">
                      <CardHeader>
                        <Badge className="w-fit mb-2">Popular</Badge>
                        <CardTitle>Business Edition</CardTitle>
                        <div className="flex items-end gap-1 mt-2">
                          <span className="text-3xl font-bold">$179.99</span>
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
                            <span>2 years of updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Priority support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Enterprise features</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/purchase/professional">Purchase Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Purchase?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Choose the product that works best for you and get lifetime access with a one-time payment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/products">Browse All Products</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact-sales">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
