import { Download, Filter, Search } from "lucide-react"
import { DhakaTime } from "@/components/admin/dhaka-time"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const orders = [
  {
    id: "ORD-10045",
    customer: "John Smith",
    product: "Terminal Pro",
    date: "2023-04-15",
    amount: "$49.99",
    status: "Completed",
  },
  {
    id: "ORD-10046",
    customer: "Sarah Johnson",
    product: "System Monitor",
    date: "2023-04-15",
    amount: "$29.99",
    status: "Processing",
  },
  {
    id: "ORD-10047",
    customer: "Michael Brown",
    product: "DevOps Toolkit",
    date: "2023-04-14",
    amount: "$79.99",
    status: "Completed",
  },
  {
    id: "ORD-10048",
    customer: "Emily Davis",
    product: "Automation Suite",
    date: "2023-04-14",
    amount: "$59.99",
    status: "Pending",
  },
  {
    id: "ORD-10049",
    customer: "David Wilson",
    product: "Security Scanner",
    date: "2023-04-13",
    amount: "$89.99",
    status: "Completed",
  },
  {
    id: "ORD-10050",
    customer: "Jennifer Lee",
    product: "Terminal Pro",
    date: "2023-04-13",
    amount: "$49.99",
    status: "Refunded",
  },
]

export default function OrdersPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Orders Management</h1>
        <div className="flex items-center space-x-4">
          <DhakaTime />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="w-full bg-white pl-8 shadow-none" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Manage customer orders and track their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Completed"
                          ? "default"
                          : order.status === "Processing"
                            ? "outline"
                            : order.status === "Pending"
                              ? "secondary"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
