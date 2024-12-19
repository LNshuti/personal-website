'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { track } from '@vercel/analytics'

interface ProjectButtonProps {
  href: string
  name: string
}

export function ProjectButton({ href, name }: ProjectButtonProps) {
  return (
    <Button 
      variant="link" 
      size="sm" 
      asChild 
      className="p-0"
      onClick={() => track('Project View', { name })}
    >
      <Link href={href}>
        View Project →
      </Link>
    </Button>
  )
}

