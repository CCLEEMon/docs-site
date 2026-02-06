'use client'

import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false })
const AnimatedCounter = dynamic(() => import('./AnimatedCounter'), { ssr: false })

export function HeroBackground() {
  return <ParticleBackground />
}

export function HeroCounter({ value, duration, suffix }) {
  return <AnimatedCounter value={value} duration={duration} suffix={suffix} />
}
