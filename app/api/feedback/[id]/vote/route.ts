import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseClient'
import { validateAccessToken } from '@/lib/auth'

// Oy verme/geri çekme API endpoint'i
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: feedbackId } = await params
    
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
    
    // Feedback'in var olup olmadığını kontrol et
    const { data: feedback, error: feedbackError } = await supabaseAdmin
      .from('feedbacks')
      .select('id, status')
      .eq('id', feedbackId)
      .single()
    
    if (feedbackError || !feedback) {
      return NextResponse.json(
        { error: 'Geri bildirim bulunamadı' },
        { status: 404 }
      )
    }
    
    // Yayında olan önerilere oy verilemez
    if (feedback.status === 'Yayında') {
      return NextResponse.json(
        { error: 'Yayında olan önerilere oy verilemez' },
        { status: 400 }
      )
    }
    
    // Mevcut oy durumunu kontrol et
    const { data: existingVote } = await supabaseAdmin
      .from('votes')
      .select('id')
      .eq('feedback_id', feedbackId)
      .eq('user_id', userId)
      .single()
    
    let newVoteCount = 0
    let userHasVoted = false
    
    if (existingVote) {
      // Oy varsa kaldır (toggle)
      const { error: deleteError } = await supabaseAdmin
        .from('votes')
        .delete()
        .eq('feedback_id', feedbackId)
        .eq('user_id', userId)
      
      if (deleteError) {
        console.error('Vote delete error:', deleteError)
        return NextResponse.json(
          { error: 'Oy kaldırılırken hata oluştu' },
          { status: 500 }
        )
      }
      
      userHasVoted = false
    } else {
      // Oy yoksa ekle
      const { error: insertError } = await supabaseAdmin
        .from('votes')
        .insert({
          feedback_id: feedbackId,
          user_id: userId
        })
      
      if (insertError) {
        console.error('Vote insert error:', insertError)
        return NextResponse.json(
          { error: 'Oy verilirken hata oluştu' },
          { status: 500 }
        )
      }
      
      userHasVoted = true
    }
    
    // Güncel oy sayısını al
    const { data: voteCount, error: countError } = await supabaseAdmin
      .from('votes')
      .select('id', { count: 'exact' })
      .eq('feedback_id', feedbackId)
    
    if (countError) {
      console.error('Vote count error:', countError)
      return NextResponse.json(
        { error: 'Oy sayısı alınırken hata oluştu' },
        { status: 500 }
      )
    }
    
    newVoteCount = voteCount?.length || 0
    
    return NextResponse.json({
      success: true,
      vote_count: newVoteCount,
      user_has_voted: userHasVoted,
      message: userHasVoted ? 'Oy verildi' : 'Oy geri çekildi'
    })
    
  } catch (error) {
    console.error('Vote API error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    )
  }
}

// Oy durumunu kontrol etme endpoint'i
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: feedbackId } = await params
    
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
    
    // Kullanıcının oy durumunu kontrol et
    const { data: userVote } = await supabaseAdmin
      .from('votes')
      .select('id')
      .eq('feedback_id', feedbackId)
      .eq('user_id', userId)
      .single()
    
    // Toplam oy sayısını al
    const { data: voteCount, error: countError } = await supabaseAdmin
      .from('votes')
      .select('id', { count: 'exact' })
      .eq('feedback_id', feedbackId)
    
    if (countError) {
      console.error('Vote count error:', countError)
      return NextResponse.json(
        { error: 'Oy sayısı alınırken hata oluştu' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      vote_count: voteCount?.length || 0,
      user_has_voted: !!userVote
    })
    
  } catch (error) {
    console.error('Vote status API error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    )
  }
}