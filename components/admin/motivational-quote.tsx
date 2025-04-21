"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "Great things are not done by impulse, but by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "The time is always right to do what is right.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Lost time is never found again.",
    author: "Benjamin Franklin",
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Yesterday is gone. Tomorrow has not yet come. We have only today.",
    author: "Mother Teresa",
  },
]

export function MotivationalQuote() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    // Change quote every day
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }, [])

  return (
    <Card className="bg-primary/5">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <Quote className="h-8 w-8 text-primary flex-shrink-0" />
          <div>
            <p className="text-lg font-medium italic">{quote.text}</p>
            <p className="text-sm text-muted-foreground text-right mt-2">— {quote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
