// Geri bildirim durumu tipleri
export type FeedbackStatus = 'Beklemede' | 'Değerlendiriliyor' | 'Geliştiriliyor' | 'Yayında'

// Temel kullanıcı arayüzü
export interface User {
  id: string
  email: string
  display_name?: string
  is_admin: boolean
}

// Geri bildirim öğesi arayüzü
export interface FeedbackItem {
  id: string
  title: string
  description: string
  status: FeedbackStatus
  vote_count: number
  user_id: string
  user_has_voted: boolean
  created_at: string
  updated_at: string
  user?: {
    display_name: string
  }
}

// Oy arayüzü
export interface Vote {
  id: string
  feedback_id: string
  user_id: string
  created_at: string
}

// Geri bildirim oluşturma verisi
export interface CreateFeedbackData {
  title: string
  description: string
}

// API yanıt tipleri
export interface FeedbackResponse {
  data: FeedbackItem[]
  error: string | null
}

export interface VoteResponse {
  success: boolean
  vote_count: number
  user_has_voted: boolean
  error?: string
}

// Hata durumu arayüzü
export interface ErrorState {
  type: 'auth' | 'validation' | 'business' | 'system'
  message: string
  field?: string
  code?: string
}