'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export function GradientText({ children, className, as: Component = 'span' }: GradientTextProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Component>
  )
}
