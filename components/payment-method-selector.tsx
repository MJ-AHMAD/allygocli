"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CreditCard } from "lucide-react"

interface PaymentMethodSelectorProps {
  onMethodChange: (method: "stripe" | "paypal") => void
  defaultMethod?: "stripe" | "paypal"
}

export function PaymentMethodSelector({ onMethodChange, defaultMethod = "stripe" }: PaymentMethodSelectorProps) {
  const [selectedMethod, setSelectedMethod] = useState<"stripe" | "paypal">(defaultMethod)

  const handleMethodChange = (value: string) => {
    const method = value as "stripe" | "paypal"
    setSelectedMethod(method)
    onMethodChange(method)
  }

  return (
    <RadioGroup defaultValue={defaultMethod} className="mb-6" onValueChange={handleMethodChange}>
      <div className="flex items-center space-x-2 mb-4">
        <RadioGroupItem value="stripe" id="stripe" />
        <Label htmlFor="stripe" className="flex items-center cursor-pointer">
          <CreditCard className="h-5 w-5 mr-2" />
          <span>Credit/Debit Card</span>
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="paypal" />
        <Label htmlFor="paypal" className="flex items-center cursor-pointer">
          <div className="h-5 w-5 mr-2 relative">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#0070ba">
              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.876-.03.2a.804.804 0 0 1-.794.679h-2.52a.483.483 0 0 1-.477-.558l.033-.214h.002l.532-3.395.016-.101a.802.802 0 0 1 .794-.682h.58c2.514 0 4.523-1.03 5.1-4.002.26-1.34.12-2.455-.431-3.233-.16-.225-.37-.416-.617-.586a3.67 3.67 0 0 0-.7-.337 5.894 5.894 0 0 1 1.679-.995zm-7.334 2.88h.01-.01z" />
              <path d="M18.108 7.98c-.237-.102-.485-.19-.748-.265-.263-.075-.542-.137-.833-.19a13.43 13.43 0 0 0-1.65-.123h-4.501a.67.67 0 0 0-.663.57l-1.016 6.431-.03.201a.804.804 0 0 1 .794-.68h1.376c3.239 0 5.775-1.313 6.514-5.12.042-.22.07-.435.085-.643a2.834 2.834 0 0 0-.328-.181z" />
              <path d="M8.293 7.899a.483.483 0 0 1 .477-.558h3.312c.78 0 1.507.062 2.172.19a6.55 6.55 0 0 1 .833.19c.263.075.51.163.748.264.086.038.17.077.25.118.42.215.772.47 1.054.779.388-2.47-.003-4.147-1.353-5.667C14.618 1.92 12.74 1.5 10.407 1.5H4.3a.805.805 0 0 0-.794.68L.095 17.52a.483.483 0 0 0 .477.558h3.474l.87-5.528 1.004-6.383a.804.804 0 0 1 .794-.68h1.454c.064 0 .128.005.19.014a.679.679 0 0 1 .63.566l.032.204.252 1.6.047.26z" />
            </svg>
          </div>
          <span>PayPal</span>
        </Label>
      </div>
    </RadioGroup>
  )
}
