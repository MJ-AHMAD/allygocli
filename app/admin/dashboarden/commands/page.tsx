import { Send } from "lucide-react"
import { DhakaTime } from "@/components/admin/dhaka-time"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommandsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Command Dashboard</h1>
        <DhakaTime />
      </div>

      <Tabs defaultValue="terminal" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="terminal">Terminal</TabsTrigger>
          <TabsTrigger value="commands">Command Library</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="saved">Saved Commands</TabsTrigger>
        </TabsList>

        <TabsContent value="terminal">
          <Card>
            <CardHeader>
              <CardTitle>Command Terminal</CardTitle>
              <CardDescription>Execute commands to manage products, services, and system functions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded-md h-80 mb-4 font-mono overflow-y-auto">
                <div className="mb-2">$ help</div>
                <div className="mb-2 pl-2">Available commands:</div>
                <div className="mb-1 pl-4">product list - List all products</div>
                <div className="mb-1 pl-4">product info [id] - Show product details</div>
                <div className="mb-1 pl-4">sales report [period] - Generate sales report</div>
                <div className="mb-1 pl-4">user list - List all users</div>
                <div className="mb-1 pl-4">order status [id] - Check order status</div>
                <div className="mb-2 pl-4">help - Show this help message</div>
                <div className="mb-2">$ product list</div>
                <div className="mb-1 pl-2">ID | Name | Category | Price | Status</div>
                <div className="mb-1 pl-2">1 | Terminal Pro | Command Line Tools | $49.99 | Active</div>
                <div className="mb-1 pl-2">2 | System Monitor | System Administration | $29.99 | Active</div>
                <div className="mb-1 pl-2">3 | DevOps Toolkit | Development Tools | $79.99 | Active</div>
                <div className="mb-1 pl-2">4 | Automation Suite | Automation & Productivity | $59.99 | Active</div>
                <div className="mb-1 pl-2">5 | Security Scanner | Security & Compliance | $89.99 | Active</div>
                <div className="mb-2">$</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">$</div>
                <Input placeholder="Type command here..." className="flex-1" />
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Execute
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commands">
          <Card>
            <CardHeader>
              <CardTitle>Command Library</CardTitle>
              <CardDescription>Browse and search all available commands.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Product Commands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <code>product list</code> - List all products
                      </li>
                      <li>
                        <code>product info [id]</code> - Show product details
                      </li>
                      <li>
                        <code>product create</code> - Create new product
                      </li>
                      <li>
                        <code>product update [id]</code> - Update product
                      </li>
                      <li>
                        <code>product delete [id]</code> - Delete product
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">User Commands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <code>user list</code> - List all users
                      </li>
                      <li>
                        <code>user info [id]</code> - Show user details
                      </li>
                      <li>
                        <code>user create</code> - Create new user
                      </li>
                      <li>
                        <code>user update [id]</code> - Update user
                      </li>
                      <li>
                        <code>user delete [id]</code> - Delete user
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Order Commands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <code>order list</code> - List all orders
                      </li>
                      <li>
                        <code>order info [id]</code> - Show order details
                      </li>
                      <li>
                        <code>order status [id]</code> - Check order status
                      </li>
                      <li>
                        <code>order update [id]</code> - Update order
                      </li>
                      <li>
                        <code>order cancel [id]</code> - Cancel order
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Command History</CardTitle>
              <CardDescription>View and reuse previously executed commands.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <code>product list</code>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Reuse
                    </Button>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <code>sales report monthly</code>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Reuse
                    </Button>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <code>user list</code>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Reuse
                    </Button>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <code>product info 3</code>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Reuse
                    </Button>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <code>order status 10045</code>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Reuse
                    </Button>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Commands</CardTitle>
              <CardDescription>Access your saved and frequently used commands.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <div>
                    <div className="font-medium">Daily Sales Report</div>
                    <code className="text-sm">sales report daily</code>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Execute
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <div>
                    <div className="font-medium">Active Users</div>
                    <code className="text-sm">user list --status=active</code>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Execute
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                  <div>
                    <div className="font-medium">Pending Orders</div>
                    <code className="text-sm">order list --status=pending</code>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Execute
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
