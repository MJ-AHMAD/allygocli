"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function DhakaTime() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    // Function to update time based on current Dhaka time
    const updateTime = () => {
      // Get current time and convert to Dhaka timezone
      const options = { timeZone: "Asia/Dhaka" }
      const dhakaTime = new Date(new Date().toLocaleString("en-US", options))

      // Format time
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }
      const formattedTime = dhakaTime.toLocaleTimeString("en-US", timeOptions)

      // Format date
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      const formattedDate = dhakaTime.toLocaleDateString("en-US", dateOptions)

      setTime(formattedTime)
      setDate(formattedDate)
    }

    // Update time immediately and then every second
    updateTime()
    const timer = setInterval(updateTime, 1000)

    // Clean up interval on unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center bg-primary/5 px-3 py-1 rounded-md text-sm">
      <Clock className="h-4 w-4 mr-2 text-primary" />
      <div>
        <div>{time}</div>
        <div className="text-xs text-muted-foreground">{date}</div>
        <div className="text-xs text-muted-foreground">Dhaka, Bangladesh</div>
      </div>
    </div>
  )
}
