import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FreemiumModelPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Link href="/products" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Freemium Products</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Free core features with premium upgrades for power users
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How Our Freemium Model Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Start for Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access core features at no cost. No credit card required to get started.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Explore Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Try out the product and discover which premium features would benefit you most.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Upgrade When Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Upgrade to premium features only when you need them, with flexible pricing options.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Available Freemium Products</h2>

        <Tabs defaultValue="cli-master">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="cli-master">CLI Master</TabsTrigger>
            <TabsTrigger value="system-monitor">System Monitor</TabsTrigger>
            <TabsTrigger value="git-wizard">Git Wizard</TabsTrigger>
            <TabsTrigger value="crypto-tools">Crypto Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="cli-master" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CLI Master</CardTitle>
                <CardDescription>
                  Advanced command line interface with intelligent suggestions and auto-completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">Free Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic command suggestions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Limited command history</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic syntax highlighting</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Community support</span>
                      </li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <Link href="/signup/free">Get Free Version</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Premium Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Advanced intelligent suggestions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Unlimited command history with search</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Custom aliases and shortcuts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Cross-platform compatibility</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Email support</span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-bold">From $9.99/month</span>
                      <Button asChild>
                        <Link href="/signup/starter/monthly">Upgrade Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system-monitor" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Monitor</CardTitle>
                <CardDescription>Comprehensive system monitoring and performance analysis tool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">Free Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic resource monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Limited performance analytics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic alert notifications</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Community support</span>
                      </li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <Link href="/signup/free">Get Free Version</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Premium Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Real-time resource monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Advanced performance analytics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Custom alert notifications</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Historical data tracking</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Custom dashboard</span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-bold">From $19.99/month</span>
                      <Button asChild>
                        <Link href="/signup/professional/monthly">Upgrade Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="git-wizard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Git Wizard</CardTitle>
                <CardDescription>Advanced Git command-line interface with visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">Free Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic branch visualization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Simple command suggestions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic GitHub integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Community support</span>
                      </li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <Link href="/signup/free">Get Free Version</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Premium Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Visual branch management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Interactive rebase</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Conflict resolution</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Performance optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>GitHub/GitLab integration</span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-bold">From $14.99/month</span>
                      <Button asChild>
                        <Link href="/signup/starter/monthly">Upgrade Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto-tools" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Crypto Tools</CardTitle>
                <CardDescription>Command-line cryptography and security utilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">Free Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic file encryption/decryption</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Simple password management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Basic certificate handling</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Community support</span>
                      </li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <Link href="/signup/free">Get Free Version</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Premium Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Advanced file encryption/decryption</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Secure password management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Advanced certificate handling</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Secure communication</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Key generation</span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-bold">From $14.99/month</span>
                      <Button asChild>
                        <Link href="/signup/starter/monthly">Upgrade Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Try our freemium products today and upgrade when you need more features.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup/free">Get Started for Free</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
