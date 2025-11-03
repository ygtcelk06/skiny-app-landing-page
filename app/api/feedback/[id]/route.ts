import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseClient'
import { validateAccessToken } from '@/lib/auth'

// Feedback silme API endpoint'i
export async function DELETE(
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
    
    // Feedback'in var olup olmadığını ve sahiplik kontrolü
    const { data: existingFeedback, error: fetchError } = await supabaseAdmin
      .from('feedbacks')
      .select('id, user_id, title, status')
      .eq('id', feedbackId)
      .single()
    
    if (fetchError || !existingFeedback) {
      return NextResponse.json(
        { error: 'Geri bildirim bulunamadı' },
        { status: 404 }
      )
    }
    
    // Yetki kontrolü: Sadece sahip veya admin silebilir
    const isOwner = existingFeedback.user_id === payload.user_id
    const isAdmin = payload.is_admin
    
    if (!isOwner && !isAdmin) {
      return NextResponse.json(
        { error: 'Bu geri bildirimi silme yetkiniz yok' },
        { status: 403 }
      )
    }
    
    // Oy alan geri bildirimleri sadece admin silebilir
    if (!isAdmin) {
      const { data: votes, error: voteError } = await supabaseAdmin
        .from('votes')
        .select('id', { count: 'exact' })
        .eq('feedback_id', feedbackId)
      
      if (voteError) {
        console.error('Vote check error:', voteError)
        return NextResponse.json(
          { error: 'Oy kontrolü yapılırken hata oluştu' },
          { status: 500 }
        )
      }
      
      if (votes && votes.length > 0) {
        return NextResponse.json(
          { error: 'Oy almış geri bildirimler silinemez' },
          { status: 400 }
        )
      }
    }
    
    // Önce ilgili oyları sil (CASCADE olmalı ama emin olmak için)
    const { error: deleteVotesError } = await supabaseAdmin
      .from('votes')
      .delete()
      .eq('feedback_id', feedbackId)
    
    if (deleteVotesError) {
      console.error('Delete votes error:', deleteVotesError)
      // Oy silme hatası kritik değil, devam et
    }
    
    // Geri bildirimi sil
    const { error: deleteError } = await supabaseAdmin
      .from('feedbacks')
      .delete()
      .eq('id', feedbackId)
    
    if (deleteError) {
      console.error('Delete feedback error:', deleteError)
      return NextResponse.json(
        { error: 'Geri bildirim silinirken hata oluştu' },
        { status: 500 }
      )
    }
    
    // Admin action log'u (opsiyonel)
    if (process.env.NODE_ENV !== 'development' && isAdmin) {
      await supabaseAdmin
        .from('admin_actions')
        .insert({
          admin_id: payload.user_id,
          action_type: 'delete_feedback',
          target_feedback_id: feedbackId,
          old_value: existingFeedback.title,
          new_value: null
        })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Geri bildirim başarıyla silindi'
    })
    
  } catch (error) {
    console.error('Delete feedback API error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    )
  }
}