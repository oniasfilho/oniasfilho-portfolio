export const projects = [
  {
    slug: "fury-ssr-framework",
    title: "Fury SSR Framework",
    description: "Built a Server-Side Rendering framework handling 500M+ daily requests across Mercado Livre's ecosystem, supporting Node.js 12-22 and multiple frontend stacks.",
    year: "2021",
    industry: "E-commerce",
    service: "Platform Engineering",
    role: "Senior Software Engineer",
    overview: `Fury SSR is a high-performance Server-Side Rendering framework designed to handle the massive scale of Mercado Livre's operations. The framework processes over 500 million daily requests while maintaining sub-100ms response times, serving as the backbone for all frontend applications across the organization.

The project required deep expertise in Node.js internals, performance optimization, and distributed systems. We implemented custom caching strategies, intelligent request routing, and graceful degradation patterns to ensure 99.99% uptime even during peak traffic events like Black Friday.

Key technical achievements include support for Node.js versions 12 through 22 with automatic compatibility layers, seamless integration with React, Vue, and vanilla JavaScript applications, and a plugin architecture that allows teams to extend functionality without modifying core code.`,
    liveUrl: null,
    githubUrl: null,
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop",
    ],
  },
  {
    slug: "micro-frontend-architecture",
    title: "Micro Frontend Architecture",
    description: "Designed and implemented a scalable micro frontend architecture enabling independent deployment across 200+ applications at Mercado Livre.",
    year: "2022",
    industry: "E-commerce",
    service: "Architecture Design",
    role: "Tech Lead",
    overview: `The Micro Frontend Architecture project transformed how Mercado Livre builds and deploys frontend applications. By decomposing the monolithic frontend into independently deployable modules, we enabled over 50 teams to work autonomously while maintaining a cohesive user experience.

The architecture introduces a sophisticated module federation system that handles runtime integration of separately built applications. Each micro frontend owns its domain, from development through production, with isolated deployment pipelines and rollback capabilities.

Performance was a critical focus—we implemented lazy loading strategies, shared dependency management, and intelligent prefetching that reduced initial page loads by 40% while supporting the addition of new features without impacting existing functionality.`,
    liveUrl: null,
    githubUrl: null,
    images: [
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop",
    ],
  },
  {
    slug: "andes-design-system",
    title: "Andes Design System",
    description: "Maintained and evolved the Andes Design System, ensuring consistency across all Mercado Livre products with comprehensive component libraries.",
    year: "2023",
    industry: "E-commerce",
    service: "Design Systems",
    role: "Software Engineer",
    overview: `Andes is Mercado Livre's comprehensive design system, providing a unified visual language and component library used across all products serving 200+ million users. As a software engineer, I focused on the technical infrastructure that makes the design system scalable and maintainable.

The system includes over 100 components with full accessibility compliance, responsive design patterns, and theme customization capabilities. We built automated visual regression testing, documentation generation, and version management tools that streamline the contribution process for design and engineering teams.

A key innovation was the implementation of design tokens that bridge Figma designs directly to code, reducing the handoff time between design and development by 60% while ensuring pixel-perfect implementation of design specifications.`,
    liveUrl: null,
    githubUrl: null,
    images: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&h=800&fit=crop",
    ],
  },
]

