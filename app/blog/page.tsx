import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'A critique of AI Safetyism from the perspective of a domestic cat',
    date: '2024-09-26',
    slug: 'critique-of-ai-safetyism'
  },
  // Add more blog posts here as they are created
]

export default function BlogPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <h2 className="font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <Button variant="link" size="sm" asChild className="p-0">
                <Link href={`/blog/${post.slug}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

