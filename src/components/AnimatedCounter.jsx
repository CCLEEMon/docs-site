'use client'

import { useState, useEffect, useRef } from 'react'

export default function AnimatedCounter({ value, duration = 2000, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    // Extract numeric value
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''))

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      // Easing function (easeOutExpo)
      const easeOut = (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      }

      const currentValue = numericValue * easeOut(percentage)
      setDisplayValue(currentValue)

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, value, duration])

  // Format the display value
  const formatValue = (val) => {
    if (value.includes('K')) {
      return Math.round(val) + 'K'
    }
    if (value.includes('%')) {
      return Math.round(val) + '%'
    }
    if (value.includes('×')) {
      return value.split('×')[0] + '×' + value.split('×')[1]
    }
    return Math.round(val) + suffix
  }

  return (
    <span ref={ref}>
      {formatValue(displayValue)}
      {!suffix && value.includes('+') && '+'}
    </span>
  )
}
