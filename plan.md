# PlayLabs Website Implementation Plan

## Overview
A premium, Linear.app-inspired website for PlayLabs - a tech startup building websites, mobile apps, and SaaS products. Dark theme with sophisticated 3D animations to wow potential clients.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **3D Graphics**: Three.js (React Three Fiber) + Spline
- **Animations**: Framer Motion + Lenis (smooth scroll)
- **Forms**: React Hook Form + Zod validation

---

## Color Palette (Dark Premium Theme)

| Purpose | Color | Hex |
|---------|-------|-----|
| Background | Near black | `#0A0A0B` |
| Cards/Surfaces | Dark gray | `#111113` |
| Primary Text | Near white | `#FAFAFA` |
| Secondary Text | Muted | `#A1A1AA` |
| Accent | Indigo | `#6366F1` |
| Gradient | Indigo → Purple → Fuchsia | `#6366F1 → #8B5CF6 → #D946EF` |

---

## Project Structure

```
startup_website/
├── app/
│   ├── layout.tsx          # Root layout, fonts, providers
│   ├── page.tsx            # Homepage (all sections)
│   ├── globals.css         # CSS variables, base styles
│   └── api/contact/route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Glassmorphic nav
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # 3D globe + headline
│   │   ├── Services.tsx    # 3 service cards
│   │   ├── Portfolio.tsx   # Placeholder bento grid
│   │   └── Contact.tsx     # Form + info
│   ├── three/
│   │   ├── Scene.tsx       # R3F canvas wrapper
│   │   ├── HeroGlobe.tsx   # Interactive wireframe globe
│   │   └── FloatingShapes.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── GradientText.tsx
│   └── animations/
│       ├── FadeInView.tsx
│       └── TextReveal.tsx
├── lib/
│   ├── utils.ts            # cn() helper
│   └── animations.ts       # Framer Motion variants
├── tailwind.config.ts
└── package.json
```

---

## Sections Breakdown

### 1. Hero Section
- **Layout**: Full viewport height, text left, 3D right/background
- **Headline**: "We Build Digital Products That Matter" with gradient text + character reveal animation
- **3D Element**: Interactive wireframe globe with glowing nodes (Three.js)
- **Secondary**: Floating geometric shapes (torus, icosahedron)
- **CTAs**: "Start Your Project" (primary glow) + "See Our Work" (ghost)
- **Extra**: Animated scroll indicator at bottom

### 2. Services Section
- **Layout**: 3-column grid (stacks on mobile)
- **Cards**: Glassmorphic with gradient border on hover
- **3D Icons** (Spline):
  1. Web Development - Browser window with code
  2. Mobile Apps - Floating smartphone
  3. SaaS Products - Dashboard cube
- **Animation**: Staggered fade-up on scroll

### 3. Portfolio Section
- **Layout**: Bento grid (varied card sizes)
- **Content**: 4-6 placeholder cards with:
  - Gradient/blurred placeholder images
  - "Project Name" placeholder
  - Tech stack badges (React, Node, etc.)
  - "Coming Soon" overlay effect
- **Special Card**: "Your Project Here" CTA
- **Animation**: Scale-up on hover, staggered entrance

### 4. Contact Section
- **Layout**: Split - form left, info right
- **Form Fields**: Name, Email, Project Type (dropdown), Message
- **Validation**: Real-time with Zod
- **Animation**: Slide-in from sides
- **3D Element**: Subtle decorative shape (optional)

---

## 3D Elements Strategy

| Location | Element | Technology | Interaction |
|----------|---------|------------|-------------|
| Hero | Wireframe Globe | Three.js | Mouse follow, auto-rotate |
| Hero | Floating Shapes | Three.js | Parallax on scroll |
| Services | 3D Icons | Spline | Hover animation |
| Background | Particle Field | Three.js | Ambient drift |

**Performance Notes**:
- Lazy load all 3D with `dynamic()` and `ssr: false`
- Reduce complexity on mobile
- Respect `prefers-reduced-motion`

---

## Animation Plan

| Type | Implementation | Where Used |
|------|---------------|------------|
| Scroll reveal | Framer Motion `whileInView` | All sections |
| Text reveal | Character-by-character stagger | Hero headline |
| Hover glow | CSS box-shadow transition | Buttons, cards |
| Smooth scroll | Lenis library | Global |
| Page transitions | Framer Motion in `template.tsx` | Route changes |

---

