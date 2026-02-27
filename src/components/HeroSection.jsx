'use client'

import ParticleBackground from './ParticleBackground'
import AnimatedCounter from './AnimatedCounter'

export function HeroBackground() {
  return <ParticleBackground />
}

export function HeroCounter({ value, duration = 2000, suffix = '' }) {
  return <AnimatedCounter value={value} duration={duration} suffix={suffix} />
}
