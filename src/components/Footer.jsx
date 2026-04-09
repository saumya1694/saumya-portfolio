import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border">
      <p className="text-sm text-muted-foreground text-center w-full">
        &copy; {new Date().getFullYear()} Saumya Verma. All rights reserved.
      </p>

      <a
        href="#hero"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};