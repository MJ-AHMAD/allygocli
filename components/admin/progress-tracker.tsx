"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart, Calendar, TrendingUp } from "lucide-react"

export function ProgressTracker() {
  // In a real app, this data would come from a database
  const weeklyData = [
    { day: "Monday", completed: 85, target: 100 },
    { day: "Tuesday", completed: 70, target: 100 },
    { day: "Wednesday", completed: 90, target: 100 },
    { day: "Thursday", completed: 75, target: 100 },
    { day: "Friday", completed: 60, target: 100 },
    { day: "Saturday", completed: 40, target: 100 },
    { day: "Sunday", completed: 30, target: 100 },
  ]

  const monthlyData = [
    { week: "Week 1", completed: 75, target: 100 },
    { week: "Week 2", completed: 80, target: 100 },
    { week: "Week 3", completed: 85, target: 100 },
    { week: "Week 4", completed: 70, target: 100 },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Progress Tracker</CardTitle>
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>Track your weekly and monthly progress</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="weekly">
              <Calendar className="h-4 w-4 mr-2" />
              Weekly
            </TabsTrigger>
            <TabsTrigger value="monthly">
              <BarChart className="h-4 w-4 mr-2" />
              Monthly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4">
            {weeklyData.map((item) => (
              <div key={item.day} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.day}</span>
                  <span className="text-muted-foreground">{item.completed}%</span>
                </div>
                <Progress value={item.completed} className="h-2" />
              </div>
            ))}
            <div className="pt-2 text-sm text-center">
              Weekly Average:{" "}
              {Math.round(weeklyData.reduce((acc, item) => acc + item.completed, 0) / weeklyData.length)}%
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            {monthlyData.map((item) => (
              <div key={item.week} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.week}</span>
                  <span className="text-muted-foreground">{item.completed}%</span>
                </div>
                <Progress value={item.completed} className="h-2" />
              </div>
            ))}
            <div className="pt-2 text-sm text-center">
              Monthly Average:{" "}
              {Math.round(monthlyData.reduce((acc, item) => acc + item.completed, 0) / monthlyData.length)}%
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
