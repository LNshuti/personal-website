import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const blogPosts = {
  'critique-of-ai-safetyism': {
    title: 'A critique of AI Safetyism from the perspective of a domestic cat',
    date: '2024-09-26',
    content: `
      <p>Louis, the cat, has a very perplexing personality. In 2018 back in my single life when I still had roommates, I was sitting in front of the TV trying to adjust the channel, and Louis, my roommate's cat would not let me as he pushed his tiny head against my hands, stopping me from changing the channel.</p>

      <p>As an indoor cat, not by choice but because there are larger animals in the neighborhood such as coyotes that are known to prey on smaller animals, with cats being an excellent meal. Louis does seem to get bored.</p>

      <h2>Exhibit 1. Regalize AI generated cats.</h2>

      <p>This is not Louis to preserve his privacy.</p>

      <p>After all, try to put yourself in his position and imagine if there were criminals in your neighborhood (or say, cannibals for the sake of equivalency), and you had to stay indoors so as not to get murdered or eaten. Would that be a compromise worth taking? How does Louis feel about this whole affair? This argument can also be applied to the U.S. second amendment, but that is a whole different topic that deserves focused treatment.</p>

      <p>Were he to have agency in this situation, I wonder if he would choose, as his owner has, to live a dull life inside this house, eating the same cat food each morning and evening. Or would Louis decide to take the risk, go outside and catch some mice and rodents, even if there was some added risk of him becoming some larger animal's dinner at some point? Does he share his owner's self-preservation bias?</p>

      <p>The AI Safetyists want to treat humans as domestic cats because of their doomsday predictions about the dangers of AI. One day in 2024, while I was visiting my family back in Rwanda where I am from, I remember observing people working on their potato farms, or children chasing goats on the side of the road, and thinking that of all the way AI safetyists's concerns and doomsday hypotheses would sound no less absurd than stories from the witch doctor promising your sister a successful husband if you offer him your goat, while he has four daughters none of whom have that successful husband he promises you.</p>

      <p>AI safetyists have some players who want to be on the breast of the state by creating priest-like jobs where they would bless your model for being "harmful" or else for the sake of the people they seemingly want to protect. They want to be the moral censors of "misinformation", and will want to determine, working with states, mostly the states where these companies are based, hence the rise of "sovereign" AI. There is nothing wrong with wanting a job, even a dirty job such as a lobbyist, as long as the job is not criminal. My advice to safetyists would be to get existing government or NGO jobs, touch glass, and stop imagining doomsday scenarios.</p>
    `
  },
  // Add more blog posts here as they are created
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
        <time className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

