'use client'

import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import { CreateFeedbackData } from '@/lib/types'

// AddFeedbackModal props arayüzü
interface AddFeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: CreateFeedbackData) => Promise<void>
}

// AddFeedbackModal bileşeni
export default function AddFeedbackModal({
  isOpen,
  onClose,
  onSubmit
}: AddFeedbackModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({})

  // Form validasyonu
  const validateForm = () => {
    const newErrors: { title?: string; description?: string } = {}
    
    if (!title.trim()) {
      newErrors.title = 'Başlık gereklidir'
    } else if (title.trim().length < 5) {
      newErrors.title = 'Başlık en az 5 karakter olmalıdır'
    } else if (title.trim().length > 100) {
      newErrors.title = 'Başlık en fazla 100 karakter olabilir'
    }
    
    if (!description.trim()) {
      newErrors.description = 'Açıklama gereklidir'
    } else if (description.trim().length < 10) {
      newErrors.description = 'Açıklama en az 10 karakter olmalıdır'
    } else if (description.trim().length > 500) {
      newErrors.description = 'Açıklama en fazla 500 karakter olabilir'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Form gönderme handler'ı
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    try {
      await onSubmit({
        title: title.trim(),
        description: description.trim()
      })
      
      // Başarılı gönderim sonrası formu temizle ve kapat
      setTitle('')
      setDescription('')
      setErrors({})
      onClose()
    } catch (error) {
      console.error('Submit error:', error)
      // Hata mesajı parent component'te toast ile gösteriliyor
    } finally {
      setIsSubmitting(false)
    }
  }

  // Modal kapatma handler'ı
  const handleClose = () => {
    if (isSubmitting) return // Gönderim sırasında kapatmaya izin verme
    
    setTitle('')
    setDescription('')
    setErrors({})
    onClose()
  }

  // Modal açık değilse render etme
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Plus className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Yeni Öneri Ekle
              </h3>
            </div>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Başlık alanı */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Başlık *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isSubmitting}
                placeholder="Önerinizin başlığını yazın..."
                className={`
                  w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  disabled:bg-gray-50 disabled:text-gray-500
                  ${errors.title ? 'border-red-300' : 'border-gray-300'}
                `}
                maxLength={100}
              />
              
              {/* Karakter sayacı */}
              <div className="flex justify-between items-center mt-1">
                {errors.title && (
                  <span className="text-sm text-red-600">{errors.title}</span>
                )}
                <span className={`text-xs ml-auto ${title.length > 90 ? 'text-red-500' : 'text-gray-500'}`}>
                  {title.length}/100
                </span>
              </div>
            </div>

            {/* Açıklama alanı */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Açıklama *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isSubmitting}
                placeholder="Önerinizi detaylı olarak açıklayın..."
                rows={4}
                className={`
                  w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  disabled:bg-gray-50 disabled:text-gray-500 resize-none
                  ${errors.description ? 'border-red-300' : 'border-gray-300'}
                `}
                maxLength={500}
              />
              
              {/* Karakter sayacı */}
              <div className="flex justify-between items-center mt-1">
                {errors.description && (
                  <span className="text-sm text-red-600">{errors.description}</span>
                )}
                <span className={`text-xs ml-auto ${description.length > 450 ? 'text-red-500' : 'text-gray-500'}`}>
                  {description.length}/500
                </span>
              </div>
            </div>

            {/* Bilgi notu */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <p className="text-sm text-blue-800">
                💡 <strong>İpucu:</strong> Öneriniz ne kadar detaylı olursa, diğer kullanıcılar tarafından o kadar iyi anlaşılır ve oy alır.
              </p>
            </div>

            {/* Butonlar */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !title.trim() || !description.trim()}
                className="flex-1 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  'Öneri Gönder'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}