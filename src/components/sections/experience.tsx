"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, MapPin, CalendarDays } from "lucide-react";

const workExperience = [
  {
    id: "work1",
    title: "Fullstack Developer Intern",
    company: "Achieve Without Borders",
    date: "February 2025 - May 2025",
    location: "Makati City, Philippines",
    responsibilities: [
      "Led the development of pre-printed form writer module in Odoo using Python ReportLab.",
      "Designed and implemented Odoo modules and managed database schemas with PostgreSQL.",
      "Collaborated with cross-functional teams to deliver high-quality software products.",
      "Mentored and collaborated with co-intern developers and conducted code reviews to ensure code quality and consistency."
    ],
  },
  {
    id: "work2",
    title: "Freelance Web Developer",
    company: "Creative Web Services",
    date: "June 2024 - Present",
    location: "Quezon City, Philippines",
    responsibilities: [
      "Assisted in developing and maintaining client websites using HTML, CSS, JavaScript, and PHP.",
      "Contributed to front-end and back-end development tasks under senior guidance.",
      "Participated in daily stand-ups and agile development processes.",
    ],
  },
];

const educationExperience = [
  {
    id: "edu1",
    degree: "B.S. in Computer Engineering",
    institution: "Technological Institute of the Philippines",
    date: "August 2021 - August 2025",
    description: "Specialized in Data Science and Software Engineering. Graduated with honors.",
  },
  {
    id: "edu2",
    degree: "Senior High School Graduate",
    institution: "Caloocan City Science High School",
    date: "June 2019 - April 2021",
    description: "STEM-Track. Graduated with honors.",
  },
  {
    id: "edu3",
    degree: "Full Stack Web Development Bootcamp",
    institution: "FreeCodeCamp Coding Bootcamp",
    date: "January 2023 - April 2023",
    description: "Intensive training program covering MERN stack (MongoDB, Express.js, React, Node.js).",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
          My Experience
        </h2>
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
            <TabsTrigger value="work" className="py-2">
              <Briefcase className="mr-2 h-5 w-5" /> Work
            </TabsTrigger>
            <TabsTrigger value="education" className="py-2">
              <GraduationCap className="mr-2 h-5 w-5" /> Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <div className="grid gap-6 md:gap-8">
              {workExperience.map((exp) => (
                <Card key={exp.id} className="text-left shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                    <CardDescription className="text-base text-primary">{exp.company}</CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground space-y-1 sm:space-y-0 sm:space-x-4 mt-1">
                      <div className="flex items-center">
                        <CalendarDays className="mr-1.5 h-4 w-4" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1.5 h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="grid gap-6 md:gap-8">
              {educationExperience.map((edu) => (
                <Card key={edu.id} className="text-left shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{edu.degree}</CardTitle>
                    <CardDescription className="text-base text-primary">{edu.institution}</CardDescription>
                     <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <CalendarDays className="mr-1.5 h-4 w-4" />
                        <span>{edu.date}</span>
                      </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
