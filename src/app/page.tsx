import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutMeSection } from "@/components/sections/about-me";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectPortfolioSection } from "@/components/sections/project-portfolio";
import { ContactFormSection } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { TimezoneClock } from "@/components/timezone-clock";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, CalendarPlus, Download, Send, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-center">
        <section
          id="home"
          className="relative h-screen pt-16 flex items-center justify-center text-center
                     bg-[radial-gradient(ellipse_at_center,hsla(210,50%,60%,0.7)_0%,transparent_70%)]
                     dark:bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.4)_0%,transparent_70%)]
                     backdrop-blur-2xl"
        >
          <div className="relative z-10 container max-w-4xl px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image
                src="/profile.jpg"
                alt="Ricardo Perico Jr - Profile Picture"
                width={100}
                height={100}
                className="rounded-full shadow-xl border-4 border-card object-cover"
                data-ai-hint="profile avatar"
                priority
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-left">Ricardo Perico Jr.</h2>
                <p className="text-md sm:text-lg text-muted-foreground text-left flex items-center">
                  <svg
                    aria-label="Philippine flag"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 20"
                    className="inline-block h-3 w-5 mr-1.5 align-middle "
                  >
                    <rect width="32" height="10" y="0" fill="#0038A8"/>
                    <rect width="32" height="10" y="10" fill="#CE1126"/>
                    <path d="M0 0 L13 10 L0 20 Z" fill="#FFFFFF"/>
                    <circle cx="5" cy="10" r="1.8" fill="#FCD116"/>
                  </svg>
                  Based in PH
                  <span className="text-md sm:text-lg text-muted-foreground flex items-center ml-2">
                    <MapPin className="h-4 w-4 mr-0.5" /> 
                    <TimezoneClock timezone="Asia/Manila" />
                  </span>
                </p>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              Fullstack
              <span className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl ml-4 font-black tracking-tighter leading-none">
                &
              </span>
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              IoT Developer
            </h1>
            
            <div className="mt-8 flex flex-row justify-center items-center gap-3 sm:gap-4">
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                <Link href="https://github.com/rperico-tech" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                <Link href="https://www.linkedin.com/in/ricardo-perico-jr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                <Link href="https://www.instagram.com/jongkiee04" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                <Link href="https://cal.com/ricardo-perico-jr" target="_blank" rel="noopener noreferrer" aria-label="Schedule a Meeting">
                  <CalendarPlus className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume" download>
                  <Download className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 mb-6 flex justify-center">
              <Button variant="default" size="lg" asChild className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="#contact">
                  <Send className="mr-2 h-5 w-5" /> Contact me
                </Link>
              </Button>
            </div>
            
          </div>
        </section>
        
        <AboutMeSection />
        <ExperienceSection />
        <ProjectPortfolioSection />
        <ContactFormSection />

        <section className="relative overflow-hidden bg-background py-16">
           <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
             <div className="relative h-40 overflow-hidden rounded-md shadow-lg">
               <Card className="absolute inset-0 w-full h-full flex p-4 items-center gap-x-8">
                 <div className="flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden">
                    <Image
                       src="/icon.jpg"
                       alt="Profile Icon"
                       width={110}
                       height={110}
                       className="object-cover"
                       data-ai-hint="profile icon"
                    />
                 </div>
                
                   <div className="flex flex-col flex-grow gap-y-2">
                     <div className="flex-shrink-0">
                       <CardHeader className="p-0">
                         <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-left font-black">Ricardo</CardTitle>
                         <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-left font-black">Perico Jr.</CardTitle>
                       </CardHeader>
                     </div>
                    </div>

                  <div className="flex flex-col gap-y-2">
                   <CardContent className="p-0 flex flex-row items-center gap-3">
                         <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                           <Link href="https://github.com/rperico-tech" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                             <Github className="h-5 w-5" />
                           </Link>
                         </Button>
                         <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                           <Link href="https://www.linkedin.com/in/ricardo-perico-jr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                             <Linkedin className="h-5 w-5" />
                           </Link>
                         </Button>
                         <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                           <Link href="https://www.instagram.com/jongkiee04" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                             <Instagram className="h-5 w-5" />
                           </Link>
                         </Button>
                         <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                           <Link href="https://cal.com/ricardo-perico-jr" target="_blank" rel="noopener noreferrer" aria-label="Schedule a Meeting">
                             <CalendarPlus className="h-5 w-5" />
                           </Link>
                         </Button>
                         <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 rounded-full">
                           <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume" download>
                             <Download className="h-5 w-5" />
                           </Link>
                         </Button>
                     </CardContent>

                     <div className="ml-10 flex-shrink-0">
                       <CardHeader className="p-0">
                         <CardTitle className="text-sm font-semibold text-left mb-[-8]">Powered by: Next.js and React</CardTitle>
                       </CardHeader>
                     </div>

                   </div>

               </Card>
             </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
