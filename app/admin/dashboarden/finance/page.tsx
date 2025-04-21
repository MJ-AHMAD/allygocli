import { Download, Filter, Search } from "lucide-react"
import { DhakaTime } from "@/components/admin/dhaka-time"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const transactions = [
  {
    id: "TRX-10045",
    customer: "John Smith",
    type: "Payment",
    product: "Terminal Pro",
    date: "2023-04-15",
    amount: "$49.99",
    status: "Completed",
  },
  {
    id: "TRX-10046",
    customer: "Sarah Johnson",
    type: "Payment",
    product: "System Monitor",
    date: "2023-04-15",
    amount: "$29.99",
    status: "Processing",
  },
  {
    id: "TRX-10047",
    customer: "Michael Brown",
    type: "Payment",
    product: "DevOps Toolkit",
    date: "2023-04-14",
    amount: "$79.99",
    status: "Completed",
  },
  {
    id: "TRX-10048",
    customer: "Emily Davis",
    type: "Refund",
    product: "Automation Suite",
    date: "2023-04-14",
    amount: "-$59.99",
    status: "Completed",
  },
  {
    id: "TRX-10049",
    customer: "David Wilson",
    type: "Payment",
    product: "Security Scanner",
    date: "2023-04-13",
    amount: "$89.99",
    status: "Completed",
  },
]

export default function FinancePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <div className="flex items-center space-x-4">
          <DhakaTime />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,230</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">+5.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$16,550</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+15.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full mb-6">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search transactions..." className="w-full bg-white pl-8 shadow-none" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Transaction Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="payment">Payments</SelectItem>
              <SelectItem value="refund">Refunds</SelectItem>
              <SelectItem value="subscription">Subscriptions</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>View and manage financial transactions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell>
                    <span className={transaction.type === "Refund" ? "text-red-500" : "text-green-500"}>
                      {transaction.type}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.product}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className={transaction.amount.startsWith("-") ? "text-red-500" : "text-green-500"}>
                    {transaction.amount}
                  </TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
