'use client'

import { useState } from 'react'
import { User } from '@/lib/auth'
import { CreateFeedbackData } from '@/lib/types'
import { useFeedbacks } from '@/lib/hooks/useFeedbacks'
import AccessGuard from '@/components/AccessGuard'
import FeedbackCard from '@/components/FeedbackCard'
import AddFeedbackModal from '@/components/AddFeedbackModal'
import { ToastProvider, useToast } from '@/components/ToastContainer'

// Client component props arayüzü
interface FeedbackPageClientProps {
  isAuthorized: boolean
  user: User | null
  accessToken: string
  error: string | null
}

// Gerçek veri çekme hook'u kullanılıyor

// Ana feedback client component içeriği
function FeedbackPageContent({
  isAuthorized,
  user,
  accessToken,
  error
}: FeedbackPageClientProps) {
  const { success, error: showError } = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'active' | 'released'>('active')
  
  // Gerçek veri çekme
  const { feedbacks, loading, error: fetchError, refetch } = useFeedbacks({
    accessToken,
    enabled: isAuthorized
  })
  
  // Feedbackleri duruma göre filtrele
  const activeFeedbacks = feedbacks.filter(f => f.status !== 'Yayında')
  const releasedFeedbacks = feedbacks.filter(f => f.status === 'Yayında')
  
  // Aktif tab'a göre gösterilecek feedbackler
  const displayedFeedbacks = activeTab === 'active' ? activeFeedbacks : releasedFeedbacks
  
  // Gerçek vote handler
  const handleVote = async (feedbackId: string) => {
    try {
      const response = await fetch(`/api/feedback/${feedbackId}/vote`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Oy verme işlemi başarısız')
      }
      
      const data = await response.json()
      console.log('Vote success:', data)
      
      // Listeyi yenile
      await refetch()
      
    } catch (error) {
      console.error('Vote error:', error)
      showError(
        'Oy Verilemedi',
        error instanceof Error ? error.message : 'Oy verme işlemi başarısız oldu.'
      )
      throw error // VoteButton'da optimistic update'i geri almak için
    }
  }
  
  // Gerçek delete handler
  const handleDelete = async (feedbackId: string) => {
    try {
      const response = await fetch(`/api/feedback/${feedbackId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Silme işlemi başarısız')
      }
      
      const result = await response.json()
      console.log('Delete success:', result)
      
      // Başarı mesajı
      success(
        'Öneri Silindi! 🗑️',
        'Geri bildiriminiz başarıyla silindi.'
      )
      
      // Listeyi yenile
      await refetch()
      
    } catch (error) {
      console.error('Delete error:', error)
      showError(
        'Silme İşlemi Başarısız',
        error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu.'
      )
    }
  }
  
  // Gerçek status change handler
  const handleStatusChange = async (feedbackId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/feedback/${feedbackId}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Durum güncelleme işlemi başarısız')
      }
      
      const result = await response.json()
      console.log('Status update success:', result)
      
      // Başarı mesajı
      success(
        'Durum Güncellendi! ✅',
        `Öneri durumu "${newStatus}" olarak değiştirildi.`
      )
      
      // Listeyi yenile
      await refetch()
      
    } catch (error) {
      console.error('Status update error:', error)
      showError(
        'Durum Güncellenemedi',
        error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu.'
      )
    }
  }
  
  // Gerçek feedback ekleme handler'ı
  const handleAddFeedback = async (data: CreateFeedbackData) => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Geri bildirim ekleme işlemi başarısız')
      }
      
      const result = await response.json()
      console.log('Add feedback success:', result)
      
      // Başarı mesajı
      success(
        'Öneri Başarıyla Eklendi! 🎉',
        `"${data.title}" başlıklı öneriniz toplulukla paylaşıldı. Diğer kullanıcılar artık oy verebilir.`
      )
      
      // Listeyi yenile
      await refetch()
      
    } catch (error) {
      console.error('Add feedback error:', error)
      showError(
        'Öneri Gönderilemedi',
        error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.'
      )
      throw error // Modal'da hata göstermek için
    }
  }
  return (
    <AccessGuard isAuthorized={isAuthorized} error={error}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Geri Bildirim ve Öneriler
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  Skinly uygulaması için önerilerinizi paylaşın ve oy verin
                </p>
              </div>
              
              {/* Kullanıcı bilgisi */}
              {user && (
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {user.display_name || user.email}
                    </p>
                    {user.is_admin && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Admin
                      </span>
                    )}
                  </div>
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {(user.display_name || user.email).charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Ana içerik */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Test modu uyarısı */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Development Test Modu
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Bu sayfa test modunda çalışıyor. Production'da token doğrulama aktif olacak.
                      <br />
                      <strong>Test URL:</strong> /feedback?test=true
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Başarı mesajı */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-green-800">UI Bileşenleri Başarıyla Oluşturuldu!</h3>
                <p className="text-sm text-green-700 mt-1">
                  ✅ FeedbackCard ✅ VoteButton ✅ StatusBadge - Tüm bileşenler çalışıyor
                </p>
              </div>
            </div>
          </div>

          {/* Geri bildirim listesi */}
          <div className="space-y-6">
            {/* Header ve Tab Sistemi */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Geri Bildirimler
                </h2>
                
                {/* Tab Butonları */}
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab('active')}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer
                      ${activeTab === 'active'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                      }
                    `}
                  >
                    💡 Aktif Öneriler ({activeFeedbacks.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('released')}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer
                      ${activeTab === 'released'
                        ? 'bg-white text-green-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                      }
                    `}
                  >
                    🚀 Yayına Alınanlar ({releasedFeedbacks.length})
                  </button>
                </div>
              </div>
              
              {/* Yeni Öneri Ekle Butonu - Sadece aktif tab'da göster */}
              {activeTab === 'active' && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 self-start sm:self-auto cursor-pointer"
                >
                  <span>+</span>
                  <span>Yeni Öneri Ekle</span>
                </button>
              )}
            </div>

            {/* Tab İçeriği */}
            <div className="min-h-[400px]">
              {/* Loading durumu */}
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-600">Geri bildirimler yükleniyor...</span>
                  </div>
                </div>
              ) : fetchError ? (
                /* Hata durumu */
                <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 text-red-400 mb-4">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Hata Oluştu</h3>
                  <p className="text-gray-500 mb-4">{fetchError}</p>
                  <button 
                    onClick={() => refetch()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Tekrar Dene
                  </button>
                </div>
              ) : displayedFeedbacks.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                  {displayedFeedbacks.map((feedback) => (
                    <FeedbackCard
                      key={feedback.id}
                      feedback={feedback}
                      currentUser={user}
                      onVote={activeTab === 'active' ? handleVote : undefined} // Yayında olanlarda oy verme kapalı
                      onDelete={handleDelete}
                      onStatusChange={handleStatusChange}
                    />
                  ))}
                </div>
              ) : (
                /* Boş durum mesajı */
                <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                    {activeTab === 'active' ? (
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ) : (
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {activeTab === 'active' ? 'Henüz aktif öneri yok' : 'Henüz yayına alınan özellik yok'}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {activeTab === 'active' 
                      ? 'İlk öneriyi siz ekleyin ve topluluktan destek alın!'
                      : 'Öneriler geliştirildikçe burada görünecek.'
                    }
                  </p>
                  {activeTab === 'active' && (
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      İlk Öneriyi Ekle
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Add Feedback Modal */}
        <AddFeedbackModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddFeedback}
        />
      </div>
    </AccessGuard>
  )
}

// Ana export - ToastProvider ile sarılmış
export default function FeedbackPageClient(props: FeedbackPageClientProps) {
  return (
    <ToastProvider>
      <FeedbackPageContent {...props} />
    </ToastProvider>
  )
}