## Implementation Phases

### Phase 1: Foundation
1. Initialize Next.js 14 project with TypeScript
2. Install dependencies (Tailwind, Framer Motion, Three.js, etc.)
3. Configure Tailwind with custom theme colors
4. Set up project folder structure
5. Create `globals.css` with CSS variables
6. Build utility components: Button, Card, GradientText

### Phase 2: Layout & Effects
7. Build Header with glassmorphic nav + mobile menu
8. Build Footer with gradient border
9. Set up Lenis smooth scrolling
10. Create background effects (grid pattern, glow orbs)

### Phase 3: Animations
11. Create animation variants library (`lib/animations.ts`)
12. Build FadeInView, TextReveal components
13. Set up page transitions in `template.tsx`

### Phase 4: 3D Integration
14. Set up React Three Fiber canvas wrapper
15. Build HeroGlobe component (wireframe sphere)
16. Build FloatingShapes component
17. Integrate Spline for service icons (or create CSS fallbacks)

### Phase 5: Main Sections
18. Build Hero section with all elements
19. Build Services section with cards + 3D icons
20. Build Portfolio section with bento grid + placeholders
21. Build Contact section with form + validation
22. Create API route for contact form

### Phase 6: Polish
23. Responsive testing (mobile, tablet, desktop)
24. Performance optimization (Lighthouse 90+)
25. Cross-browser testing
26. Accessibility audit
27. Final animation timing tweaks

---

## Key Dependencies

```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^11.0.0",
  "three": "^0.162.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.99.0",
  "@splinetool/react-spline": "^2.2.6",
  "lenis": "^1.0.42",
  "react-hook-form": "^7.50.0",
  "zod": "^3.22.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.0"
}
```

---

## Critical Files to Create

1. `app/layout.tsx` - Root layout with providers and fonts
2. `app/page.tsx` - Homepage composing all sections
3. `tailwind.config.ts` - Custom theme configuration
4. `components/sections/Hero.tsx` - Hero with 3D integration
5. `components/three/HeroGlobe.tsx` - Main 3D element
6. `lib/animations.ts` - Shared animation variants

---

## Notes

- **Portfolio**: All projects are placeholders for now - designed to be easily updated later
- **Spline**: If Spline scenes aren't ready, we'll use CSS 3D transforms as fallbacks for service icons
- **Mobile**: 3D will be simplified/reduced on mobile for performance
- **Contact Form**: Will set up API route structure; actual email sending can be configured later (Resend, SendGrid, etc.)

---

## Current Progress

### Completed Tasks
- [x] Initialize Next.js 14 project with TypeScript
- [x] Install all dependencies (Tailwind, Framer Motion, Three.js, etc.)
- [x] Configure Tailwind with custom theme colors
- [x] Create globals.css with CSS variables
- [x] Build utility components (Button, Card, GradientText, Badge, Input)
- [x] Build Header with glassmorphic nav + mobile menu
- [x] Build Footer with gradient border
- [x] Create animation variants library
- [x] Build Hero section with 3D wireframe globe
- [x] Build Services section with animated cards
- [x] Build Portfolio section with bento grid
- [x] Build Contact section with validated form
- [x] Assemble homepage and test

### What's Live
- Development server running at `http://localhost:3000`
- All 4 main sections functional (Hero, Services, Portfolio, Contact)
- 3D globe with particles rendering
- Smooth scroll animations working
- Mobile responsive design

### Pending Polish
- [ ] Cross-browser testing
- [ ] Lighthouse performance audit
- [ ] Accessibility audit (WCAG compliance)
- [ ] Connect contact form to email service (Resend/SendGrid)
- [ ] Add real portfolio projects when available
- [ ] Deploy to Vercel

---

## Future Ideas

### High-Impact Sections (Priority)

#### 1. Testimonials / Client Reviews
- Rotating quotes from satisfied clients
- Star ratings, client photos, company logos
- Optional: Video testimonials carousel
- **Effort**: Medium | **Impact**: High

#### 2. Process / How We Work
- Step-by-step timeline (Discovery → Design → Develop → Deploy)
- Animated icons for each phase
- Interactive hover states with details
- **Effort**: Medium | **Impact**: High

#### 3. Team Section
- Team member cards with photos
- Hover effects revealing bios and roles
- Social links (LinkedIn, GitHub, Twitter)
- Fun facts or personal touches
- **Effort**: Low | **Impact**: Medium

