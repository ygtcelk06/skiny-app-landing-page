'use client'

import { useState, useEffect } from 'react'
import { FeedbackItem } from '@/lib/types'

interface UseFeedbacksProps {
  accessToken: string
  enabled?: boolean
}

interface UseFeedbacksReturn {
  feedbacks: FeedbackItem[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useFeedbacks({ accessToken, enabled = true }: UseFeedbacksProps): UseFeedbacksReturn {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFeedbacks = async () => {
    if (!enabled || !accessToken) return

    try {
      setLoading(true)
      setError(null)

      // Mock veri kaldırıldı - artık gerçek API kullanılıyor

      // Production API çağrısı
      const response = await fetch('/api/feedback', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Geri bildirimler alınamadı')
      }

      const data = await response.json()
      setFeedbacks(data.feedbacks || [])

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Bilinmeyen hata'
      setError(errorMessage)
      console.error('Fetch feedbacks error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [accessToken, enabled])

  return {
    feedbacks,
    loading,
    error,
    refetch: fetchFeedbacks
  }
}