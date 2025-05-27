import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Brain, Briefcase, Code, Users, Database } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiTailwindcss, SiGit, SiDocker, SiYaml, SiPython, SiVuedotjs, SiHtml5, SiCss3, SiJavascript, SiCplusplus, SiC, SiFirebase, SiSupabase, SiOpenaccess } from "react-icons/si";

export function AboutMeSection() {
  const technologies = [
    { name: "React", icon: <SiReact className="h-5 w-5 text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5 text-black" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-5 w-5 text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-5 w-5 text-yellow-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-5 w-5 text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="h-5 w-5 text-gray-800" /> },
    { name: "Python", icon: <SiPython className="h-5 w-5 text-blue-400" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="h-5 w-5 text-green-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="h-5 w-5 text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="h-5 w-5 text-blue-500" /> },
    { name: "YAML/YML", icon: <SiYaml className="h-5 w-5 text-gray-500" /> },
    { name: "C++", icon: <SiCplusplus className="h-5 w-5 text-blue-700" /> },
    { name: "C", icon: <SiC className="h-5 w-5 text-gray-700" /> },
    { name: "Firebase", icon: <SiFirebase className="h-5 w-5 text-yellow-500" /> },
    { name: "Supabase", icon: <SiSupabase className="h-5 w-5 text-green-600" /> },
    { name: "Odoo", icon: <img src="/icons/odoo.svg" alt="Odoo" className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-5 w-5 text-blue-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-5 w-5 text-green-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5 text-sky-400" /> },
    { name: "Git", icon: <SiGit className="h-5 w-5 text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="h-5 w-5 text-blue-400" /> },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          About Me
        </h2>
        <Card className="overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="/professional_portrait.png"
                alt="Profile Picture"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl">Hello, I&apos;m a Developer!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  I develop web applications using modern JavaScript frameworks, server-side technologies, and database systems. My background includes both client-side and server-side programming, enabling me to deliver complete solutions.
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-3">TechStack</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {technologies.map((tech) => (
                      <li key={tech.name} className="flex items-center space-x-2 p-2 rounded-md bg-muted/20 dark:bg-muted/50">
                        {tech.icon}
                        <span>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
