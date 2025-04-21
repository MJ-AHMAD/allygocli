"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, Save, ArrowUp, ArrowDown, Minus } from "lucide-react"

export function DailyReflection() {
  const [achievements, setAchievements] = useState("")
  const [missedOpportunities, setMissedOpportunities] = useState("")
  const [improvements, setImprovements] = useState("")
  const [regressions, setRegressions] = useState("")
  const [tomorrowPlan, setTomorrowPlan] = useState("")
  const [commitment, setCommitment] = useState("")
  const [progressIndicator, setProgressIndicator] = useState<"up" | "down" | "same">("same")

  const handleSave = () => {
    // In a real app, this would save to a database
    alert("Reflection saved successfully!")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Daily Reflection</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Today's Progress:</span>
            <Button
              variant={progressIndicator === "up" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setProgressIndicator("up")}
            >
              <ArrowUp className="h-4 w-4 text-green-500" />
            </Button>
            <Button
              variant={progressIndicator === "same" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setProgressIndicator("same")}
            >
              <Minus className="h-4 w-4 text-amber-500" />
            </Button>
            <Button
              variant={progressIndicator === "down" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setProgressIndicator("down")}
            >
              <ArrowDown className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </div>
        <CardDescription>Record your daily achievements, missed opportunities, and plan for tomorrow</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <Label htmlFor="achievements">Today's Achievements</Label>
            </div>
            <Textarea
              id="achievements"
              placeholder="What did you accomplish today?"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              <Label htmlFor="missed">Missed Opportunities</Label>
            </div>
            <Textarea
              id="missed"
              placeholder="What could you have done better?"
              value={missedOpportunities}
              onChange={(e) => setMissedOpportunities(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="improvements">Improvements from Yesterday</Label>
            <Textarea
              id="improvements"
              placeholder="How have you improved since yesterday?"
              value={improvements}
              onChange={(e) => setImprovements(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="regressions">Areas of Regression</Label>
            <Textarea
              id="regressions"
              placeholder="Where have you fallen short compared to yesterday?"
              value={regressions}
              onChange={(e) => setRegressions(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tomorrow">Tomorrow's Plan</Label>
          <Textarea
            id="tomorrow"
            placeholder="What do you plan to accomplish tomorrow?"
            value={tomorrowPlan}
            onChange={(e) => setTomorrowPlan(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="commitment">Personal Commitment</Label>
          <Textarea
            id="commitment"
            placeholder="What do you commit to doing tomorrow?"
            value={commitment}
            onChange={(e) => setCommitment(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Reflection
        </Button>
      </CardFooter>
    </Card>
  )
}
