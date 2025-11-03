import jwt from 'jsonwebtoken'

// Token payload arayüzü
export interface AccessTokenPayload {
  user_id: string
  email: string
  display_name?: string
  is_admin: boolean
  app_session_id: string
  issued_at: number
  expires_at: number
}

// Kullanıcı arayüzü
export interface User {
  id: string
  email: string
  display_name?: string
  is_admin: boolean
}

/**
 * JWT token doğrulama fonksiyonu
 * @param token - Doğrulanacak JWT token
 * @returns Token payload'ı veya null
 */
export async function validateAccessToken(token: string): Promise<AccessTokenPayload | null> {
  try {
    // JWT secret kontrolü
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      console.error('JWT_SECRET environment variable is not set')
      return null
    }

    // JWT token doğrulama
    const payload = jwt.verify(token, jwtSecret) as AccessTokenPayload
    
    // Token süresi kontrolü
    if (payload.expires_at < Date.now()) {
      console.log('Token expired')
      return null
    }

    // Test modunda kullanıcı kontrolünü atla
    if (process.env.NODE_ENV === 'development') {
      return payload
    }
    
    // Production'da Supabase auth kontrolü (auth.users tablosu admin API ile erişilebilir)
    // Şimdilik payload'ı doğrudan döndür, gerçek production'da auth kontrolü eklenecek
    return payload
  } catch (error) {
    console.error('Token validation error:', error)
    return null
  }
}

/**
 * Development ortamı için test token üretici
 * @param isAdmin - Admin yetkisi verilsin mi
 * @returns Test JWT token
 */
export function generateTestToken(isAdmin: boolean = true): string {
  const testPayload: AccessTokenPayload = {
    user_id: isAdmin ? '550e8400-e29b-41d4-a716-446655440000' : '550e8400-e29b-41d4-a716-446655440001',
    email: isAdmin ? 'admin@skinly.com' : 'user@skinly.com',
    display_name: isAdmin ? 'Skinly Admin' : 'Test Kullanıcı',
    is_admin: isAdmin,
    app_session_id: 'test-session-' + Date.now(),
    issued_at: Date.now(),
    expires_at: Date.now() + (24 * 60 * 60 * 1000) // 24 saat
  }
  
  const jwtSecret = process.env.JWT_SECRET || 'test-secret-key'
  return jwt.sign(testPayload, jwtSecret)
}

/**
 * Development test kullanıcısı oluştur
 * @param isAdmin - Admin yetkisi
 * @returns Test kullanıcı objesi
 */
export function createTestUser(isAdmin: boolean = true): User {
  return {
    id: isAdmin ? '550e8400-e29b-41d4-a716-446655440000' : '550e8400-e29b-41d4-a716-446655440001',
    email: isAdmin ? 'admin@skinly.com' : 'user@skinly.com',
    display_name: isAdmin ? 'Skinly Admin' : 'Test Kullanıcı',
    is_admin: isAdmin
  }
}

/**
 * Gerçek kullanıcı için token üretici
 * @returns Gerçek kullanıcı JWT token
 */
export function generateRealUserToken(): string {
  const realUserPayload: AccessTokenPayload = {
    user_id: 'da48e999-fae7-4853-a7a8-a03d5fa3dcdd',
    email: 'ygtcelk@gmail.com',
    display_name: 'Yiğit Çelik',
    is_admin: true, // Admin yetkisi veriyoruz
    app_session_id: 'real-session-' + Date.now(),
    issued_at: Date.now(),
    expires_at: Date.now() + (24 * 60 * 60 * 1000) // 24 saat
  }
  
  const jwtSecret = process.env.JWT_SECRET || 'test-secret-key'
  return jwt.sign(realUserPayload, jwtSecret)
}

/**
 * Gerçek kullanıcı objesi oluştur
 * @returns Gerçek kullanıcı objesi
 */
export function createRealUser(): User {
  return {
    id: 'da48e999-fae7-4853-a7a8-a03d5fa3dcdd',
    email: 'ygtcelk@gmail.com',
    display_name: 'Yiğit Çelik',
    is_admin: true
  }
}

/**
 * Development ortamı kontrolü
 * @returns Development ortamında mı
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

/**
 * Test modu kontrolü
 * @param params - URL query parametreleri
 * @returns Test modu aktif mi
 */
export function isTestMode(params: { [key: string]: string | string[] | undefined }): boolean {
  return isDevelopment() && params.test === 'true'
}