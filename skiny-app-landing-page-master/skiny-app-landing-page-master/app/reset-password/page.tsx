"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { Eye, EyeOff, CheckCircle, Key, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { supabase } from "@/lib/supabaseClient"

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
  const [apiError, setApiError] = useState<string>("")

  const getAccessTokenFromHash = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      const params = new URLSearchParams(hash.replace('#', ''))
      return params.get('access_token')
    }
    return null
  }

  const validateForm = () => {
    try {
      passwordSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setApiError("")

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const accessToken = getAccessTokenFromHash()
      
      if (!accessToken) {
        throw new Error("Geçersiz veya eksik erişim belirteci")
      }

      // Set the session with the access token
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: '',
      })

      if (sessionError) {
        throw sessionError
      }

      // Update the user's password
      const { error: updateError } = await supabase.auth.updateUser({
        password: formData.password
      })

      if (updateError) {
        throw updateError
      }

      setIsSubmitted(true)
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "Şifre güncellenirken bir hata oluştu")
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof PasswordFormData, value: string) => {
    setFormData((prev: PasswordFormData) => ({ ...prev, [field]: value }))
    // Clear specific field error when user starts typing
    if (errors[field]) {
      setErrors((prev: Record<string, string>) => ({ ...prev, [field]: "" }))
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
              <h2 className="text-xl font-semibold text-[#323232]">Şifre Sıfırlandı!</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
              Şifreniz başarıyla sıfırlandı, erişiminize devam etmek için aşağıya tıklayın.
              </p>
            </div>

            

            {/* Return to Login Link */}
            <div className="text-center pt-2">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center space-x-2 text-gray-600 hover:text-[#323232] transition-colors text-sm font-medium mx-auto"
              >
                
                <span>Artık bu sayfayı güvenle kapatabilirsiniz.</span>
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
            <h1 className="text-xl font-semibold text-[#323232]">Yeni Şifre Oluştur</h1>
            <p className="text-gray-600 text-sm">
            Yeni şifreniz, daha önce kullandığınız şifrelerden farklı olmalıdır
            </p>
          </div>

          {/* API Error Message */}
          {apiError && (
            <div className="flex items-center space-x-1 text-red-600 text-sm bg-red-50 p-3 rounded-md">
              <AlertCircle className="w-5 h-5" />
              <span>{apiError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Yeni Şifre
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "Şifre"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`pr-10 border-gray-300 focus:ring-2  focus:ring-[#1BCEE0]/30 focus:border-[#1BCEE0]/30 ${
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
              Yeni Şifreyi Doğrula
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "Şifre"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className={`pr-10 border-gray-300 focus:ring-2 focus:ring-[#1BCEE0]/30 focus:border-[#1BCEE0]/30 ${
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
                  <span>Güncelleniyor...</span>
                </div>
              ) : (
                "Şifreyi Güncelle"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
