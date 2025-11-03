'use client'

import { useState, useEffect, useRef } from 'react'
import { Trash2, MoreVertical, Settings } from 'lucide-react'
import { FeedbackItem, User, FeedbackStatus } from '@/lib/types'
import VoteButton from './VoteButton'
import StatusBadge from './StatusBadge'

// FeedbackCard props arayüzü
interface FeedbackCardProps {
  feedback: FeedbackItem
  currentUser: User | null
  onVote?: (feedbackId: string) => Promise<void>
  onDelete?: (feedbackId: string) => Promise<void>
  onStatusChange?: (feedbackId: string, status: string) => Promise<void>
  className?: string
}

// Tarih formatlama fonksiyonu
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return 'Az önce'
  if (diffInHours < 24) return `${diffInHours} saat önce`
  if (diffInHours < 48) return 'Dün'
  
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  })
}

// FeedbackCard bileşeni
export default function FeedbackCard({
  feedback,
  currentUser,
  onVote,
  onDelete,
  onStatusChange,
  className = ''
}: FeedbackCardProps) {
  const [showActions, setShowActions] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isChangingStatus, setIsChangingStatus] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Kullanıcı bu geri bildirimin sahibi mi?
  const isOwner = currentUser?.id === feedback.user_id
  
  // Admin mi?
  const isAdmin = currentUser?.is_admin || false
  
  // Silme yetkisi var mı? (Sahibi ve oy almamış VEYA admin)
  const canDelete = (isOwner && feedback.vote_count === 0) || isAdmin

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowActions(false)
      }
    }

    // Dropdown açıkken event listener ekle
    if (showActions) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showActions])

  // Silme handler'ı
  const handleDelete = async () => {
    if (!onDelete || !canDelete) return
    
    const confirmed = window.confirm(
      `"${feedback.title}" başlıklı geri bildirimi silmek istediğinizden emin misiniz?`
    )
    
    if (!confirmed) return
    
    setIsDeleting(true)
    try {
      await onDelete(feedback.id)
    } catch (error) {
      console.error('Delete error:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  // Durum değiştirme handler'ı
  const handleStatusChange = async (newStatus: FeedbackStatus) => {
    if (!onStatusChange || !isAdmin) return
    
    setIsChangingStatus(true)
    try {
      await onStatusChange(feedback.id, newStatus)
    } catch (error) {
      console.error('Status change error:', error)
    } finally {
      setIsChangingStatus(false)
    }
  }

  // Mevcut durumlar
  const statusOptions: FeedbackStatus[] = ['Beklemede', 'Değerlendiriliyor', 'Geliştiriliyor', 'Yayında']

  return (
    <div 
      className={`
        bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200
        ${className}
      `}
    >
      {/* Kart içeriği */}
      <div className="p-6">
        {/* Header - Başlık ve durum */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {feedback.title}
            </h3>
            <StatusBadge status={feedback.status} />
          </div>
          
          {/* Oy butonu */}
          <div className="ml-4 flex-shrink-0">
            {feedback.status === 'Yayında' ? (
              /* Yayında olan öneriler için pasif oy gösterimi */
              <div className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-green-200 bg-green-50 min-w-[60px] min-h-[60px]">
                <svg className="w-5 h-5 text-green-600 mb-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-green-700">{feedback.vote_count}</span>
              </div>
            ) : (
              /* Aktif öneriler için normal oy butonu */
              <VoteButton
                feedbackId={feedback.id}
                voteCount={feedback.vote_count}
                hasVoted={feedback.user_has_voted}
                onVote={onVote || (() => Promise.resolve())}
              />
            )}
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {feedback.description}
        </p>

        {/* Footer - Meta bilgiler ve aksiyonlar */}
        <div className="flex items-center justify-between">
          {/* Meta bilgiler */}
          <div className="flex items-center text-xs text-gray-500 space-x-4">
            <span>
              {formatDate(feedback.created_at)}
            </span>
            {feedback.user?.display_name && (
              <span>
                {feedback.user.display_name}
              </span>
            )}
            {isOwner && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                Sizin
              </span>
            )}
          </div>

          {/* Aksiyonlar */}
          {canDelete && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowActions(!showActions)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Aksiyonlar"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {/* Aksiyon menüsü */}
              {showActions && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        handleDelete()
                        setShowActions(false) // Silme işlemi başladığında menüyü kapat
                      }}
                      disabled={isDeleting}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      {isDeleting ? 'Siliniyor...' : 'Sil'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Admin durum değiştirme */}
      {isAdmin && onStatusChange && (
        <div className="border-t border-gray-100 px-6 py-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Admin Kontrolleri</span>
            </div>
            
            {/* Durum değiştirme dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Durum:</span>
              <select
                value={feedback.status}
                onChange={(e) => handleStatusChange(e.target.value as FeedbackStatus)}
                disabled={isChangingStatus}
                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              
              {/* Loading indicator */}
              {isChangingStatus && (
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}