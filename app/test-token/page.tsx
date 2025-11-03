import { generateTestToken, generateRealUserToken } from '@/lib/auth'

export default function TestTokenPage() {
  // Token'ları üret
  const realUserToken = generateRealUserToken()
  const adminToken = generateTestToken(true)
  const userToken = generateTestToken(false)
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Skinly Feedback Test
        </h1>
        
        <p className="text-gray-600 mb-6 text-center">
          Gerçek kullanıcı olarak test edin:
        </p>
        
        <div className="space-y-4">
          <a
            href={`/feedback?token=${realUserToken}`}
            className="block w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
          >
            🎯 Gerçek Kullanıcı (Yiğit Çelik)
          </a>
          
          <a
            href={`/feedback?token=${adminToken}`}
            className="block w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center font-medium"
          >
            🔑 Test Admin
          </a>
          
          <a
            href={`/feedback?token=${userToken}`}
            className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            👤 Test Kullanıcı
          </a>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Gerçek Kullanıcı Bilgileri:</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Email: ygtcelk@gmail.com</li>
            <li>• UUID: da48e999-fae7-4853-a7a8-a03d5fa3dcdd</li>
            <li>• Yetki: Admin</li>
            <li>• Gerçek Supabase kullanıcısı</li>
          </ul>
        </div>
      </div>
    </div>
  )
}