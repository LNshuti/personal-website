import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, MapPin, Mail, BookOpen } from 'lucide-react'
import Link from "next/link"
import { ProjectButton } from "@/components/project-button"

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#experience">Experience</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#tbd">TBD</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="mailto:leoncen0@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Leonce Nshuti</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Data Engineer at Sony Music Publishing
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="h-4 w-4" />
            Nashville, Tennessee
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com/in/leoncenshuti">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/LNshuti">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://medium.com/@LeonceNshuti">
                <BookOpen className="h-5 w-5 mr-2" />
                Medium
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
                Data Engineer with expertise in building scalable data pipelines, machine learning systems, and cloud architecture. 
                Masters in Biostatistics from Harvard University and extensive experience in healthcare and financial services.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Python", "R", "SQL", "AWS", "React", "Flask", "Gradio",
              "Machine Learning", "ETL", "Git", "Elasticsearch"
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-lg py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">English to SQL RAG App</h3>
                <p className="text-muted-foreground">
                  A Python application using RAG to convert natural language questions into SQL queries.
                </p>
                <ProjectButton 
                  href="https://github.com/LNshuti/usgov-contracts-rag"
                  name="English to SQL RAG App"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Song Recommender App</h3>
                <p className="text-muted-foreground">
                  Music recommendation system using feature similarity and efficient nearest neighbor search.
                </p>
                <ProjectButton 
                  href="https://huggingface.co/spaces/LeonceNsh/songs-recommender"
                  name="Song Recommender App"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Data Engineer</h3>
                <p className="text-muted-foreground">Sony Music Publishing • March 2024 - Present</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Data Engineer</h3>
                <p className="text-muted-foreground">UBS Financial Services • Nov 2022 - March 2024</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Data Engineer</h3>
                <p className="text-muted-foreground">Vanderbilt University Medical Center • Jun 2018 - Feb 2022</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Harvard University</h3>
                <p className="text-muted-foreground">MS in Biostatistics • 2018</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Sewanee, University of the South</h3>
                <p className="text-muted-foreground">BS in Economics • 2016</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="tbd" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">TBD</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground">
                This section is to be determined. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex h-16 items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Leonce Nshuti. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

