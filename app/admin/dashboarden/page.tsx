"use client"

import { useEffect, useState } from "react"
import { Settings, Clock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DhakaTime } from "@/components/admin/dhaka-time"
import { CountdownTimer } from "@/components/admin/countdown-timer"
import { DailyReflection } from "@/components/admin/daily-reflection"
import { ProgressTracker } from "@/components/admin/progress-tracker"
import { MotivationalQuote } from "@/components/admin/motivational-quote"

const DashboardPage = () => {
  const [yearEndDate, setYearEndDate] = useState(new Date())
  const [monthEndDate, setMonthEndDate] = useState(new Date())
  const [weekEndDate, setWeekEndDate] = useState(new Date())
  const [dayEndDate, setDayEndDate] = useState(new Date())

  useEffect(() => {
    // Function to update all countdown dates based on current Dhaka time
    const updateDates = () => {
      // Get current time in Dhaka
      const options = { timeZone: "Asia/Dhaka" }
      const dhakaTime = new Date(new Date().toLocaleString("en-US", options))

      // Set year end date (December 31, 2025, 11:59 PM Dhaka time)
      const yearEnd = new Date(2025, 11, 31, 23, 59, 59)
      setYearEndDate(yearEnd)

      // Set month end date (last day of current month, 11:59 PM Dhaka time)
      const monthEnd = new Date(dhakaTime.getFullYear(), dhakaTime.getMonth() + 1, 0, 23, 59, 59)
      setMonthEndDate(monthEnd)

      // Set week end date (Friday of current week, 11:59 PM Dhaka time)
      const dayOfWeek = dhakaTime.getDay() // 0 = Sunday, 6 = Saturday
      const daysUntilFriday = dayOfWeek <= 5 ? 5 - dayOfWeek : 7 + 5 - dayOfWeek
      const friday = new Date(dhakaTime)
      friday.setDate(dhakaTime.getDate() + daysUntilFriday)
      friday.setHours(23, 59, 59, 0)
      setWeekEndDate(friday)

      // Set day end date (Today, 11:59 PM Dhaka time)
      const dayEnd = new Date(dhakaTime)
      dayEnd.setHours(23, 59, 59, 0)
      setDayEndDate(dayEnd)
    }

    // Update dates immediately and then every minute
    updateDates()
    const interval = setInterval(updateDates, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="ml-auto flex items-center space-x-4">
          <DhakaTime />
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">View Site</Link>
          </Button>
          <Button size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="mb-8">
        <MotivationalQuote />
      </div>

      {/* Countdown Timers Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          Time Remaining
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CountdownTimer
            targetDate={yearEndDate}
            title="Year End"
            description="Time remaining until December 31, 2025"
            motivationalMessage="Your future is created by what you do today, not tomorrow. The pain of discipline is far less than the pain of regret."
          />
          <CountdownTimer
            targetDate={monthEndDate}
            title="Month End"
            description="Time remaining until the end of this month"
            motivationalMessage="Do not let the time pass witnessing your own destruction. Rise up and build yourself before it's too late."
          />
          <CountdownTimer
            targetDate={weekEndDate}
            title="Week End"
            description="Time remaining until Friday night"
            motivationalMessage="The graveyard is filled with people who thought they had time. Don't postpone what you can do today."
          />
          <CountdownTimer
            targetDate={dayEndDate}
            title="Day End"
            description="Time remaining until the end of today"
            motivationalMessage="Every second that passes is gone forever. Make each moment count."
          />
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
              <CardDescription>Monthly sales statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$25,000</div>
              <p className="text-gray-500">Compared to $20,000 last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>New Customers</CardTitle>
              <CardDescription>New customers acquired this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150</div>
              <p className="text-gray-500">Compared to 120 last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Website Traffic</CardTitle>
              <CardDescription>Total website visits this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,000</div>
              <p className="text-gray-500">Compared to 10,000 last month</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DailyReflection />
          </div>
          <div>
            <ProgressTracker />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
