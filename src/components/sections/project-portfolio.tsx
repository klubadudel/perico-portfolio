
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website shopping",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Firebase"],
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application to help teams organize and track their work.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "application interface",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    projectUrl: "#",
  },
  {
    id: "3",
    title: "Personal Blog",
    description: "A statically generated blog built with a modern JAMstack architecture for speed and security.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "blog article",
    tags: ["Gatsby", "GraphQL", "Markdown", "Netlify"],
    repoUrl: "#",
  },
];

export function ProjectPortfolioSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                {project.projectUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </Link>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
