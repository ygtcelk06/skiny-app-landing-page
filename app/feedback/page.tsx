import { Suspense } from 'react'
import { validateAccessToken, isTestMode, createTestUser, generateTestToken, createRealUser, generateRealUserToken } from '@/lib/auth'
import { redirect } from 'next/navigation'
import FeedbackPageClient from './FeedbackPageClient'

// Server-side props arayüzü
interface FeedbackPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Feedback sayfası server component
export default async function FeedbackPage({ searchParams }: FeedbackPageProps) {
  const params = await searchParams
  const token = params.token as string
  const testMode = isTestMode(params)
  const realUserMode = params.real === 'true'
  
  // Gerçek kullanıcı modu
  if (realUserMode) {
    console.log('🎯 Real user mode active - using Yiğit Çelik credentials')
    
    const realUser = createRealUser()
    const realToken = generateRealUserToken()
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <FeedbackPageClient
          isAuthorized={true}
          user={realUser}
          accessToken={realToken}
          error={null}
        />
      </Suspense>
    )
  }
  
  // Development test modu kontrolü
  if (testMode) {
    console.log('🧪 Test mode active - bypassing token validation')
    
    const testUser = createTestUser(true) // Admin yetkisi ile test kullanıcısı
    const testToken = generateTestToken(true)
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <FeedbackPageClient
          isAuthorized={true}
          user={testUser}
          accessToken={testToken}
          error={null}
        />
      </Suspense>
    )
  }
  
  // Production token doğrulama
  if (!token || typeof token !== 'string') {
    return (
      <FeedbackPageClient
        isAuthorized={false}
        user={null}
        accessToken=""
        error="Yetkisiz erişim. Lütfen Skinly uygulaması üzerinden erişin."
      />
    )
  }
  
  // Token doğrulama
  const payload = await validateAccessToken(token)
  
  if (!payload) {
    return (
      <FeedbackPageClient
        isAuthorized={false}
        user={null}
        accessToken=""
        error="Geçersiz veya süresi dolmuş token."
      />
    )
  }
  
  // Başarılı doğrulama
  const user = {
    id: payload.user_id,
    email: payload.email,
    display_name: payload.display_name,
    is_admin: payload.is_admin
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedbackPageClient
        isAuthorized={true}
        user={user}
        accessToken={token}
        error={null}
      />
    </Suspense>
  )
}

// Metadata
export const metadata = {
  title: 'Skinly - Geri Bildirim ve Öneriler',
  description: 'Skinly uygulaması için önerilerinizi paylaşın ve oy verin.',
}