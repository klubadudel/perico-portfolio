
"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Mail, HomeIcon, Briefcase, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
  { href: "#about", label: "About", icon: <User className="h-5 w-5" /> },
  { href: "#experience", label: "Experience", icon: <Layers className="h-5 w-5" /> },
  { href: "#projects", label: "Projects", icon: <Briefcase className="h-5 w-5" /> },
  { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
];

export function Header() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinksContent = ({ inSheet = false }: { inSheet?: boolean }) => (
    <>
      {navItems.map((item) => {
        if (inSheet) {
          // Mobile Sheet Menu Links
          return (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className="w-full justify-start text-lg py-4 transition-all duration-150 ease-in-out text-card-foreground dark:text-white hover:bg-transparent hover:text-accent dark:hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href={item.href}>
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            </Button>
          );
        }
        
        // Desktop Links (simplified)
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "bg-transparent relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "text-card-foreground dark:text-white hover:text-accent dark:hover:text-accent"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-5 z-50 w-full">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-center px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          // Mobile Header Pill (Menu Trigger Only)
          <div className="flex items-center justify-center gap-2 rounded-full bg-card/25 p-1 text-card-foreground shadow-sm backdrop-blur-md border border-border">
             <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full transition-all duration-150 ease-in-out">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-4">
                  <NavLinksContent inSheet />
                </nav>
                <div className="mt-auto pt-6 border-t border-border">
                   <p className="text-sm text-muted-foreground mb-2 text-center">Theme</p>
                   <div className="flex justify-center">
                     <ThemeToggle />
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          // Desktop Header Pill (Nav Links + Theme Toggle)
          <nav 
            className="flex items-center justify-center gap-4 rounded-full bg-card/25 p-1 text-card-foreground shadow-sm backdrop-blur-md border border-border"
          >
            {/* Container for Nav Links */}
            <div 
              className="relative flex items-center gap-1" 
            >
              <NavLinksContent />
            </div>
            <ThemeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}