#### 4. Case Studies (Deep Dives)
- Separate detailed pages for major projects
- Problem → Solution → Results format
- Metrics and outcomes (e.g., "40% increase in conversions")
- Before/after screenshots
- **Effort**: High | **Impact**: High

#### 5. Tech Stack / Tools Grid
- Animated logo grid of technologies
- Categories: Frontend, Backend, Mobile, Cloud, Design
- Hover tooltips with experience level
- **Effort**: Low | **Impact**: Medium

---

### Trust Builders

#### 6. Client Logos / "Trusted By"
- Logo carousel of past clients
- Grayscale logos that colorize on hover
- Even placeholder logos work initially
- **Effort**: Low | **Impact**: High

#### 7. Awards / Recognition
- Badges, certifications, press mentions
- "Featured in" media logos
- Industry awards display
- **Effort**: Low | **Impact**: Medium

#### 8. FAQ Section
- Accordion-style expandable questions
- Common questions: Pricing, timelines, process, revisions
- Reduces friction before contact
- **Effort**: Low | **Impact**: Medium

---

### Engagement Sections

#### 9. Blog / Insights
- Tech articles and tutorials
- Case study write-ups
- Industry news and opinions
- Great for SEO and thought leadership
- **Effort**: High | **Impact**: High (long-term)

#### 10. Newsletter Signup
- "Get product insights" with email input
- Animated subscribe button
- Integration with Mailchimp/ConvertKit
- **Effort**: Low | **Impact**: Medium

#### 11. Live Chat / Booking Widget
- "Book a free consultation" with Calendly embed
- Floating chat widget (Intercom/Crisp)
- Reduces barrier to contact
- **Effort**: Low | **Impact**: High

---

### Showcase Sections

#### 12. Before/After Comparisons
- Interactive slider showing transformations
- Client sites before and after your work
- Very visual and impressive
- **Effort**: Medium | **Impact**: High

#### 13. Interactive Demo
- Mini interactive product demonstration
- 3D device mockup users can rotate
- Live preview of a sample project
- **Effort**: High | **Impact**: High

#### 14. Stats / Metrics Counter
- Animated number counters on scroll
- Projects completed, lines of code, happy clients
- Years of experience, cups of coffee
- **Effort**: Low | **Impact**: Medium

---

### Differentiation Sections

#### 15. Why Choose Us / USPs
- 3-4 key differentiators with icons
- "Fast delivery", "Dedicated support", "Transparent pricing"
- Comparison with typical agencies
- **Effort**: Low | **Impact**: Medium

#### 16. Comparison Table
- PlayLabs vs Agencies vs Freelancers
- Feature checkmarks showing advantages
- Price range indicators
- **Effort**: Medium | **Impact**: Medium

#### 17. Guarantee / Risk Reversal
- "100% satisfaction guarantee"
- Money-back policy details
- Revision policy, support terms
- **Effort**: Low | **Impact**: Medium

---

### Implementation Priority Matrix

| Section | Effort | Impact | Priority |
|---------|--------|--------|----------|
| Client Logos | Low | High | 1 |
| Testimonials | Medium | High | 2 |
| Stats Counter | Low | Medium | 3 |
| FAQ | Low | Medium | 4 |
| Process Timeline | Medium | High | 5 |
| Tech Stack Grid | Low | Medium | 6 |
| Why Choose Us | Low | Medium | 7 |
| Team Section | Low | Medium | 8 |
| Newsletter | Low | Medium | 9 |
| Booking Widget | Low | High | 10 |
| Case Studies | High | High | 11 |
| Blog | High | High | 12 |

---

## Roadmap

### Phase 1: Quick Wins (Next Sprint)
- [ ] Add Client Logos section
- [ ] Add Stats/Metrics counter
- [ ] Add FAQ accordion
- [ ] Add Calendly booking widget

### Phase 2: Trust Building
- [ ] Add Testimonials carousel
- [ ] Add Process/How We Work timeline
- [ ] Add Tech Stack grid
- [ ] Add Why Choose Us section

### Phase 3: Content & Engagement
- [ ] Add Team section
- [ ] Add Newsletter signup
- [ ] Set up blog infrastructure
- [ ] Create first 2-3 case studies

### Phase 4: Advanced Features
- [ ] Before/After comparison slider
- [ ] Interactive 3D demo
- [ ] Comparison table
- [ ] Full blog with CMS integration
