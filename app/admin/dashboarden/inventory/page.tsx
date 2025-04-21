import { Filter, PlusCircle, Search } from "lucide-react"
import { DhakaTime } from "@/components/admin/dhaka-time"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = [
  {
    id: 1,
    name: "Terminal Pro",
    category: "Command Line Tools",
    licenses: {
      total: 5000,
      used: 1245,
      available: 3755,
    },
    status: "In Stock",
  },
  {
    id: 2,
    name: "System Monitor",
    category: "System Administration",
    licenses: {
      total: 3000,
      used: 890,
      available: 2110,
    },
    status: "In Stock",
  },
  {
    id: 3,
    name: "DevOps Toolkit",
    category: "Development Tools",
    licenses: {
      total: 2000,
      used: 1567,
      available: 433,
    },
    status: "Low Stock",
  },
  {
    id: 4,
    name: "Automation Suite",
    category: "Automation & Productivity",
    licenses: {
      total: 4000,
      used: 723,
      available: 3277,
    },
    status: "In Stock",
  },
  {
    id: 5,
    name: "Security Scanner",
    category: "Security & Compliance",
    licenses: {
      total: 1500,
      used: 1412,
      available: 88,
    },
    status: "Critical",
  },
]

export default function InventoryPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <div className="flex items-center space-x-4">
          <DhakaTime />
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Licenses
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Licenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,500</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Used Licenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,837</div>
            <Progress value={37.7} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Available Licenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9,663</div>
            <Progress value={62.3} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." className="w-full bg-white pl-8 shadow-none" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>Manage digital product licenses and availability.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Total Licenses</TableHead>
                <TableHead>Used</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.licenses.total}</TableCell>
                  <TableCell>{product.licenses.used}</TableCell>
                  <TableCell>{product.licenses.available}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "In Stock"
                          ? "default"
                          : product.status === "Low Stock"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                      <Button variant="outline" size="sm">
                        View
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
