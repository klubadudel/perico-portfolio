
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, MapPin, CalendarDays } from "lucide-react";

const workExperience = [
  {
    id: "work1",
    title: "Senior Fullstack Developer",
    company: "Innovatech Solutions Ltd.",
    date: "March 2021 - Present",
    location: "Makati City, Philippines",
    responsibilities: [
      "Led the development of scalable web applications using Next.js, React, and Node.js.",
      "Designed and implemented RESTful APIs and managed database schemas with PostgreSQL.",
      "Collaborated with cross-functional teams to deliver high-quality software products.",
      "Mentored junior developers and conducted code reviews to ensure code quality and consistency."
    ],
  },
  {
    id: "work2",
    title: "Junior Web Developer",
    company: "Creative Web Services",
    date: "June 2019 - February 2021",
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
    degree: "B.S. in Information Technology",
    institution: "University of the Philippines Diliman",
    date: "August 2015 - June 2019",
    description: "Specialized in Web Development and Software Engineering. Graduated with honors.",
  },
  {
    id: "edu2",
    degree: "Full Stack Web Development Bootcamp",
    institution: "Zuitt Coding Bootcamp",
    date: "January 2019 - April 2019",
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
