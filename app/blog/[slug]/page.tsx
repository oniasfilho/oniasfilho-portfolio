import { notFound } from "next/navigation"
import { getBlogPostBySlug, blogPosts } from "@/lib/data"
import { BlogPostClient } from "./blog-post-client"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | Onias da Rocha`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get other posts for "More Blogs" section
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return <BlogPostClient post={post} otherPosts={otherPosts} />
}
