"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StripePaymentFormProps {
  onSubmit: (formData: {
    cardNumber: string
    cardHolder: string
    expiryDate: string
    cvc: string
  }) => void
  amount: number
  currency?: string
  isProcessing?: boolean
}

export function StripePaymentForm({
  onSubmit,
  amount,
  currency = "USD",
  isProcessing = false,
}: StripePaymentFormProps) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvc: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(cardDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="card-number">Card Number</Label>
          <Input
            id="card-number"
            placeholder="1234 5678 9012 3456"
            value={cardDetails.cardNumber}
            onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="card-holder">Card Holder Name</Label>
          <Input
            id="card-holder"
            placeholder="John Doe"
            value={cardDetails.cardHolder}
            onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input
              id="expiry"
              placeholder="MM/YY"
              value={cardDetails.expiryDate}
              onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Input
              id="cvc"
              placeholder="123"
              value={cardDetails.cvc}
              onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isProcessing}>
          {isProcessing ? "Processing..." : `Pay ${currency} ${amount.toFixed(2)}`}
        </Button>
      </div>
    </form>
  )
}
