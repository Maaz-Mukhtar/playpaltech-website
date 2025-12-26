'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense, ReactNode } from 'react'

interface SceneProps {
  children: ReactNode
  className?: string
}

export function Scene({ children, className }: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
