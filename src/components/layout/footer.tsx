
export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ricardo Perico Jr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
