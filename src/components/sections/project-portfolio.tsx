"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import { useState } from 'react';

const projectsData: Project[] = [
  {
    id: "1",
    title: "Device Status Central",
    description: "A full-featured IoT platform application with status monitoring, notification, and logging of devices all in a website.",
    imageUrl: "/device_status_central.jpg",
    imageHint: "IoT monitoring Website",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase", "C++"],
    repoUrl: "https://github.com/rperico-tech/device-status-central",
  },
  {
    id: "2",
    title: "Personal Portfolio",
    description: "A way to showcase my skills built with Next.js, Tailwind CSS, and TypeScript for speed and security.",
    imageUrl: "/personal_portfolio.jpg",
    imageHint: "personal Portfolio",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn"],
    repoUrl: "https://github.com/rperico-tech/perico-portfolio",
  },  
  {
    id: "3",
    title: "Odoo Form Writer Module",
    description: "A custom Odoo module that enables users to design and print data onto preprinted forms with precise field positioning. Ideal for automating document workflows like invoices, permits, or government forms.",
    imageUrl: "/odoo.jpg",
    imageHint: "Odoo custom Module",
    tags: ["Odoo", "XML", "Python", "Docker"],
    repoUrl: "https://github.com/rperico-tech/",
  },
  {
    id: "4",
    title: "Komyut",
    description: "A web app that makes shows you the optimal route.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "map Routing app",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    repoUrl: "https://github.com/rperico-tech/",
  }
];

export function ProjectPortfolioSection() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Start with 3 projects visible

  const handleSeeMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const allProjectsShown = visibleProjects >= projectsData.length;

  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.slice(0, visibleProjects).map((project) => (
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
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center flex justify-center gap-4">
          {visibleProjects > 3 && (
            <Button variant="outline" size="lg" onClick={() => setVisibleProjects(3)}>
              See Less
            </Button>
          )}
          {!allProjectsShown && (
            <Button variant="outline" size="lg" onClick={handleSeeMore}>
              See More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
