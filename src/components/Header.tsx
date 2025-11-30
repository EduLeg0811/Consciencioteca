import { Youtube, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-card border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-up">
          <div className="flex items-center gap-3 text-primary">
            <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base font-medium tracking-widest uppercase">
              Biblioteca de Conscienciologia
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
            Consciencioteca
          </h1>
          
          <a
            href="https://www.youtube.com/channel/UCVtOayNt8ZoszDU_YACFSQg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full 
            bg-[#FBBF77] text-primary-foreground 
            font-medium transition-all duration-300 
            hover:bg-[#F59E0B] hover:shadow-glow hover:scale-105"
          >
            <Youtube className="w-5 h-5" />
            Visitar Canal no YouTube
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
