'use client'

import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

// VoteButton props arayüzü
interface VoteButtonProps {
  feedbackId: string
  voteCount: number
  hasVoted: boolean
  onVote: (feedbackId: string) => Promise<void>
  disabled?: boolean
  className?: string
}

// VoteButton bileşeni
export default function VoteButton({
  feedbackId,
  voteCount,
  hasVoted,
  onVote,
  disabled = false,
  className = ''
}: VoteButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [optimisticVoted, setOptimisticVoted] = useState(hasVoted)
  const [optimisticCount, setOptimisticCount] = useState(voteCount)

  // Oy verme handler'ı
  const handleVote = async () => {
    if (disabled || isLoading) return

    setIsLoading(true)
    
    // Optimistic update
    const newVoted = !optimisticVoted
    const newCount = newVoted ? optimisticCount + 1 : optimisticCount - 1
    
    setOptimisticVoted(newVoted)
    setOptimisticCount(newCount)

    try {
      await onVote(feedbackId)
    } catch (error) {
      // Hata durumunda geri al
      setOptimisticVoted(hasVoted)
      setOptimisticCount(voteCount)
      console.error('Vote error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleVote}
      disabled={disabled || isLoading}
      aria-label={`${optimisticVoted ? 'Oyu geri çek' : 'Oy ver'} - ${optimisticCount} oy`}
      aria-pressed={optimisticVoted}
      className={`
        relative group flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200
        min-w-[60px] min-h-[60px]
        ${optimisticVoted 
          ? 'border-blue-500 bg-blue-50 text-blue-700' 
          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
        }
        ${disabled || isLoading 
          ? 'opacity-50 cursor-not-allowed' 
          : 'cursor-pointer hover:scale-105 active:scale-95'
        }
        ${className}
      `}
    >
      {/* Yukarı ok ikonu */}
      <ArrowUp 
        className={`
          w-5 h-5 transition-all duration-200
          ${optimisticVoted ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'}
          ${isLoading ? 'animate-pulse' : ''}
        `}
      />
      
      {/* Oy sayısı */}
      <span 
        className={`
          text-sm font-semibold mt-1 transition-all duration-200
          ${optimisticVoted ? 'text-blue-700' : 'text-gray-700'}
          ${isLoading ? 'animate-pulse' : ''}
        `}
      >
        {optimisticCount}
      </span>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Screen reader için ek bilgi */}
      <span className="sr-only">
        {optimisticVoted ? 'Oy verildi' : 'Oy verilmedi'} - Toplam {optimisticCount} oy
      </span>
    </button>
  )
}