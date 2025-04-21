import { Calendar, Download, PlusCircle, Search } from "lucide-react"
import { DhakaTime } from "@/components/admin/dhaka-time"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2023",
    type: "Email",
    status: "Active",
    startDate: "2023-06-01",
    endDate: "2023-06-30",
    budget: "$1,500",
    performance: {
      sent: 5000,
      opened: 2250,
      clicked: 1125,
      converted: 225,
    },
  },
  {
    id: 2,
    name: "New Product Launch",
    type: "Social Media",
    status: "Scheduled",
    startDate: "2023-07-15",
    endDate: "2023-08-15",
    budget: "$2,000",
    performance: {
      impressions: 25000,
      engagement: 5000,
      clicks: 2500,
      converted: 375,
    },
  },
  {
    id: 3,
    name: "Black Friday Promotion",
    type: "Multi-channel",
    status: "Draft",
    startDate: "2023-11-20",
    endDate: "2023-11-27",
    budget: "$3,500",
    performance: {
      impressions: 0,
      engagement: 0,
      clicks: 0,
      converted: 0,
    },
  },
  {
    id: 4,
    name: "Developer Conference",
    type: "Event",
    status: "Completed",
    startDate: "2023-03-15",
    endDate: "2023-03-17",
    budget: "$5,000",
    performance: {
      attendees: 500,
      leads: 150,
      converted: 45,
    },
  },
]

export default function MarketingPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Marketing Management</h1>
        <div className="flex items-center space-x-4">
          <DhakaTime />
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+0.8%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">215%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+15%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="w-full mb-6">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search campaigns..."
            className="w-full bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Date Range
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Marketing Campaigns</CardTitle>
          <CardDescription>Manage and track your marketing initiatives.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Range</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        campaign.status === "Active"
                          ? "default"
                          : campaign.status === "Scheduled"
                            ? "secondary"
                            : campaign.status === "Draft"
                              ? "outline"
                              : "default"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {campaign.startDate} to {campaign.endDate}
                  </TableCell>
                  <TableCell>{campaign.budget}</TableCell>
                  <TableCell>
                    {campaign.status !== "Draft" ? (
                      <div className="w-40">
                        <div className="text-xs text-muted-foreground mb-1">Conversion</div>
                        <Progress value={campaign.status === "Completed" ? 45 : 22.5} className="h-2" />
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">Not started</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
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
