'use client'

import { useState } from 'react'

export function HoverCard({ children, style }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        ...style,
        backgroundColor: isHovered ? 'rgba(255, 107, 53, 0.1)' : style?.background || 'rgba(255, 255, 255, 0.05)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
