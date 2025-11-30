import { Youtube, Heart, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-foreground">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold">Consciencioteca</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>para expandir consciências</span>
          </div>

          <a
            href="https://www.youtube.com/channel/UCVtOayNt8ZoszDU_YACFSQg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Youtube className="w-5 h-5" />
            <span className="text-sm font-medium">@Consciencioteca</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
