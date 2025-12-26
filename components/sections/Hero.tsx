'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { textContainer, wordAnimation } from '@/lib/animations'

// Dynamically import 3D scene to avoid SSR issues
const Scene = dynamic(() => import('@/components/three/Scene').then(mod => mod.Scene), {
  ssr: false,
})

const HeroGlobe = dynamic(() => import('@/components/three/HeroGlobe').then(mod => mod.HeroGlobe), {
  ssr: false,
})

const headline = 'We Build Digital Products That Matter'
const words = headline.split(' ')

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-glow" />

      {/* 3D Globe - Right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-60 lg:opacity-80">
        <Scene className="w-full h-full">
          <HeroGlobe />
        </Scene>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-sm text-foreground-muted">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Premium Software Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="inline-block mr-4"
              >
                {word === 'Digital' || word === 'Products' ? (
                  <GradientText>{word}</GradientText>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-foreground-muted mb-10 max-w-xl"
          >
            We craft exceptional websites, mobile apps, and SaaS products that help ambitious startups and enterprises achieve their goals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg">
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button variant="ghost" size="lg">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border"
          >
            <div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-foreground-muted">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-foreground-muted">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-foreground-muted">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground-subtle">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
