"use client"

import { CheckCircle, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EmailAuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-sm border border-gray-200 bg-white">
        <CardContent className="p-12 text-center space-y-8">
          {/* Purple Check Icon */}
          <div className="w-16 h-16 bg-[#1BCEE0]/50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-gray-900" />
          </div>

          {/* Success Message */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Email Verified!</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your email has been successfully verified, click below to continue your access
            </p>
          </div>

          {/* Continue Button */}
          <Button
            className="w-full bg-[#1BCEE0]/50 hover:bg-[#1BCEE0]/70 text-[#323232] font-medium py-3 rounded-lg transition-colors"
            onClick={() => (window.location.href = "/")}
          >
            Continue
          </Button>

          {/* Return to Login Link */}
          <div className="text-center pt-2">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center space-x-2 text-gray-600 hover:text-[#323232] transition-colors text-sm font-medium mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to the login screen</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
