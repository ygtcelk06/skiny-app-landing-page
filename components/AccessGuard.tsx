'use client'

import React from 'react'

// AccessGuard props arayüzü
interface AccessGuardProps {
  children: React.ReactNode
  isAuthorized: boolean
  error?: string | null
}

// Erişim kontrolü bileşeni
export default function AccessGuard({ 
  children, 
  isAuthorized, 
  error 
}: AccessGuardProps) {
  
  // Yetkisiz erişim durumu
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          {/* Hata ikonu */}
          <div className="mb-4">
            <svg 
              className="mx-auto h-12 w-12 text-red-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          
          {/* Başlık */}
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Erişim Engellendi
          </h3>
          
          {/* Hata mesajı */}
          <p className="text-sm text-gray-500 mb-4">
            {error || 'Bu sayfaya sadece Skinly uygulaması üzerinden erişebilirsiniz.'}
          </p>
          
          {/* Yönlendirme bilgisi */}
          <div className="bg-blue-50 rounded-md p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg 
                  className="h-5 w-5 text-blue-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Nasıl Erişebilirim?
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Skinly uygulamasını açın</li>
                    <li>"Öneri/Feedback" butonuna tıklayın</li>
                    <li>Otomatik olarak bu sayfaya yönlendirileceksiniz</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          {/* Development test linki */}
          {process.env.NODE_ENV === 'development' && (
            <div className="border-t pt-4">
              <p className="text-xs text-gray-400 mb-2">Development Test:</p>
              <a 
                href="/feedback?test=true"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Test Modunda Aç
              </a>
            </div>
          )}
          
          {/* Footer */}
          <p className="text-xs text-gray-400 mt-4">
            Skinly Geri Bildirim Sistemi
          </p>
        </div>
      </div>
    )
  }
  
  // Yetkili erişim - children'ı render et
  return <>{children}</>
}