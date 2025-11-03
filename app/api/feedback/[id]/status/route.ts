import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseClient'
import { validateAccessToken } from '@/lib/auth'
import { z } from 'zod'

// Status güncelleme için validasyon şeması
const updateStatusSchema = z.object({
  status: z.enum(['Beklemede', 'Değerlendiriliyor', 'Geliştiriliyor', 'Yayında'])
})

// Feedback status güncelleme API endpoint'i
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const feedbackId = params.id
    
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
    
    // Admin kontrolü
    if (!payload.is_admin) {
      return NextResponse.json(
        { error: 'Bu işlem için admin yetkisi gereklidir' },
        { status: 403 }
      )
    }
    
    // Request body'yi parse et
    const body = await request.json()
    
    // Validasyon
    const validationResult = updateStatusSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Geçersiz durum değeri',
          details: validationResult.error.errors
        },
        { status: 400 }
      )
    }
    
    const { status } = validationResult.data
    
    // Feedback'in var olup olmadığını kontrol et
    const { data: existingFeedback, error: fetchError } = await supabaseAdmin
      .from('feedbacks')
      .select('id, status, title')
      .eq('id', feedbackId)
      .single()
    
    if (fetchError || !existingFeedback) {
      return NextResponse.json(
        { error: 'Geri bildirim bulunamadı' },
        { status: 404 }
      )
    }
    
    // Durum güncelleme
    const { data: updatedFeedback, error: updateError } = await supabaseAdmin
      .from('feedbacks')
      .update({ 
        status: status,
        updated_at: new Date().toISOString()
      })
      .eq('id', feedbackId)
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
    
    if (updateError) {
      console.error('Status update error:', updateError)
      return NextResponse.json(
        { error: 'Durum güncellenirken hata oluştu' },
        { status: 500 }
      )
    }
    
    // Admin action log'u (opsiyonel)
    if (process.env.NODE_ENV !== 'development') {
      await supabaseAdmin
        .from('admin_actions')
        .insert({
          admin_id: payload.user_id,
          action_type: 'change_status',
          target_feedback_id: feedbackId,
          old_value: existingFeedback.status,
          new_value: status
        })
    }
    
    return NextResponse.json({
      success: true,
      feedback: updatedFeedback,
      message: `Durum "${status}" olarak güncellendi`
    })
    
  } catch (error) {
    console.error('Status update API error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    )
  }
}