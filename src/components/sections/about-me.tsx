
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Brain, Briefcase, Code, Users } from "lucide-react";

export function AboutMeSection() {
  const skills = [
    { name: "Frontend Development", icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "Backend Development", icon: <Briefcase className="h-5 w-5 text-primary" /> },
    { name: "UI/UX Design", icon: <Award className="h-5 w-5 text-primary" /> },
    { name: "Problem Solving", icon: <Brain className="h-5 w-5 text-primary" /> },
    { name: "Team Collaboration", icon: <Users className="h-5 w-5 text-primary" /> },
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
                src="https://placehold.co/400x400.png"
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
                <CardDescription className="text-lg text-muted-foreground">
                  Passionate about creating elegant and efficient solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  I am a versatile full-stack developer with a keen eye for detail and a passion for crafting innovative digital experiences. My journey in tech has equipped me with a strong foundation in both front-end and back-end technologies, allowing me to build comprehensive and user-centric applications.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With experience in modern JavaScript frameworks, server-side logic, and database management, I thrive on transforming complex problems into intuitive and performant solutions. I am dedicated to continuous learning and staying updated with the latest industry trends to deliver cutting-edge results.
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-3">My Key Skills</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills.map((skill) => (
                      <li key={skill.name} className="flex items-center space-x-2 p-2 rounded-md bg-muted/20 dark:bg-muted/50">
                        {skill.icon}
                        <span>{skill.name}</span>
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
