"use client"

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff, ArrowLeft, CheckCircle, Key, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"

// Zod schema for password validation
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/(?=.*[a-z])/, "Password must contain at least one lowercase letter")
      .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
      .regex(/(?=.*\d)/, "Password must contain at least one number")
      .regex(/(?=.*[@$!%*?&])/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type PasswordFormData = z.infer<typeof passwordSchema>

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState<PasswordFormData>({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    try {
      passwordSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call - you'll replace this with Supabase logic
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleInputChange = (field: keyof PasswordFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear specific field error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Success state after password update
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-sm border border-gray-200 bg-white">
          <CardContent className="p-12 text-center space-y-8">
            {/* Purple Check Icon */}
            <div className="w-16 h-16 bg-[#1BCEE0]/50 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-[#323232]" />
            </div>

            {/* Success Message */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[#323232]">Password Reset!</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your password has been successfully reset, click below to continue your access
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-sm border border-gray-200 bg-white">
        <CardContent className="p-12 space-y-8">
          {/* Purple Key Icon */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1BCEE0]/50 rounded-full flex items-center justify-center mx-auto">
              <Key className="w-6 h-6 text-[#323232]" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-[#323232]">Set your new password</h1>
            <p className="text-gray-600 text-sm">
              Your new password should be different from passwords previously used.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`pr-10 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-300 ${
                    errors.password ? "border-red-300 focus:ring-red-200 focus:border-red-300" : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center space-x-1 text-red-600 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm your new password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className={`pr-10 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-300 ${
                    errors.confirmPassword ? "border-red-300 focus:ring-red-200 focus:border-red-300" : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center space-x-1 text-red-600 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.confirmPassword}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !formData.password || !formData.confirmPassword}
              className="w-full bg-[#1BCEE0]/50 hover:bg-[#1BCEE0]/70 text-[#323232] font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                  <span>Confirming...</span>
                </div>
              ) : (
                "Confirm"
              )}
            </Button>
          </form>

          {/* Return to Login Link */}
          <div className="text-center pt-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium mx-auto"
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
