'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies. From landing pages to complex web applications.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="12" r="2" fill="#EF4444" />
        <circle cx="16" cy="12" r="2" fill="#F59E0B" />
        <circle cx="22" cy="12" r="2" fill="#22C55E" />
        <path d="M16 26L12 30L16 34" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 26L36 30L32 34" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="26" y1="24" x2="22" y2="36" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="4" width="24" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="38" x2="36" y2="38" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="42" r="2" fill="currentColor" />
        <rect x="16" y="16" width="16" height="8" rx="2" fill="#6366F1" fillOpacity="0.3" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="16" y="28" width="8" height="6" rx="1" fill="#8B5CF6" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="26" y="28" width="6" height="6" rx="1" fill="#D946EF" fillOpacity="0.3" stroke="#D946EF" strokeWidth="1.5" />
      </svg>
    ),
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
  },
  {
    title: 'SaaS Products',
    description: 'End-to-end SaaS solutions with robust architecture, scalable infrastructure, and intuitive dashboards.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="20" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="12" width="12" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="32" y="8" width="12" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 26V34" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 18V34" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 14V34" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="14" r="3" fill="#22C55E" />
      </svg>
    ),
    technologies: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInView className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm text-accent mb-4">
            <span className="w-8 h-px bg-accent" />
            What We Do
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Services That <GradientText>Drive Growth</GradientText>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your unique business needs. From concept to launch, we've got you covered.
          </p>
        </FadeInView>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <Card className="h-full group">
                <CardContent className="flex flex-col h-full">
                  {/* Icon container with gradient background */}
                  <div
                    className={`relative w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-foreground">
                      {service.icon}
                    </div>
                    {/* Floating animation */}
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground-muted mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeInView className="text-center mt-16">
          <p className="text-foreground-muted mb-4">
            Need something custom?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors group"
          >
            Let's discuss your project
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </FadeInView>
      </div>
    </section>
  )
}
