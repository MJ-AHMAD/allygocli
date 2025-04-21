import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, FileText, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DailyRecordsPage() {
  // In a real app, this would be fetched from a database
  const recentRecords = [
    { date: "April 21, 2025", status: "Completed" },
    { date: "April 20, 2025", status: "Completed" },
    { date: "April 19, 2025", status: "Completed" },
    { date: "April 18, 2025", status: "Incomplete" },
    { date: "April 17, 2025", status: "Completed" },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center">
        <h1 className="text-3xl font-bold">Daily Records</h1>
        <div className="ml-auto">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Export Records
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Record</CardTitle>
              <CardDescription>April 21, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="achievements">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="improvements">Improvements</TabsTrigger>
                  <TabsTrigger value="plans">Plans</TabsTrigger>
                  <TabsTrigger value="commitments">Commitments</TabsTrigger>
                </TabsList>

                <TabsContent value="achievements" className="p-4">
                  <h3 className="font-medium mb-2">Today's Achievements</h3>
                  <p>Completed the product analytics dashboard design</p>
                  <p>Resolved 5 critical bugs in the system</p>
                  <p>Conducted team meeting and assigned tasks</p>

                  <h3 className="font-medium mt-4 mb-2">Missed Opportunities</h3>
                  <p>Postponed the documentation update</p>
                  <p>Didn't complete the user testing phase</p>
                </TabsContent>

                <TabsContent value="improvements" className="p-4">
                  <h3 className="font-medium mb-2">Improvements from Yesterday</h3>
                  <p>Better time management during meetings</p>
                  <p>More focused work sessions with fewer distractions</p>
                  <p>Improved communication with team members</p>

                  <h3 className="font-medium mt-4 mb-2">Areas of Regression</h3>
                  <p>Less time spent on documentation</p>
                  <p>Delayed response to some emails</p>
                </TabsContent>

                <TabsContent value="plans" className="p-4">
                  <h3 className="font-medium mb-2">Tomorrow's Plan</h3>
                  <p>Complete the user testing phase</p>
                  <p>Update documentation for the new features</p>
                  <p>Review pull requests from team members</p>
                  <p>Prepare for the client presentation</p>
                </TabsContent>

                <TabsContent value="commitments" className="p-4">
                  <h3 className="font-medium mb-2">Personal Commitments</h3>
                  <p>I commit to starting the day with a clear plan</p>
                  <p>I commit to minimizing distractions during focused work</p>
                  <p>I commit to providing timely feedback to team members</p>
                  <p>I commit to documenting my work as I complete tasks</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Records</CardTitle>
              <CardDescription>Your past daily records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRecords.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{record.date}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        record.status === "Completed" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </div>
                ))}

                <Button variant="outline" className="w-full mt-4">
                  <FileText className="h-4 w-4 mr-2" />
                  View All Records
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
