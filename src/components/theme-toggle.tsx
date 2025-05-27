"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering client-side specific UI until mounted to prevent hydration mismatch
  if (!mounted) {
    return null; 
  }

  const isDarkMode = theme === "dark";

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-5 w-5 transition-colors ${
          isDarkMode ? "text-muted-foreground" : "text-foreground"
        }`}
      />
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={handleThemeChange}
        aria-label="Toggle theme between light and dark mode"
      />
      <Moon
        className={`h-5 w-5 transition-colors ${
          isDarkMode ? "text-foreground" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}
