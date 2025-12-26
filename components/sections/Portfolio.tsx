'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with real-time inventory management.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    size: 'large',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Cross-platform fitness app with workout plans and progress tracking.',
    technologies: ['React Native', 'Node.js'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    size: 'small',
  },
  {
    title: 'Analytics Dashboard',
    category: 'SaaS',
    description: 'Real-time analytics platform with custom reporting.',
    technologies: ['React', 'D3.js', 'AWS'],
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    size: 'small',
  },
  {
    title: 'AI Content Platform',
    category: 'SaaS',
    description: 'AI-powered content generation and management system.',
    technologies: ['Python', 'OpenAI', 'Next.js'],
    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    size: 'medium',
  },
  {
    title: 'Social Media App',
    category: 'Mobile App',
    description: 'Feature-rich social platform with real-time messaging.',
    technologies: ['Flutter', 'Firebase'],
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    size: 'medium',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  }

  return (
    <StaggerItem className={sizeClasses[project.size as keyof typeof sizeClasses]}>
      <Card className="h-full overflow-hidden group cursor-pointer">
        <div className="relative h-full">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

          {/* Placeholder Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id={`pattern-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
            </svg>
          </div>

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm">
            <span className="text-accent font-medium">Coming Soon</span>
          </div>

          <CardContent className="relative h-full flex flex-col justify-end p-6">
            {/* Category Badge */}
            <Badge variant="accent" className="w-fit mb-3">
              {project.category}
            </Badge>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-foreground-muted text-sm mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </StaggerItem>
  )
}

function CTACard() {
  return (
    <StaggerItem className="md:col-span-1 md:row-span-1">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="h-full rounded-xl border border-dashed border-accent/50 bg-accent/5 flex flex-col items-center justify-center p-6 text-center cursor-pointer group hover:border-accent hover:bg-accent/10 transition-all duration-300"
      >
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Your Project Here</h3>
        <p className="text-foreground-muted text-sm">
          Let's build something amazing together
        </p>
      </motion.div>
    </StaggerItem>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden bg-background-secondary">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInView className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm text-accent mb-4">
            <span className="w-8 h-px bg-accent" />
            Our Work
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            A showcase of our latest work. Each project represents our commitment to excellence and innovation.
          </p>
        </FadeInView>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          <CTACard />
        </StaggerContainer>

        {/* View All CTA */}
        <FadeInView className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </FadeInView>
      </div>
    </section>
  )
}