export const blogPosts = [
  {
    slug: "building-ssr-frameworks-at-scale",
    title: "Building SSR Frameworks at Scale",
    date: "March 12, 2025",
    excerpt: "A deep dive into the challenges and solutions when building server-side rendering frameworks that handle millions of requests daily.",
    content: `
## The Challenge of Scale

When you're building a Server-Side Rendering framework that needs to handle 500 million daily requests, every millisecond matters. At Mercado Livre, we faced this challenge head-on, and the lessons learned shaped how I think about performance-critical systems.

The first principle we established was that SSR should be invisible to developers. Teams shouldn't need to understand the intricacies of server rendering to benefit from it. This meant building intelligent defaults, automatic optimizations, and graceful fallbacks.

## Architecture Decisions

We chose a streaming architecture over traditional buffered rendering. This allowed us to start sending HTML to the browser before the entire page was ready, significantly improving Time to First Byte (TTFB) metrics.

Key architectural choices included:
- **Worker pool management** for CPU-intensive rendering tasks
- **Intelligent caching** at multiple layers (CDN, application, component)
- **Circuit breakers** to prevent cascade failures during backend outages

## Performance Optimization Strategies

The most impactful optimization was implementing component-level caching. By analyzing render patterns, we identified components that could be cached independently, reducing redundant computation by up to 70%.

We also invested heavily in memory management. Node.js garbage collection pauses can be devastating at scale, so we implemented object pooling and careful memory lifecycle management to minimize GC pressure.

## Lessons Learned

Building at this scale taught me that simplicity is the ultimate sophistication. The most elegant solutions were often the simplest ones—a well-placed cache, a smarter default, or removing complexity rather than adding it.

The framework continues to evolve, but the core principles remain: developer experience first, performance by default, and reliability above all.
    `,
  },
  {
    slug: "micro-frontends-lessons-from-200-apps",
    title: "Micro Frontends: Lessons from 200+ Apps",
    date: "February 28, 2025",
    excerpt: "What we learned deploying micro frontend architecture across hundreds of applications at one of Latin America's largest tech companies.",
    content: `
## Why Micro Frontends?

The promise of micro frontends is compelling: independent teams, autonomous deployments, and technology flexibility. But the reality is messier. After implementing micro frontend architecture across 200+ applications at Mercado Livre, I've learned what actually works—and what doesn't.

## The Good

**Team Autonomy**: Teams can now deploy without coordinating with 50 other teams. This single change accelerated our release velocity by 3x.

**Technology Evolution**: When we needed to migrate from an older framework, we could do it incrementally. New features used modern tooling while legacy code remained stable.

**Fault Isolation**: A bug in one micro frontend doesn't bring down the entire application. Users see graceful degradation rather than complete failure.

## The Challenges

**Performance Overhead**: Module federation isn't free. We spent months optimizing bundle sizes and loading strategies to prevent performance regression.

**Shared State**: The hardest problem isn't technical—it's defining clear boundaries between micro frontends. State that needs to be shared is a design smell that often indicates incorrect boundaries.

**Consistency**: With autonomous teams comes the risk of inconsistent user experiences. Our design system became more critical than ever as the glue holding everything together.

## What I'd Do Differently

Start with a clear understanding of team boundaries before technical boundaries. Micro frontends should follow organizational structure, not the other way around.

Invest in developer experience tooling early. The productivity gains from good local development, testing, and deployment tools compound dramatically across many teams.

## Final Thoughts

Micro frontends aren't a silver bullet. They're a tool that solves specific organizational scaling challenges. If you don't have those challenges, you probably don't need micro frontends.

But if you do, they can be transformative.
    `,
  },
  {
    slug: "design-systems-that-actually-scale",
    title: "Design Systems That Actually Scale",
    date: "January 15, 2025",
    excerpt: "Beyond component libraries: building design systems that enable thousands of developers while maintaining consistency.",
    content: `
## More Than Components

A design system is not a component library. This distinction took me years to truly understand. Components are the output; the system is the thinking, processes, and tools that produce consistent outputs across teams and time.

## The Three Pillars

**Design Tokens**: The atomic values that define your visual language. Colors, spacing, typography—these should be the single source of truth that bridges design tools and code.

**Component Architecture**: Components should be composable, accessible, and performant by default. Every prop should have a clear purpose, and the API should guide developers toward correct usage.

**Documentation and Tooling**: The best components are useless if developers can't find them or understand how to use them. Invest in searchable documentation, interactive examples, and IDE integration.

## Scaling Challenges

At Mercado Livre, the Andes design system serves over 1,000 developers across dozens of teams. Scaling to this level requires thinking about the system differently.

**Governance**: Who decides what goes into the system? We established a contribution model where teams can propose additions, but a core team ensures consistency and quality.

**Versioning**: Breaking changes are expensive at scale. We maintain strict semantic versioning and provide automated migration tools for major updates.

**Performance Budgets**: Every component has a size budget. Adding features must be balanced against the performance impact on every application using the system.

## The Human Element

The most successful aspect of our design system isn't technical—it's cultural. We invested in building relationships with teams, understanding their needs, and making them feel ownership over the system.

A design system is only as good as its adoption, and adoption comes from trust.
    `,
  },
  {
    slug: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization Tips",
    date: "December 8, 2024",
    excerpt: "Practical techniques for optimizing Node.js applications based on real-world experience at massive scale.",
    content: `
## Performance Is a Feature

In high-traffic applications, performance isn't just nice to have—it's essential. Every 100ms of latency impacts user experience and, ultimately, business metrics. Here are the optimization techniques that made the biggest impact in our systems.

## Memory Management

Node.js uses V8's garbage collector, which can cause latency spikes during collection. Key strategies:

**Object Pooling**: Reuse objects instead of creating new ones. This is especially impactful for frequently allocated objects in hot paths.

**Avoid Memory Leaks**: Use heap snapshots and profiling tools to identify leaks. Even small leaks compound over time in long-running server processes.

**Stream Large Data**: Never load large files or datasets into memory. Use streams to process data in chunks.

## Event Loop Optimization

The event loop is Node.js's superpower—don't block it.

**Offload CPU Work**: Use worker threads for CPU-intensive operations. Compression, image processing, and complex calculations should never run on the main thread.

**Break Up Long Tasks**: If you must do synchronous work, break it into smaller chunks using setImmediate() to allow the event loop to handle other requests.

## Caching Strategies

**In-Memory Caching**: For frequently accessed data, in-memory caches like Map objects or dedicated caching libraries can dramatically reduce latency.

**Distributed Caching**: For multi-instance deployments, use Redis or similar distributed caches to share cached data across servers.

**HTTP Caching**: Don't forget browser and CDN caching. Often the fastest request is one that never reaches your server.

## Measuring What Matters

Profile before optimizing. Use tools like clinic.js, 0x, and built-in Node.js profiling to identify actual bottlenecks rather than assumed ones.

The biggest performance gains often come from unexpected places.
    `,
  },
  {
    slug: "future-of-frontend-architecture",
    title: "The Future of Frontend Architecture",
    date: "November 20, 2024",
    excerpt: "Exploring emerging patterns and technologies that will shape how we build frontend applications.",
    content: `
## A Shifting Landscape

Frontend architecture is evolving rapidly. After years of SPA dominance, we're seeing a return to server-rendered approaches—but with modern tooling and capabilities. Here's what I see shaping the next era of frontend development.

## The Rise of Edge Computing

Moving computation closer to users isn't new, but the tooling has reached a tipping point. Edge functions enable personalization and dynamic content without the latency penalties of traditional server rendering.

At Mercado Livre, we've started deploying critical path rendering to edge locations, reducing Time to First Byte by 40% for users far from our primary data centers.

## Islands Architecture

The islands architecture pattern—shipping static HTML with "islands" of interactivity—represents a middle ground between fully static and fully dynamic approaches.

This pattern excels for content-heavy sites with selective interactivity. It's not a replacement for SPAs, but it's a powerful tool for the right use cases.

## AI-Assisted Development

AI is changing how we write code, but its impact on architecture is just beginning. I expect AI to influence:

- **Component generation** from design files
- **Performance optimization** suggestions
- **Accessibility auditing** and fixes
- **Documentation** generation and maintenance

## What Stays the Same

Despite all the change, fundamental principles endure:

**User experience matters most.** Architecture should serve users, not the other way around.

**Simplicity wins.** The best architecture is the simplest one that solves your actual problems.

**Measure everything.** Decisions should be data-driven, not fashion-driven.

## Looking Forward

The frontend ecosystem will continue to evolve, but the engineers who thrive will be those who focus on fundamentals while staying curious about new possibilities.

The future is built by those who keep learning.
    `,
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
