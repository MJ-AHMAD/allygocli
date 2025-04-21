"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  targetDate: Date
  title: string
  description: string
  motivationalMessage?: string
}

export function CountdownTimer({ targetDate, title, description, motivationalMessage }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isPulsing, setIsPulsing] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 500)
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/10 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Clock className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col">
            <div className="text-2xl font-normal text-red-500">{formatNumber(timeLeft.days)}</div>
            <div className="text-xs text-muted-foreground">Days</div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-normal text-red-500">{formatNumber(timeLeft.hours)}</div>
            <div className="text-xs text-muted-foreground">Hours</div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-normal text-red-500">{formatNumber(timeLeft.minutes)}</div>
            <div className="text-xs text-muted-foreground">Minutes</div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-normal text-red-500">{formatNumber(timeLeft.seconds)}</div>
            <div className="text-xs text-muted-foreground">Seconds</div>
          </div>
        </div>
        <div className="mt-3 text-xs text-center italic text-muted-foreground">
          {motivationalMessage || "Every second that passes is gone forever. Make each moment count."}
        </div>
      </CardContent>
    </Card>
  )
}
