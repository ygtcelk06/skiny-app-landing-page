import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseClient'
import { validateAccessToken } from '@/lib/auth'
import { z } from 'zod'
import { randomUUID } from 'crypto'

// Geri bildirim ekleme için validasyon şeması
const createFeedbackSchema = z.object({
  title: z.string()
    .min(5, 'Başlık en az 5 karakter olmalıdır')
    .max(100, 'Başlık en fazla 100 karakter olabilir')
    .trim(),
  description: z.string()
    .min(10, 'Açıklama en az 10 karakter olmalıdır')
    .max(500, 'Açıklama en fazla 500 karakter olabilir')
    .trim()
})

// Yeni geri bildirim ekleme API endpoint'i
export async function POST(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token gereklidir' },
        { status: 401 }
      )
    }
    
    const payload = await validateAccessToken(token)
    if (!payload) {
      return NextResponse.json(
        { error: 'Geçersiz token' },
        { status: 401 }
      )
    }
    
    const userId = payload.user_id
    
    // Request body'yi parse et
    const body = await request.json()
    
    // Validasyon
    const validationResult = createFeedbackSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Geçersiz veri',
          details: validationResult.error.errors
        },
        { status: 400 }
      )
    }
    
    const { title, description } = validationResult.data
    
    // Test modunda user_id'yi null yap (foreign key constraint olmadan)
    let finalUserId = userId
    if (process.env.NODE_ENV === 'development') {
      finalUserId = null // Test için null kullan
    }

    // Supabase'e yeni geri bildirim ekle (Service Role ile)
    const { data: newFeedback, error: insertError } = await supabaseAdmin
      .from('feedbacks')
      .insert({
        user_id: finalUserId,
        title: title,
        description: description,
        status: 'Beklemede' // Başlangıç durumu
      })
      .select(`
        id,
        title,
        description,
        status,
        created_at,
        updated_at,
        user_id
      `)
      .single()
    
    if (insertError) {
      console.error('Feedback insert error:', insertError)
      return NextResponse.json(
        { error: 'Geri bildirim eklenirken hata oluştu' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      success: true,
      feedback: {
        ...newFeedback,
        vote_count: 0,
        user_has_voted: false
      },
      message: 'Geri bildirim başarıyla eklendi'
    }, { status: 201 })
    
  } catch (error) {
    console.error('Create feedback API error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    )
  }
}

// Geri bildirim listesi alma API endpoint'i
export async function GET(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token gereklidir' },
        { status: 401 }
      )
    }
    
    const payload = await validateAccessToken(token)
    if (!payload) {
      return NextResponse.json(
        { error: 'Geçersiz token' },
        { status: 401 }
      )
    }
    
    const userId = payload.user_id
    
    // Geri bildirimleri oy sayısı ile birlikte al (Service Role ile)
    const { data: feedbacks, error: fetchError } = await supabaseAdmin
      .from('feedbacks')
      .select(`
        id,
        title,
        description,
        status,
        created_at,
        updated_at,
        user_id,
        votes!inner(count)
      `)
      .order('created_at', { ascending: false })
    
    if (fetchError) {
      console.error('Feedback fetch error:', fetchError)
      return NextResponse.json(
        { error: 'Geri bildirimler alınırken hata oluştu' },
        { status: 500 }
      )
    }
    
    // Her feedback için kullanıcının oy durumunu kontrol et
    const feedbacksWithVotes = await Promise.all(
      (feedbacks || []).map(async (feedback) => {
        // Toplam oy sayısını al
        const { data: voteCount } = await supabaseAdmin
          .from('votes')
          .select('id', { count: 'exact' })
          .eq('feedback_id', feedback.id)
        
        // Kullanıcının oy durumunu kontrol et
        const { data: userVote } = await supabaseAdmin
          .from('votes')
          .select('id')
          .eq('feedback_id', feedback.id)
          .eq('user_id', userId)
          .single()
        
        return {
          ...feedback,
          vote_count: voteCount?.length || 0,
          user_has_voted: !!userVote
        }
      })
    )
    
    // Oy sayısına göre sırala (en çok oy alan en üstte)
    const sortedFeedbacks = feedbacksWithVotes.sort((a, b) => b.vote_count - a.vote_count)
    
    return NextResponse.json({
      success: true,
      feedbacks: sortedFeedbacks
    })
    
  } catch (error) {
    console.error('Get feedbacks API error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    )
  }
}