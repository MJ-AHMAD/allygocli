import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-md text-center">
      <div className="mb-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your purchase. Your payment has been processed successfully. You will receive a confirmation email
        shortly.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-sm text-muted-foreground mb-2">Transaction ID</p>
        <p className="font-medium mb-4">TXN-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
        <p className="text-sm text-muted-foreground mb-2">Date</p>
        <p className="font-medium">{new Date().toLocaleDateString()}</p>
      </div>
      <div className="space-y-4">
        <Button asChild className="w-full">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
